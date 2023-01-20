import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const { totalCount, totalPrice } = useSelector((state) => state.cart);
  if (totalCount > 0) {
    return (
      <div className="cart">
        <div className="cart-title">Корзина</div>
        <div className="cart-block">
          {items.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>
        <div className="cart-price__common">
          Общее количество: {totalCount}шт
          <br />
          Общая сумма: {totalPrice}тг
        </div>
      </div>
    );
  } else
    return (
      <div className="cart">
        <div className="cart-title">
          В вашей корзине нет товаров, <br />
          можете добавить книги, <br />
          перейдя на 
          <Link className="home-title" to="/"> главную страницу</Link>
        </div>
      </div>
    );
}

export default Cart;
