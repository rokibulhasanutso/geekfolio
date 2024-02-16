import { useGSAP } from '@gsap/react';
import SectionTitle from './common/SectionTitle';
import { GiRoundStar } from "react-icons/gi";
import gsap from 'gsap';

const TestimonialsSection = () => {

	const testimonialData = [
		{
			name: 'Leonard heiser',
			degination: 'ceo',
			image: '/images/testimonial-image1.jpg',
			description: 'I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.',
			ratting: 5
		},
		{
			name: 'Leonard heiser',
			degination: 'ceo',
			image: '/images/testimonial-image2.jpg',
			description: 'I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.',
			ratting: 5
		},
		{
			name: 'Leonard heiser',
			degination: 'ceo',
			image: '/images/testimonial-image3.jpg',
			description: 'I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.',
			ratting: 5
		},
		{
			name: 'Leonard heiser',
			degination: 'ceo',
			image: '/images/testimonial-image4.jpg',
			description: 'I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.',
			ratting: 5
		}
	]

	useGSAP(() => {
		gsap.to('.testimonials-box', {
			yPercent: -60,
			duration: 50,
			ease: 'linear',
			repeat: -1,
		}).totalProgress(0.5)
	})


	return (
		<section className='bg-deep-dark'>
			<div className="gf-container grid grid-cols-12">
				<div className="col-span-5">
					<div className="py-section me-[20px] text-white">
						<span className="block uppercase mb-[15px] tracking-wider">Since From 2008</span>
						<SectionTitle titleText={`Keep pushing forward. <br/> We've got your back.`}/>
						<p className="mt-2.5 border-b border-zinc-800 pb-[30px] text-zinc-300 text-base tracking-wide leading-relaxed">
							Things go wrong have questions. We’ve understand. So we have people
						</p>
					
						<div className='flex justify-between mt-5'>
							<div className='flex items-center gap-5 mt-[30px]'>
								<div className='text-[45px] font-semibold *:tracking-wide *:leading-relaxed'>
									<span>12</span>
									<span>k</span>
								</div>
								<div className='flex flex-col text-[15px] text-zinc-400 *:tracking-wide *:leading-relaxed'>
									<span>Happy Users</span>
									<span>Around World</span>
								</div>
							</div>

							<div className='flex items-center gap-5 mt-[30px]'>
								<div className='text-[45px] font-semibold tracking-wide'>
									<span>150</span>
									<span>k</span>
								</div>
								<div className='flex flex-col text-[15px] text-zinc-400 *:tracking-wide *:leading-relaxed'>
									<span>Projects</span>
									<span>Already Done</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-start-7 col-span-6 h-[600px] overflow-hidden">
					<div className='*:mt-[30px] testimonials-box'>
					{
						testimonialData?.map((data, index) => (
							<div key={index} className='bg-white/5 p-[30px] rounded-[30px]'>
								<div className='flex gap-1 mb-[30px]'>
									{/* ratting counter star */}
									{
										Array.from({length: data.ratting || 0})
											.map((data, index) => 
												<GiRoundStar key={index} className='text-shadow-orange'/> 
											)
									}
								</div>

								<div className='mb-10'>
									<p className='text-white leading-[1.8] text-base font-normal'>
										{data?.description}
									</p>
								</div>

								<div className='flex items-center'>
									<img 
										src={data?.image} 
										alt="Testimonial Image"
										className='w-20 h-20 rounded-full object-cover'
									/>
									<div className='ml-[30px] space-y-2'>
										<h4 className='text-xl text-white font-medium leading-[1.8] capitalize'>{data?.name}</h4>
										<span className='text-shadow-orange uppercase tracking-widest text-sm'>{data?.degination}</span>
									</div>
								</div>
							</div>
						))
					}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;