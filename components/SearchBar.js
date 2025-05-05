import { useDispatch } from 'react-redux';
import { searchProducts } from '@/redux/productSlice';

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => dispatch(searchProducts(e.target.value))}
      className="p-2 border rounded w-full"
    />
  );
}
