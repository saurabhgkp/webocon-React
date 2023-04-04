import Userrg from './page/Userrg';
import Userlog from './page/Userlog';
import User from './page/User';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Edit from './page/Edit';
import PrivateRoute from './page/PrivateRoute';
import Navbar from './page/Navbar';

function App() {
  return (
    <div className="App">





      <Navbar />

      <Routes>
        <Route path="/Edit" element={<PrivateRoute Component={Edit} />} />

        <Route path="/Reg" element={<Userrg />} />
        <Route path="/LogIn" element={<Userlog />} />
        <Route path="/" element={<PrivateRoute Component={User} />} />
        {/* <Route path="/Edit" element={<Edit />} /> */}
        {/* <Route path="/User" element={<User />} /> */}
      </Routes>




    </div>



  );
}

export default App;
