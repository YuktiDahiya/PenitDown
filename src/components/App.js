// import { Switch, Route } from 'react-router';
import { Routes ,Route } from 'react-router-dom';

// import { Navbar, Home, CreatePost, PostDetail } from './';
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:postId" component={PostDetail} />
        <Route exact path="/createpost" component={CreatePost} />
      </Routes>
     
    </div>
  );
}

export default App;