
import {Routes,Route} from 'react-router'
import Home from "./Pages/Home/Home";
import CommonLayOut from "./CommonLayOut";
import Form from "./Pages/From/Form";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayOut/>}>

            <Route index element={<Home/>}/>


      </Route>
      <Route path="/register" element={<Form/>}/>
    </Routes>
    
  );
};

export default App;