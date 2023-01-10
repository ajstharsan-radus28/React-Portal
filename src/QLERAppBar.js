// in src/MyAppBar.js
import * as React from 'react';
import { AppBar , UserMenu,MenuItemLink, Logout} from 'react-admin';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockedIcon from '@mui/icons-material/LockOutlined';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import authProvider from './authProvider'

import Image from 'mui-image'

import Logo from './Logo';
const username = localStorage.getItem('username');
const MyUserMenu = props => (

      <UserMenu {...props}
            icon ={   <Avatar
                    sx={{
                    height: 30,
                    width: 30,
                }}
                src="https://marmelab.com/images/avatars/adrien.jpg"
            />}
      >
        <MenuItemLink
          to="authProvider.logout"
          primaryText="Profile"
          leftIcon={<SwitchAccountIcon/>}
        />
        <Logout />
      </UserMenu>

);
const QLERAppBar = (props) => (

    <AppBar
        sx={{
            "& .RaAppBar-title": {
                flex: 1,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",

            },
        }}
        {...props}
        color = 'warning'
        userMenu = {<MyUserMenu />}
    >
    <Image
        src="https://crm74.radus28.com/test/logo/logo_web.png"
        height="60px"
        width="198px"
        fit="cover"
        duration={3000}
        easing="ease-in"
        showLoading= { false }
        errorIcon= { true }
        shift= {null}
        distance="10px"
        shiftDuration={900}
        bgColor="inherit"
    />
     <Typography>
     &nbsp;
     </Typography>
        <Typography
            variant="h6"
            color="inherit"
            id="react-admin-title"
        />
        <Typography>
        &nbsp;of {username}
        </Typography>
        <span style={{width:'70%'}} />
    </AppBar>
);

export default QLERAppBar;
