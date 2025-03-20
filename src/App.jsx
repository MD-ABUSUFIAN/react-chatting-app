import { Route, Routes } from 'react-router';
import CommonLayOut from './CommonLayOut';
import LoginForm from './Pages/From/LoginForm/LoginForm';
import Form from './Pages/From/RegistrationForm/RegistrationForm';
import Home from './Pages/Home/Home';
import Message from './Pages/Message/Message';
import Notification from './Pages/Notification/Notification';
import Settings from './Pages/Settings/Settings';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayOut />}>
        <Route index element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/register" element={<Form />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default App;
