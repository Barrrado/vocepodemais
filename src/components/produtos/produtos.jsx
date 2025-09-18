import '../produtos/produtos.css'
import foto1 from '../../img/1.jpeg'
import foto2 from '../../img/2.jpeg'
import foto3 from '../../img/3.jpeg'
import foto4 from '../../img/4.jpeg'
import foto5 from '../../img/5.jpeg'
import foto6 from '../../img/6.jpeg'

function ProdutosLoja() {
	return (
		<>
			<div className="conteiner__loja">
				<ul className="Menu__produtos">
					<li className="produtos__li">SHORTS</li>
					<li className="produtos__li">Calças</li>
					<li className="produtos__li">Vestidos</li>
				</ul>

				<div className="conteiner__produtos">
					<img className="fotos__produtos f1" src={foto1} alt="" />
					<img className="fotos__produtos f2" src={foto2} alt="" />
					<img className="fotos__produtos f3" src={foto3} alt="" />
					<img className="fotos__produtos f4" src={foto4} alt="" />
					<img className="fotos__produtos f5 " src={foto5} alt="" />
					<img className="fotos__produtos f6" src={foto6} alt="" />
				</div>
			</div>
		</>
	)
}
export default ProdutosLoja
