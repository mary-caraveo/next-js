import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(response => response.json()
      .then(({ data, length }) => {
          setProductList(data)
        }));
  }, []);

  return (
    <div>
      <h1>Next JS</h1>
      {productList.map((product, key) => (
        <div key={key}>
        <div>{product.name}</div>
      </div>
      ))}
    </div>
  );
};

export default HomePage;
