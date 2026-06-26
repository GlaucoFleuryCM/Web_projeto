import { useEffect } from "react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px;
    padding-left: 1.1rem;
    text-decoration: none;
    color: #e1e9fc;

    background: ${({ $active }) =>
        $active ? "#0a4bbf" : "transparent"};

    border-left: ${({ $active }) =>
        $active ? "4px solid #6ed46e" : "4px solid transparent"};

    &:hover {
        background: #0a4bbf;
        border-left: 4px solid #6ed46e;
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
    background: ${({ $active }) =>
        $active ? "#0a4bbf" : "#013185"};

    border-left: ${({ $active }) =>
        $active ? "4px solid #f5c542" : "4px solid transparent"};

    height: 50px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;

    transition: 0.2s;

    &:hover {
        background: #0a4bbf;
        border-left: 4px solid #f5c542;
    }
`;

const IconWrapper = styled.div`
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
`;

const SubMenu = ({ item, sidebarOpen }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
        
    const location = useLocation();
    const isActive = item.subNav
    ? item.subNav.some(sub => location.pathname === sub.path)
    : location.pathname === item.path;

    useEffect(() => {
        if (!sidebarOpen) {
            setSubnav(false);
        }
    }, [sidebarOpen]);

    return (
        <>
            <SidebarLink
                to={item.path || "#"}
                onClick={item.subNav && showSubnav}
                $active={isActive}
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

            {sidebarOpen && subnav &&
                item.subNav.map((subItem, index) => (
                    <DropdownLink to={subItem.path} key={index} $active={location.pathname === subItem.path}>
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