import { GoDash } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Accordion = ({accordionData}) => {
	const [accordianOpenIndex, setAccordianOpenIndex] = useState(0)

	const { contextSafe } = useGSAP(() => {
		gsap.from('.acc-item', {
			opacity: 0,
			duration: .8,
			stagger: .3,
			scrollTrigger: {
				trigger: '.acc-item',
				// markers: true,
				start: 'top 80%'
			}
		})
	})

	const accordionOpen = contextSafe(() => {
		gsap.to('.acc-open', {
			height: '65px',
			duration: 0.1,
			overflow: 'none'
		})
	})

	const accordionClose = contextSafe(() => {
		gsap.to('.acc-close', {
			height: '0px',
			duration: 0.1,
			overflow: 'hidden',
		})
	})

	useEffect(() => {

		accordionOpen()
		accordionClose()

	}, [accordianOpenIndex, accordionClose, accordionOpen])

	useEffect(() => {
		setAccordianOpenIndex(Object.values(accordionData).length - 2)
	}, [accordionData])

	return (
		<div>
		{
			accordionData?.map((item, index) => (
				<div key={index} className="mb-[15px] acc-item">
					<div 
						onClick={() => {setAccordianOpenIndex(index)}}
						className="cursor-pointer py-2.5 flex justify-between text-white border-b border-zinc-700"
					>
						<h6 className="text-lg font-semibold mb-2 leading-[1.8]">{item.title}</h6>
						<button onClick={() => {setAccordianOpenIndex(index)}} className="px-4">
							{ accordianOpenIndex === index ? <GoDash /> : <AiOutlinePlus />}
						</button>
					</div>
					<div className={accordianOpenIndex === index ? 'acc-open' : 'acc-close'}>	
						<p className="text-sm text-zinc-400 mt-[15px] leading-[1.8]">
							{item.content}
						</p>
					</div>
				</div>
			))
		}
		</div>
	);
};

export default Accordion;