import { stringify } from 'querystring';
import { useState } from 'react';

const users = [
	{ name: 'Gunn', age: 38 },
	{ name: 'Conway', age: 38 },
	{ name: 'Benny', age: 36 },
];
const UserSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const handleClick = () => {
		const found = users.find((user) => user.name === name);
		setUser(found);
	};

	return (
		<div>
			<h3>User Search</h3>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={handleClick}>Search</button>
			<div>
				{user && <p>Name: {user.name}</p>}
				{user && <p>Age: {user.age}</p>}
			</div>
		</div>
	);
};

export default UserSearch;
