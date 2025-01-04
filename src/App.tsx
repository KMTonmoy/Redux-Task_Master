// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from './redux/features/counterSlice';
// import { Button } from './components/ui/button';

// const App = () => {
//   const dispatch = useDispatch();
//   const handelIncrement = () => {
//     dispatch(increment());
//   };
//   const handelDecrement = () => {
//     dispatch(decrement());
//   };

//   const { count } = useSelector(
//     (state) => state.counter
//   );

//   return (
//     <div >
//       <h1>Counter With Redux</h1>
//       <div className='flex justify-center items-center gap-5 '>
//         <Button onClick={handelIncrement}>Increment</Button>
//         <div>{count}</div>
//         <Button onClick={handelDecrement}>Decrement</Button>
//       </div>

//     </div>
//   );
// };

// export default App;
// Old Some Working Code 


import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;