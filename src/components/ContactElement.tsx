import MailFillIcon from 'remixicon-react/MailFillIcon';
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon';
import WhatsappFillIcon from 'remixicon-react/WhatsappFillIcon';

export default function ContactElement() {

    return (
        <div className="px-6 lg:px-48 pt-4 lg:pt-12 pb-10" id='contacts'>

            <h2 className="text-center text-pink-600 font-lexend text-3xl font-semibold">Contacts</h2>
            <div className='flex justify-center'>
                <ul className='mt-4 flex flex-col gap-y-2'>
                    <li>
                        <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=tomyntapss@gmail.com" className='flex gap-x-2 items-center' target='_blank'>
                            <MailFillIcon size={28} className='text-red-500' /> <span className='text-gray-700 text-base lg:text-lg hover:text-pink-600'>Tomyntapss@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tomy-wibowo-84aa5520b/" className='flex gap-x-2 items-center' target='_blank'>
                            <LinkedinBoxFillIcon size={28} className='text-blue-500' /> <span className='text-gray-700 text-base lg:text-lg hover:text-pink-600'>Tomy Wibowo</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/6281226782997" className='flex gap-x-2 items-center' target='_blank'>
                            <WhatsappFillIcon size={28} className='text-green-500' /> <span className='text-gray-700 text-base lg:text-lg hover:text-pink-600'>+62 812 2678 2997</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}