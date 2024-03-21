import Footer from 'components/Footer';
import Header from 'components/Header';
import { GlobalStyle } from 'constants/globalStyled';
import Banner from 'pages/Banner';
import KeyValue from 'pages/KeyValue';
import styled from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Header />
        <Banner />
        <KeyValue />
        <Footer />
      </Wrap>
    </>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`
