import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Loader from 'components/Loader/Loader';
import { PrivateRoute } from 'components/PrivateRoute/PrivatRoute';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
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
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <Container>
      <header>
        <Navbar
          style={{
            borderRadius: '5px',
            boxShadow: '0px 2px 5px hsla(0, 0%, 0%, 0.5)',
            borderColor: 'white',
            color: 'white',
            marginBottom: '5px',
          }}
          bg="info"
          data-bs-theme="light"
        >
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            {authentificated ? (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/contacts">
                    Contacts
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Button variant="link" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login">
                    LogIn
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/register">
                    SignUp
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
};

export default App;
