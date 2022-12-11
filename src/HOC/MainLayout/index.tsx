import React, { FC } from 'react';
import { Layout } from 'antd';

import styles from './styles.module.scss';

const { Content } = Layout;

interface IMainLayout {
  children: React.ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => (
  <Layout className={styles.layout}>
    <Content className={styles.contentContainer}>
      {children}
    </Content>
  </Layout>
);

export default MainLayout;
