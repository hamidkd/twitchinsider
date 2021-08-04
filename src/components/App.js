import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import ChannelsCollection from "./ChannelsCollection";
import ChannelPage from "./ChannelPage";
import GlobalStyles, { themeVars } from "./GlobalStyles";
import Styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Div>
        <Header />
        <Main>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/channels">
              <ChannelsCollection />
            </Route>
            <Route exact path="/channel">
              <ChannelPage />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Div>
    </BrowserRouter>
  );
}

export default App;

const Div = Styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: stretch;
`;

const Main = Styled.main`
flex: 1;
border-radius: 1rem;
display: flex;
flex-direction: column;

h2 {
  margin-bottom: 1rem;
}

section {
  padding: 1rem;
}
`;
