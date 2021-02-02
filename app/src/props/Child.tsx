interface ChildProps {
	color: string;
	onClick: () => void;
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
	return (
		<div>
			{color}
			<button onClick={onClick} />
		</div>
	);
};

export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<div>
			{color}
			<button onClick={onClick} />
		</div>
	);
};
