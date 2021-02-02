import { useState, useRef, useEffect } from 'react';

const users = [
	{ name: 'Gunn', age: 38 },
	{ name: 'Conway', age: 38 },
	{ name: 'Benny', age: 36 },
];
const RefSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const handleClick = () => {
		const found = users.find((user) => user.name === name);
		setUser(found);
		setName('');
	};

	useEffect(() => {
		if (!inputRef.current) return;

		inputRef.current.focus();
	}, []);

	return (
		<div>
			<h3>User Search</h3>
			<input
				ref={inputRef}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={handleClick}>Search</button>
			<div>
				{user && <p>Name: {user.name}</p>}
				{user && <p>Age: {user.age}</p>}
			</div>
		</div>
	);
};

export default RefSearch;
