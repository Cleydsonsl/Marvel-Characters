/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, FormEvent } from 'react';
import api, { authKey } from '../../services/api';

import logoMarvel from '../../assets/LOGOMARVEL.svg';
import { Title, Background, Form, Heroes, Error } from './styles';

interface ICharacter {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  // useEffect(() => {
  //   async function getCharacters(): Promise<void> {
  //     try {
  //       const response = await api.get(`characters?${authKey}`);

  //       setCharacters(response.data.data.results);
  //       console.log(response.data.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   getCharacters();
  // }, []);

  useEffect(() => {
    localStorage.setItem(
      '@Marvel-Characters:characters',
      JSON.stringify(characters),
    );
  }, [characters]);

  async function handleSeach(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!search) {
      setInputError('Digite o nome de um personagem válido');
      return;
    }

    try {
      const response = await api.get<ICharacter>(`characters?${authKey}`, {
        params: {
          name: search,
        },
      });

      const character = response.data;

      setCharacters([...characters, character]);
      setSearch('');
      setInputError('');
      console.log(response.data);
    } catch (err) {
      setInputError('Digite um nome de um personagem válido');
    }
  }

  return (
    <>
      <Background>
        <Heroes>
          <Title>Search for the hero</Title>
          <Form hasError={!!inputError} onSubmit={handleSeach}>
            <datalist id="marvelsearch">
              <option>Black Panther</option>
              <option>Black Widow</option>
              <option>Captain America</option>
              <option>Doctor Strange</option>
              <option>Drax</option>
              <option>Falcon</option>
              <option>Gamora</option>
              <option>Groot</option>
              <option>Hulk</option>
              <option>Iron Man</option>
              <option>Loki</option>
              <option>Nebula</option>
              <option>Wanda Maximoff</option>
              <option>Spider-man</option>
              <option>Thanos</option>
              <option>Thor</option>
              <option>Vision</option>
            </datalist>
            <input
              id="input"
              type="search"
              list="marvelsearch"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search you hero"
            />
            <button type="submit">
              <img id="imgBtn" />
            </button>
          </Form>
          {inputError && <Error>{inputError}</Error>}
          <img id="marvel" src={logoMarvel} alt="Marvel" />
        </Heroes>
      </Background>
    </>
  );
};

export default Dashboard;
