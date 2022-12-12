import React from 'react';
import {
  Button, Layout, Menu, 
} from 'antd';
import Icon from '@ant-design/icons';

import logo from 'images/logo.svg';

const { Header: HeaderLayout } = Layout;

const Header = () => (
  <HeaderLayout>
    <Icon component={logo}/>

  </HeaderLayout>
);

export default Header;
