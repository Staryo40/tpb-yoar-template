import "./Homepage.css"
import "./CommonStyles/Text.css"
import "./CommonStyles/Component.css"
import './CommonStyles/Bigbox.css'
import NavBar from "../components/organisms/NavBar";
import Footer from "../components/organisms/Footer";
import WelcomeBG from "../assets/WelcomeImage.svg";
// import PlazaWidya from "../assets/Plaza_Widya_Nusantara.jpg"
import DayQuote from "./HomepageModule";


function Homepage () {
    return (
        <>
        <div className="MacroContainer">
        <NavBar />
        <div className="homeBody">
            <div className="welcome">
                <img src={WelcomeBG} alt="itb danau kampus jatinangor" />
                <div className="textContainer">
                    <h1 className="title textWelcome">Welcome To TPB Yoar!</h1>
                    <span className="explain textWelcome">Archive dan referensi belajar TPB ITB</span>
                </div>
            </div>
            <div className="homeContent">
                <div className="MainContent">
                    <h1 className="text generalTitleH1">Apa Itu Tahap Persiapan Bersama (TPB) di Institut Teknologi Bandung (ITB)?</h1>
                    {/* <div className="imageContainer">
                        <img src={PlazaWidya} alt="Plaza Widya ITB Kampus Ganesha" />
                    </div>
                    <p className="text imageDetailBottom">Plaza Widya ITB Kampus Ganesha</p> */}
                    <p className="text generalContentP">
                        Sebelum memasuki website ini, ada pentingnya untuk menjelaskan apa itu TPB terlebih dahulu. 
                        Tahap Persiapan Bersama adalah periode ketika mahasiswa baru ITB mempelajari mata kuliah umum sebelum memasuki program studi masing-masing dengan tujuan untuk menyeragamkan tingkat pemahaman  mahasiswa baru. 
                        Ini mengapa ketika seorang keterima di ITB mereka tidak langsung mendapat jurusan/program studi, melainkan mereka keterima di suatu fakultas/sekolah di ITB terlebih dahulu. 
                    </p>
                    <p className="text generalContentP">
                        Melansir <a href="https://infotpbitb.wordpress.com/sejarah-tpb/" target="_blank">blog ini</a>, TPB dari tahun 1973 hingga sekarang (tahun ajaran 2023/2024) berjalan selama satu tahun pertama masuk ITB. Hasil nilai (Indeks Prestasi Kuliah (IPK)) dari TPB juga akan mempengaruhi hasil penjurusan pada akhir dua semester tersebut. 
                        Ini dilakukan karena pada fakultas tertentu, terdapat program studi yang lebih populer dari prodi lainnya. 
                        Oleh karena itu, agar bisa memuat kuota prodi yang terbatas mahasiswa dengan IPK lebih tinggi akan diprioritaskan untuk memasuki prodi pilihan pertama mereka. 
                        Basically jalur undangan 2.0 karena harus konsisten untuk menjaga nilai selama dua semester.
                    </p>
                    <p className="text generalContentP">
                        Satu hal menarik dengan adanya perubahan kurikulum, terdapat infomasi bahwa TPB akan dipersingkat menjadi hanya satu semester untuk tahun ajaran 2024/2025.
                    </p>
                    <p className="text generalContentP">
                        Secara Lokasi, TPB lamanya dilaksanakan di kampus utama ITB, yaitu Kampus Ganesha di Bandung. Namun, mulai tahun 2023, TPB dilaksanakan di Kampus Jatinangor.
                    </p>
                    <h1 className="text generalTitleH1">TPB Yoar Description</h1>
                    <p className="text generalContentP">
                        Pembuat web ini, Yoar, sangat senang Anda mengunjung webnya :D 
                    </p>
                    <p className="text generalContentP">
                        Dan ingin menyampaikan hal berikut:
                    </p>
                    <p className="text generalContentP">
                        ITB menyediakan berbagai fasilitas sehingga mahasiswanya dapat sukses secara akademik. 
                        Yoar merasakan hal ini sangat disayangkan jika hanya dibiarkan terbatas pada skala kampus saja. 
                        Oleh karena itu, Yoar berinisiatif untuk berbagi pengalamannya selama TPB sekaligus memberikan paparan materi pada setiap mata kuliah yang diikutinya selama periode tersebut. 
                        Harapannya adalah paparan tersebut dapat berguna atau setidaknya menghibur bagi pembaca.
                    </p>
                    <p className="text generalContentP">
                        Selain itu, website ini dibuat pada waktu yang cukup awkward karena merupakan waktu pergantian kurikulum untuk ITB tahun 2024. Dari itu, apa yang ditampilkan di website ini tidak akan sesuai dengan kurikulum terbaru (kecuali kalau ada update). 
                    </p>
                    <p className="text generalContentP">
                        Meskipun demikian, ada pentingnya juga untuk merekam bagaimana kurikulum pada tahun akademik 2023/2024 sebelum ITB mengubah kurikulum secara drastis untuk TPB.
                    </p>
                    <p className="text generalContentP">
                        Harapannya informasi yang disajikan di sini tidak hanya bermanfaat bagi mereka yang akan atau sedang menjalani TPB di ITB, tetapi juga dapat menjadi referensi bagi yang tertarik dengan model kurikulum TPB yang diterapkan di ITB. 
                        Pengalaman ini dapat memberikan gambaran yang jelas dan rinci tentang tantangan dan kesempatan yang ada selama menjalani tahun pertama di ITB, serta strategi dan tips yang berguna untuk menghadapinya.
                    </p>
                    <p className="text generalContentP">
                    Dengan demikian, harapannya adalah bahwa tulisan ini tidak hanya menjadi catatan pribadi, tetapi juga menjadi sumber informasi yang berharga bagi banyak orang, khususnya mahasiswa baru yang sedang mempersiapkan diri untuk memasuki dunia perkuliahan di ITB. 
                    Informasi yang disajikan di sini dapat membantu mereka memahami lebih baik apa yang diharapkan dan bagaimana cara terbaik untuk mempersiapkan diri, sehingga dapat menghadapi tahun pertama mereka dengan lebih siap.
                    </p>
                </div>
                <div className="Sidebar">
                    {/* <DayQuote moduleName="Quote"/> */}
                <div className="module">
                    <h2 className="text sideTitleIn">Quote of the day!</h2>
                    <p className="text generalContentP">
                        <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  fermentum hendrerit ex, ac tempus nulla. Donec ac neque ullamcorper,  laoreet augue id, laoreet felis.</em>
                    </p>
                </div>
                <div className="module">
                    <h2 className="text sideTitleIn">Nawa bala</h2>
                    <p className="text generalContentP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  fermentum hendrerit ex, ac tempus nulla. Donec ac neque ullamcorper,  laoreet augue id, laoreet felis. 
                    </p>
                </div>
                </div>

            </div>


        </div>
        <Footer />
        </div>
        </>
    )
}

export default Homepage;