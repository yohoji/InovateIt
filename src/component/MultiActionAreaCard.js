import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Chip from '@mui/material/Chip';
import { createTheme } from '@mui/system';

export default function MultiActionAreaCard({ image, imageDescrption, lessons, rating, raters, courseTitle, AvatarAlt, AvatarImg, Author, price, tagColor }) {
  const theme = createTheme({
    color: tagColor,
    card: {
      maxWidth: "516px",
      backgroundColor: "#ffffff",
      fontFamily: ["Hind", "sans-serif"].join(','),
      fontSize: "16px",
      fontWeight: "normal",
      color: "#6d6e75",
      lineHeight: "26px",
      boxShadow: "0px 30px 40px 0px rgb(1 11 60 / 6%)",
      '&:hover .MuiCardMedia-root': { 
        transform: "scale(1.1)"
      }
    },
    cardMedia: {
      transition: "all 0.3s ease-out 0s"
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom:"20px",
      fontFamily: ["Hind", "sans-serif"].join(','),
      color:"#0e1133",
      '&:hover': {
        color:"#2b4eff"
      }
    },
    cardTutor: {
      fontFamily: ["Hind", "sans-serif"].join(','),
      fontSize: "16px",
      fontWeight: "500",
      color:"#53545b",
      lineHeight:"1",
      '&:hover': {
        color:"#2b4eff"
      }
    },
    cardFooter: {
      padding: "10px 30px",
      paddingTop: "15px",
      borderTop: "1px solid #f0f0f5",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: tagColor,
      button: {
        fontFamily: ["Hind", "sans-serif"].join(','),
        fontSize: "16px",
        fontWeight: "500",
        textTransform: "none",
        color: "#0e1133",
        '&:hover': {
          color: "#2b4eff"
        }
      }
    }
  })
  return (
    <Card sx={theme.card}>
      <CardActionArea>
        <CardMedia
          sx={theme.cardMedia}
          component="img"
          height="140"
          image={image}
          alt={imageDescrption} />
        {/* <Chip label="hello"  />   */}
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: "16px", color: "#6d6e75" }} align="center" gutterBottom noWrap variant="h5" component="div">
              <BookOutlinedIcon />
              {lessons + " leçon"}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: "16px", color: "#6d6e75" }} align="center" gutterBottom noWrap variant="h5" component="div">
              <StarPurple500OutlinedIcon sx={{ color: '#ff9415' }} />
              {rating + " " + raters}
            </Typography>
          </Box>
          <Typography sx={theme.cardTitle} gutterBottom variant="h5" component="div">
            {courseTitle}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ height: '35px', width: '35px', marginRight:"15px", border:"2px solid #ffffff" }} alt={ AvatarAlt } src={AvatarImg} />
            <Typography sx={theme.cardTutor} gutterBottom variant="h5" component="div">
              { Author }
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={theme.cardFooter}>
          <Typography sx={theme.cardFooter.color} gutterBottom variant="h5" component="div">
              {price}
          </Typography>
          <Button sx={theme.cardFooter.button} size="small" endIcon={<ArrowForwardIcon />}>
            Voir plus
          </Button>
      </CardActions>
    </Card>
  );
}
