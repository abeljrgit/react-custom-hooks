import { Fragment } from 'react';
import { TestPage } from '@pages';
import { Header, Footer } from '@components';

function App() {
  return (
    <Fragment>
      <Header />
      <TestPage />
      <Footer />
    </Fragment>
  );
}

export default App;
