import { useEffect, useState } from "react"
import Axios from "../libs/axios"
import ContentLoader from "react-content-loader"

interface ProgrammingLanguangeInterface {
    name: string,
    logo: string,
    isLoaded: boolean
}

interface FrameworkInterface {
    name: string,
    logo: string,
    isLoaded: boolean
}

interface DatabaseInterface {
    name: string,
    logo: string,
    isLoaded: boolean
}

interface WebServerInterface {
    name: string,
    logo: string,
    isLoaded: boolean
}

interface LanguangeInterface {
    name: string,
    logo: string,
    isLoaded: boolean
}

export default function () {
    const [programmingLanguanges, setProgrammingLanguanges] = useState<Array<ProgrammingLanguangeInterface>>([])
    const [frameworks, setFrameworks] = useState<Array<FrameworkInterface>>([])
    const [databases, setDatabases] = useState<Array<DatabaseInterface>>([])
    const [webServers, setWebServers] = useState<Array<WebServerInterface>>([])
    const [languanges, setLanguanges] = useState<Array<LanguangeInterface>>([])

    // First Load
    useEffect(() => {
        loadProgrammingLanguanges()
        loadFrameworks()
        loadDatabases()
        loadWebServers()
        loadLanguanges()
    }, [])

    const loadProgrammingLanguanges = (): void => {
        Axios.get('./data/proficiency/programming-languanges.json')
            .then((res) => {
                setProgrammingLanguanges(res.data.map((e: ProgrammingLanguangeInterface) => {
                    e.isLoaded = false;

                    return e
                }))
            })
    }

    const loadFrameworks = (): void => {
        Axios.get('./data/proficiency/frameworks.json')
            .then((res) => {
                setFrameworks(res.data.map((e: FrameworkInterface) => {
                    e.isLoaded = false

                    return e
                }))
            })
    }

    const loadDatabases = (): void => {
        Axios.get('./data/proficiency/databases.json')
            .then((res) => {
                setDatabases(res.data.map((e: DatabaseInterface) => {
                    e.isLoaded = false

                    return e
                }))
            })
    }

    const loadWebServers = (): void => {
        Axios.get('./data/proficiency/web-servers.json')
            .then((res) => {
                setWebServers(res.data.map((e: WebServerInterface) => {
                    e.isLoaded = false

                    return e
                }))
            })
    }

    const loadLanguanges = (): void => {
        Axios.get('./data/proficiency/languanges.json')
            .then((res) => {
                setLanguanges(res.data.map((e: LanguangeInterface) => {
                    e.isLoaded = false

                    return e
                }))
            })
    }

    return (
        <div className="px-6 lg:px-48 pt-12" id="proficiency">
            <h2 className="text-left text-pink-600 font-lexend text-3xl font-semibold">Proficiency</h2>

            {/* Programming Languanges */}
            <div className="mt-4 lg:mt-7">
                <h4 className="font-bold text-xl lg:text-2xl text-pink-500 font-inter">Programmming Languages \ Engines</h4>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-0 lg:gap-y-5 mt-0 lg:mt-6 -mx-4">
                    {
                        programmingLanguanges.map((programmingLanguange) => (
                            <div className="mt-4 lg:mt-0 w-12/12 lg:w-2/12 px-4">
                                <div className="rounded-xl py-6 bg-pink-50 flex flex-col items-center">
                                    {
                                        !programmingLanguange.isLoaded ?
                                            <ContentLoader width={60} height={60}>
                                                <circle cx="30" cy="30" r="30" />
                                            </ContentLoader> : <></>
                                    }
                                    <img src={`./assets/images/stacks/${programmingLanguange.logo}`} alt={programmingLanguange.name} onLoad={() => {
                                        setProgrammingLanguanges([...programmingLanguanges].map((e) => {
                                            if (e == programmingLanguange) {
                                                e.isLoaded = true
                                            }

                                            return e
                                        }))
                                    }} className={`${programmingLanguange.isLoaded ? 'w-16' : 'w-0'}`} />
                                    <h4 className="mt-3 text-gray-700 font-inter">{programmingLanguange.name}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* End of Programming Languanges */}

            {/* Frameworks */}
            <div className="mt-8 lg:mt-10">
                <h4 className="font-bold text-xl lg:text-2xl text-pink-500 font-inter">Frameworks</h4>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-0 lg:gap-y-5 mt-0 lg:mt-6 -mx-4">
                    {
                        frameworks.map((framework) => (
                            <div className="mt-4 lg:mt-0 w-12/12 lg:w-2/12 px-4">
                                <div className="rounded-xl py-6 bg-pink-50 flex flex-col items-center">
                                    {
                                        !framework.isLoaded ?
                                            <ContentLoader width={60} height={60}>
                                                <circle cx="30" cy="30" r="30" />
                                            </ContentLoader> : <></>
                                    }
                                    <img src={`./assets/images/stacks/${framework.logo}`} alt={framework.name} className={`${framework.isLoaded ? 'w-16' : 'w-0'} rounded-lg`} onLoad={() => {
                                        setFrameworks([...frameworks].map((e) => {
                                            if (e == framework) {
                                                e.isLoaded = true
                                            }

                                            return e
                                        }))
                                    }} />
                                    <h4 className="mt-3 text-gray-700 font-inter">{framework.name}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* End of Frameworks */}

            {/* Databases */}
            <div className="mt-8 lg:mt-10">
                <h4 className="font-bold text-xl lg:text-2xl text-pink-500 font-inter">Databases</h4>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-0 lg:gap-y-5 mt-0 lg:mt-6 -mx-4">
                    {
                        databases.map((database) => (
                            <div className="mt-4 lg:mt-0 w-12/12 lg:w-2/12 px-4">
                                <div className="rounded-xl py-6 bg-pink-50 flex flex-col items-center">
                                    {
                                        !database.isLoaded ?
                                            <ContentLoader width={60} height={60}>
                                                <circle cx="30" cy="30" r="30" />
                                            </ContentLoader> : <></>
                                    }
                                    <img src={`./assets/images/stacks/${database.logo}`} alt={database.name} onLoad={() => {
                                        setDatabases([...databases].map((e) => {
                                            if (e == database) {
                                                e.isLoaded = true
                                            }

                                            return e
                                        }))
                                    }} className="w-16 rounded-lg" />
                                    <h4 className="mt-3 text-gray-700 font-inter">{database.name}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* End of Databases */}

            {/* Web Servers */}
            <div className="mt-8 lg:mt-10">
                <h4 className="font-bold text-xl lg:text-2xl text-pink-500 font-inter">Web Servers</h4>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-0 lg:gap-y-5 mt-0 lg:mt-6 -mx-4">
                    {
                        webServers.map((webServer) => (
                            <div className="mt-4 lg:mt-0 w-12/12 lg:w-2/12 px-4">
                                <div className="rounded-xl py-6 bg-pink-50 flex flex-col items-center">
                                    {
                                        !webServer.isLoaded ?
                                            <ContentLoader width={60} height={60}>
                                                <circle cx="30" cy="30" r="30" />
                                            </ContentLoader> : <></>
                                    }
                                    <img src={`./assets/images/stacks/${webServer.logo}`} alt={webServer.name} onLoad={() => {
                                        setWebServers([...webServers].map((e) => {
                                            if (e == webServer) {
                                                e.isLoaded = true
                                            }

                                            return e
                                        }))
                                    }} className="w-16" />
                                    <h4 className="mt-3 text-gray-700 font-inter">{webServer.name}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* End of Web Servers */}

            {/* Languanges */}
            <div className="mt-8 lg:mt-10">
                <h4 className="font-bold text-xl lg:text-2xl text-pink-500 font-inter">Languages</h4>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-0 lg:gap-y-5 mt-0 lg:mt-6 -mx-4">
                    {
                        languanges.map((languange) => (
                            <div className="mt-4 lg:mt-0 w-12/12 lg:w-2/12 px-4">
                                <div className="rounded-xl py-6 bg-pink-50 flex flex-col items-center">
                                    {
                                        !languange.isLoaded ?
                                            <ContentLoader width={60} height={60}>
                                                <circle cx="30" cy="30" r="30" />
                                            </ContentLoader> : <></>
                                    }
                                    <img src={`./assets/images/stacks/${languange.logo}`} alt={languange.name} onLoad={() => {
                                        setLanguanges([...languanges].map((e) => {
                                            if (e == languange) {
                                                e.isLoaded = true
                                            }

                                            return e
                                        }))
                                    }} className="w-16" />
                                    <h4 className="mt-3 text-gray-700 font-inter">{languange.name}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* End of Languanges */}
        </div>
    )
}