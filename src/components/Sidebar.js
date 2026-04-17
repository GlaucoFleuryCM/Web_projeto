import React from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

/* OVERLAY (fundo escuro mobile) */
const Overlay = styled.div`
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(0,0,0,0.5);
    z-index: 5;

    display: ${({ sidebarOpen }) => sidebarOpen ? "block" : "none"};

    @media (min-width: 768px) {
        display: none;
    }
`;

/* SIDEBAR */
const SidebarNav = styled.nav`
    background: #013185;

    position: fixed;
    top: 80px;
    left: 0;

    height: calc(100vh - 80px);

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 10;
    transition: all 0.3s ease;

    /* MOBILE */
    width: 100%;
    transform: ${({ sidebarOpen }) => 
        sidebarOpen ? "translateX(0)" : "translateX(-100%)"};

    /* DESKTOP */
    @media (min-width: 768px) {
        width: ${({ sidebarOpen }) => sidebarOpen ? "250px" : "80px"};
        transform: none;

        &:hover {
            width: 250px;
        }
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
        <IconContext.Provider value={{ color: "#fff" }}>
            {/* overlay mobile */}
            <Overlay 
                sidebarOpen={sidebarOpen} 
                onClick={() => setSidebarOpen(false)} 
            />

            <SidebarNav
                sidebarOpen={sidebarOpen}
                onMouseEnter={() => window.innerWidth >= 768 && setSidebarOpen(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setSidebarOpen(false)}
            >
                <SidebarWrap>
                    {SidebarData.map((item, index) => (
                        <SubMenu
                            item={item}
                            key={index}
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />
                    ))}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;