import { useState } from 'react';

const GuestList: React.FC = () => {
	const [name, setName] = useState('');
	const [guests, setGuests] = useState<string[]>([]);

	const handleClick = () => {
		setGuests([...guests, name]);
		setName('');
	};

	return (
		<div>
			<h3>Guest List</h3>
			{guests.map((guest) => (
				<li>{guest}</li>
			))}
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={handleClick}>Add Guest</button>
		</div>
	);
};

export default GuestList;
