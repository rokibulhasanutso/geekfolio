import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CardAnimator = ({className, children}) => {
	const cardAnimatorRef = useRef()

	useGSAP(() => {
		gsap.from('.card', {
			opacity: 0,
			duration: 0.8,
			stagger: 0.3,
			scrollTrigger: {
				trigger: '.card',
				// markers: true,
				start: 'top 75%'
			}
		})
	}, {scope: cardAnimatorRef})

	return (
		<div ref={cardAnimatorRef} className={className}>
			{
				children.map((element, i) => (
					<div key={i} className="card">
						{element}
					</div>
				))
			}
		</div>
	);
};

export default CardAnimator;