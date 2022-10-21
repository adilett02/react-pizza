import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './scss/app.scss';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<h1>Ничего не найдено</h1>} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './redux/slices/CounterSlice';

// import { counterSlice } from './redux/slices/CounterSlice';

// export function Counter() {
//   const count = useSelector((state) => state.counter.value);
//   const filter = useSelector((state) => state.filter.categories);
//   // console.log(count);
//   // console.log(filter);
//   // console.log(increment);
//   const dispatch = useDispatch();

//   console.log(counterSlice);

//   return (
//     <div>
//       <div>
//         <button aria-label="Increment value" onClick={() => dispatch(increment(18))}>
//           Increment
//         </button>
//         <span>{count}</span>
//         <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Counter;
