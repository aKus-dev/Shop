import { Navigate } from 'react-router-dom';

import Header from './Header'
import { useContext } from "react"
import CartContext from "../context/CartContext"

const CartProduct = ({ products }) => {

    const {state, dispatch} = useContext(CartContext);

    if(state.length === 0) return <Navigate to="/" />

    const handleDelete = (id) => {
      dispatch({
          type: 'delete',
          payload: id
      })
    }

    const total = state.reduce((acc, product) => acc + product.finalPrice , 0);

    return (
        <div>
            <Header />

            <div>
                {
                    state.map(product => (

                        <div key={Math.random()} className="cart-product">
                            <img className="img-cart" src={product.imgPath} alt={product.name} />

                            <div className="info">
                                <p>Producto: {product.name}</p>
                                <p>Precio: ${product.price} x {product.quiantity}</p>
                                <b>Subtotal: <span>${product.finalPrice}</span> </b>

                                <img onClick={() => handleDelete(product.id)} className="delete" src="/assets/images/icon-delete.svg" alt="Delete" />
                            </div>
                        </div>

                    ))
                }
            </div>

            <div className="checkout">
                <h2>Total: ${total}</h2>
                <button className="add-btn">Checkout</button>
            </div>
        </div>
    )
}

export default CartProduct
