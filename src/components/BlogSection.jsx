import { getDate } from "../utils/dateformat";
import SectionNameTag from "./common/SectionNameTag";
import SectionTitle from "./common/SectionTitle";
import ViewLink from "./common/ViewLink";

const BlogSection = () => {

	const blogData = [
		{
			date: '2022-08-05T18:00:00.000Z',
			title: 'Free advertising for your online business.',
			link: '#',
			image: '/images/blog-post-image1.jpg',
			tag: ['marketing', 'design']
		},
		{
			date: '2022-08-05T18:00:00.000Z',
			title: 'Business meeting 2023 in San Francisco.',
			link: '#',
			image: '/images/blog-post-image2.jpg',
			tag: ['marketing', 'design']
		}
	]
	
	return (
		<section>
			<div className="gf-container py-section">
				<SectionNameTag text={"our blog"} />
				<div className="mt-[15px] mb-20 flex justify-between">
					<SectionTitle titleText={'Latest news.'}/>
					<ViewLink to={"#"} name={"View all our news"} />
				</div>

				{/* blog content */}
				<div>
					<div className="grid grid-cols-2 gap-[30px]">
					{
						blogData?.map((data, i) => (
							<div key={i} className="flex rounded-2xl overflow-hidden bg-deep-dark">
								<img 
									src={data.image} 
									alt="Blog Image"
									className="w-1/2 object-cover"
								/>
								
								<div className="py-20 px-[30px]">
									<span className="block uppercase text-xs tracking-[1px] font-bold text-zinc-400 mb-[15px]">{getDate(data?.date)}</span>
									<h3 className="text-2xl text-white leading-normal font-medium">{data.title}</h3>

									<div className="mt-[15px] flex flex-wrap gap-1">
									{
										data?.tag?.map((tag, i) => (
											<a href="#" key={i}>
												<span className="px-5 py-2 text-[13px] rounded-[5px] transition-all duration-[400ms] capitalize text-white text-sm bg-white/5 hover:bg-shadow-orange">
													{tag}
												</span>
											</a>
										))
									}
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

export default BlogSection;