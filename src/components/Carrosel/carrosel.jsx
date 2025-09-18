import React, { useState, useEffect } from 'react'
import './carrosel.css'

const Carousel = ({ children }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = React.Children.toArray(children)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
		}, 4000)

		return () => clearInterval(timer)
	}, [slides.length])

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
	}

	return (
		<div className="carousel-container">
			<div
				className="carousel-wrapper"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<div key={index} className="slide">
						{slide}
					</div>
				))}
			</div>
			<button onClick={prevSlide} className="prev-button">
				&#10094;
			</button>
			<button onClick={nextSlide} className="next-button">
				&#10095;
			</button>
		</div>
	)
}

export default Carousel
