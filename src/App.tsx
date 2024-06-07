
import "./assets/css/App.css";
import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import CategoryItem from "./components/CategoryNav/CategoryItem";
import CategoryPage from "./pages/User/CategoryPage";




function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Admin" element={<AdminHomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SingupPage />} />
          <Route path="/category/:id" element={<CategoryPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
