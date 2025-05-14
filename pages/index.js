// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '@/redux/productSlice';
// import ProductCard from '@/components/ProductCard';
// import Filter from '@/components/Filter';
// import SearchBar from '@/components/SearchBar';

// export default function Home() {
//   const dispatch = useDispatch();
//   const { filteredProducts, status } = useSelector(state => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">E-Commerce Store</h1>
//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <SearchBar />
//         <Filter />
//       </div>
//       {status === 'succeeded' ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredProducts.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }


 import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts,filterByCategory,searchProduct } from '@/redux/productSlice';
import ProductCard from '@/components/ProductCard';

  export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filteredProducts);
  const [categories, setCategories] = useState(['all']);
  const cartItems = useSelector(state => state.products.cartItems);


  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await res.json();

      console.log('Categories:', data.map(p => p.category));

      dispatch(setProducts(data));
      dispatch(filterByCategory('all'));

      
      const uniqueCategories = [
        'all',
        ...new Set(data.map(p => p.category.name)),
      ];
      setCategories(uniqueCategories);
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="p-4">
      <select
        className="mb-4 p-2 border rounded"
        onChange={e => dispatch(filterByCategory(e.target.value))}
        

      >
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
          
        ))}
      </select>
      <input 
      type="text"
      placeholder="Search Products..."
      className="p-2 boder rounded w-full mb-4"
      onChange={e=>dispatch(searchProduct(e.target.value))}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length===0 &&(
        <p className="text-center text-gray-500 mt-4">No products found</p>
      )}
    </div>
  );
}









