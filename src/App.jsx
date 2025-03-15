
import {Routes,Route} from 'react-router'
import Home from "./Pages/Home/Home";
import CommonLayOut from "./CommonLayOut";
import Form from "./Pages/From/Form";
import Message from './Pages/Message/Message'
import Notification from './Pages/Notification/Notification'
import Settings from'./Pages/Settings/Settings'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayOut/>}>

            <Route index element={<Home/>}/>
            <Route path="/message" element={<Message/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/settings" element={<Settings/>}/>
            


      </Route>
      <Route path="/register" element={<Form/>}/>
    </Routes>
    
  );
};

export default App;