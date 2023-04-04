import Userrg from './page/Userrg';
import Userlog from './page/Userlog';
import User from './page/User';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Edit from './page/Edit';

function App() {
  return (
    <div className="App">







      <Routes>
        <Route path="/" element={<Userrg />} />
        <Route path="/UserLogIn" element={<Userlog />} />
        <Route path="/User" element={<User />} />
        <Route path="/Edit" element={<Edit />} />
        {/* <Route path="/User" element={<User />} /> */}
      </Routes>




    </div>



  );
}

export default App;
