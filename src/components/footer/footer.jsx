import '../footer/footer.css'
import face from '../../img/facebook.png'
import insta from '../../img/instagram.png'
import twttier from '../../img/twitter.png'
function footer() {
	return (
		<>
			<div className="footer__conteiner">
				<h2>Nossas Redes Sociais</h2>
				<div>
					<img className="redes" src={face} alt="" />
					<img className="redes" src={insta} alt="" />
					<img className="redes" src={twttier} alt="" />
				</div>
				<h4>@TODOS OS DIREITOS RESERVADOS </h4>
				<h4>@CRIADO POR DIEGO BARRADO </h4>
			</div>
		</>
	)
}
export default footer
