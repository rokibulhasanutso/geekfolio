import { RiSearchLine } from "react-icons/ri";
import AppLogo from "./logo/AppLogo";
import { useEffect, useRef } from "react";
import TextSpliter from "./common/TextSpliter";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {
	const headerRef = useRef()
	const { contextSafe } = useGSAP()

	// top to down amimation
	const headerAnimate = contextSafe((extraProperties) => {
		gsap.set('header', { yPercent: -100 })
		gsap.to('header', {
			yPercent: 0,
			duration: 0.8,
			...extraProperties
		})
	})

	// header navbar animation
	useEffect(() => {
		headerAnimate() // init

		const headerStickyAnimation = contextSafe(() => {
			const header = headerRef?.current
			const position = window.getComputedStyle(header).position
			const offset = window.scrollY
			const scrollLimit = 400

			if (offset > scrollLimit && position !== 'sticky') {
				header.classList.add('sticky', 'z-[9999]', 'top-0')

				// scroll top to down 400px then wrap amimation with bounce
				headerAnimate({ease: 'bounce'})
			} 
			else if (offset < scrollLimit && position === 'sticky') {
				header.classList.remove('sticky', 'z-[9999]', 'top-0')
			}
		})
		window.addEventListener("scroll", headerStickyAnimation);

		return () => {
			window.removeEventListener("scroll", headerStickyAnimation);
		}
	}, [contextSafe, headerAnimate])

	return (
		<header ref={headerRef} className='border-b border-stone-700 bg-mode-dark'>
			<nav className='gf-container text-black dark:text-white flex justify-between items-center'>
				{/* logo */}
				<AppLogo className={'w-[100px]'}/>

				{/* navigations */}
				<div className='nav-box'>
				<ul className='flex *:flex *:flex-col uppercase text-sm font-semibold'>
					<li><a href='#' className='mx-[15px] px-2.5 pt-5 pb-[15px]'><TextSpliter text={'home'}/></a></li>
					<li><a href='#' className='mx-[15px] px-2.5 pt-5 pb-[15px]'><TextSpliter text={'pages'}/></a></li>
					<li><a href='#' className='mx-[15px] px-2.5 pt-5 pb-[15px]'><TextSpliter text={'portfolio'}/></a></li>
					<li><a href='#' className='mx-[15px] px-2.5 pt-5 pb-[15px]'><TextSpliter text={'blogs'}/></a></li>
					<li><a href='#' className='mx-[15px] px-2.5 pt-5 pb-[15px]'><TextSpliter text={'shop'}/></a></li>
					<li><a href='#' className='mx-[15px] px-2.5 pt-5 pb-[15px]'><TextSpliter text={'contact'}/></a></li>
				</ul>
				</div>

				{/* search button */}
				<div>
				<div className='relative px-[25px] py-[27.5px] border-x border-stone-700 text-xs cursor-pointer'>
					<span className='transition-all duration-300'>
						<RiSearchLine/>
					</span>
				</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;