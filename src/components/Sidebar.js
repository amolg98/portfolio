import React, { useState } from  'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItems from "./SidebarItems";

const SidebarParent = styled.div`
  background: #a5cff7;
  width: 250px;
  height: 100vh;
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;

function Sidebar(props, {defaultActive}) {
    //If no active prop is passed, use `1` instead
    const [activeIndex, ] = useState(defaultActive || 0);
  
    return (
        <div>
            <SidebarParent>
                {
                    SidebarItems.map((item, index)=> {
                        return(
                            <Link to={item.path}>
                                <SidebarItem key={item.id} active={index === activeIndex}>
                                    {item.name}
                                </SidebarItem>
                            </Link>
                        );
                    })
                }
            </SidebarParent>
        </div>
    );
}

export default Sidebar;