import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      window
        .fetch('/api/avo/${id}')
        .then(response => response.json())
        .then(data => setProduct(data))
    }
  }, [id]);

  return (
    <section>
      <h1>Page product: {product?.name}</h1>;
    </section>
  );
}

export default ProductPage;
