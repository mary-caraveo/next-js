import React from 'react';
import { Divider } from 'semantic-ui-react';
import Layout from '@components/Layout/Layout';
import CartItemList from '@components/CartItemList/CartItemList';
import CartSummary from '@components/CartSummary/CartSummary';
import { useCart, useCartMutations } from '@store/Cart/Cart';

const CartPage = () => {
  const { items, count, subTotal } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <Layout>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <Divider />
      <CartSummary quantityProducts={count} totalAmount={subTotal} />

      <style jsx global>{`
        .ui.items>.item>.image>img {
          border-radius: 20px;
        }

        .ui.image {
          border-radius: 20px;
          height: 90px;
        }
      `}
      </style>
    </Layout>
  )
}

export default CartPage;