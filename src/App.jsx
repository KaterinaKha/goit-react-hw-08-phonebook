import { StyledNavLink } from 'App.styled';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { logOutUserThunk, refreshUserThunk } from 'redux/operations';
import { selectToken, selectAuthentificated } from 'redux/selectors';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">LogIn</StyledNavLink>
              <StyledNavLink to="/register">SignUp</StyledNavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
