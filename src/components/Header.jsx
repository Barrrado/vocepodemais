import '../components/style.css'
import logo from '../img/logo1Branca.jpeg'

function Header() {
	return (
		<>
			<div className="Conteiner__Header">
				<img className="logo" src={logo} alt="" />
				<div className="Conteiner__nav">
					<ul className="Menu__ul">
						<li className="Menu__li Mleft">SOBRE</li>
						<li className="Menu__li">PRODUTOS</li>
						<li className="Menu__li Mright">FALE CONOSCO</li>
						<li className="Menu__li Mright">REDES SOCIAIS</li>
					</ul>
				</div>
			</div>
		</>
	)
}
export default Header
