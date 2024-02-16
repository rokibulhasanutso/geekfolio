import { Swiper, SwiperSlide } from "swiper/react";
import SectionNameTag from "./common/SectionNameTag";
import SectionTitle from "./common/SectionTitle";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const ApproachSection = () => {

	const approachSectionData = [
		{
			title: 'research',
			description: 'We help you to go online and increase your conversion rate.',
			url: '#'
		},
		{
			title: 'concept',
			description: 'We help you to go online and increase your conversion rate.',
			url: '#'
		},
		{
			title: 'implement',
			description: 'We help you to go online and increase your conversion rate.',
			url: '#'
		},
		{
			title: 'handover',
			description: 'We help you to go online and increase your conversion rate.',
			url: '#'
		}
	]

	return (
		<section>
			<div className="gf-container py-section">
				<div className="flex flex-col items-center mb-20 space-y-[15px]">
					<SectionNameTag text={'approach'}/>
					<SectionTitle titleText={"Our Approach."} />
				</div>

				<div className="approach-section">
					<Swiper slidesPerView={4} speed={800} touchStartForcePreventDefault={true}>
					{
						approachSectionData?.map((item, index) => (
							<SwiperSlide key={index} >
								<h3 className="text-xl font-semibold text-center capitalize">{item.title}</h3>
								<h3 className="mt-[30px] text-[60px] text-center text-transparent font-extrabold text-border">
									{(index+1).toString().padStart(2,'0')}
								</h3>
								<p className="mt-[30px] text-center">{item.description}</p>
								<a href={item.url} className="mt-[15px] text-2xl">
									<HiOutlineArrowSmallRight/>
								</a>
							</SwiperSlide>
						))
					}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default ApproachSection;