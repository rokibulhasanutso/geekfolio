
const Card = ({imageUrl, title, list}) => {
	return (
		<div className="w-full px-10 py-[60px] border border-zinc-700 rounded-lg">
			<div className="size-[60px] mb-10">
				<img 
					src={imageUrl}
					alt="Card Image"
					className="w-full h-auto"
				/>
			</div>
			
			<h3 
				dangerouslySetInnerHTML={{__html: title}} 
				className="text-white text-xl font-medium mb-[30px]"
			/>

			<ul className="text-white">
				{list.map((item, index) => (
					<li key={index} className="list-image-checkmark list-inside">{item}</li>
				))}
			</ul>
		</div>
	);
};

export default Card;