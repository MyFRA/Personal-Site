import { useEffect, useState } from "react";
import Viewer from "react-viewer";
import Axios from "../libs/axios";
import ContentLoader from "react-content-loader";

interface GalleryInterface {
    image: string,
    title: string,
    year: number | null,
    imageLoaded: boolean
}

export default function () {

    const [visible, setVisible] = useState(false);
    const [galleries, setGalleries] = useState<Array<GalleryInterface>>([])
    const [galleryModal, setGalleryModal] = useState<GalleryInterface>({
        image: '',
        title: '',
        year: null,
        imageLoaded: false
    })

    useEffect(() => {
        loadGalleries()
    }, [])

    const loadGalleries = (): void => {
        Axios.get('./data/galleries.json')
            .then((res) => {
                setGalleries(res.data.map((e: GalleryInterface) => {
                    e.imageLoaded = false

                    return e
                }))
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
                            {
                                !gallery.imageLoaded ? <ContentLoader viewBox="0 0 380 250">
                                    <rect x="0" y="0" rx="5" ry="5" width="100%" height="250" />
                                </ContentLoader> : <></>
                            }
                            <div className="cursor-pointer" onClick={() => {
                                openModalViewerImage(gallery)
                            }}>
                                <img src={`./assets/images/galleries/${gallery.image}`} onLoad={() => {
                                    setGalleries([...galleries].map((e) => {
                                        if (e == gallery) {
                                            e.imageLoaded = true
                                        }

                                        return e
                                    }))
                                }} className={`w-full ${gallery.imageLoaded ? 'h-40 lg:h-60' : 'h-0 lg:h-0'} object-cover object-center rounded-lg`} alt={gallery.title} />
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