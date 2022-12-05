import React, { useContext } from 'react';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import "../assets/css/style.css"
import pic from "../assets/images/user.jpg"
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { CartContext } from '../Store/CartContex';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
const Navbar = () => {
  const navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate('/Login')
  }
  var { qty } = useContext(CartContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg  background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">Fashion Hub</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/shop/All/All/All">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contactpage">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/admin-home">Admin</Link>
              </li>
            </ul>
            <form className="d-flex w-100" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn text-light" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("login") ?
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={pic} width="40px" height="40px" style={{ borderRadius: "50%" }} />
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/profile"><Tooltip title="Profile">
                      <IconButton>
                        <AccountCircleIcon />
                      </IconButton>
                    </Tooltip></Link></li>
                    <li><Link className="dropdown-item" to="/cart"> <Badge color="secondary" badgeContent={qty}><Tooltip title="cart">
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
    </Tooltip></Badge></Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={logout}><Tooltip title="Logout">
      <IconButton>
        <LogoutIcon />
      </IconButton>
    </Tooltip></button></li>
                  </ul>
                </li> :
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">Login</Link>
                </li>
              }

            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};
export default Navbar;




// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
// import { styled, alpha } from '@mui/material/styles';
// import "../assets/css/style.css"
// import pic from "../assets/images/user.jpg"
// import { Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// const pages = ['Home', 'Shop', 'CustomerCare'];
// const settings = ['Profile', 'Cart', 'Logout'];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const navigate= useNavigate()

//   const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));

//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

//   function logout(){
//     localStorage.clear()
//     navigate('/Login')
//   }

//   return (
//    <>
//      <AppBar position="static" className='background'>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             to="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             FASHION HUB
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             to=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             FASHION HUB
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               href={page=="Home"?"/":page=="Shop"?"/shop/All/All/All":`/${page}`}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Search style={{marginRight:"10px"}}>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           {
//             localStorage.getItem("login")?
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="User" src={pic} />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Button
//                   onClick={()=>{
//                     if (setting=="Logout")
//                     logout()
//                     else if (setting=="Profile")
//                     navigate(`/Profile`)
//                     else if (setting=="Cart")
//                     navigate(`/Cart`)
//                   }}

//                   //href={setting=="Profile"?"/Profile":setting=="Logout"?"/Login":`/${setting}`}
//                   >{setting}</Button>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           :<Link href="/login" color="inherit" underline="none">Login</Link>
//           }
//         </Toolbar>
//       </Container>
//     </AppBar>
//    </>
//   );
// };
// export default Navbar;
