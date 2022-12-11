import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ICharacter } from 'interfaces/character-interface';
import { ROUTES } from 'utils/routes';

import styles from './styles.module.scss';

interface ICharacterCard {
  character: ICharacter;
}

const CharacterCard: FC<ICharacterCard> = ({ character }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    image,
    status,
    species,
    location: {
      name: locationName,
    },
  } = character;

  return (
    <Link to={ROUTES.CHARACTER.getRoute(id).path}>
      <div className={styles.card}>
        <img src={image} alt={name} />
        <div className={styles.description}>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>
              {name}
            </h2>
            <div className={styles.info}>
              <span>
                {status}
              </span>
              -
              <span>
                {species}
              </span>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.label}>
              Last known location:
            </div>
            {locationName}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
