import Carousel from '../Carrosel/carrosel'
import loja from '../../img/Fotoilustraitva.png'
import lady from '../../img/ledy.jpg'
import cheia from '../../img/Titulo.png'
import '../../components/Carrosel/carrosel.css'

function Carro() {
	return (
		<div className="App">
			<Carousel>
				<img src={loja} alt="Slide 1" />
				<div className="slide-com-texto">
					<img src={lady} alt="Slide 2" />
					<h1 className="texto__slide">SEMPRE POR DENTRO DAS TENDENCIAS!!!</h1>
					<h4 className="texto__slide4">OFERTAS!</h4>
				</div>

				<img src={cheia} alt="Slide 3" />
			</Carousel>
		</div>
	)
}

export default Carro
