import React, { FC } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Row } from 'antd';

import styles from './styles.module.scss';

interface IProfileButton {
  email: string,
  image?: string,
}

const ProfileButton: FC<IProfileButton> = ({ email, image }) => (
  <Row className={styles.profileButton} >
    <span className={styles.profileButtonEmail}>{email}</span>
    <div className={styles.profileButtonImage}>
      {image ? <img src={image} /> : <UserOutlined />}
    </div>
  </Row>
);

export default ProfileButton;
