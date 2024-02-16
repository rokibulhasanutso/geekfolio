import ServiceImagepart1 from '../assets/images/service-part1.jpg'
import ServiceShapImagepart1 from '../assets/images/serviceIconpart1.png'
import { CgArrowLongRight } from "react-icons/cg";
import SectionNameTag from './common/SectionNameTag';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from 'react';

const ServiceSection = () => {
	const { contextSafe } = useGSAP()

	const imageSideUp = contextSafe((target) => {
		gsap.from(target, {
			xPercent:  -100, 
			scale: 1.5,
			duration: 0.7,
			smoothOrigin: true,
			scrollTrigger: {
				trigger: target,
				start: 'top bottom',
				end: 'center 60%',
				scrub: true,
				// markers: true
			}
		})
	})

	const cardTopUp = contextSafe((target) => {
		gsap.from(target, {
			yPercent: 20,
			opacity: 0,
			duration: 0.5,
			smoothOrigin: true,
			scrollTrigger: {
				trigger: target,
				start: 'top 80%',
				end: '60% 80%',
				scrub: true,
				// markers: true
			}
		})
	})

	const stepUpView = contextSafe((target) => {
		gsap.from(target, {
			opacity: 0,
			duration: 0.8,
			stagger: 0.3,
			repeat: -1,
			scrollTrigger: {
				trigger: target,
				start: 'top 60%',
				end: '0% top',
				// markers: true
			}
		})
	})

	useEffect(() => {
		imageSideUp('.service-image')
		stepUpView('.step-up-animator')
		cardTopUp('.card-topUP-animator')

	}, [imageSideUp, stepUpView, cardTopUp])

	return (
		<section>
			<div className="gf-container grid grid-cols-12 py-section">
				<div className='col-span-6 relative mb-20'>
					<img src={ServiceImagepart1} alt="Service Image" className='service-image w-[400px]' />
					
					<div className='card-topUP-animator bg-deep-dark py-20 px-10 text-white absolute left-[20%] -bottom-20'>
						<img src={ServiceShapImagepart1}  alt="Service Shap Image" className='size-[60px] mb-10'/>
						
						<p className='text-base leading-relaxed'>
							We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.
						</p>

						<a href="#" className='block mt-[30px]'>
							Read More <CgArrowLongRight className='inline-block'/>
						</a>
					</div>
				</div>

				<div className='col-start-8 col-span-5 text-white flex'>
					<div className='self-center'>
						<SectionNameTag text={'services'}/>
						<p className='mb-20 mt-[15px]'>We help you to go online and increase your conversion rate Better design for your digital products.</p>

						<div>
							<ul className='text-[40px] space-y-[15px] leading-relaxed'>
								<li className='step-up-animator'><span className='text-2xl me-[30px]'>01.</span><span>UI/UX Design</span></li>
								<li className='step-up-animator'><span className='text-2xl me-[30px]'>02.</span><span>Branding</span></li>
								<li className='step-up-animator'><span className='text-2xl me-[30px]'>03.</span><span>Development</span></li>
								<li className='step-up-animator'><span className='text-2xl me-[30px]'>04.</span><span>Marketing</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;