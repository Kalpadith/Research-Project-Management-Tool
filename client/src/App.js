import * as React from "react";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/common/login";
import Supervisor from "./pages/private/modules/supervisor/index";
import Layout from "./pages/private/modules/user-group-home/layout";
import Chat from "./pages/private/modules/user-group-home/pages/chat";
import Student from "./pages/private/modules/student/index";
import Evaluation from "./pages/private/modules/user-group-home/pages/Evaluation";
import GroupDetails from "./pages/private/modules/user-group-home/pages/group-details";
import {Groups} from "./pages/private/modules/user-group-home/pages/RejectOrAccept";
import {Submissions} from "./pages/private/modules/user-group-home/pages/submissions";
import {Evaluations} from "./pages/private/modules/user-group-home/pages/group-details";






const App = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Login/>} />
                <Route path="/supervisor" element={<Supervisor />} />
                <Route path="/student" element={<Student />} />
                {/*<Route path="group-details" element={<Evaluations />} />*/}
                <Route path="/user-group/:id" element={<Layout />} >
                    <Route path="chat" element={<Chat />} />
                    <Route path="RejectOrAccept" element={<Groups />} />
                    <Route path="evaluation" element={<Evaluation />} />
                    <Route path="submissions" element={<Submissions />} />
                    <Route path="group-details" element={<Evaluations />} />
              


                </Route>
                <Route path="*" element={<Login />} />

            </Routes>
        </div>
    );
};


export default App;
