
const TextSpliter = ({text}) => {
	return (
		<span className="inline-block overflow-hidden leading-[30px] h-[30px] group/letter">
		{	
			Array.from({length: 2}).map((_, stepIndex) => (
				<span className="block space-x-[0.3px]" key={stepIndex}>{
					text.split("").map((letter, letterIndex) => (
						<span 
							key={letterIndex}
							style={{
								transitionDelay: `${0.015 * letterIndex}s`,
								WebkitTransitionDelay: `${0.015 * letterIndex}s`,
								OTransitionDelay: `${0.015 * letterIndex}s`
							}}
							className="group-hover/letter:-translate-y-full inline-block transition-all duration-500 ease-[cubic-bezier(0.76,_0,_0.24,_1)]" 
						>
							{letter}
						</span>
					))
				}</span>
			))
		}
		</span>
	);
};

export default TextSpliter;