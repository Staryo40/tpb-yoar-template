import './Materi.css'
import './CommonStyles/Text.css'
import './CommonStyles/Bigbox.css'
import './CommonStyles/SideNav.css'
import './CommonStyles/Component.css'
import { useRef, useState } from 'react'
import Footer from '../components/organisms/Footer'
import NavBar from '../components/organisms/NavBar'
import bilRealTest from "../assets/bilRealTest.png"


function Materi() {
    const pendahuluan = useRef(null)
    const bilanganReal = useRef(null)
    const pertaksamaan = useRef(null)
    const sistemKoordinat = useRef(null)
    const grafikPersamaan = useRef(null)
    const fungsiDanGrafik = useRef(null)
    const operasiFungsi = useRef(null)
    const fungsiTrigonometri = useRef(null)

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
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isOpen5, setIsOpen5] = useState(false)
    const [isOpen6, setIsOpen6] = useState(false)
    const [isOpen7, setIsOpen7] = useState(false)

  return (
    <div className='MacroContainer'>
        <NavBar />
        <div className="storage">
            <div className="MainContainer">
                <div className="MainContentFixed">
                <h1 className="text generalTitleH1" ref={pendahuluan}>Bab 0: Pendahuluan</h1>
                <div className="section s1" ref={bilanganReal}>
                        <h2 className='text generalTitleH2'>0.1 Bilangan Real</h2>
                        <p className="text imageDetailTop">Diagram Venn Bilangan Real</p>
                        <div className="imageContainer">
                            <img src={bilRealTest} alt="" />
                        </div>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc.
                        </p>
                        </div>
                        <div className="section s2" ref={pertaksamaan}>
                        <h2 className='text generalTitleH2'>0.2 Pertaksamaan dan Bilangan Mutlak</h2>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                        </p>
                        <div className="imageContainer">
                            <img src={bilRealTest} alt="" />
                        </div>
                        <p className="text imageDetailBottom">Gambar 1. venn bilangan real</p>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                        </p>
                        </div>
                        <div className="section s3" ref={sistemKoordinat}>
                        <h2 className='text generalTitleH2'>0.3 Sistem Koordinat</h2>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim.  Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc.
                        </p>
                        </div>
                        <div className="section s4" ref={grafikPersamaan}>
                        <h2 className='text generalTitleH2'>0.4 Grafik Persamaan</h2>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim.  Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc.
                        </p>
                        </div>
                        <div className="section s4" ref={fungsiDanGrafik}>
                        <h2 className='text generalTitleH2'>0.5 Fungsi dan Grafiknya</h2>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim.  Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc.
                        </p>
                        </div>
                        <div className="section s4" ref={operasiFungsi}>
                        <h2 className='text generalTitleH2'>0.6 Operasi pada fungsi</h2>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim.  Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc.
                        </p>
                        </div>
                        <div className="section s4" ref={fungsiTrigonometri}>
                        <h2 className='text generalTitleH2'>0.7 Fungsi Trigonometri</h2>
                        <p className='text generalContentP'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim.  Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.

Phasellus euismod id lacus id fringilla. Fusce et placerat mi. Aliquam nec condimentum dui. Maecenas sagittis vulputate mi, sed sodales neque volutpat in. Ut ut augue malesuada, varius neque eu, congue sem. Nam et vehicula orci, in venenatis ex. Suspendisse erat urna, maximus ut suscipit eu, varius non ligula. Etiam mollis aliquam dictum. Praesent metus dolor, pharetra vitae nulla quis, scelerisque hendrerit quam. Morbi aliquam sapien non convallis pretium. Vestibulum ipsum neque, eleifend id purus eu, lobortis placerat dui.

Nunc sit amet ante eu nisi dapibus semper. Maecenas vestibulum, neque non condimentum aliquam, turpis dui varius mauris, sit amet mattis dolor nibh nec magna. Vivamus a nisl varius, suscipit diam quis, feugiat massa. Donec nec volutpat purus. Vestibulum finibus, purus vitae euismod pulvinar, risus libero scelerisque erat, id porta sem odio nec augue. Mauris quis dictum eros. Curabitur lobortis et velit quis fermentum. Phasellus non risus posuere lectus lobortis lacinia id in ligula. Suspendisse egestas nulla eu eros porttitor blandit. Quisque non consequat sapien. Donec hendrerit, purus a pellentesque malesuada, lorem nisi viverra diam, vitae sollicitudin dolor lectus id augue. Morbi ac vulputate nunc.
                        </p>
                        </div>
                </div>
                <div className="SidebarFixed">
                        <a href="/soal" className="optionBagian text">Latihan Soal</a>
                        <div className="SideNavContainer">
                        <h2 className="text sideTitle">Daftar Isi Materi</h2>
                        <div className="SideNav">
                            <div className="SideNavItem">
                                <div className="SNTextContainer" onClick={() => {scrollToSection(pendahuluan)}}>
                                    <div className="SNText text SNIndex">0.</div>
                                    <div className="SNText text">Pendahuluan</div>
                                </div>
                                <div onClick={() => {setIsOpen1(!isOpen1)}} className={`triangleSide ${isOpen1 ? "dropped" : ""}`} />
                            </div>
                            {isOpen1 && <div className="SNDropdown">
                                <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(bilanganReal)}}>
                                    <div className="SNText text SNIndexDropdown">0.1</div>
                                    <div className="SNText text">Bilangan Real</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(pertaksamaan)}}>
                                    <div className="SNText text SNIndexDropdown">0.2</div>
                                    <div className="SNText text">Pertaksamaan dan Bilangan Mutlak</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(sistemKoordinat)}}>
                                    <div className="SNText text SNIndexDropdown">0.3</div>
                                    <div className="SNText text">Sistem Koordinat</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(grafikPersamaan)}}>
                                    <div className="SNText text SNIndexDropdown">0.4</div>
                                    <div className="SNText text">Grafik Persamaan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiDanGrafik)}}>
                                    <div className="SNText text SNIndexDropdown">0.5</div>
                                    <div className="SNText text">Fungsi dan Grafiknya</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(operasiFungsi)}}>
                                    <div className="SNText text SNIndexDropdown">0.6</div>
                                    <div className="SNText text">Operasi pada Fungsi</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiTrigonometri)}}>
                                    <div className="SNText text SNIndexDropdown">0.7</div>
                                    <div className="SNText text">Fungsi Trigonometri</div>
                            </div>
                            </div>
                            }
                            <div className="SideNavItem">
                                <div className="SNTextContainer">
                                    <div className="SNText text SNIndex">1.</div>
                                    <div className="SNText text">Limit</div>
                                </div>
                                <div onClick={() => {setIsOpen2(!isOpen2)}} className={`triangleSide ${isOpen2 ? "dropped" : ""}`} />
                            </div>
                            {isOpen2 && <div className="SNDropdown">
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(bilanganReal)}}>
                                    <div className="SNText text SNIndexDropdown">0.1</div>
                                    <div className="SNText text">Bilangan Real</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(pertaksamaan)}}>
                                    <div className="SNText text SNIndexDropdown">0.2</div>
                                    <div className="SNText text">Pertaksamaan dan Bilangan Mutlak</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(sistemKoordinat)}}>
                                    <div className="SNText text SNIndexDropdown">0.3</div>
                                    <div className="SNText text">Sistem Koordinat</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(grafikPersamaan)}}>
                                    <div className="SNText text SNIndexDropdown">0.4</div>
                                    <div className="SNText text">Grafik Persamaan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiDanGrafik)}}>
                                    <div className="SNText text SNIndexDropdown">0.5</div>
                                    <div className="SNText text">Fungsi dan Grafiknya</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(operasiFungsi)}}>
                                    <div className="SNText text SNIndexDropdown">0.6</div>
                                    <div className="SNText text">Operasi pada Fungsi</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiTrigonometri)}}>
                                    <div className="SNText text SNIndexDropdown">0.7</div>
                                    <div className="SNText text">Fungsi Trigonometri</div>
                            </div>
                            </div>
                            }
                            <div className="SideNavItem">
                                <div className="SNTextContainer">
                                    <div className="SNText text SNIndex">2.</div>
                                    <div className="SNText text">Turunan</div>
                                </div>
                                <div onClick={() => {setIsOpen3(!isOpen3)}} className={`triangleSide ${isOpen3 ? "dropped" : ""}`} />
                            </div>
                            {isOpen3 && <div className="SNDropdown">
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">0.</div>
                                    <div className="SNText">Pendahuluan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">1.</div>
                                    <div className="SNText">Limit</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">2.</div>
                                    <div className="SNText">Turunan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">3.</div>
                                    <div className="SNText">Aplikasi Turunan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">4.</div>
                                    <div className="SNText">Integral</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">5.</div>
                                    <div className="SNText">Aplikasi Integral</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">6.</div>
                                    <div className="SNText">Fungsi Transenden</div>
                            </div>
                            </div>
                            }
                            <div className="SideNavItem">
                                <div className="SNTextContainer">
                                    <div className="SNText text SNIndex">3.</div>
                                    <div className="SNText text">Aplikasi Turunan</div>
                                </div>
                                <div onClick={() => {setIsOpen4(!isOpen4)}} className={`triangleSide ${isOpen4 ? "dropped" : ""}`} />
                            </div>
                            {isOpen4 && <div className="SNDropdown">
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">0.</div>
                                    <div className="SNText">Pendahuluan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">1.</div>
                                    <div className="SNText">Limit</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">2.</div>
                                    <div className="SNText">Turunan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">3.</div>
                                    <div className="SNText">Aplikasi Turunan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText">4.</div>
                                    <div className="SNText">Integral</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">5.</div>
                                    <div className="SNText">Aplikasi Integral</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri">
                                    <div className="SNText SNIndexDropdown">6.</div>
                                    <div className="SNText">Fungsi Transenden</div>
                            </div>
                            </div>
                            }
                            <div className="SideNavItem">
                                <div className="SNTextContainer">
                                    <div className="SNText text SNIndex">4.</div>
                                    <div className="SNText text">Integral</div>
                                </div>
                                <div onClick={() => {setIsOpen5(!isOpen5)}} className={`triangleSide ${isOpen5 ? "dropped" : ""}`} />
                            </div>
                            {isOpen5 && <div className="SNDropdown">
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(bilanganReal)}}>
                                    <div className="SNText SNIndexDropdown">0.1</div>
                                    <div className="SNText">Bilangan Real</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(pertaksamaan)}}>
                                    <div className="SNText SNIndexDropdown">0.2</div>
                                    <div className="SNText">Pertaksamaan dan Bilangan Mutlak</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(sistemKoordinat)}}>
                                    <div className="SNText SNIndexDropdown">0.3</div>
                                    <div className="SNText">Sistem Koordinat</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(grafikPersamaan)}}>
                                    <div className="SNText SNIndexDropdown">0.4</div>
                                    <div className="SNText">Grafik Persamaan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiDanGrafik)}}>
                                    <div className="SNText SNIndexDropdown">0.5</div>
                                    <div className="SNText">Fungsi dan Grafiknya</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(operasiFungsi)}}>
                                    <div className="SNText SNIndexDropdown">0.6</div>
                                    <div className="SNText">Operasi pada Fungsi</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiTrigonometri)}}>
                                    <div className="SNText SNIndexDropdown">0.7</div>
                                    <div className="SNText">Fungsi Trigonometri</div>
                            </div>
                            </div>
                            }
                            <div className="SideNavItem">
                                <div className="SNTextContainer">
                                    <div className="SNText text SNIndex">5.</div>
                                    <div className="SNText text">Aplikasi Integral</div>
                                </div>
                                <div onClick={() => {setIsOpen6(!isOpen6)}} className={`triangleSide ${isOpen6 ? "dropped" : ""}`} />
                            </div>
                            {isOpen6 && <div className="SNDropdown">
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(bilanganReal)}}>
                                    <div className="SNText SNIndexDropdown">0.1</div>
                                    <div className="SNText">Bilangan Real</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(pertaksamaan)}}>
                                    <div className="SNText SNIndexDropdown">0.2</div>
                                    <div className="SNText">Pertaksamaan dan Bilangan Mutlak</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(sistemKoordinat)}}>
                                    <div className="SNText SNIndexDropdown">0.3</div>
                                    <div className="SNText">Sistem Koordinat</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(grafikPersamaan)}}>
                                    <div className="SNText SNIndexDropdown">0.4</div>
                                    <div className="SNText">Grafik Persamaan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiDanGrafik)}}>
                                    <div className="SNText SNIndexDropdown">0.5</div>
                                    <div className="SNText">Fungsi dan Grafiknya</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(operasiFungsi)}}>
                                    <div className="SNText SNIndexDropdown">0.6</div>
                                    <div className="SNText">Operasi pada Fungsi</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiTrigonometri)}}>
                                    <div className="SNText SNIndexDropdown">0.7</div>
                                    <div className="SNText">Fungsi Trigonometri</div>
                            </div>
                            </div>
                            }
                            <div className="SideNavItem">
                                <div className="SNTextContainer">
                                    <div className="SNText text SNIndex">6.</div>
                                    <div className="SNText text">Fungsi Transenden</div>
                                </div>
                                <div onClick={() => {setIsOpen7(!isOpen7)}} className={`triangleSide ${isOpen7 ? "dropped" : ""}`} />
                            </div>
                            {isOpen7 && <div className="SNDropdown">
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(bilanganReal)}}>
                                    <div className="SNText SNIndexDropdown">0.1</div>
                                    <div className="SNText">Bilangan Real</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(pertaksamaan)}}>
                                    <div className="SNText SNIndexDropdown">0.2</div>
                                    <div className="SNText">Pertaksamaan dan Bilangan Mutlak</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(sistemKoordinat)}}>
                                    <div className="SNText SNIndexDropdown">0.3</div>
                                    <div className="SNText">Sistem Koordinat</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(grafikPersamaan)}}>
                                    <div className="SNText SNIndexDropdown">0.4</div>
                                    <div className="SNText">Grafik Persamaan</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiDanGrafik)}}>
                                    <div className="SNText SNIndexDropdown">0.5</div>
                                    <div className="SNText">Fungsi dan Grafiknya</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(operasiFungsi)}}>
                                    <div className="SNText SNIndexDropdown">0.6</div>
                                    <div className="SNText">Operasi pada Fungsi</div>
                            </div>
                            <div className="SNTextContainer dropdownItemMateri" onClick={() => {scrollToSection(fungsiTrigonometri)}}>
                                    <div className="SNText SNIndexDropdown">0.7</div>
                                    <div className="SNText">Fungsi Trigonometri</div>
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
  )
}

export default Materi
