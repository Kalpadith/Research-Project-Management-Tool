import * as React from "react";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/common/login";
import Supervisor from "./pages/private/modules/supervisor/index";
import Layout from "./pages/private/modules/user-group-home/layout";
import Chat from "./pages/private/modules/user-group-home/pages/chat";
import Student from "./pages/private/modules/student/index";
import Admin from "./pages/private/modules/admin/index";
import Admin_layout from "./pages/private/modules/admin-users-home/Admin_layout/index";
import AllUsers from "./pages/private/components/allUsers";
import AddOrUpdateUser from "./pages/private/components/AddorUpdateUser";





const App = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Login/>} />
                <Route path="/supervisor" element={<Supervisor />} />
                <Route path="/student" element={<Student />} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/user-group/:id" element={<Layout />}>   
                <Route path="chat" element={<Chat />} />
                </Route>
                <Route path="user-list" element={<Admin_layout/>}/>
                <Route path="all" element={<AllUsers/>}/>
                <Route path="add" element={<AddOrUpdateUser/>}/>
            
            
                <Route path="*" element={<Login />} />

            </Routes>
        </div>
    );
};


export default App;
 