const AppLogo = ({className}) => {
	const logo_url = import.meta.env.VITE_APP_LOGO;

	return (
		<a href="/" className={`block ${className}`}>
			<img 
				src={logo_url} 
				className="w-full" 
				alt="App Logo"
			/>
		</a>
	);
};

export default AppLogo;