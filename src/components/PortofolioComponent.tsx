import { useEffect, useState } from 'react';
import LinkIcon from 'remixicon-react/LinkIcon';
import Axios from '../libs/axios';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import Viewer from "react-viewer";
import ContentLoader, { Facebook } from 'react-content-loader'

interface TechStackInterface {
    type: 'BE' | 'FE' | 'DB' | 'Monolith' | 'Mobile',
    stacks: Array<string>,
    imageLoaded: Array<boolean>
}

interface PortofolioInterface {
    thumbnail: string,
    logo: string,
    name: string,
    description: string,
    tech_stacks: Array<TechStackInterface>,
    demo_link?: string,
    github_link?: string,
    thumbnail_loaded?: boolean
}

export default function PortofolioComponent() {

    const [visible, setVisible] = useState(false);
    const [portofolios, setPortofolios] = useState<Array<PortofolioInterface>>([])
    const [portofolioModal, setPortofolioModal] = useState<PortofolioInterface | { thumbnail: '', name: '' }>({
        thumbnail: '',
        name: ''
    })

    useEffect(() => {
        Axios.get('/data/portofolios.json')
            .then((res) => {
                setPortofolios(res.data.map((e: PortofolioInterface) => {
                    e.thumbnail_loaded = false
                    console.log(e)
                    e.tech_stacks.map((techStack) => {
                        const imageLoaded: Array<boolean> = []
                        techStack.stacks.forEach((stack) => {
                            imageLoaded.push(false)
                        })

                        techStack.imageLoaded = imageLoaded

                        return techStack
                    })
                    return e
                }))
            })

    }, [])

    useEffect(() => {
        console.log(portofolios)
    }, [portofolios])

    const openModalViewerImage = (gallery: PortofolioInterface) => {
        setPortofolioModal(gallery)
        setVisible(true)
    }

    const onloadPortofolioThumbnail = (portofolio: PortofolioInterface) => {
        setPortofolios([...portofolios].map((e: PortofolioInterface) => {
            if (e == portofolio) {
                e.thumbnail_loaded = true
                return e
            } else {
                return e;
            }
        }))
    }

    const onloadImageTechStack = (techStack: TechStackInterface, stack: string) => {
        setPortofolios([...portofolios].map((e: PortofolioInterface) => {
            e.tech_stacks.map((techStackData) => {
                if (techStack === techStackData) {
                    techStackData.stacks.map((stackName: string, index: number) => {
                        if (stackName == stack && !techStack.imageLoaded[index]) {
                            techStackData.imageLoaded[index] = true
                        }

                        return stackName
                    })
                }
                return techStackData
            })

            return e;
        }))
    }

    return (
        <section className="px-6 lg:px-48 pt-12" id="portofolio">
            {/* Modal Viewer */}
            <Viewer
                visible={visible}
                onClose={() => { setVisible(false); }}
                images={[{ src: `./assets/images/portofolios/${portofolioModal.thumbnail}`, alt: portofolioModal.name }]}
            />
            {/* End of Modal Viewer */}

            <h2 className="text-left text-pink-600 font-lexend text-3xl font-semibold">Portofolio</h2>
            <div className="mt-2 -mx-5 flex items-stretch flex-wrap justify-start">
                {
                    portofolios.map((portofolio) => (
                        <div className='w-full lg:w-3/12 px-5 py-5'>
                            <div className="h-full shadow-lg" style={{ borderRadius: '10px' }}>
                                <div className='flex flex-col justify-between h-full'>
                                    <div>
                                        {
                                            !portofolio.thumbnail_loaded ? <ContentLoader viewBox="0 0 380 250">
                                                <rect x="0" y="0" rx="5" ry="5" width="100%" height="250" />
                                            </ContentLoader> : <></>
                                        }
                                        <img onClick={() => {
                                            openModalViewerImage(portofolio)
                                        }} src={`./assets/images/portofolios/${portofolio.thumbnail}`} onLoad={() => {
                                            onloadPortofolioThumbnail(portofolio)
                                        }} className={`cursor-pointer ${portofolio.thumbnail_loaded ? 'h-48' : 'h-0'} ${portofolio.name != 'BOTOT' && portofolio.name != 'Kelulusan Skansar' ? 'w-full object-cover object-center' : 'mx-auto'}`}
                                            style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                                            alt={portofolio.name} />
                                        <hr />
                                        <div className="px-6 pt-4 flex flex-col justify-between ">
                                            <div className="flex items-center gap-x-3">
                                                <img className="w-8" src={`./assets/images/portofolio-logos/${portofolio.logo}`} alt={portofolio.name} />
                                                <h3 className="font-semibold font-inter text-sm">{portofolio.name}</h3>
                                            </div>
                                            <p className="mt-5 text-gray-600 text-sm font-inter">{portofolio.description}</p>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6">
                                        <div className="mt-7 flex items-end justify-between">
                                            <div className="flex items-center gap-x-2">
                                                <table>
                                                    {
                                                        portofolio.tech_stacks.map((techStack) => (
                                                            <tr>
                                                                <td className='pt-2 font-semibold font-inter text-gray-600 text-sm'>{techStack.type}</td>
                                                                <td className='pt-2 px-2 text-sm'>:</td>
                                                                <td>
                                                                    <div className='pt-2 flex items-center gap-x-2'>
                                                                        {
                                                                            techStack.stacks.map((stack, stackIndex) => (
                                                                                <div>
                                                                                    {
                                                                                        techStack.imageLoaded[stackIndex] === false ? <ContentLoader width={40} height={40}>
                                                                                            <circle cx="15" cy="19" r="15" />
                                                                                        </ContentLoader> : <></>
                                                                                    }
                                                                                    <img src={`./assets/images/stacks/${stack}`} onLoad={() => {
                                                                                        onloadImageTechStack(techStack, stack)
                                                                                    }} className={`${techStack.imageLoaded[stackIndex] === true ? 'w-7' : 'w-0'} rounded-lg`} alt={stack} />
                                                                                </div>

                                                                            ))
                                                                        }
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </table>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                {
                                                    portofolio.github_link ?
                                                        <a href={portofolio.github_link} target='_blank'>
                                                            <GithubFillIcon size={25} className='text-gray-700 hover:text-pink-600' />
                                                        </a> : <></>
                                                }
                                                {
                                                    portofolio.demo_link ?
                                                        <a href={portofolio.demo_link} target='_blank'>
                                                            <LinkIcon size={25} className='text-gray-700 hover:text-pink-600' />
                                                        </a> : <></>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}