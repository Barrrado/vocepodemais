import React, { useState, useEffect } from 'react'
import '../botao/botao.css'
import seta from '../../img/seta-para-cima.png'

const BotaoTopo = () => {
	const [isVisible, setIsVisible] = useState(false)
	const handleScroll = () => {
		if (window.scrollY > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<img
			src={seta}
			alt=""
			className={`botao-topo ${isVisible ? 'visivel' : 'invisivel'}`}
			onClick={scrollToTop}
		></img>
	)
}

export default BotaoTopo
