import { createGlobalStyle } from 'styled-components';

// get this working
/* eslint no-unused-expressions: 0 */
export default () => createGlobalStyle`

  html {
    scroll-behavior: smooth;
     /* //IE Styles */
      _:-ms-lang(x),
      .datepicker-width {
        width: 300px;
      }

      _:-ms-fullscreen,
      :root .datepicker-width {
        width: 300px;
      }
  }

  html,
  body {
    height: 100%;
    width: 100%;


    /* Adjust font size */
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    /* Font varient */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  body.fontLoaded {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  .conden {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
  }

  #__next {
    background-color: #FFFFFF;
    min-height: 100%;
    min-width: 100%; 
  }

  p,
  label {
    line-height: 1.5em;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  .ease-all-transitions {
    transition: all ease .25s;
    * {
      transition: all ease .25s;
    }
  }

  textarea,
  input,
  button { outline: none; }
  
 
  textarea,input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-transition-delay: 9999s !important;
        -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
    }
  }
`;
