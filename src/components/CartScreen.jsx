
import CartProduct from './CartProduct';
import Empty from './Empty';

const CartScreen = () => {

    const products = JSON.parse(localStorage.getItem('cart'));

    return (
        <div className="cart-container">

            {products.length > 0
                ? <CartProduct products={products} /> 
                :  <Empty />  
            }
        </div>
    )
}

export default CartScreen
