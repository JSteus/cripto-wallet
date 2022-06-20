import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
:root {
  --green: #399349;
  --black: #092A34;
  --gray: #47595F;
  --grey: #748C94;
  --light-grey: #B1BEC2;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #E5E5E5;
  -webkit-font-smooothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, button {
  font-weight: 700;
  font-family: 'Inter', sans-serif;
}

h2 {
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

h3 {
  font-weight: 400;
  font-family: 'Inter', sans-serif;
}

input, p, th, td {
  font-weight: 400;
  font-family: 'Karla', sans-serif;
}

strong {
  font-weight: 700;
}

button {
  cursor: pointer;
  font-size: 15px;
  transition: 0.5s;

  :hover {
    filter: brightness(0.8);
  }
}

`;
