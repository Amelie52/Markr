import { createContext, Dispatch, useMemo, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';

import logo from '../images/logo.png';
import { State, mainReducer, initialState } from './reducer';
import Create from '../create';
import Edit from '../edit';
import Home from '../home';
import { Action } from './actions';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: .625em;
    font-size: calc(1em * .625);
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.text.FONT_SIZE_MEDIUM};
    font-weight: 400;
    line-height: ${props => props.theme.text.LINE_HEIGHT};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: black;
  }

  button, a {
    cursor: pointer;
    font-size: ${props => props.theme.text.FONT_SIZE_MEDIUM};
    line-height: ${props => props.theme.text.LINE_HEIGHT};
  }

  body, button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const theme: DefaultTheme = {
  colors: {
    PRIMARY_COLOR: "#FD4586",
    SECONDARY_COLOR: "#fe7c65",
    GREY_MEDIUM: "#C4C4C4",
    GREY_DARK: "#AEAEAE",
    GREY_ULTRA_DARK: "#575757",
    GRADIENT: "linear-gradient(to left top, #FD4586, #FF9E8D);",
  },
  text: {
    FONT_SIZE_SMALL: "1.4rem", // 14px
    FONT_SIZE_MEDIUM: "1.6rem", // 16px
    FONT_SIZE_LARGE: "2rem", // 20px
    FONT_SIZE_XLARGE: "2.4rem", // 24px
    FONT_SIZE_XXLARGE: "3.2rem", // 32px
    LINE_HEIGHT: "1.5"
  },
  // breakpoints doesn't take html font-size
  breakpoints: {
    XX_SMALL: "26.25rem", // 420px
    X_SMALL: "36.25rem", // 580px
    SMALL: "46.875rem", // 750px
    MEDIUM: "56.25rem", // 900px
  },
  RADIUS: "0.25rem",
  BOX_SHADOW: "0px 0.125rem 0.8125rem 0.125rem rgba(196, 196, 196, 0.2)"
};

const Header = styled.header`
  padding: 1rem 2rem;
  z-index: 20;
  background-color: #fff;
  position: sticky;
  top: 0;
  box-shadow: ${props => props.theme.BOX_SHADOW};
`
const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.PRIMARY_COLOR};
`

const Logo = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 1rem;
`

const Footer = styled.footer`
  padding: 1rem;
  color: ${props => props.theme.colors.GREY_ULTRA_DARK};
  text-align: center;
`

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const MainContext = createContext({} as ContextProps);

export const App = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const date = new Date();

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <MainContext.Provider value={contextValue as ContextProps}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header role="banner">
          <LogoContainer><Logo src={logo} alt="Markr logo" />Markr</LogoContainer>
        </Header>
        <Main role="main">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/add">
                <Create />
              </Route>
              <Route path="/edit/:bookmarkId">
                <Edit />
              </Route>
            </Switch>
          </Router>
        </Main>
        <Footer>
          {`© ${date.getFullYear()} Markr`}
        </Footer>
      </ThemeProvider>
    </MainContext.Provider>
  );
}

export default App;
