import { GrLinkNext } from 'react-icons/gr';

const ViewLink = ({to, name}) => {
	return (
		<div className="">
			<a href={to} className="relative group/link text-sm">
				<span className="inline-block transition-all font-medium group-hover/link:underline text-white before:absolute before:top-0 before:left-0 before:-translate-x-1/2 before:-translate-y-[30%] before:w-[50px] before:h-[50px] before:bg-white/10 before:rounded-full">
					{name}
				</span>
				<GrLinkNext className="inline-block mx-1 text-white -rotate-45"/>
			</a>
		</div>
	);
};

export default ViewLink;