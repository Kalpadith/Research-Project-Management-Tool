import * as React from "react";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/common/login";
import Supervisor from "./pages/private/modules/supervisor/index";
import Layout from "./pages/private/modules/user-group-home/layout";
import Chat from "./pages/private/modules/user-group-home/pages/chat";




const App = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Login/>} />
                <Route path="/supervisor" element={<Supervisor />} />
                <Route path="/user-group/:id" element={<Layout />} >
                    <Route path="chat" element={<Chat />} />
                </Route>
                <Route path="*" element={<Login />} />

            </Routes>
        </div>
    );
};


export default App;
