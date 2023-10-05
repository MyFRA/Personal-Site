import TrophyFillIcon from 'remixicon-react/TrophyFillIcon';

export default function () {
    return (
        <div className="px-6 lg:px-48 pt-8 lg:pt-20" id='achievements'>
            <h2 className="text-center text-pink-600 font-lexend text-3xl font-semibold">Achievements</h2>
            <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row justify-center mt-4 lg:mt-6 gap-x-4">
                <div className="bg-gray-100 w-full lg:w-3/12 rounded-xl p-4">
                    <div className="flex justify-start items-center gap-x-2">
                        <TrophyFillIcon className='text-yellow-500' /> <span className="font-inter font-bold">1st
                            Place</span>
                    </div>
                    <p className="mt-2 text-md font-inter">LKS Web Technology Kabupaten Purbalingga</p>
                    <div className="flex justify-between mt-3 items-center">
                        <p className="font-bold font-inter">2020</p>
                        <span className="text-2xl"><i className="zmdi zmdi-github"></i></span>
                    </div>
                </div>
                <div className="bg-gray-100 w-full lg:w-3/12 rounded-xl p-4">
                    <div className="flex justify-start items-center gap-x-2">
                        <TrophyFillIcon className='text-yellow-500' /> <span className="font-bold font-inter">1st
                            Place</span>
                    </div>
                    <p className="mt-2 text-md font-inter">IITC Amikom Purwokerto - Web Design</p>
                    <div className="flex justify-between mt-3 items-center">
                        <p className="font-bold font-inter">2020</p>
                        <span className="text-2xl"><i className="zmdi zmdi-github"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}