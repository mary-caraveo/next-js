import { AppProps, NextWebVitalsMetric } from 'next/app';
import CartProvider from '@store/Cart/Cart';
import 'semantic-ui-css/semantic.min.css';
import '../global.css';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

  const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    )
  }

  export default MyApp;
