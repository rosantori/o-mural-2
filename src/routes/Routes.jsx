import {
  BrowserRouter,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import { Home, Login } from 'pages';

function Routes() {
  // const islogged = false;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" element={<Home/>} />
        <Route path="login" element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
}

export { Routes };
