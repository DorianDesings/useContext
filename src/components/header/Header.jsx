import { StyledHeader } from './styles';

const Header = ({ counter }) => {
	return (
		<StyledHeader>
			<h2>{counter}</h2>
		</StyledHeader>
	);
};

export default Header;
