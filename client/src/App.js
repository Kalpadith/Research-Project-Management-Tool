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
import PannelMember from "./pages/private/modules/pannel-member/index";
import PanelNav from "./pages/private/modules/Pannel_layout/index";
import AllUsers from "./pages/private/components/allUsers";
import AddOrUpdateUser from "./pages/private/components/AddorUpdateUser";
import Request_Supervisor from "./pages/private/components/Req_Supervisor"
import Reg_Research_Topic from "./pages/private/components/Reg_research_topic";
import Submit from "./pages/private/components/Submission";
import Pmember from "./pages/private/components/member_details";
import MemberG from "./pages/private/components/member-group";
import MemberM from "./pages/private/components/member-manage";
import MemberV from "./pages/private/components/presentation-view";
import Create_grp from "./pages/private/components/creategrp"




const App = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Login/>} />
                <Route path="/supervisor" element={<Supervisor />} />
                <Route path="/student" element={<Student />} />
                <Route path="/admin" element={<Admin/>} />
                
                <Route path="/member-manage" element={<MemberM/>} />
                <Route path="/PanelNav" element={<PanelNav/>} />
                <Route path="/pannel-member" element={<PannelMember/>} />
                <Route path="/MemberV" element={<MemberV/>} />
               
              
                <Route path="/user-group/:id" element={<Layout />}>   
                    <Route path="chat" element={<Chat />} />
                    <Route path="Reg_Research_Topic" element={<Reg_Research_Topic/>}/>
                    <Route path="Request_Supervisor" element={<Request_Supervisor/>}/>
                    <Route path="Submit" element={<Submit/>}/>
                    <Route path="creategrp" element={<Create_grp />} />
                </Route>
                <Route path="Pmember" element={<Pmember/>}/>
                <Route path="MemberG" element={<MemberG/>}/>

                <Route path="user-list" element={<Admin_layout/>}/>
                <Route path="all" element={<AllUsers/>}/>
                <Route path="add" element={<AddOrUpdateUser/>}/>
            
            
                <Route path="*" element={<Login />} />

            </Routes>
        </div>
    );
};


export default App;
 