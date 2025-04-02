import AppRoutes from "./router/Routes";
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';
import { store } from './store'; // Make sure you have this file
import "./styles/App.css";

const App = () => {
  const theme = useSelector(state => state.theme);
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className={`App ${theme}`}>
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;