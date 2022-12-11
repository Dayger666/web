import React, { FC, ReactNode } from 'react';

import MainLayout from 'HOC/MainLayout';

interface IRoot {
  children: ReactNode
}

const Root: FC<IRoot> = ({ children }) => (
  <MainLayout>
    {children}
  </MainLayout>
);

export default Root;
