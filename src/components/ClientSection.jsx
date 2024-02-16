import { Swiper, SwiperSlide } from "swiper/react";

const ClientSection = () => {
	const clientData = [
		{image: '/images/companylogo1.png'},
		{image: '/images/companylogo2.png'},
		{image: '/images/companylogo3.png'},
		{image: '/images/companylogo1.png'},
		{image: '/images/companylogo4.png'},
		{image: '/images/companylogo5.png'},
	]
	return (
		<section>
			<div className="gf-container pb-section">
				<div className="text-white">
					<p className="mb-20 text-center">
						More than 
						<span className="font-bold mx-1">200+ companies</span>
						trusted us worldwide
					</p>
				</div>

				<Swiper slidesPerView={5} loop={true} speed={800}>
					{
						clientData?.map(({image}, i) => (
							<SwiperSlide key={i}>
								<img src={image} alt="Client Image" className="w-[100px]" />
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</section>
	);
};

export default ClientSection;