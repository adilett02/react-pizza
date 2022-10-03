import React from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import pizzas from '../assets/db.json';

console.log(pizzas);

function Home() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((obj) => (
            <PizzaBlock item={obj} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
