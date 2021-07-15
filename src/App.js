import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { AppProvider } from './context/AppProvider'
import Index from './navigation/index'


const GlobalStyle = createGlobalStyle`

`;

const App = () =>  {


  return (
    <AppProvider>
      <GlobalStyle />
      <Index />
    </AppProvider>
  );
}

export default App;