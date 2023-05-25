'use client'
import React from 'react';
import Brands from '../../components/Brands/Brands'
import Cards from '../../components/Cards/Cards'
// import autoApi from '../../src/utils/AutoApi';



export default function Home() {
  const [cards, setCards] = React.useState([]);
  // const [card, setCard] = React.useState();

  function getCars() {

    return fetch(`${'https://maximum.expert/api/stock-test?brand='}`, {
      mode: 'no-cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // .then(this.#onResponse)
      .then((res) => {
        return res;
      });

  }

  function handleBrandChoose(brand) {
    // autoApi
    //   .getInitial()
    //   .then((cards) => {
    //     setCards(cards);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err);
    //   });
    // console.log(brand.target.textContent);
    // console.log(cards.length);


    // return fetch(`${'https://maximum.expert/api/stock-test?brand=Chery'}`, {
    //   mode: 'no-cors',
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // })
    //   // .then(this.#onResponse)
    //   .then((cards) => {
    //     setCards(cards);
    //   })
    //   .then((res) => {
    //     console.log(brand.target.textContent);
    //     console.log(cards.length);
    //     console.log(res);
    //     return res;
    //   });


    console.log(brand.target.textContent);
    // console.log(cards);
    return fetch(`${'https://maximum.expert/api/stock-test?brand=' + brand.target.textContent}`)
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then(function (data) {
            console.log(data.list);
            // if (data.list._id.includes("Tiggo 8 Pro Max")) {
            //   console.log(1);
            // }
            data.list.map(function (el) {
              if (el._id == '646b3f9de0c00d7862e54d89') {
                console.log(el);
              }
            }
            )

            setCards(data.list);
            // console.log(cards);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }
  return (
    <main>
      <section className="goods">
        <h2 className="goods__title">Автомобили Chery в СПб</h2>
        <div className="content">

          <Brands handleBrandChoose={handleBrandChoose} />

          <Cards cards={cards} />

        </div>
      </section>

    </main>


  )
}
