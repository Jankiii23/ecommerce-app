// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// import '@/styles/globals.css';
// import { Provider } from 'react-redux';
// import { store } from '@/redux/store';

// export default function App({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// pages/_app.js
// import { Provider } from 'react-redux';
// // import { store } from '@/redux/store';
// import { store } from '../redux/store';
// import '@/styles/globals.css';

// export default function App({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }



// pages/_app.js
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import CartSidebar from '@/components/CartSidebar';
import Navbar from '@/components/Navbar'; // optional

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <CartSidebar />
    </Provider>
  );
}

export default MyApp;






