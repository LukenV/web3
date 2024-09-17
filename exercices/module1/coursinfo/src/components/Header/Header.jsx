import logoVinciPath from './HE_VINCI.png';

const Header = (props) => {
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <div className="imageContainer">
                <img src={logoVinciPath} alt="Logo Vinci"/>
            </div>
        </>
    );
}

export default Header;