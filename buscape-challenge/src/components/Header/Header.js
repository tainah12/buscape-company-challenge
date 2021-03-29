import { Container, Logo } from "./styled"
import MenuIcon from '@material-ui/icons/Menu';
import buscapeLogo from '../../assets/buscapeLogo.png';

export const Header = () => {
    return (
        <Container>
            <div>
                <Logo src={buscapeLogo} alt="Buscape Logo" />
            </div>
            <MenuIcon style={{margin: "30px"}}/>
        </Container>
    )
}