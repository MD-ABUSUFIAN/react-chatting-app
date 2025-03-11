import Form from "./Pages/From";
import {Routes,Route} from 'react-router'
import Home from "./Pages/Home/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
    </Routes>
    
  );
};

export default App;