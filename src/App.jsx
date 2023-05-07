import { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<GlobalStyles />
			<Header counter={counter} />
			<Main counter={counter} setCounter={setCounter} />
		</>
	);
};

export default App;
