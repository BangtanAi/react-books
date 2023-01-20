import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItemById } from "./../redux/slices/cartSlice";

function BookItem({ id, imagePath, types, name, author, price }) {
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      name,
      imagePath,
      price,
      types,
      author,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="book-item">
      <img src={imagePath} alt={name} className="book-item__img" />
      <span className="book-item__type">{types}</span>
      <p className="book-item__title">{name}</p>
      <p className="book-item__author">{author}</p>
      <div className="book-item__price">
        {price} тг
        {addedCount > 0 ? (
          <button className="book-item__btn red-btn">
            Книга добавлена в корзину
          </button>
        ) : (
          <button onClick={onClickAdd} className="book-item__btn">
            В корзину
          </button>
        )}
      </div>
    </div>
  );
}

export default BookItem;
