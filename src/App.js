import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext } from './context/UserContext.tsx';
import ThemeProvider from './theme';
import { useState } from "react";
import SnackbarProvider from './components/snackbar';
import { MotionLazyContainer } from './components/animate';
import Page404 from './pages/Page404';
import Prove from './pages/Prove';

function App() {
  const [page, setPage] = useState(null);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  return (
    <BrowserRouter>
      <MotionLazyContainer>
        <ThemeProvider>
          <SnackbarProvider>
            <UserContext.Provider value={{ page, setPage, user, setUser, session, setSession }}>
              <Routes>
                <Route path='/prove' element={<Prove />} />
                <Route path='*' element={<Page404 />} />
              </Routes>
            </UserContext.Provider>
          </SnackbarProvider>
        </ThemeProvider >
      </MotionLazyContainer>
    </BrowserRouter>
  );

}

export default App;
