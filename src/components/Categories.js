import React from 'react';

let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Categories({ valueId, onClickCategory }) {
  // let onClickCategory = (index) => {
  //   setCategoryIndex(index);
  // };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={index === valueId ? 'active' : ''}
            key={`${index}_${value}`}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
