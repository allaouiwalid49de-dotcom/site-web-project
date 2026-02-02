import React from 'react'

import '../styles/Home.css'

export default function Home() {
    const salam = [
        {

            id:1 ,
            title: "العربية",
            text: "هذا الموقع يسهّل إدارة الملفات القانونية وتنظيمها، ويساعد على تتبع القضايا والعملاء والمحامين بطريقة واضحة، مما يوفر الوقت ويزيد من فعالية العمل."
        },
        {
            id:2 ,
            title: "Français",
            text: "Ce site web permet de gérer les dossiers juridiques de manière claire et efficace. Il facilite le suivi des clients, des avocats et des sociétés, tout en améliorant l’organisation et la productivité."
        },
        {
            id:3 ,
            title: "English",
            text: "This website helps manage legal cases in a simple and organized way. It allows users to track clients, lawyers, and companies efficiently, saving time and improving workflow."
        },
        {
            id:4 ,
            title: "ⴰⵣⵓⵍ ⴼⵍⵍⴰⵡⵏ",
            text: "ⴰⵙⵎⵍⴻⵍⴰ ⵡⴻⴱ ⴰⴷ ⵢⴻⵙⵙⵉⴼⵙⴻⵙ ⵜⴰⵏⵥⵉⵎⵜ ⵏ ⵢⵉⴼⵓⵢⵍⴰ ⵏ ⵓⵃⴽⴻⵎ. ⴰⴷ ⵢⴻⵙⵙⵀⴻⵍ ⴰⴹⴼⴰⵔ ⵏ ⵢⵉⵎⵙⴰⵖⴻⵏ، ⵉⵎⵃⴰⴽⵎⴻⵏ ⴷ ⵜⵉⴽⴽⴰⵍ، ⴰⴽⴽⴻⵏ ⴰⴷ ⵢⴻⵜⵜⵡⴰⵙⴻⴼⵔⵓ ⵡⴰⴽⵓⴷ ⵓⴷⵉⵖ ⴰⴷ ⵢⵉⵍⵉ ⵓⵅⴻⴷⴷⵉⵎ ⵓⵎⴻⵣⵡⴰⵔⵓ."
        },
        
    ];
   const Tahiyat = salam.map((e) => {
  return (
    <div key={e.id} className={`D1 a${e.id}`}>
      <h1 className='hhh'>{e.title}</h1>
      <hr className='hrA'/>
      <p className='pp'>{e.text}</p>
    </div>
  )
})

  return (
    <div className='dd' >
        {Tahiyat}
    </div>
  )
}
