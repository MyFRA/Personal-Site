import AtLineIcon from 'remixicon-react/AtLineIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import WhatsappFillIcon from 'remixicon-react/WhatsappFillIcon';
import AudioPlayerElement from './AudioPlayerElement';

export default function HeaderComponent() {
    return (
        <div style={{ backgroundImage: `url(${`./assets/images/backgrounds/bg-batik.png`})` }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} className="flex justify-center py-10">
                <div className="flex flex-col items-center px-8 lg:px-0">
                    <img src={'./assets/images/avatars/sakura.png'} alt="profile-picture" className="w-28 lg:w-40" />
                    <h1 className="mt-4 font-bold text-3xl lg:text-4xl text-pink-600 font-lexend">Tomy Wibowo</h1>
                    <p className="mt-3 text-center text-md lg:text-lg text-gray-700 font-inter">Fullstack Web & Android Developer</p>
                    <div className="mt-4 flex items-center gap-x-4">
                        <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=tomyntapss@gmail.com" target='_blank'>
                            <AtLineIcon size={36} className='text-gray-600 hover:text-pink-600' />
                        </a>
                        <a href="https://github.com/MyFRA" target='_blank'>
                            <GithubFillIcon size={36} className='text-gray-600 hover:text-pink-600' />
                        </a>
                        <a href="https://www.linkedin.com/in/tomy-wibowo-84aa5520b/" target='_blank'>
                            <LinkedinFillIcon size={36} className='text-gray-600 hover:text-pink-600' />
                        </a>
                        <a href="https://wa.me/6281226782997" target='_blank'>
                            <WhatsappFillIcon size={36} className='text-gray-600 hover:text-pink-600' />
                        </a>
                    </div>
                    <a href="./data/CV_Tomy Wibowo.pdf" target='_blank' className='mt-4 font-inter bg-pink-600 hover:bg-pink-400 text-white rounded-md px-6 py-1.5 text-sm'>Download CV</a>
                    <AudioPlayerElement />
                </div>
            </div>
        </div>
    )
}