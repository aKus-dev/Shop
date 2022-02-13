import { Link } from 'react-router-dom';

const Empty = () => {
    return (
        <div className="empty">
            <h1>No hay productos en el carrito</h1>

            <Link className="add-btn max-width" to="/">
                <img src="/assets/images/icon-cart-white.svg" alt="" />
                Ir de compras
            </Link>
        </div>
    )
}

export default Empty
