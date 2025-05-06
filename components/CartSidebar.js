// import { useSelector, useDispatch } from 'react-redux';
// import { toggleCart } from '@/redux/productSlice';

// export default function CartSidebar() {
//   const dispatch = useDispatch();

  
//   const { isCartOpen, cartItems } = useSelector((state) => state.products || {});

//   return (
//     isCartOpen && (
//       <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-bold">Your Cart</h2>
//           <button onClick={() => dispatch(toggleCart())}>❌</button>
//         </div>

//         <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
//           {cartItems?.length === 0 ? (
//             <p>Your cart is empty</p>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.id} className="flex justify-between items-center mb-4">
//                 <div>
//                   <p className="font-medium">{item.title}</p>
//                   <p className="text-sm text-gray-600">${item.price}</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     )
//   );
// }


import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQty,
  decreaseQty,
  removeItem,
  toggleCart
} from '@/redux/cartSlice';

export default function CartSidebar() {
  const dispatch = useDispatch();
  const { cartItems, isCartOpen } = useSelector(state => state.cart);

  if (!isCartOpen) return null;

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4 overflow-auto z-50">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between mb-4 border-b pb-2"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <button
        onClick={() => dispatch(toggleCart())}
        className="mt-4 px-4 py-2 bg-black text-white rounded"
      >
        Close Cart
      </button>
    </div>
  );
}


