import Button from '../button/Button';

const Main = ({ counter, setCounter }) => {
	return (
		<main>
			<Button counter={counter} setCounter={setCounter} amount={1} />
			<Button counter={counter} setCounter={setCounter} amount={2} />
			<Button counter={counter} setCounter={setCounter} amount={3} />
		</main>
	);
};

export default Main;
