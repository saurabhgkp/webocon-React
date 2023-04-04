import Userrg from './page/Userrg';
import Userlog from './page/Userlog';
import User from './page/User';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">registration</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><Link to="/">sign-up</Link></li>
            <li><Link to="/UserLogIn">LogIn</Link></li>

          </ul>
        </div>
      </nav>






      <Routes>
        <Route path="/" element={<Userrg />} />
        <Route path="/UserLogIn" element={<Userlog />} />
        <Route path="/User" element={<User />} />
      </Routes>




    </div>



  );
}

export default App;
