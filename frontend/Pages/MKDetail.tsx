import './MKDetail.css'
import './CommonStyles/Text.css'
import './CommonStyles/Bigbox.css'
import './CommonStyles/SideNav.css'
import './CommonStyles/Component.css'
import NavBar from '../components/organisms/NavBar'
import Footer from '../components/organisms/Footer'
import { useRef, useState } from 'react'

function MKDetail () {
    const overview = useRef(null)
    const recount = useRef(null)
    const materi = useRef(null)
    const soal = useRef(null)

    const scrollToSection = (elementRef: any) => {
        window.scrollTo(
            {
                top: elementRef.current.offsetTop - 60,
                behavior: 'smooth'
            }
        )
    }

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)


    return (
        <>
        <div className="MacroContainer">
            <NavBar />
            <div className="storage">
                <div className="MainContainer">
                    <div className="MainContentFixed">
                        <div className="section" ref={overview}>
                        <h1 className='text generalTitleH1'>Overview Matematika IA</h1>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc. 
                        </p>
                        </div>
                        <div className="section" ref={recount}>
                        <h1 className='text generalTitleH1'>Recount</h1>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc. 
                        </p>
                        </div>
                        <div className="section" ref={materi}>
                        <h1 className='text generalTitleH1'>Materi</h1>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc. 
                        </p>
                        </div>
                        <div className="section" ref={soal}>
                        <h1 className='text generalTitleH1'>Soal</h1>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc. 
                        </p>
                        </div>
                        <div className="listContainer">
                            <div className="listItem link">
                                <div className="listIndex text generalContentP">A.</div>
                                <div className="listText text generalContentP">Some may say it's impossible</div>
                            </div>
                            <div className="listItem">
                                <div className="listIndex text generalContentP">B.</div>
                                <div className="listText text generalContentP italic">Some may say it's crazy</div>
                            </div>
                            <div className="listItem">
                                <div className="listIndex text generalContentP">C.</div>
                                <div className="listText text generalContentP underline">Some may say it's beautiful</div>
                            </div>
                            <div className="subListContainer">
                                <div className="listItem bold">
                                    <div className="listIndex text generalContentP">1.</div>
                                    <div className="listText text generalContentP">Jow</div>
                                </div>
                                <div className="listItem">
                                    <div className="listIndex text generalContentP">2.</div>
                                    <div className="listText text generalContentP">Bow</div>
                                </div>
                                <div className="listItem">
                                    <div className="listIndex text generalContentP">3.</div>
                                    <div className="listText text generalContentP">Navil</div>
                                </div>
                            </div>
                            <div className="listItem">
                                <div className="listIndex text generalContentP">D.</div>
                                <div className="listText text generalContentP">Some may say it's dangerous</div>
                            </div>
                        </div>
                    </div>
                    <div className="SidebarFixed">
                        <h2 className="text sideTitle">Matematika A Per Bagian</h2>
                        <a href="#" className="optionBagian text">Matematika IIA</a>
                        <div className="SideNavContainer">
                        <h2 className="text sideTitle">Daftar Isi</h2>
                        <div className="SideNav">
                            <div className="SideNavItem">
                                <div className="SNTextContainer" onClick={() => {scrollToSection(overview)}}>
                                    <div className="SNText SNIndex text">A.</div>
                                    <div className="SNText text">Overview</div>
                                </div>
                            </div>
                            <div className="SideNavItem">
                                <div className="SNTextContainer" onClick={() => {scrollToSection(recount)}}>
                                    <div className="SNText SNIndex text">B.</div>
                                    <div className="SNText text">Recount</div>
                                </div>
                            </div>
                            <div className="SideNavItem">
                                <div className="SNTextContainer" onClick={() => {scrollToSection(materi)}}>
                                    <div className="SNText SNIndex text">C.</div>
                                    <div className="SNText text">Materi</div>
                                </div>
                                <div onClick={() => {setIsOpen1(!isOpen1)}} className={`triangleSide ${isOpen1 ? "dropped" : ""}`} />
                            </div>
                            {isOpen1 && <div className="SNDropdown">
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">0.</div>
                                    <div className="SNText text">Pendahuluan</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">1.</div>
                                    <div className="SNText text">Limit</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">2.</div>
                                    <div className="SNText text">Turunan</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">3.</div>
                                    <div className="SNText text">Aplikasi Turunan</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">4.</div>
                                    <div className="SNText text">Integral</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">5.</div>
                                    <div className="SNText text">Aplikasi Integral</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">6.</div>
                                    <div className="SNText text">Fungsi Transenden</div>
                            </div>
                            </div>
                            }
                            <div className="SideNavItem">
                                <div className="SNTextContainer" onClick={() => {scrollToSection(soal)}}>
                                    <div className="SNText SNIndex text">D.</div>
                                    <div className="SNText text">Soal</div>
                                </div>
                                <div onClick={() => {setIsOpen2(!isOpen2)}} className={`triangleSide ${isOpen2 ? "dropped" : ""}`} />
                            </div>
                            {isOpen2 && <div className="SNDropdown">
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">0.</div>
                                    <div className="SNText text">Pendahuluan</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">1.</div>
                                    <div className="SNText text">Limit</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">2.</div>
                                    <div className="SNText text">Turunan</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">3.</div>
                                    <div className="SNText text">Aplikasi Turunan</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">4.</div>
                                    <div className="SNText text">Integral</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">5.</div>
                                    <div className="SNText text">Aplikasi Integral</div>
                            </div>
                            <div className="SNTextContainer dropdownItem">
                                    <div className="SNText SNIndexDropdown text">6.</div>
                                    <div className="SNText text">Fungsi Transenden</div>
                            </div>
                            </div>
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default MKDetail;