import React, { useState } from 'react';

let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Categories() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  let onClickCategory = (index) => {
    setCategoryIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={index === categoryIndex ? 'active' : ''}
            key={`${index}_${value}`}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
