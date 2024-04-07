import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./Components/Admin/AdminPanel";
import Timeline from "./Components/Admin/Timeline";
import Youtube from "./Components/Admin/Youtube";
import Project from "./Components/Admin/Project";
import Loader from "./Components/Loader/Loader";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    youtubes={user && user.youtube}
                    timelines={user && user.timeline}
                    skills={user && user.skills}
                    
                  />
                }
              />
              <Route path="/about" element={<About 
              about={user && user.about} 
              />} />
              <Route
                path="/projects"
                element={<Projects 
                  projects={user && user.projects} 
                  />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/account"
                element={isAuthenticated ? 
                <AdminPanel /> : <Login />}
              />
              <Route
                path="/admin/timeline"
                element={isAuthenticated ? <Timeline /> : <Login />}
              />
              <Route
                path="/admin/youtube"
                element={isAuthenticated ? <Youtube /> : <Login />}
              />

              <Route
                path="/admin/project"
                element={isAuthenticated ? <Project /> : <Login />}
              />
            </Routes>

            <Footer />
          </>
        )}
      </Router>
    </>
  );
}

export default App;