import React from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: 'dimgray' }}>${price}.00</Card.Meta>}
      />
    </Link>
))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={3} stackable>
    {mapProductsToCards(products)}

    <style jsx global>{`
      .ui.cards>.card>.image>img {
        border-radius: 20px 20px 0 0;
        height: 150px;
      }

      .ui.card, .ui.cards>.card {
        border-radius: 20px;
      }
    `}
    </style>
  </Card.Group>
)

export default ProductList;
