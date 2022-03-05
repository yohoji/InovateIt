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
            <div>
                <img style={{
                    position:"absolute",top:"0"
                }} src="page-title.jpg" alt="" />
            </div>
            <Container style={{marginTop:'400px'}}>
                <Box sx={theme.sectionHeader}>
                    <div style={theme.sectionHeaderWrapper}>
                        <Typography sx={theme.sectionTitle}>Trouver le bon <br /> Cours <span style={theme.sectionHeaderCourse}> en ligne <StyledImg src="/images/yellow-bg.png" alt=""></StyledImg> </span> pour votre enfant  </Typography>
                        <p style={theme.sectionSubTitle}>Vous n'avez pas à lutter seul, vous avez notre assistance et notre aide.</p>
                    </div>
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} justifyContent="center">
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <MultiActionAreaCard image="/images/course-1.jpg" lessons="33" rating="4.5" raters="(33)" courseTitle="la meilleure façon d'enseigner les chiffres et les lettres à votre enfant." Author="Si Hamadi" tagColor="#b128ff" price="Gratuit" />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section> 
     );
}
 
export default Courses;

