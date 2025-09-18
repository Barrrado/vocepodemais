import Header from './components/Header'
import '../src/globalstyle.css'
import Car from './components/Carrosel/Carro'
import ProdutosLoja from './components/produtos/produtos'
import FaleConosco from './components/formulario/form'
import Footer from './components/footer/footer'

function App() {
	return (
		<>
			<Header />
			<Car />
			<ProdutosLoja />
			<FaleConosco />
			<Footer />
		</>
	)
}

export default App
