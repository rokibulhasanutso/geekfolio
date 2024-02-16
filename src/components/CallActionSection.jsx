import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CallActionSection = () => {
	useGSAP(() => {
		gsap.from('.drop-up-animator', {
			yPercent: 100,
			duration: 0.8,
			scrollTrigger: {
				trigger: '.drop-up-animator',
				start: 'top 75%',
				// markers: true
			}
		})
	})

	return (
		<section>
			<div className="bg-graph-hero bg-no-repeat bg-center relative">
				<div className="gf-container py-section">
					<h1 className="text-[70px] font-bold text-center text-white">Have a project in mind?</h1>
					<a href="#" className="underline underline-offset-4 text-center text-shadow-orange">
						<h1 className="text-[70px] font-bold overflow-hidden">
							<span className="block drop-up-animator">Let’s get to work.</span>
						</h1>
					</a>
				</div>
			</div>
		</section>
	);
};

export default CallActionSection;