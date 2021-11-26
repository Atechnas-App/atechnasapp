import phones from "../../../assets/img/phones.png"
import premium from "../../../assets/img/premium.png"
import touchscreen from "../../../assets/img/telefono.png"
import appstore from "../../../assets/img/appstore.png"
import playstore from "../../../assets/img/playstore.png"
import './MobileApp.modules.css'

export default function MobileApp(){
    return(
        <div className='main-app-container'>
            <div className='second-app-container'>
                <div className='app-description'>
                    <div className='app-description-tittle'>
                        <h3>Get the Atechna App</h3>
                        <h1>Download Our App</h1>
                    </div>
                    <div className='app-description-container'>
                        <div className='app-description-img'>
                            <img className='img-app' src={touchscreen} alt="img not found"/>
                        </div>
                        <div className='app-description-text'>
                            <h1>Aca va un titulo</h1>
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsa quibusdam sint repudiandae similique veritatis eum error magnam. Exercitationem cumque quo iusto culpa consequatur deserunt expedita rem esse perferendis laudantium.</h3>
                        </div>
                    </div>
                    <div className='app-description-container'>
                        <div className='app-description-img'>
                            <img className='img-app' src={premium} alt="img not found"/>
                        </div>
                        <div className='app-description-text'>
                            <h1>Aca va otro titulo</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ducimus voluptates ad nesciunt voluptatem qui ratione quae. Asperiores, incidunt nobis cumque, quos, necessitatibus unde sed dignissimos ad itaque suscipit non!</h3>
                        </div>
                    </div>
                </div>
                <div className='app-phone-animation'>
                    <img className='logo' src={phones} alt="img not found"/>
                </div>
            </div>
            <div>
                <img className='logo-appstore' src={appstore} alt="img not found"/>
                <img className='logo-playstore' src={playstore} alt="img not found"/>
            </div>
        </div>
    )
}
