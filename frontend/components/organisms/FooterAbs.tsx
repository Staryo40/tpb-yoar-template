import "./FooterAbs.css"
import Contact from "../molecules/Footer/Contact";
import Phrase from "../molecules/Footer/Phrase";
import Copyright from "../molecules/Footer/Copyright";

function FooterAbs () {
    return (
        <>
        <div className="containerFooterAbs">
            <Contact />
            <Phrase />
            <Copyright />
        </div>
        </>
    )
}

export default FooterAbs;