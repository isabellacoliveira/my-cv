import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/SideBar/ContainsSideBar';
import AppRoutes from './router';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }; 

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <AppRoutes />
     <Header toggleTheme={toggleTheme}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
