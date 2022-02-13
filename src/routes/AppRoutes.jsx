import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useEffect, useReducer } from 'react';
import CartScreen from '../components/CartScreen';
import HomeScreen from '../components/home/HomeScreen';
import ProductScreen from '../components/ProductScreen';
import CartContext from '../context/CartContext';
import cartReducer from '../reducer/cartReducer';
import ScrollToTop from '../helpers/ScrollToTop';

const init = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

const AppRoutes = () => {

    const [state, dispatch] = useReducer(cartReducer, [], init);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state])


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            <Router>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="/product/:id" element={<ProductScreen />} />
                    </Routes>
                </ScrollToTop>
            </Router>
        </CartContext.Provider>

    )
}

export default AppRoutes
