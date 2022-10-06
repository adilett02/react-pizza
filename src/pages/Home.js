import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import PizzaBlockSceleton from '../skeleton/PizzaBlockSceleton';

function Home() {
  const [pizzas, setPizzas] = useState(['', '', '', '', '', '', '', '']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://633da41f7e19b178291340df.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((pizza) => {
        setPizzas(pizza);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((obj) =>
            loading ? <PizzaBlockSceleton /> : <PizzaBlock item={obj} key={obj.id} />,
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
