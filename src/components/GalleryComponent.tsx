import { useEffect, useState } from "react";
import Viewer from "react-viewer";
import Axios from "../libs/axios";

interface GalleryInterface {
    image: string,
    title: string,
    year: number | null
}

export default function () {

    const [visible, setVisible] = useState(false);
    const [galleries, setGalleries] = useState<Array<GalleryInterface>>([])
    const [galleryModal, setGalleryModal] = useState<GalleryInterface>({
        image: '',
        title: '',
        year: null
    })

    useEffect(() => {
        loadGalleries()
    }, [])

    const loadGalleries = (): void => {
        Axios.get('./data/galleries.json')
            .then((res) => {
                setGalleries(res.data)
            })
    }

    const openModalViewerImage = (gallery: GalleryInterface) => {
        setGalleryModal(gallery)
        setVisible(true)
    }

    return (
        <div className="px-6 lg:px-48 pt-8 lg:pt-20" id="galleries">

            {/* Modal Viewer */}
            <Viewer
                visible={visible}
                onClose={() => { setVisible(false); }}
                images={[{ src: `./assets/images/galleries/${galleryModal.image}`, alt: galleryModal.title }]}
            />
            {/* End of Modal Viewer */}

            <h2 className="text-left text-pink-600 font-lexend text-3xl font-semibold">Galleries</h2>
            <div className="flex flex-col lg:flex-row flex-wrap mt-2">
                {
                    galleries.map((gallery) => (
                        <div className="w-full lg:w-3/12 px-3 py-4">
                            <div className="cursor-pointer" onClick={() => {
                                openModalViewerImage(gallery)
                            }}>
                                <img src={`./assets/images/galleries/${gallery.image}`} className="w-full h-40 lg:h-60 object-cover object-center rounded-lg" alt={gallery.title} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold font-inter text-sm lg:text-base mt-2 text-gray-600">{gallery.year}</span>
                                <span className="font-semibold font-inter text-sm lg:text-base text-gray-600 mt-1">{gallery.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}