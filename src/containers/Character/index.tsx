import React, {
  FC,
  useEffect,
} from 'react';
import { Descriptions, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCharacterRequest } from 'redux/reducers/character';
import { selectCharacter, selectCharacterIsLoading } from 'redux/selectors/character-selector';

import styles from './styles.module.scss';

const Character: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    name,
    image,
    status,
    species,
  } = useSelector(selectCharacter);
  const isLoading = useSelector(selectCharacterIsLoading);

  useEffect(() => {
    dispatch(fetchCharacterRequest({ id }));
  }, [id]);

  return (
    <div className={styles.container}>
      <Skeleton loading={isLoading} active>
        <img alt={name} src={image} />
        <Descriptions title="Character Info">
          <Descriptions.Item label="Name">
            {name}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {status}
          </Descriptions.Item>
          <Descriptions.Item label="Species">
            {species}
          </Descriptions.Item>
        </Descriptions>
      </Skeleton>
    </div>
  );
};

export default Character;
