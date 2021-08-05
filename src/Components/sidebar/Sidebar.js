import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLink,SidebarRoute,SidebarMenu} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>

            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}> Home</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}> Services</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} >Contact Us</SidebarLink>
                    <SidebarLink to="about" onClick={toggle} >About Us</SidebarLink>
                    <SidebarRoute to={{ pathname: "http://MegenagnaPharmacy/home" }} target="/"> Store</SidebarRoute>
                    <SidebarRoute to={{ pathname: "http://MegenagnaPharmacy/blog" }} target="/"> Blog</SidebarRoute>
                </SidebarMenu>
                
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;

