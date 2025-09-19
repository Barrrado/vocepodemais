import Header from './components/Header'
import '../src/globalstyle.css'
import Car from './components/Carrosel/Carro'
import ProdutosLoja from './components/produtos/produtos'
import FaleConosco from './components/formulario/form'
import Footer from './components/footer/footer'
import BotaoTopo from './components/botao/botao-top'

function App() {
	return (
		<>
			<Header />
			<div id="sobre">
				<Car />
			</div>

			<div id="produtos">
				<ProdutosLoja />
			</div>

			<div id="fale-conosco">
				<FaleConosco />
			</div>

			<div id="redes-sociais">
				<Footer />
			</div>
			<BotaoTopo />
		</>
	)
}

export default App
