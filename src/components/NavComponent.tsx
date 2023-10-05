export default function NavComponent() {
    const resetClassNavLinks = () => {
        const navLinksWrapperElement = document.getElementById('nav-links-wrapper') as HTMLElement

        Array.from(navLinksWrapperElement?.children).forEach((listElement: Element) => {
            listElement.className = 'text-gray-600 hover:text-pink-600 font-inter relative'
            listElement.children[0].className = ''
        })
    }

    const setActiveNav = (eventTarget: EventTarget) => {
        resetClassNavLinks()

        const aElement = eventTarget as HTMLElement

        aElement.parentElement?.classList.add('text-pink-600')
        aElement.parentElement?.classList.add('font-bold')
        aElement.className = `before:absolute before:content-[''] before:w-16 before:bottom-0 before:h-[2px] before:left-[50%] before:translate-x-[-50%] before:translate-y-[7px] before:bg-pink-600`
    }

    return (
        <nav className="px-6 lg:px-48 hidden lg:flex py-5 shadow-md">
            <div className="w-2/12">
                <h1 className="font-semibold font-lexend text-2xl text-pink-600">MyFRA</h1>
            </div>
            <div className="w-8/12 flex justify-center">
                <ul className="font-inter flex items-center gap-x-6 text-lg" id="nav-links-wrapper">
                    <li className="text-gray-600 hover:text-pink-600 font-inter relative"><a href="#about" onClick={(e) => {
                        setActiveNav(e.target)
                    }}>About</a></li>
                    <li className="text-gray-600 hover:text-pink-600 font-inter relative"><a href="#portofolio" onClick={(e) => {
                        setActiveNav(e.target)
                    }}>Portofolio</a></li>
                    <li className="text-gray-600 hover:text-pink-600 font-inter relative"><a href="#proficiency" onClick={(e) => {
                        setActiveNav(e.target)
                    }}>Proficiency</a></li>
                    <li className="text-gray-600 hover:text-pink-600 font-inter relative"><a href="#achievements" onClick={(e) => {
                        setActiveNav(e.target)
                    }}>Achievements</a></li>
                    <li className="text-gray-600 hover:text-pink-600 font-inter relative"><a href="#galleries" onClick={(e) => {
                        setActiveNav(e.target)
                    }}>Galleries</a></li>
                    <li className="text-gray-600 hover:text-pink-600 font-inter relative"><a href="#contacts" onClick={(e) => {
                        setActiveNav(e.target)
                    }}>Contacts</a></li>
                </ul>
            </div>
            <div className="w-2/12"></div>
        </nav>
    )
}