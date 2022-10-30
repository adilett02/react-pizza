import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../redux/slices/CartSlice';

let types = ['тонкое', 'традиционное'];

function PizzaBlock({ item }) {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [sizesIndex, setSizesIndex] = useState(0);
  const [typesIndex, setTypesIndex] = useState(0);

  const dispatch = useDispatch();

  let addPizza = () => {
    setPizzaCount(pizzaCount + 1);
    let newObj = {
      id: item.id,
      imageUrl: item.imageUrl,
      name: item.name,
      price: item.price,
      sizes: item.sizes[sizesIndex],
      types: types[typesIndex],
    };
    dispatch(setCartItems(newObj));
  };

  let onClickSizes = (index) => {
    setSizesIndex(index);
  };
  let onClickTypes = (index) => {
    setTypesIndex(index);
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={item.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{item.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {item.types.map((value, index) => (
            <li
              onClick={() => onClickTypes(index)}
              className={typesIndex === index ? 'active' : ''}
              key={index}>
              {types[value]}
            </li>
          ))}
        </ul>
        <ul>
          {item.sizes.map((value, index) => (
            <li
              onClick={() => onClickSizes(index)}
              className={sizesIndex === index ? 'active' : ''}
              key={index}>
              {value} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {item.price} ₽</div>
        <div onClick={addPizza} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{pizzaCount}</i>
        </div>
      </div>
    </div>
  );
}
export default PizzaBlock;
