import React,{useState} from "react";
import GridLayout from "./layout/GridLayout";
// import styled,{ThemeProvider} from "styled-components";
//import css
import "./style/app.css";
import "./style/reset.css";


function App() {
  const [theme,setTheme]=useState('indiaIn');

  function handleOnClickToogle (){  
    theme==='indiaIn' ? setTheme('indiaOut'): setTheme('indianIn');
  }
  console.log ('theme', theme)




  return (
    // <ThemeProvider theme={theme==='indiaIn' ? "" : ""}>
  
          <div>
            <GridLayout handleOnClickToogle={handleOnClickToogle}/>
          </div>
  
    // </ThemeProvider>
  );
}

export default App;
