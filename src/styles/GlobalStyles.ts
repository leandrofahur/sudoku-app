import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000000;
    --white: #F3F3F3;

    --blue: #0389ff;
    --dark-blue: #000099;
    
    --gray: #4D4F53;    
    --dark-gray: #2F3336;    

    --red: #ED1004;
    --dark-red: #CC3333;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }
  html, body, #root {  
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;    
    background: var(--black);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu, sans serif;
  }  
`;
