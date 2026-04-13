import React, { useState } from "react";

import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const SidebarNav = styled.nav`
    background: #013185;
    width: 80px;
    height: 100vh;
    top: 80px;
    left: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: fixed;
    z-index: 1;
    
    transition: width 0.5s ease;
    &:hover {
        width: 250px;
    }
`;

const SidebarWrap = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
`;

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <SidebarNav
                    onMouseEnter={() => setSidebarOpen(true)}
                    onMouseLeave={() => setSidebarOpen(false)}
                >
                    <SidebarWrap>
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                    sidebarOpen={sidebarOpen}
                                />
                            );
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;