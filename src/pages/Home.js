import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../App';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import PizzaBlockSceleton from '../skeleton/PizzaBlockSceleton';

let sortArr = ['rating&order=desc', 'price', 'name'];

function Home() {
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState(['', '', '', '', '', '', '', '']);
  const [loading, setLoading] = useState(true);

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://633da41f7e19b178291340df.mockapi.io/items?category=${
        categoryIndex === 0 ? '' : categoryIndex
      }&sortBy=${sortArr[sortIndex]}&search=${searchValue}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((pizza) => {
        setPizzas(pizza);
        setLoading(false);
      });
  }, [categoryIndex, sortIndex, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories valueId={categoryIndex} onClickCategory={(i) => setCategoryIndex(i)} />
          <Sort valueId={sortIndex} onClickSort={(i) => setSortIndex(i)} />
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
