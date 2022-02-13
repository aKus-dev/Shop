import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import Success from "./alerts/Success";


const AddToCart = ({name, price, imgPath,}) => {

    const {dispatch} = useContext(CartContext);

    const [success, setSuccess] = useState(false);
    const [quiantity, setQuiantity] = useState(1)

    const handleLess = () => {
        if (quiantity > 1) setQuiantity(quiantity - 1);
    }

    const handleAdd = () => {
        setQuiantity(quiantity + 1);
    }

    const handleAddToCart = () => {
        const finalPrice = price * quiantity;

        const product = {
            id: Date.now(),
            name, 
            imgPath,
            price,
            finalPrice, 
            quiantity, 
        }

        dispatch({
            type: 'add',
            payload: product
        });

        setQuiantity(1);
        setSuccess(true);

        setTimeout(() => {
            setSuccess(false);
        }, 3000)

    }

    return (
        <div>

            {success && <Success text="Agregado al carrito" /> }
         

            <div className="quiantity">
                <img onClick={handleLess} src="/assets/images/icon-minus.svg" alt="One less" />
                <p>{quiantity}</p>
                <img onClick={handleAdd} src="/assets/images/icon-plus.svg" alt="One more" />
            </div>

            <button onClick={handleAddToCart} className="add-btn">
                <img src="/assets/images/icon-cart-white.svg" alt="" />
                Agregar al carrito
            </button>
        </div>
    )
}

export default AddToCart
