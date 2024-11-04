import "./Contact.css"
import './FooterGlobal.css'
import mailIcon from "../../../assets/MailIcon.svg"

function Contact () {
    return (
        <>
        <div className="containerContact cen-vert">
            <span className="textFooter">Contact</span>
            <div className="vl"></div>
  
                <a className="contactLink cen-vert" href="mailto:tpbyoar@gmail.com?subject=Inquiry&body=Salutations..." target="_blank">
                <img className="contactIcon" src={mailIcon} />
                <span className="textFooter">tpbyoar@gmail.com</span>
                </a>



        </div>
        </>
    )
}

export default Contact;