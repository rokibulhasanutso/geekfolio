import SectionTitle from "./common/SectionTitle";

const PricingSection = () => {
	return (
		<section>
			<div className="gf-container pb-section border-b border-zinc-800 grid grid-cols-12">
				<div className="text-white col-span-5">
					<span className="block uppercase mb-[15px] tracking-wider">OVER 150.000+ CLIENTS</span>
					<SectionTitle titleText={`Affordable pricing. <br/> Easy scaling.`}/>
					<p className="mt-[30px] border-t border-zinc-700 pt-[30px] text-zinc-500">
						Things go wrong have questions. We’ve understand. So we have people
					</p>

					<ul className="mt-[30px] text-xl font-semibold space-y-2.5">
						<li className="list-image-downarrow list-inside leading-loose">Amazing communication.</li>
						<li className="list-image-downarrow list-inside leading-loose">Best trendinf designing experience.</li>
						<li className="list-image-downarrow list-inside leading-loose">Email & Live chat.</li>
					</ul>
				</div>

				<div className="space-y-[30px] col-start-7 col-span-6">
					<div className="text-white py-[50px] px-[30px] rounded-xl bg-deep-dark flex justify-between gap-5">
						<div>
							<h4 className="text-2xl font-medium">Advanced</h4>
							<span className="block font-medium">14 days free</span>
						</div>

						<ul className="*:list-disc *:list-inside space-y-4 text-sm font-medium">
							<li>Guarenteed quality control</li>
							<li>Top quality service</li>
							<li>Best experts at your lease</li>
						</ul>

						<div className="space-y-5">
							<h2 className="text-3xl font-semibold">$19</h2>
							<a href="#" className="rounded-full block">
								<span className="inline-block text-nowrap capitalize px-8 py-3 border rounded-full transition-all duration-500 hover:bg-white hover:text-zinc-900">sign up</span>
							</a>
						</div>
					</div>

					<div className="text-zinc-900 py-[50px] px-[30px] rounded-xl bg-shadow-orange flex justify-between gap-5">
						<div>
							<h4 className="text-2xl font-medium">Enterprise</h4>
							<span className="block font-medium">14 days free</span>
						</div>

						<ul className="*:list-disc *:list-inside space-y-4 text-sm font-medium">
							<li>Guarenteed quality control</li>
							<li>Top quality service</li>
							<li>Best experts at your lease</li>
						</ul>

						<div className="space-y-5">
							<h2 className="text-3xl font-semibold">$49</h2>
							<a href="#" className="rounded-full block">
								<span className="inline-block text-nowrap capitalize px-8 py-3 border border-zinc-900 rounded-full transition-all duration-500 hover:bg-white hover:text-zinc-900">sign up</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingSection;