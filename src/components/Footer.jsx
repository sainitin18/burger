import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "../styles/Footer.css"

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className='footer'>
      <p><TwitterIcon style={{ paddingRight: "30px" }} /> <InstagramIcon style={{ paddingRight: "30px" }} /> <FacebookIcon /></p>
      <p><FavoriteIcon style={{ color: "red" }} />LOVE FROM BURGER</p>
      <p><CopyrightIcon /> COPY RIGHT {year}</p>
    </div>
  )
}
export default Footer;
