const Button = ({ counter, setCounter, amount }) => {
	return (
		<button onClick={() => setCounter(counter + amount)}>
			Incrementar en {amount} el contador.
		</button>
	);
};

export default Button;
