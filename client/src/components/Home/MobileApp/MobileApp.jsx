import phones from "../../../assets/img/phones.png"
import mundoubi from "../../../assets/img/mundoubi.png"
import telefono from "../../../assets/img/telefono.png"
import appstore from "../../../assets/img/appstore.png"
import playstore from "../../../assets/img/playstore.png"
import './MobileApp.modules.css'

export default function MobileApp(){
    return(
        <div className='main-app-container'>
            <div className='second-app-container'>
                <div className='app-description'>
                    <div className='app-description-tittle'>
                        <h3>Obtén AtechnasApp</h3>
                        <h1>Descarga la App</h1>
                        <hr className="hrPresentationGreen"></hr>
                    </div>
                    <div className='app-description-container'>
                        <div className='app-description-img'>
                            <img className='img-app' src={telefono} alt="img not found"/>
                        </div>
                        <div className='app-description-text'>
                            <h1 className="app-description-title">Tu nuevo trabajo, en tus manos</h1>
                            <h3 className="app-description-description">Postea tus trabajos y simplemente espera que te contacten para empezar un nuevo proyecto. La manera mas facil de contactarte con reclutadores y empresas de todo el mundo.</h3>
                        </div>
                    </div>
                    <div className='app-description-container'>
                        <div className='app-description-img'>
                            <img className='img-app' src={mundoubi} alt="img not found"/>
                        </div>
                        <div className='app-description-text'>
                            <h1 className="app-description-title">Contrata a los mejores freelancers</h1>
                            <h3 className="app-description-description">Nuestra plataforma te permite conectar con freelancers de todo el mundo. Profesionales de primer nivel en DESARROLLO, MARKETING y DISEÑO </h3>
                        </div>
                    </div>
                        <div className="container-stores">
                            <h2 className="prox-stores">Proximamente disponible en:</h2>
                            <img className='logo-appstore' src={appstore} alt="img not found"/>
                            <img className='logo-playstore' src={playstore} alt="img not found"/>
                        </div>
                    </div>
                <div className='app-phone-animation'>
                    <img className='logo' src={phones} alt="img not found"/>
                </div>
            </div>
        </div>
    )
}
