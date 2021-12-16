import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

type CartSummaryProps = {
  totalAmount: number
  quantityProducts: number
}

const CartSummary = ({ totalAmount, quantityProducts }: CartSummaryProps) => {
  return (
    <Segment clearing size="large" as="section">
      <span
        style={{ display: 'flex', paddingBottom: '25px', fontSize: '16px' }}
      >
        <strong style={{ paddingRight: '25px' }}>Cantidad: </strong>
        {`${quantityProducts}`}
      </span>
      <span>
        <strong style={{ paddingRight: '45px', fontSize: '16px' }}>
          Total:{' '}
        </strong>
        ${`${totalAmount}`}.00
      </span>
      <Button
        style={{ fontSize: '14px', backgroundColor: '#0c7825', color: 'white' }}
        floated="right"
      >
        Pagar
      </Button>

      <style jsx global>
        {`
          .ui.button:hover {
            transform: scale(1.1);
            font-size: 14px;
          }
        `}
      </style>
    </Segment>
  )
}

export default CartSummary
