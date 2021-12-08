import "./DetallesTrabajos.css"
import Carousel from 'nuka-carousel';

export default function DetallesTrabajo(){
    return(
        <div>
            <h1 className="titulo-trabajo">Titulo</h1>
            <Carousel>
                <img src="https://wowslider.com/sliders/demo-80/data1/images/nature497978_1920.jpg"/>
                <img src="https://wowslider.com/sliders/demo-80/data1/images/plumage176723_1920.jpg"/>
                <img src="https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg"/>
            </Carousel>
            <div className="descripcion-trabajo">
                <p className="texto-descripcion-trabajo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum facere, et ad quia illo totam porro iusto vero nihil repudiandae magni ducimus! Eaque explicabo tempore ex officia impedit molestias?</p>
            </div>
            <h2 className>Precio</h2>
            <button>Comprar</button>
        </div>
    )
}