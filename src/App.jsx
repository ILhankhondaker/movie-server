import { useState, useReducer } from "react";
import { MovieContext, ThemeContext } from "./context"
import Page from "./Components/Page/Page";
import { cartReducer, initialState } from "./reducers/cartReducer";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          {/* <ToastContainer /> */}
          <ToastContainer
            autoClose={1500}
          >

          </ToastContainer>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App
