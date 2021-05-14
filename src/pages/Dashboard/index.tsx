import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import logoMarvel from '../../assets/LOGOMARVEL.svg';
import { Title, Background, Form, Heroes } from './styles';

interface Character {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  async function handleRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get<Character>(`characters/${newRepo}?`);

    console.log(response.data);
  }

  return (
    <>
      <Background>
        <Heroes>
          <Title>Search for the hero</Title>
          <Form onSubmit={handleRepository}>
            <input
              value={newRepo}
              onChange={e => setNewRepo(e.target.value)}
              placeholder="Search you hero"
            />
            <button type="submit">
              <img id="imgBtn" alt="Search" />
            </button>
          </Form>
          <img id="marvel" src={logoMarvel} alt="Marvel" />
        </Heroes>
      </Background>
    </>
  );
};

export default Dashboard;
