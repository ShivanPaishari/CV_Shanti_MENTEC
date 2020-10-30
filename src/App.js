import React,{useState} from "react";
import GridLayout from "./layout/GridLayout";
import {ThemeProvider} from "styled-components";
//import css
import "./style/app.css";
import "./style/reset.css";
import indiaIn from "./Themes/indiaIn";
import indiaOut from "./Themes/indiaOut";
import {GlobalStyles} from "./components/GlobalStyles";


function App() {
  const [theme,setTheme]=useState('indiaIn');

  function handleOnClickToogle (){  
    theme==='indiaIn' ? setTheme('indiaOut'): setTheme('indianIn')
  }
  console.log ('theme', theme)
  

  return (
    <ThemeProvider theme={theme==='indiaIn' ? indiaIn : indiaOut}>
        <GlobalStyles/>
          <div className="App">
            <GridLayout handleOnClickToogle={handleOnClickToogle}/>
          </div>
    </ThemeProvider>
  );
}

export default App;
