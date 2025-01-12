import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import AppLayout from "./components/AppLayout";
import PostsList from "./components/PostsList";
import PostDetail from "./components/PostDetail";

function App() {
return (
  <div>
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/PostsList" element={<PostsList/>}/>
        <Route path="/PostsList/:id" element={<PostDetail />}/>
        </Route>
      </Routes>
    </Router>
  </div>
)
};

export default App;