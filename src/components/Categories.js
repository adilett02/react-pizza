import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/FilterSlice';

function Categories({ valueId }) {
  const categories = useSelector((state) => state.filter.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => dispatch(setCategoryId(index))}
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
