import { useEffect, useState } from 'react';
import LinkIcon from 'remixicon-react/LinkIcon';
import Axios from '../libs/axios';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';

interface TechStackInterface {
    type: 'BE' | 'FE' | 'DB' | 'Monolith' | 'Mobile',
    stacks: Array<string>
}

interface PortofolioInterface {
    thumbnail: string,
    logo: string,
    name: string,
    description: string,
    tect_stacks: Array<TechStackInterface>,
    demo_link?: string,
    github_link?: string
}

export default function PortofolioComponent() {

    const [portofolios, setPortofolios] = useState<Array<PortofolioInterface>>([])

    useEffect(() => {
        Axios.get('/data/portofolios.json')
            .then((res) => {
                setPortofolios(res.data)
            })

    }, [])

    return (
        <section className="px-6 lg:px-48 pt-12" id="portofolio">
            <h2 className="text-left text-pink-600 font-lexend text-3xl font-semibold">Portofolio</h2>
            <div className="mt-2 -mx-5 flex items-stretch flex-wrap justify-start">
                {
                    portofolios.map((portofolio) => (
                        <div className='w-12/12 lg:w-3/12 px-5 py-5'>
                            <div className="h-full shadow-lg" style={{ borderRadius: '10px' }}>
                                <div className='flex flex-col justify-between h-full'>
                                    <div>
                                        <img src={`./assets/images/portofolios/${portofolio.thumbnail}`} className={`h-48 ${portofolio.name != 'BOTOT' && portofolio.name != 'Kelulusan Skansar' ? 'w-full object-cover object-center' : 'mx-auto'}`}
                                            style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                                            alt={portofolio.name} />
                                        <hr />
                                        <div className="px-6 pt-4 flex flex-col justify-between ">
                                            <div className="flex items-center gap-x-2">
                                                <img className="w-8" src={`./assets/images/portofolio-logos/${portofolio.logo}`} alt={portofolio.name} />
                                                <h3 className="font-semibold font-open-sans text-sm">{portofolio.name}</h3>
                                            </div>
                                            <p className="mt-5 text-gray-600 text-sm font-inter">{portofolio.description}</p>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6">
                                        <div className="mt-7 flex items-end justify-between">
                                            <div className="flex items-center gap-x-2">
                                                <table>
                                                    {
                                                        portofolio.tect_stacks.map((techStack) => (
                                                            <tr>
                                                                <td className='pt-2 font-semibold font-inter text-gray-600 text-sm'>{techStack.type}</td>
                                                                <td className='pt-2 px-2 text-sm'>:</td>
                                                                <td>
                                                                    <div className='pt-2 flex items-center gap-x-2'>
                                                                        {
                                                                            techStack.stacks.map((stack) => (
                                                                                <img src={`./assets/images/stacks/${stack}`} className="w-7 rounded-lg" alt={stack} />
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