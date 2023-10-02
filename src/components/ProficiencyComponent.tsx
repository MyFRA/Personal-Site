import { useEffect, useState } from "react"
import Axios from "../libs/axios"

interface ProgrammingLanguangeInterface {
    name: string,
    logo: string
}

export default function () {
    const [programmingLanguanges, setProgrammingLanguanges] = useState<Array<ProgrammingLanguangeInterface>>([])

    // First Load
    useEffect(() => {
        loadProgrammingLanguanges()
    }, [])

    // Load Data Programming Languanges
    const loadProgrammingLanguanges = (): void => {
        Axios.get('./data/proficiency/programming-languanges.json')
            .then((res) => {
                setProgrammingLanguanges(res.data)
            })
    }

    return (
        <div className="px-6 lg:px-48 pt-10">
            <h2 className="text-left text-pink-600 font-lexend text-3xl font-semibold">Proficiency</h2>

            {/* Programming Languanges */}
            <div className="mt-10">
                <h4 className="font-bold text-2xl text-pink-500">Programmming Languanges</h4>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-5 mt-6">
                    {
                        programmingLanguanges.map((programmingLanguange) => (
                            <div className="mt-4 lg:mt-0 w-12/12 lg:w-2/12 px-4">
                                <div className="rounded-xl py-6 bg-pink-50 flex flex-col items-center">
                                    <img src={`./assets/images/stacks/${programmingLanguange.logo}`} alt="" className="w-16" />
                                    <h4 className="mt-3">{programmingLanguange.name}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* End of Programming Languanges */}

            {/* Frameworks */}
            <div className="mt-10">
                <h4 className="font-bold text-2xl text-pink-500">Frameworks</h4>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-5 mt-6">
                    {
                        programmingLanguanges.map((programmingLanguange) => (
                            <div className="mt-4 lg:mt-0 w-12/12 lg:w-2/12 px-4">
                                <div className="rounded-xl py-6 bg-pink-50 flex flex-col items-center">
                                    <img src={`./assets/images/stacks/${programmingLanguange.logo}`} alt="" className="w-16" />
                                    <h4 className="mt-3">{programmingLanguange.name}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* End of Frameworks */}

            {/* Tools */}
            <div className="mt-10">
                <h4 className="font-bold text-2xl text-pink-500">Tools</h4>
                <div className="flex flex-wrap flex-col lg:flex-row gap-y-5 mt-6">
                    {
                        programmingLanguanges.map((programmingLanguange) => (
                            <div className="mt-4 lg:mt-0 w-12/12 lg:w-2/12 px-4">
                                <div className="rounded-xl py-6 bg-pink-50 flex flex-col items-center">
                                    <img src={`./assets/images/stacks/${programmingLanguange.logo}`} alt="" className="w-16" />
                                    <h4 className="mt-3">{programmingLanguange.name}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* End of Tools */}
        </div>
    )
}