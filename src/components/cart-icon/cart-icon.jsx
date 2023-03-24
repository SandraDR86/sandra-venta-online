import { useContext, useEffect, useState } from "react";
import { ReactComponent as LogoCart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart-context";
import "./cart-icon.css"

const CartIcon = ({ onClickIcon }) => {
    const [cantidadArticle, setCantidadArticle] = useState(0)
    const { currentCart } = useContext(CartContext)


    useEffect(() => {
        let temporalQuantity = 0
        currentCart.forEach(element => { //esto es para que se actualice el carrito con el numero de articulos k tenemos en la cesta
            temporalQuantity = temporalQuantity + element.quantity
            //console.log(element.quantity); 
        })
        setCantidadArticle(temporalQuantity)
    }, [currentCart]) //si esta vacio se ejecuta solo una vez


// console.log(currentCart);







    return (
    <div onClick={onClickIcon} className="cart-icon-container" >
        <LogoCart className="shopping-icon" />
        <span className="item-count"> {cantidadArticle} </span>
    </div>
)
}
export default CartIcon;