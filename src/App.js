import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Comment from "./components/Comment/Comment"
import CommentList from "./components/CommentList/CommentList"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Comment />
      <CommentList />
      <Footer />
    </div>
  );
}

export default App;
