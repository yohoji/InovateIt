import MultiActionAreaCard from "./MultiActionAreaCard";
import { Grid, Container, Box, Typography } from "@mui/material"
import { createTheme } from "@mui/system";
import { keyframes } from '@emotion/react'
import { styled } from "@mui/material/styles";
const Courses = () => {
    const theme = createTheme({
        section: {
            fontFamily: ["Hind", "sans-serif"].join(','),
            background: "#f3f4f8",
            paddingTop: "115px",
            paddingBottom: "120px",
        },
        sectionHeader: {
            display: "flex",
            alignItems: "flex-end",
            flexWrap: "wrap",
            marginTop: "calc(1.5rem * -1)",
            marginRight: "calc(1.5rem / -2)",
            marginLeft: "calc(1.5rem / -2)"
        },
        sectionHeaderWrapper: {
            position: "relative",
            zIndex: "1",
            marginBottom: "60px"
        },
        sectionTitle: {
            fontFamily: ["Hind", "sans-serif"].join(','),
            fontSize: "40px",
            fontWeight: "700",
            color: "#0e1133",
            textTransfrom: "capitalize",
            marginBottom: "3px"
        },
        sectionSubTitle: {
            fontSize: "16px",
            color: "#53545b"
        },
        sectionHeaderCourse: {
            position:"relative",
        }
    })
    const sectionAnimation = keyframes`
    0% {
        width: 0;
    }
    15% {
        width: 125%;
    }
    85% {
        opacity: 1;
    }
    90% {
        width: 125%;
        opacity: 0;
    }
    to {
        width: 0;
        opacity: 0;
    }
`;
    const StyledImg = styled((props) => <img {...props} />)(({ theme }) => ({
            bottom: "5px",
            width: "120%",
            animation: `${sectionAnimation} 3s infinite`,
            position: "absolute",
            left: "-14px",
            zIndex: "-1",
            verticalAlign: "middle" 
      }))
    return (
        <section style={theme.section}>
            <Container>
                <Box sx={theme.sectionHeader}>
                    <div style={theme.sectionHeaderWrapper}>
                        <Typography sx={theme.sectionTitle}>Find The Right <br /> Online <span style={theme.sectionHeaderCourse}> Course <StyledImg src="/images/yellow-bg.png" alt=""></StyledImg> </span> For You </Typography>
                        <p style={theme.sectionSubTitle}>You don't have to struggle alone, you've got our assistance and help.</p>
                    </div>
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} justifyContent="center">
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <MultiActionAreaCard image="/images/course-1.jpg" lessons="33" rating="4.5" raters="(33)" courseTitle="Become a product Manager learn the skills & job." Author="Jim Séchen" tagColor="#b128ff" price="Free" />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section> 
     );
}
 
export default Courses;

