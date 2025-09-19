import '../components/style.css'
import logo from '../img/logo1Branca.jpeg'

function Header() {
	const handleScroll = (sectionId) => {
		const section = document.getElementById(sectionId)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
		<>
			<div className="Conteiner__Header">
				<img className="logo" src={logo} alt="" />
				<div className="Conteiner__nav">
					<ul className="Menu__ul">
						<li className="Menu__li Mleft" onClick={() => handleScroll('sobre')}>
							SOBRE
						</li>
						<li className="Menu__li" onClick={() => handleScroll('produtos')}>
							PRODUTOS
						</li>
						<li className="Menu__li Mright" onClick={() => handleScroll('fale-conosco')}>
							FALE CONOSCO
						</li>
						<li className="Menu__li Mright" onClick={() => handleScroll('redes-sociais')}>
							REDES SOCIAIS
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
export default Header
