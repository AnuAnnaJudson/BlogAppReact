import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { fetchPosts } from "./features/posts/postSlice";

store.dispatch(fetchUsers())//load the users right when the app starts hence in index.js
store.dispatch(fetchPosts())//load the posts right when the app starts hence in index.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App/>}/> 
          {/* //to also include nested route add '*' */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
