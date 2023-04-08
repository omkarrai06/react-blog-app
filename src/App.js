import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TopBar from './topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/home/single/Single';
import Write from './pages/home/write/Write';
import Setting from './pages/home/settings/Setting';
import Login from './pages/login/Login';
import Register from './pages/resgister/Register';
import {Routes, Route} from "react-router-dom"
import Post from './post/Post';
import SinglePst from './singlePst/SinglePst';
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
      <>
      <TopBar />
      
      <Routes>
        <Route path = "/" element={<Home/>} ></Route>

        <Route path = "login" element={<Login/>} > </Route>

        <Route path = "register" element={<Register/>} ></Route>

        <Route path = "write" element={<Write/>} ></Route>

        <Route path = "setting" element={<Setting/>} ></Route>

        <Route path = "post" element={<Post/>} ></Route>

        <Route path = "singlepst" element={<SinglePst/>} ></Route>

        

        
      </Routes>
      </>
      
  );
}


export default App;
