import SectionNameTag from "./common/SectionNameTag";
import SectionTitle from "./common/SectionTitle";
import ViewLink from "./common/ViewLink";
import Card from "./common/Card";
import CardAnimator from "./common/CardAnimator";
import shap1 from "../assets/images/feature-shap1.png";
import shap2 from "../assets/images/feature-shap2.png";
import featurePart2Image from "../assets/images/feature-part2.png";
import Accordion from "./common/Accordion";
import { FaPlay } from "react-icons/fa";

const FeaturesSection = () => {
	const data = [
		{
			image: '/images/feature1.png',
			title: `Brand Strategy & <br/> Art Direction`,
			list: ['User friendly interface', 'Nothing distracts from work', 'Easy to start chatting']
		},
		{
			image: '/images/feature2.png',
			title: `UX/UI Design & <br/> Website/App Design`,
			list: ['User friendly interface', 'Nothing distracts from work', 'Easy to start chatting']
		},
		{
			image: '/images/feature3.png',
			title: `Engage your <br/> customers dramatically.`,
			list: ['User friendly interface', 'Nothing distracts from work', 'Easy to start chatting']
		},
	]

	const accordionData = [
		{
			title: 'Website & Mobile App Design', 
			content: 'Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.'
		},
		{
			title: 'Motion Graphics & Animation', 
			content: 'Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.'
		},
		{
			title: 'User Experience', 
			content: 'Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.'
		},
	]

	return (
		<section>
			{/* part 1 */}
			<div className="gf-container py-section">
				<SectionNameTag text={'features'}/>
				<div className="mt-[15px] mb-20 flex justify-between">
					<SectionTitle
						titleText={`We help you to go online & <br/> increase your conversion rate.`} 
					/>
					<ViewLink to={'#'} name={'View All Services'}/>
				</div>

				<CardAnimator className={"grid grid-cols-3 gap-[30px]"}>
					{
						data?.map(({image, title, list}, i) => (
							<Card 
								key={i}
								imageUrl={image}
								title={title}
								list={list}
							/>
						))
					}
				</CardAnimator>
			</div>

			{/* part 2 */}
			<div className="bg-deep-dark relative w-full">
				{/* main content */}
				<div className="relative gf-container py-section flex justify-around">
					<div 
						style={{ backgroundImage:`url(${featurePart2Image})` }} 
						className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-bottom bg-1/2 pointer-events-none`}
					/>

					<div className="ms-[50%] max-w-[510px] px-[15px]">
						<button className="w-[70px] h-[70px] leading-[70px] mb-10 rounded-full bg-white/10">
							<a href="https://youtu.be/AzwC6umvd1s" className="inline-block text-xl text-white align-middle">
                                <FaPlay/>
                            </a>
						</button>

						<h3 className="text-white font-semibold text-[36px] mb-10">
							We grow brands through bold & strategic creative
						</h3>

						<Accordion accordionData={accordionData}/>
					</div>
				</div>

				{/* background shap set */}
				<div className="w-[150px] absolute left-0 bottom-[100px] rotate-90 opacity-40">
					<img src={shap1} alt="Features Shap" className="w-full h-auto"/>
				</div>
				<div className="w-[150px] absolute top-0 right-[10%] opacity-40">
					<img src={shap2} alt="Features Shap" className="w-full h-auto"/>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;