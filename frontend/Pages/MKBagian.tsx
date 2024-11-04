import './MKBagian.css'
import './CommonStyles/Text.css'
import './CommonStyles/Bigbox.css'
import NavBar from '../components/organisms/NavBar'
import Footer from '../components/organisms/Footer'

function MKBagian() {
  return (
    <>
    <div className='MacroContainer'>
        <NavBar />
        <div className="storage">
        <div className="MainContainer">
            <div className="MainContent">
                <h1 className='text generalTitleH1'>Overview</h1>
                <p className='text generalContentP'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  fermentum hendrerit ex, ac tempus nulla. Donec ac neque ullamcorper,  laoreet augue id, laoreet felis. Vestibulum aliquet enim iaculis  sollicitudin scelerisque. Duis in erat non erat cursus vehicula vel et  metus. Etiam vestibulum ullamcorper purus porta tempor. Pellentesque  finibus placerat orci maximus feugiat. Cras accumsan porta euismod.  Nullam ornare nulla venenatis, blandit mi id, condimentum mi. Integer  non purus id augue posuere volutpat at et ex.
 Mauris quis bibendum velit. Nulla aliquet bibendum mi at consectetur.  Nullam at ex maximus, porttitor enim et, aliquam lacus. Donec sit amet  tortor felis. Fusce ac enim placerat, consequat orci pellentesque,  facilisis risus. Sed nisi sapien, consectetur sed porttitor sed, euismod  quis erat. Mauris at ex nec libero aliquam semper at ut lectus. Duis  consectetur in dolor at efficitur.
 Cras sed felis id elit mattis vulputate. Pellentesque sed laoreet velit.  Mauris sodales ultrices molestie. Pellentesque in aliquet dolor, eget  interdum nisi. Sed blandit luctus convallis. Sed eu leo purus. Integer  sit amet accumsan turpis. Aenean pharetra sagittis felis, non auctor  orci lobortis nec. Morbi tempus dignissim dui sed dapibus.  In hac habitasse platea dictumst. Integer laoreet felis convallis lorem  vestibulum ultrices. Ut tincidunt mollis faucibus. Aenean egestas vitae  mauris eu sagittis. Donec quis ultricies quam. Suspendisse ut mauris  quis eros congue sollicitudin. Sed luctus cursus ligula, posuere iaculis  dui. Phasellus egestas quam sed tellus volutpat molestie.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  fermentum hendrerit ex, ac tempus nulla. Donec ac neque ullamcorper,  laoreet augue id, laoreet felis. Vestibulum aliquet enim iaculis  sollicitudin scelerisque. Duis in erat non erat cursus vehicula vel et  metus. Etiam vestibulum ullamcorper purus porta tempor. Pellentesque  finibus placerat orci maximus feugiat. Cras accumsan porta euismod.  Nullam ornare nulla venenatis, blandit mi id, condimentum mi. Integer  non purus id augue posuere volutpat at et ex.
 Mauris quis bibendum velit. Nulla aliquet bibendum mi at consectetur.  Nullam at ex maximus, porttitor enim et, aliquam lacus. Donec sit amet  tortor felis. Fusce ac enim placerat, consequat orci pellentesque,  facilisis risus. Sed nisi sapien, consectetur sed porttitor sed, euismod  quis erat. Mauris at ex nec libero aliquam semper at ut lectus. Duis  consectetur in dolor at efficitur.
 Cras sed felis id elit mattis vulputate. Pellentesque sed laoreet velit.  Mauris sodales ultrices molestie. Pellentesque in aliquet dolor, eget  interdum nisi. Sed blandit luctus convallis. Sed eu leo purus. Integer  sit amet accumsan turpis. Aenean pharetra sagittis felis, non auctor  orci lobortis nec. Morbi tempus dignissim dui sed dapibus.
 In hac habitasse platea dictumst. Integer laoreet felis convallis lorem  vestibulum ultrices. Ut tincidunt mollis faucibus. Aenean egestas vitae  mauris eu sagittis. Donec quis ultricies quam. Suspendisse ut mauris  quis eros congue sollicitudin. Sed luctus cursus ligula, posuere iaculis  dui. Phasellus egestas quam sed tellus volutpat molestie. 
                </p>
            </div>
            <div className="Sidebar">
                <h2 className='text sideTitle'>Matematika A Per Bagian</h2>
                <a className='sideButton' href="/mkbagian">
                    <h2 className='text sideTitleIn'>Matematika IA</h2>
                    <p className='text generalContentP'>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  fermentum hendrerit ex, ac tempus nulla.</p>
                </a>
                <a className='sideButton' href="/mkbagian">
                    <h2 className='text sideTitleIn'>Matematika IIA</h2>
                    <p className='text generalContentP'>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  fermentum hendrerit ex, ac tempus nulla.</p>
                </a>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default MKBagian