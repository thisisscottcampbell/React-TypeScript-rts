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
		console.log(user);
	};

	return (
		<div>
			<h3>User Search</h3>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={handleClick}>Search</button>
			<div></div>
		</div>
	);
};

export default UserSearch;
