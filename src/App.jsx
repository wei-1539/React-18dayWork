import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, Outlet,useParams } from 'react-router-dom';


// logout 元件
function LogOut() {
  let navigate = useNavigate()
  return <button onClick={() => {
    navigate('/login')
  }}>登出</button>
}


const Todo = () => {
  return (

    <>
      <p>這是 Todo 頁面</p>
      <LogOut />
    </>
  )
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Post = () => {
  return <>
    <p>這是Post頁面</p>
    <Outlet/>
  </>
    ;
};
const ProfilePage = () => {
  let params = useParams();
  return <>
    <p>Post子層頁面</p>
    <p>PostID : {params.postId}</p>
  </>
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>post 頁面</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path='/register' element={< Register />} />
          <Route path='/login' element={< Login />} />
          <Route path='/todo' element={< Todo />} />
          <Route path='/post' element={< Post />} >
            <Route path=':postId' element={< ProfilePage />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
