import HeartFillIcon from 'remixicon-react/HeartFillIcon';
import ReactjsFillIcon from 'remixicon-react/ReactjsFillIcon';

export default function FooterComponent() {
    return (
        <footer className="bg-gray-700 py-5">
            <p className="font-inter text-sm items-center text-white text-center flex justify-center gap-x-1">
                <span>Created With</span>
                <span><HeartFillIcon className='text-pink-600' /></span>
                <span>by MyFRA</span>
                <span className='px-0.5'>|</span>
                <span className='text-xs flex items-center justify-center gap-x-1'>Built with Vite + React + TS <span><ReactjsFillIcon className='text-blue-300' /></span></span>
            </p>
        </footer>
    )
}