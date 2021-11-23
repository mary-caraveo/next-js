import { AppProps } from 'next/app';
import CartProvider from '@store/Cart/Cart';
import 'semantic-ui-css/semantic.min.css';
import '../global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp;
