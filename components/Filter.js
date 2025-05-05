import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '@/redux/productSlice';
import { ReducerType } from '@reduxjs/toolkit';

export default function Filter() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.products.categories);

  return(
    <select onChange={(e)=>dispatch(filterByCategory(e.target.value))} className="p-2 border rounded">
      {categories.map(cat=>(
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}

