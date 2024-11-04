import '../MKBagian.css'
import '../CommonStyles/Text.css'
import '../CommonStyles/Bigbox.css'
import '../CommonStyles/Component.css'
import NavBar from '../../components/organisms/NavBar'
import Footer from '../../components/organisms/Footer'
import MainContent from '../MainContent'
import SideBar from '../SideBar'
import { ScrollProvider } from '../ScrollContext'


function MatematikaIIA() {
    return (
        <>
        <div className='MacroContainer'>
            <NavBar />
            <div className="storage">
            <div className="MainContainer">
                <ScrollProvider>
                <MainContent pageName="Matematika IIA"/>
                <SideBar sidebarName="Matematika IIA" scrollItem='Matematika IIA'/>
                </ScrollProvider>
            </div>
            </div>
            <Footer />
        </div>
        </>
  )
}

export default MatematikaIIA;