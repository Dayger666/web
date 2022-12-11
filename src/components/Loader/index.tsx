import React, { FC, useEffect } from 'react';
import { Spin } from 'antd';
import {
  configure,
  start,
  done,
} from 'nprogress';
import 'nprogress/nprogress.css';

import styles from './styles.module.scss';

configure({ showSpinner: false });

const Loader: FC = () => {
  useEffect(() => {
    start();

    return () => {
      done();
    };
  }, []);

  return (
    <div className={styles.loaderPage}>
      <Spin />
    </div>
  );
};

export default Loader;
