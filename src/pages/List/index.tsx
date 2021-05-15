import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoMarvel from '../../assets/LOGOMARVEL.svg';
import logoHidra from '../../assets/HIDRABRANCA.svg';

import { Repositories, Background, Villain } from './styles';

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
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    api
      .get('/characters')
      .then(res => {
        setCharacters(res.data.data.results);
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Background>
        <Villain>
          <img id="hidra" src={logoHidra} alt="Hidra" />
          <Repositories>
            <a href="teste">
              <img
                src="https://avatars.githubusercontent.com/u/55638843?v=4"
                alt="cleydsonsl"
              />
              <div>
                <strong>Cleydson Souza</strong>
                <p>Descrição</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          </Repositories>
          <img id="marvel" src={logoMarvel} alt="Marvel" />
        </Villain>
      </Background>
    </>
  );
};

export default List;
