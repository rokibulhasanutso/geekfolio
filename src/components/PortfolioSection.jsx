import { Swiper, SwiperSlide } from 'swiper/react'
import SectionNameTag from "./common/SectionNameTag";
import SectionTitle from './common/SectionTitle';
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PortfolioSection = () => {
	const swiperRef = useRef()
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	const sliderData = [
		{
			image: '/images/slider-image1.jpg',
			title: ''
		},
		{
			image: '/images/slider-image2.jpg',
			title: ''
		},
		{
			image: '/images/slider-image3.jpg',
			title: ''
		},
		{
			image: '/images/slider-image4.jpg',
			title: ''
		},
		{
			image: '/images/slider-image5.jpg',
			title: ''
		}
	]

	const handleNextSlide = () => {
		swiperRef.current.swiper.slideNext()
	};

	const handlePrevSlide = () => {
		swiperRef.current.swiper.slidePrev()
	};

	const { contextSafe } = useGSAP()

	const animateOpacity = contextSafe(() => {
		gsap.from('.swiper-slide-active .textcontent-box', {
			yPercent: 25,
			opacity: 0,
			duration: 0.8,
			stagger: 0.3
		})
	})

	useEffect(() => {
		animateOpacity()
	}, [activeSlideIndex, animateOpacity])

	return (
		<section>
			<div className='py-section'>
				<div className="gf-container mb-20">
					<SectionNameTag text={"portfolio"} />
					<div className="flex justify-between mt-[15px]">
						<SectionTitle titleText={'Recent Projects.'}/>

						{/* Slider button */}
						<div className="space-x-4">
							<button onClick={handlePrevSlide} className="p-4 hover:bg-zinc-800 text-zinc-500 border border-zinc-500 rounded-full">
								<IoArrowBackOutline/>
							</button>

							<button onClick={handleNextSlide} id='#slide-next' className="p-4 hover:bg-zinc-800 text-zinc-500 border border-zinc-500 rounded-full">
								<IoArrowForwardOutline/>
							</button>
						</div>
					</div>
				</div>

				{/* slider content */}
				<div className="w-screen">
					<Swiper
						ref={swiperRef}
						slidesPerView={'auto'}
						spaceBetween={'40px'}
						centeredSlides={true}
						loop={true}
						speed={800}
						onSlideChange={(e) => setActiveSlideIndex(e.realIndex)}
					>
					{
						sliderData?.map((item, index) => (
							<SwiperSlide key={index} className='!w-[38.282vw]'>
								<div className='relative'>
									<img src={item.image} alt="Slide Image" />
									{
										activeSlideIndex === index &&
										<div className='absolute text-white flex flex-col gap-1.5 left-8 bottom-10'>
											<span className='textcontent-box px-3 py-1 self-start bg-mode-dark text-base'>Branding</span>
											<span className='textcontent-box px-3 py-1 self-start bg-mode-dark text-xl'>Artboard Studio</span>
										</div>
									}
								</div>
							</SwiperSlide>
						))
					}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
