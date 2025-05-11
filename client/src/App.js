import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // État pour savoir si les produits sont en train de se charger
  const [error, setError] = useState(null);     // État pour capturer les erreurs de la requête

  useEffect(() => {
    // Requête pour récupérer les produits
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);  // Stocke les produits récupérés dans l'état
        setLoading(false);   // Fin du chargement
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setError("Erreur lors de la récupération des produits.");
        setLoading(false);   // Fin du chargement même en cas d'erreur
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛍️ MiniShop - Produits disponibles</h1>

      {/* Affichage du message de chargement */}
      {loading && <p>Chargement des produits...</p>}

      {/* Affichage d'un message d'erreur si il y en a une */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Affichage de la liste des produits */}
      {!loading && !error && (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> — {p.price.toFixed(2)} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
