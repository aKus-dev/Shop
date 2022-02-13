import { Link } from 'react-router-dom';

const Product = ({ id, imgPath, name, price }) => {

    return (
        <Link to={`/product/${id}`}>
            <div className="product">
                <div className="prodcut__img-container">
                    <img 
                        className="product__img" 
                        src={imgPath} 
                        alt={name} 
                    />
                </div>

                <div className="product__data">
                    <p className="product__name">{name}</p>
                    <p className="product__price">${price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Product
