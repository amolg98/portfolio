import React from 'react';

import Sidebar from "./Sidebar";
import Routes from "../Routes";
import Nav from "./Nav";


function Layout(props) {
    return(
        <div>
            <div style={{display: "flex"}} >
                <Sidebar />
                <div>
                    {/* {console.log(props)}; */}
                    {console.log(Routes)};
                    {/* <Routes /> */}
                    <Nav />
                </div>
            </div>
        </div>
    );
}

export default Layout;