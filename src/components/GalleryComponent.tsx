import { useState } from "react";
import Viewer from "react-viewer";

export default function () {

    const [visible, setVisible] = useState(false);

    return (
        <div className="px-6 lg:px-48 pt-10">

            {/* Modal Viewer */}
            <Viewer
                visible={visible}
                onClose={() => { setVisible(false); }}
                images={[{ src: './assets/images/galleries/lks-3.jpg', alt: '' }]}
            />
            {/* End of Modal Viewer */}

            <h2 className="text-left text-pink-600 font-lexend text-3xl font-semibold">Galleries</h2>
            <div className="flex flex-wrap mt-2">
                {
                    [1, 2, 3, 4, 5, 6].map((e) => (
                        <div className="w-3/12 px-3 py-4">
                            <div className="cursor-pointer" onClick={() => {
                                setVisible(true)
                            }}>
                                <img src="./assets/images/galleries/lks-3.jpg" className="w-full h-60 object-cover object-center rounded-lg" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold font-open-sans mt-2 text-gray-600">2020</span>
                                <span className="font-semibold font-open-sans text-gray-600 mt-1">LKS Web Technology Kab. Purbalingga</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}