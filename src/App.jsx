import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import Stacks from "./pages/Stacks";
import Account from "./pages/Account";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <NavBar />
      <div className="pb-[80px]"></div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
          <Route path="register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="search/:query" element={<SearchResults />} />
          <Route path="stacks" element={isAuthenticated ? <Stacks /> : <Navigate to="/login" />} />
          <Route path="/account">
            <Route index element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
            <Route path="change" element={isAuthenticated ? <ChangePassword /> : <Navigate to="/login" />} />
          </Route>
          <Route path="/forgot">
            <Route index element={!isAuthenticated ? <ForgotPassword /> : <Navigate to="/" />} />
            <Route path="reset" element={!isAuthenticated ? <ResetPassword /> : <Navigate to="/" />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
export default App;