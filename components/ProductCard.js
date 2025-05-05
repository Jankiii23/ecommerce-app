// export default function ProductCard({ product }) {
//     return (
//       <div className="border p-4 rounded shadow-md">
//         <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover" />
//         <h2 className="text-lg font-bold mt-2">{product.title}</h2>
//         <p className="text-sm text-gray-500">{product.category.name}</p>
//         <p className="text-green-700 font-semibold">${product.price}</p>
//       </div>
//     );
//   }
  

// import { useDispatch } from 'react-redux';
// import { addToCart } from '@/redux/cartSlice';

// export default function ProductCard({ product }) {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     console.log('Adding to cart', product);
//     dispatch(addToCart(product));
//   };
//   return (
//     <div className="border p-4 rounded shadow-md">
//       <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover" />
//       <h2 className="text-lg font-bold mt-2">{product.title}</h2>
//       <p className="text-sm text-gray-500">{product.category.name}</p>
//       <p className="text-green-700 font-semibold">${product.price}</p>
//       <button
//         onClick={handleAddToCart}
//          className="bg-blue-500 text-white px-4 py-2 mt-4"
//        >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


import { useDispatch } from 'react-redux';
import { addToCart, toggleCart } from '@/redux/productSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    dispatch(toggleCart()); 
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      <img src={product.images?.[0]} alt={product.title} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-md font-semibold">{product.title}</h2>
      <p className="text-gray-500 text-sm">{product.category.name}</p>
      <p className="font-bold mt-1">${product.price}</p>
      <button
        onClick={handleAdd}
        className="mt-3 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}






