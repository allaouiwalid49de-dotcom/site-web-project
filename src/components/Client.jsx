import React, { useState } from "react";
import "../styles/Client.css";

export default function Client() {

  const [search, setSearch] = useState("");
  const [clients, setClients] = useState([]);

  const [client, setClient] = useState({
    nom: "",
    avocat: "",
    affaire: ""
  });

  const getTodayDate = () => {
    const today = new Date();
    return today.toLocaleDateString("fr-FR");
  };

  const clientsFiltres = clients.filter(c =>
    c.nom.toLowerCase().includes(search.toLowerCase())
  );

  const ajouterClient = (e) => {
    e.preventDefault();

    if (!client.nom || !client.avocat || !client.affaire) return;

    setClients([
      ...clients,
      {
        id: Date.now(),
        ...client,
        date: getTodayDate()
      }
    ]);

    setClient({
      nom: "",
      avocat: "",
      affaire: ""
    });
  };

  return (
    <div className="container">

      <input
        type="text"
        placeholder="Rechercher par nom"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form onSubmit={ajouterClient}>

        <input
          type="text"
          placeholder="Nom du client"
          value={client.nom}
          onChange={(e) => setClient({ ...client, nom: e.target.value })}
        />

        <input
          type="text"
          placeholder="Nom de l'avocat"
          value={client.avocat}
          onChange={(e) => setClient({ ...client, avocat: e.target.value })}
        />

        <input
          type="text"
          placeholder="Affaire"
          value={client.affaire}
          onChange={(e) => setClient({ ...client, affaire: e.target.value })}
        />

        <button type="submit">Ajouter</button>
      </form>

      {clientsFiltres.map(c => (
        <div key={c.id}>
          <p>Client : {c.nom}</p>
          <p>Date : {c.date}</p>
          <p>Avocat : {c.avocat}</p>
          <p>Affaire : {c.affaire}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}
