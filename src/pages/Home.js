import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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

  const categoryIndex = useSelector((state) => state.filter.categoryIndex);
  const sortIndex = useSelector((state) => state.filter.sortIndex);

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
          <Categories valueId={categoryIndex} />
          <Sort valueId={sortIndex} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((obj, index) =>
            loading ? <PizzaBlockSceleton key={index} /> : <PizzaBlock item={obj} key={obj.id} />,
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
