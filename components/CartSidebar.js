import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/productSlice';

export default function CartSidebar() {
  const dispatch = useDispatch();

  
  const { isCartOpen, cartItems } = useSelector((state) => state.products || {});

  return (
    isCartOpen && (
      <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => dispatch(toggleCart())}>❌</button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          {cartItems?.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    )
  );
}


