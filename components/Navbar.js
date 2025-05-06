
import { useDispatch } from 'react-redux';
// import { toggleCart } from '@/redux/productSlice';
import { toggleCart } from '@/redux/cartSlice'; 

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="p-4 shadow-md bg-white flex justify-between items-center">
      <h1 className="font-bold text-xl">My Store</h1>
      <button
        onClick={() => dispatch(toggleCart())}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        🛒 Cart
      </button>
    </nav>
  );
}
