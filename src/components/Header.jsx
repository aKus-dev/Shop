import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Header = () => {

    const {state} = useContext(CartContext);

    return (
        <header className="header">
            
            <Link className="logo" to="/">
                <img
                    className="header__logo"
                    src="./assets/images/logo.svg"
                    alt="Logo"
                />
            </Link>


            <Link to="/cart">
                <div className="cart">
                    <img
                        className="cart__logo"
                        src="./assets/images/icon-cart.svg"
                        alt="Cart"
                    />

                    {state.length > 0 && <span className="cart__length">{state.length}</span>}


                </div>
            </Link>


        </header>
    )
}

export default Header
