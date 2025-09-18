import Logo2 from '../../img/logo2marrom.jpeg'
import '../formulario/form.css'
function FaleConosco() {
	return (
		<>
			<div className="conteiner__fale">
				<div className="form__conteiner">
					<h2 className="h2__form">FORMULARIO DE CONTATO</h2>
					<form className="formulario">
						<label htmlFor="">NOME:</label>
						<input type="text" />
						<label htmlFor="">TELEFONE:</label>
						<input type="text" />
						<label htmlFor="">EMAIL:</label>
						<input type="text" />
						<label htmlFor="">Mensagem:</label>
						<textarea />
					</form>
				</div>
				<div>
					<h2 className="h2__form">FALE CONOSCO</h2>
					<img className="logo2" src={Logo2} alt="" />
				</div>
			</div>
		</>
	)
}
export default FaleConosco
