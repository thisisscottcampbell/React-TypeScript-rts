const EventComponent: React.FC = () => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		console.log(event.target.value);

	return (
		<div>
			<input onChange={handleChange} />
		</div>
	);
};

export default EventComponent;
