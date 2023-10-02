import MailFillIcon from 'remixicon-react/MailFillIcon';
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon';

export default function ContactElement() {

    return (
        <div className="px-6 lg:px-48 pt-10 pb-10">

            <h2 className="text-center text-pink-600 font-lexend text-3xl font-semibold">Contacts</h2>
            <div className='flex justify-center'>
                <ul className='mt-4 flex flex-col gap-y-2'>
                    <li>
                        <a href="" className='flex gap-x-2 items-center'>
                            <MailFillIcon size={32} className='text-red-500' /> <span className='text-gray-700 text-lg hover:text-pink-600'>Tomyntapss@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className='flex gap-x-2 items-center'>
                            <LinkedinBoxFillIcon size={32} className='text-blue-500' /> <span className='text-gray-700 text-lg hover:text-pink-600'>Tomy Wibowo</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}