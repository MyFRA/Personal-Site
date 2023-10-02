import AboutElement from './components/AboutElement'
import AchievementsComponent from './components/AchievementsComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import NavComponent from './components/NavComponent'
import PortofolioComponent from './components/PortofolioComponent'
import ProficiencyComponent from './components/ProficiencyComponent'
import './App.css'
import GalleryComponent from './components/GalleryComponent'
import ContactElement from './components/ContactElement'

function App() {
    return (
        <>
            <HeaderComponent />
            <NavComponent />
            <AboutElement />
            <PortofolioComponent />
            <ProficiencyComponent />
            <AchievementsComponent />
            <GalleryComponent />
            <ContactElement />
            <FooterComponent />
        </>
    )
}

export default App
