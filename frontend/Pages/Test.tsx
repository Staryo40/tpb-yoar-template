import './CommonStyles/Text.css'
import './CommonStyles/Bigbox.css'
import './CommonStyles/Component.css'
import NavBar from '../components/organisms/NavBar'
import Footer from '../components/organisms/Footer'
import { LoadingMain, LoadingSide, LoadingHomeModule } from './LoadingComponent'
// import MainContent from '../../MainContent'
// import SideBar from '../../SideBar'
import { ScrollProvider } from './ScrollContext'


function Test() {
    return (
        <>
        <div className='MacroContainer'>
            <NavBar />
            <div className="storage">
            <div className="MainContainer">
                <ScrollProvider>
                    {/* <LoadingMain /> */}
                    {/* <LoadingSide /> */}
                    <LoadingHomeModule />
                </ScrollProvider>
            </div>
            </div>
            <Footer />
        </div>
        </>
  )
}

export default Test;