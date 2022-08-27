import { Fragment } from 'react';
import { Header, Footer } from '@components';
import { Swapi } from '@pages';
function App() {
  return (
    <Fragment>
      <Header />
      <Swapi />
      <Footer />
    </Fragment>
  );
}

export default App;
