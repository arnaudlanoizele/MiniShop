import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erreur :", err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛍️ MiniShop - Produits disponibles</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> — {p.price.toFixed(2)} €
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
