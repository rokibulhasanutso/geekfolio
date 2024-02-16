export const getDate = (dateData, options) => {
	try {
		const date = new Date(dateData)
		const defaultFormat = { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		};
		const dateFormat = date.toLocaleDateString('en-US', options || defaultFormat)

		return dateFormat;
	}
	catch (error) {
		console.error(error);
	}
}