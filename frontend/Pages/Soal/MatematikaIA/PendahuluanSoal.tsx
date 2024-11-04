import '../../CommonStyles/Text.css'
import '../../CommonStyles/Bigbox.css'
import '../../CommonStyles/Component.css'
import NavBar from '../../../components/organisms/NavBar'
import Footer from '../../../components/organisms/Footer'
import SideBar from '../../SideBar'
import SoalContent from '../../SoalContent'
import { ScrollProvider } from '../../ScrollContext'

function MatPendahuluanSoal () {
    return (
        <div className="MacroContainer">
            <NavBar />
            <div className="storage">
                <div className="MainContainer">
                    <ScrollProvider>
                    <SoalContent soalName='Pendahuluan Matematika Soal'/>
                    <SideBar sidebarName='Matematika IA Soal' />
                    </ScrollProvider>
                </div>
            </div>
        </div>
    )
}

export default MatPendahuluanSoal