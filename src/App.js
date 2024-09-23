import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';
import UnknownPage from './pages/UnknownPage';
import AddPost from './pages/AddPost';
import PostView from './pages/PostView';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Logout from './pages/Logout';

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: false
  });

  function unsetUser() {
    localStorage.clear();
    setUser({
      id: null,
      isAdmin: false
    });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token:", token);

    fetch(`https://blogapi-santos.onrender.com/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log("API Response:", data); // Log the whole response
      if (data.user) {
        setUser({
          id: data.user._id, // Ensure you're accessing the correct property
          isAdmin: data.user.isAdmin
        });
      } else {
        unsetUser();
      }
    })
    .catch(err => console.error("Error fetching user data:", err));
  }, []);

  useEffect(() => {
    console.log("User data updated:", user);
  }, [user]);

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/register' element={<Register />} />
            <Route path='/addPost' element={<AddPost />} />
            <Route path='/post/:postId' element={<PostView/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout/>}/>
            <Route path='*' element={<UnknownPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
