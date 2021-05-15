/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoMarvel from '../../assets/LOGOMARVEL.svg';
import logoHidra from '../../assets/HIDRABRANCA.svg';

import { Repositories, Background, Villain, Img } from './styles';

interface ICharacter {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const List: React.FC = () => {
  // const [characters, setCharacters] = useState<ICharacter[]>([]);

  // useEffect(() => {
  //   localStorage.getItem('@Marvel-Characters:characters');
  // }, [setCharacters]);

  const [characters, setCharacters] = useState<ICharacter[]>(() => {
    const storagedCharacters = localStorage.getItem(
      '@Marvel-Characters:characters',
    );

    if (storagedCharacters) {
      return JSON.parse(storagedCharacters);
    }
    return [];
  });
  console.log(characters);
  // const [characters, setCharacters] = useState<ICharacter[]>([]);

  // useEffect(() => {
  //   api
  //     .get('/characters')
  //     .then(res => {
  //       setCharacters(res.data.data.results);
  //       console.log(res.data.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <>
      <Background>
        <Villain>
          <img id="hidra" src={logoHidra} alt="Hidra" />
          <Repositories>
            {characters.map(character => (
              <a key={character.id} href="teste">
                <Img thumbnail={character.thumbnail} />
                <div>
                  <strong>{character.name}</strong>
                  <p>{character.description}</p>
                </div>
                <FiChevronRight size={20} />
              </a>
            ))}
          </Repositories>
          <img id="marvel" src={logoMarvel} alt="Marvel" />
        </Villain>
      </Background>
    </>
  );
};

export default List;
