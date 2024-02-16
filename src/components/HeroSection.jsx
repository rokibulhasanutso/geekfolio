import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import heroImage from "../assets/images/illustration-hero.png";

const HeroSection = () => {
	const heroSectionRef = useRef()

	useGSAP(() => {
		gsap.from(heroSectionRef.current, {
			yPercent: 15,
			opacity: 0,
			duration: 0.75
		})
	})

	return (
		<section ref={heroSectionRef} className="bg-graph-hero h-[calc(100vh-71px)] flex items-center">
			<div className="gf-container grid grid-cols-2 relative z-50">
				<div className="col-span-1 -mt-12">
					<div className="pr-4">
						<h1 className="text-[76px] text-white leading-[1.125] font-semibold">Better design for your digital products.</h1>
						<p className="text-base text-white leading-loose mt-8">
							We are a creative studio specializing in UI/UX design,
							<br/>
							development and strategy.
						</p>

						<a href="#" className="mt-8 block">
							<span className="transition-all bg-[#f08f74] box-border border border-transparent hover:border-white hover:bg-transparent hover:text-white py-3.5 px-[35px] rounded-full inline-block">
								Explore More
							</span>
						</a>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 absolute bottom-0">
				<div className="col-span-1 col-start-2">
					<img 
						className="w-full h-auto"
						src={heroImage}
						alt="Hero Image" 
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;