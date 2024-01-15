import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DraftsIcon from '@mui/icons-material/Drafts';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ForumIcon from '@mui/icons-material/Forum';
import CampaignIcon from '@mui/icons-material/Campaign';
import styled from "styled-components";
import { Link } from 'react-router-dom';



const SidebarContainer = styled.div`
    position: fixed; 
    top: 50px;
    bottom: 0;
    left: ${props => props.isOpen ? "0%" : "-100%"};
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    width: max-content;
    transition: all 0.3s ease-in-out ;
    
`
const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`
const SidebarMenu = styled.div`
    margin-bottom: 10px;
`
const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`
const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`
const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover {
        background-color: rgb(240, 240, 255);
    }

    > svg {
        margin-right: 5px;
        font-size: 20px !important;
    }
`

const SlideBar = (props) => {


    return (
        <SidebarContainer isOpen={props.isOpen}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <Link to="/">
                            <SidebarListItem>
                                <LineStyleIcon />
                                Home
                            </SidebarListItem>
                        </Link>

                        <Link to="announcment">
                            <SidebarListItem>
                                <CampaignIcon />
                                Annoucment
                            </SidebarListItem>
                        </Link>
                        <SidebarListItem>
                            <TrendingUpIcon />
                            Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>All Menu</SidebarTitle>
                    <SidebarList>

                        <Link to="/user">
                            <SidebarListItem>
                                <PermIdentityIcon />
                                Users
                            </SidebarListItem>
                        </Link>
                        <Link to="/products">
                            <SidebarListItem>
                                <StorefrontIcon />
                                Products
                            </SidebarListItem>
                        </Link>

                        <Link to="/orders">
                            <SidebarListItem>
                                <LocalAtmIcon />
                                Orders
                            </SidebarListItem>
                        </Link>
                    </SidebarList>

                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Connect</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <DraftsIcon />
                            Mail
                        </SidebarListItem>
                        <SidebarListItem>
                            <FeedbackIcon />
                            Feedback
                        </SidebarListItem>
                        <SidebarListItem>
                            <ForumIcon />
                            Messages
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SlideBar