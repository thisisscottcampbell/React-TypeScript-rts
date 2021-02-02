const EventComponent: React.FC = () => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		console.log(event.target.value);

	const onDragStart = (event: React.DragEvent<HTMLDivElement>) =>
		console.log('i am being dragged');

	return (
		<div>
			<input onChange={handleChange} />
			<div draggable onDragStart={onDragStart}>
				Drag Me!
			</div>
		</div>
	);
};

export default EventComponent;
