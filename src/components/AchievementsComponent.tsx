import TrophyFillIcon from 'remixicon-react/TrophyFillIcon';

export default function () {
    return (
        <div className="px-6 lg:px-48 pt-10">
            <h2 className="text-center text-pink-600 font-lexend text-3xl font-semibold">Achievements</h2>
            <div className="flex justify-center mt-4 gap-x-4">
                <div className="bg-gray-100 rounded-xl p-4">
                    <div className="flex justify-start items-center gap-x-2">
                        <TrophyFillIcon className='text-yellow-500' /> <span className="font-bold">1st
                            Place</span>
                    </div>
                    <p className="mt-2 text-md">LKS Web Technology Kabupaten Purbalingga</p>
                    <div className="flex justify-between mt-3 items-center">
                        <p className="font-bold">2020</p>
                        <span className="text-2xl"><i className="zmdi zmdi-github"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}