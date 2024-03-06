
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup"
import LandingPage from "./components/landingPage/LandingPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

// function useNavigate() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/signup">Signup</Link>
//           </li>
//         </nav>

//         <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/signup">
//             <Signup />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
