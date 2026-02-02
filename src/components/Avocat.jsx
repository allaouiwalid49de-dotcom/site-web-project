import React, { useState } from 'react';
import "../styles/Avocat.css";
import { FaSearch, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Avocat() {
  const [baht, setbaht] = useState("");

  const avocats = [
    { 
      id: 1, 
      photo: "https://i.pravatar.cc/150?img=1", 
      nom: "Hamza YECHAOUI", 
      email: "hamzayechoui@gmail.com", 
      tel: "0612345678" 
    },
    { 
      id: 2, 
      photo: "https://i.pravatar.cc/150?img=2", 
      nom: "Ihssane MAATOUG", 
      email: "ihssanemaatoug@gmail.com", 
      tel: "0623456789" 
    },
    { 
      id: 3, 
      photo: "https://i.pravatar.cc/150?img=3", 
      nom: "Ibtissam FAKIR", 
      email: "Ibtissamfakir@gmail.com", 
      tel: "0634567890" },
    { 
      id: 4, 
      photo: "https://i.pravatar.cc/150?img=4", 
      nom: "Zakariae MAHOU", 
      email: "zakimahou@gmail.com", 
      tel: "0645678901" 
    },
    { 
      id: 5, 
      photo: "https://i.pravatar.cc/150?img=5", 
      nom: "khaoula BERHIL", 
      email: "khaoulaberhil@gmail.com", 
      tel: "0656789012" 
    },
    { 
      id: 6, 
      photo: "https://i.pravatar.cc/150?img=6", 
      nom: "Mahmoud ABBES", 
      email: "mahmoudabbes@gmail.com", 
      tel: "0667890123" 
    },
    { 
      id: 7, 
      photo: "https://i.pravatar.cc/150?img=7", 
      nom: "Dounia ZERIOH", 
      email: "douniazrioh@gmail.com", 
      tel: "0678901234" 
    },
    { 
      id: 8, 
      photo: "https://i.pravatar.cc/150?img=8", 
      nom: "Chaimae ZERGOUG", 
      email: "chaimaezergoug@gmail.com", 
      tel: "0689012345" },
    { 
      id: 9, 
      photo: "https://i.pravatar.cc/150?img=9", 
      nom: "Hamza ALALAMI", 
      email: "hamzaalalami@gmail.com", 
      tel: "0690123456" 
    },
    { 
      id: 10, 
      photo: "https://i.pravatar.cc/150?img=10", 
      nom: "Meriem ABBADI", 
      email: "meriemabbadi@gmail.com", 
      tel: "0601234567" 
    }
  ];

  const filtred = avocats.filter(a =>
    a.nom.toLowerCase().includes(baht.toLowerCase())
  );
 
  return (
    <div style={{ margin: "50px" }} className='in'>
      <input
      className='inn'
        type="text"
        placeholder="Avocat"
        value={baht}
        onChange={(e) => setbaht(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
        /><FaSearch />

      {filtred.map(m => (
        <div className="moh" key={m.id} style={{ marginBottom: "20px" }}>
          <img src={m.photo} alt={m.nom} style={{ width: "100px", borderRadius: "50%" }} />
          <div className='mmp'>
            <h3>{m.nom}</h3>
          <p><FaEnvelope/> : {m.email}</p>
          <p><FaPhone/> :  {m.tel}</p>
          </div>
          <button className="cn" onClick={() => window.location = `mailto:${m.email}`}>Contact</button>
        </div>
      ))}
    </div>
  );
}
