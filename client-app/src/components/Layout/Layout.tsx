import Header from 'components/Header/Header';
import React from 'react';

const Layout: any = (props: any) => {
  const { children, setQueryName } = props;
  return (
    <>
      <Header setQueryName={setQueryName} />
      {children}
    </>
  );
};
export default Layout;
