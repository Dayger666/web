import React, {
  FC,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Layout,
  Col,
  Row,
  Pagination,
} from 'antd';

import {
  selectCharactersList,
  selectCharactersCount,
} from 'redux/selectors/characters-selector';
import { fetchCharactersListRequest } from 'redux/reducers/characters';
import CharacterCard from 'components/CharacterCard';
import { scrollTop } from 'utils/helpers';

import { PAGE_SIZE } from './utils/constants';
import styles from './styles.module.scss';

const { Content } = Layout;

const Homepage: FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharactersList);
  const count = useSelector(selectCharactersCount);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPaginationChange = useCallback((page: number) => {
    setCurrentPage(page);
    scrollTop();
  }, []);

  useEffect(() => {
    dispatch(fetchCharactersListRequest({ page: currentPage }));
  }, [currentPage]);

  return (
    <Content>
      <h1 className={styles.title}>
        The Rick and Morty
      </h1>
      <div className={styles.cardContainer}>
        <Row gutter={[24, 24]} justify="center">
          {characters && characters.map((character) => (
            <Col
              xs={24}
              xxl={8}
              xl={12}
              key={character.id}
            >
              <CharacterCard character={character} />
            </Col>
          ))}
        </Row>
      </div>
      <div className={styles.paginator}>
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={count}
          showSizeChanger={false}
          hideOnSinglePage
          showLessItems
          responsive
          onChange={onPaginationChange}
        />
      </div>
    </Content>
  );
};

export default Homepage;
