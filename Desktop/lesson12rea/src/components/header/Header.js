import "./Header.scss"
import headerLogo from "../../assets/Group 397.svg"

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="wrapper container">
                <div className="header__logo">
                    <img src={headerLogo} alt="" />
                </div>
                <div className="header__collection">
                    <ul>
                        <li>
                            <span>
                                <a href="#">Home</a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="#">About</a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="#">Services</a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="#">Blog</a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="#">Contact</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="header__button">
                    <button>Sign In</button>
                </div>
            </div>
        </header>
    )
}

export default Header
