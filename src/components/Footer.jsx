import { useGSAP } from "@gsap/react";
import AppLogo from "./logo/AppLogo";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";

const Footer = () => {
	useGSAP(() => {
		gsap.set('.footer-container', { yPercent: -50})
		gsap.to('.footer-container', {
			yPercent: 0,
			scrollTrigger: {
				trigger: '.footer-container',
				scrub: 1,
				start: '50% bottom',
				end: '150% bottom',
				// markers: true,
			}
		})
	})

	return (
		<footer className="bg-deep-dark">
			<div className="footer-container">
			{/* footer content */}
			<div className="gf-container pb-20 pt-16 grid grid-cols-12 text-white">
				<div className="col-span-4">
					<h3 className="leading-normal mb-5 text-xl font-semibold">Address</h3>
					<p className="text-zinc-400 text-base font-medium">
						Germany — 785 15h Street, Office <br/> 478 Berlin, De 81566
					</p>
				</div>

				<div className="col-span-8">
					<div className="grid grid-cols-3">
						<div className="col-span-1">
							<h3 className="leading-normal mb-5 text-xl font-semibold">Say Hello</h3>
							<div className="flex flex-col">
								<span className="text-base mb-2.5 text-zinc-400">hello@design.com</span>
								<span className="text-2xl font-medium text-shadow-orange">+1 840 841 25 69</span>
							</div>
						</div>

						<div className="col-span-1">
							<h3 className="leading-normal mb-5 text-xl font-semibold">Social</h3>
							<div className="flex flex-col *:text-zinc-300">
								<a href="#" className="text-sm font-medium mb-2.5 uppercase">facebook</a>
								<a href="#" className="text-sm font-medium mb-2.5 uppercase">twitter</a>
								<a href="#" className="text-sm font-medium mb-2.5 uppercase">linkedin</a>
								<a href="#" className="text-sm font-medium mb-2.5 uppercase">instagram</a>
							</div>
						</div>

						<div className="col-span-1">
							<h3 className="leading-normal mb-5 text-xl font-semibold">Newsletter</h3>
							<div>
								<form className="border-b border-zinc-700 flex *:py-4">
									<input 
										type="email"
										name="email"
										placeholder="Type Your Email"
										className="leading-normal text-base text-zinc-500 bg-transparent w-full outline-none"
									/>
									<button 
										type="submit"
										onClick={() => {}}
										className="px-2"
									>
										<FaArrowRight/>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* sub footer content */}
			<div className="border-t border-zinc-800 pt-10 pb-16">
				<div className="gf-container flex justify-between items-center">
					<AppLogo className={'w-[100px]'}/>
					<p className="text-white text-[13px]">© 2023 Geekfolio is Proudly Powered by Oripio</p>
				</div>
			</div>
			</div>
		</footer>
	);
};

export default Footer;