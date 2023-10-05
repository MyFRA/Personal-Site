import { useEffect, useState } from "react"
import Axios from "../libs/axios"

interface ProgrammingLanguangeInterface {
    name: string,
    logo: string
}

interface FrameworkInterface {
    name: string,
    logo: string
}

interface DatabaseInterface {
    name: string,
    logo: string
}

interface WebServerInterface {
    name: string,
    logo: string
}

interface LanguangeInterface {
    name: string,
    logo: string
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
                setProgrammingLanguanges(res.data)
            })
    }

    const loadFrameworks = (): void => {
        Axios.get('./data/proficiency/frameworks.json')
            .then((res) => {
                setFrameworks(res.data)
            })
    }

    const loadDatabases = (): void => {
        Axios.get('./data/proficiency/databases.json')
            .then((res) => {
                setDatabases(res.data)
            })
    }

    const loadWebServers = (): void => {
        Axios.get('./data/proficiency/web-servers.json')
            .then((res) => {
                setWebServers(res.data)
            })
    }

    const loadLanguanges = (): void => {
        Axios.get('./data/proficiency/languanges.json')
            .then((res) => {
                setLanguanges(res.data)
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
                                    <img src={`./assets/images/stacks/${programmingLanguange.logo}`} alt={programmingLanguange.name} className="w-16" />
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
                                    <img src={`./assets/images/stacks/${framework.logo}`} alt={framework.name} className="w-16 rounded-lg" />
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
                                    <img src={`./assets/images/stacks/${database.logo}`} alt={database.name} className="w-16 rounded-lg" />
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
                                    <img src={`./assets/images/stacks/${webServer.logo}`} alt={webServer.name} className="w-16" />
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
                                    <img src={`./assets/images/stacks/${languange.logo}`} alt={languange.name} className="w-16" />
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