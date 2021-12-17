import { BrowserRouter, Route} from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {


  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/new" component={Room} />
    </AuthContextProvider>
  </BrowserRouter>
  );
}

export default App;
