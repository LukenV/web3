import logoVinciPath from './HE_VINCI.png';

const Header = (props) => {
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <img src={logoVinciPath} alt="Logo Vinci"/>
        </>
    );
}

export default Header;