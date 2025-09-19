import React, { useState } from 'react'
import { IMaskInput } from 'react-imask'
import Logo2 from '../../img/logo2marrom.jpeg'
import '../formulario/form.css'

function FaleConosco() {
	const [status, setStatus] = useState(null)

	const handleSubmit = async (event) => {
		event.preventDefault() // Impede o recarregamento da página

		const form = event.target
		const data = new FormData(form)

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: data,
				headers: {
					Accept: 'application/json'
				}
			})

			if (response.ok) {
				setStatus('success')
				form.reset() // Limpa os campos do formulário
			} else {
				setStatus('error')
			}
		} catch (error) {
			setStatus('error')
		}
	}

	return (
		<>
			<div className="conteiner__fale">
				<div className="form__conteiner">
					<h2 className="h2__form">FORMULÁRIO DE CONTATO</h2>

					{/* Mostra mensagem de sucesso ou erro com base no status */}
					{status === 'success' && (
						<p className="success-message">
							Mensagem enviada com sucesso! Em breve, entraremos em contato.
						</p>
					)}
					{status === 'error' && (
						<p className="error-message">Houve um erro no envio. Por favor, tente novamente.</p>
					)}

					<form
						className="formulario"
						onSubmit={handleSubmit}
						action="https://formspree.io/f/mrbanabz" /* SUBSTITUA AQUI PELO SEU ID DO FORMSPREE */
						method="POST"
					>
						<label htmlFor="nome">NOME:</label>
						<input type="text" id="nome" name="nome" required />

						<label htmlFor="telefone">TELEFONE:</label>
						<IMaskInput
							id="telefone"
							name="telefone"
							mask="(00) 00000-0000" // A máscara pode ter um formato um pouco diferente
							placeholder="(XX) XXXXX-XXXX"
							unmask={true} // para garantir que o valor sem máscara seja enviado
							required
							inputRef={(ref) => ref}
						/>

						<label htmlFor="email">EMAIL:</label>
						<input type="email" id="email" name="email" required />

						<label htmlFor="mensagem">Mensagem:</label>
						<textarea id="mensagem" name="mensagem" required />

						<button className="BTNENVIAR" type="submit">
							Enviar Mensagem
						</button>
					</form>
				</div>
				<div>
					<h2 className="h2__form">FALE CONOSCO</h2>
					<img className="logo2" src={Logo2} alt="Logo" />
				</div>
			</div>
		</>
	)
}

export default FaleConosco
