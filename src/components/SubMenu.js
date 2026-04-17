import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;

    padding: 12px;
    padding-left: 1.1rem;
    text-decoration: none;
    color: #e1e9fc;
    
    &:hover {
        background: #0a4bbf;
        border-left: 4px solid green;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
    white-space: wrap;

    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: opacity 0.2s ease;
`;

const DropdownLink = styled(Link)`
    background: #013185;
    height: 50px;

    padding-left: 3rem;
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #f5f5f5;

    &:hover {
        background: green;
        cursor: pointer;
    }
`;

const IconWrapper = styled.div`
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
`;

const SubMenu = ({ item, sidebarOpen, setSidebarOpen}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const handleClick = () => {
    if (window.innerWidth <= 768) {
        setSidebarOpen(false);
    }
};
    
    useEffect(() => {
        if (!sidebarOpen) {
            setSubnav(false);
        }
    }, [sidebarOpen]);

    return (
        <>
            <SidebarLink
    to={item.path || "#"}
    onClick={() => {
        if (item.subNav) {
            showSubnav(); // abre submenu
        } else {
            if (window.innerWidth <= 768) {
                setSidebarOpen(false); // fecha no mobile
            }
        }
    }}
    >
                <IconWrapper>{item.icon}</IconWrapper>

                <SidebarLabel $visible={sidebarOpen}>
                    {item.title}
                </SidebarLabel>

                {item.subNav && (
                    <div style={{ marginLeft: "auto" }}>
                        {subnav ? item.iconOpened : item.iconClosed}
                    </div>
                )}
            </SidebarLink>

            {subnav &&
                item.subNav.map((subItem, index) => (
                    <DropdownLink 
    to={subItem.path} 
    key={index}
    onClick={handleClick}
>
                        <IconWrapper>{subItem.icon}</IconWrapper>
                        <SidebarLabel $visible={sidebarOpen}>
                            {subItem.title}
                        </SidebarLabel>
                    </DropdownLink>
                    
                ))}
        </>
    );
};

export default SubMenu;