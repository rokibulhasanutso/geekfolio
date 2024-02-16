import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SectionNameTag = ({text}) => {
	const sectionNameTagRef = useRef()

	useGSAP(() => {
		gsap.from(sectionNameTagRef.current, {
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: sectionNameTagRef.current,
				// markers: true,
				start: 'top 96%'
			}
		})
	}, {scope: sectionNameTagRef})

	return (
		<div ref={sectionNameTagRef} className="px-8 py-2 rounded-full border border-white inline-block">
			<span className="uppercase text-sm text-white">{text}</span>
		</div>
	);
};

export default SectionNameTag;