import "./Footer.css"
import Contact from "../molecules/Footer/Contact";
import Phrase from "../molecules/Footer/Phrase";
import Copyright from "../molecules/Footer/Copyright";

function Footer () {
    return (
        <>
        <div className="containerFooter">
            <Contact />
            <Phrase />
            <Copyright />
        </div>
        </>
    )
}

export default Footer;