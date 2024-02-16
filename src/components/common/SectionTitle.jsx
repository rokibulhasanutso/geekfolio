import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SectionTitle = ({titleText}) => {
	const sectionTitleRef = useRef()

	useGSAP(() => {
		gsap.from('.sectionTitle', {
			y: 100,
			duration: 0.8,
			scrollTrigger: {
				trigger: '.sectionTitle',
				// markers: true,
				start: 'top 96%'
			}
		})
	}, {scope: sectionTitleRef})

	return (
		<h2 ref={sectionTitleRef} className="text-[36px] font-semibold text-white leading-tight whitespace-pre-wrap">
			{
				titleText.split('<br/>')
				.map((line, i) => (
					<span key={i} className="block leading-snug overflow-hidden">
						<span className="sectionTitle inline-block">{line.trim()}</span>
					</span>
				))
			}
		</h2>
	);
};

export default SectionTitle;