import s from './styles.module.css';

import Header from '../../components/Header/index';
import Layout from '../../components/Layout/index';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.jpg';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemonsData, getPokemonsAsync } from '../../store/pokemons';
const HomePage = ({ onRedirect }) => {
  const color = '#F79C1E';
  const handleRedirect = (path) => {
    onRedirect && onRedirect(path);
  };
  const [, setPokemons] = useState({});

  const dispatch = useDispatch();
  const pokemonsRedux = useSelector(selectPokemonsData);

  useEffect(() => {
    dispatch(getPokemonsAsync());
  }, []);

  useEffect(() => {
    setPokemons(pokemonsRedux);
  }, [pokemonsRedux]);

  // const handleFlipEvent = (id) => {
  //   setPokemons((prevState) => {
  //     return Object.entries(prevState).reduce((acc, item) => {
  //       const pokemon = { ...item[1] }
  //       if (pokemon.id === id) {
  //         pokemon.isActive = true
  //       }

  //       acc[item[0]] = pokemon

  //       return acc
  //     }, {})
  //   })
  // }

  return (
    <div className="App">
      <Header
        title="Zar Marathon"
        descr="Yevhenii Bakhmat's Homework"
        onRedirect={handleRedirect}
      />
      <Layout title="Layout1 title" urlBg={img1}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
      </Layout>
      <Layout title="Cards" colorBg={color}>
        <div className={s.section}>
          {/* {Object.entries(pokemons).map(([key, item]) => (
            <PokemonCard
              key={key}
              firebasekey={key}
              id={item.id}
              name={item.name}
              img={item.img}
              stats={item.stats}
              type={item.type}
              values={item.values}
              isActive={true}
              isSelected={item.isSelected}
              className={s.pokemonCard}
            />
          ))} */}
        </div>
      </Layout>
      <Layout title="Layout3 title" urlBg={img2}>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.{' '}
        </p>
      </Layout>
    </div>
  );
};

export default HomePage;
