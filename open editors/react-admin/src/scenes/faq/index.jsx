import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = ()=>{

    const theme= useTheme();
    const colors=tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Qustion Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500] }variant="h5">
                        An Important Qustion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails expandIcon={<ExpandMoreIcon />}>
                    <Typography >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. 
                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500] }variant="h5">
                        Another Important Qustion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails expandIcon={<ExpandMoreIcon />}>
                    <Typography >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. 
                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500] }variant="h5">
                       fav Qustion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails expandIcon={<ExpandMoreIcon />}>
                    <Typography >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. 
                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500] }variant="h5">
                       some random Qustion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails expandIcon={<ExpandMoreIcon />}>
                    <Typography >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. 
                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500] }variant="h5">
                     final Qustion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails expandIcon={<ExpandMoreIcon />}>
                    <Typography >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. 
                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </Box>
    );
};

export default FAQ;