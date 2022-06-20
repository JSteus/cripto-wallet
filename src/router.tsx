import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { Welcome } from './pages/welcome';
import { LogIn } from './pages/logIn';
import { SignIn } from './pages/signIn';
import { Home } from './pages/home';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';

const PrivateOutlet = () => {
  const isSigned = useSelector((state: RootState) => state.auth.signed);
  return isSigned ? <Outlet /> : <Navigate replace to="/" />;
};

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<PrivateOutlet />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
