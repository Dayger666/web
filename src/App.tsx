import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { EnhancedStore } from '@reduxjs/toolkit';
import { configure } from 'nprogress';

import Root from 'containers/Root';
import RoutesLayout from 'containers/Routes';

import 'styles/index.scss';

configure({ showSpinner: false });

interface IApp {
  store: EnhancedStore
}

const App: FC<IApp> = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Root>
        <RoutesLayout />
      </Root>
    </BrowserRouter>
  </Provider>
);

export default App;
