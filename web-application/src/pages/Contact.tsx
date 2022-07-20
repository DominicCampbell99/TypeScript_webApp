import { Container, Stack} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    
  }));

export function Contact() {
    return(
        <Container maxWidth="sm">
            <Stack spacing={2}>
                <Item> Mobile Number: 0427369137 </Item>
                <Item> Email: dom.campbel@gmail.com </Item>
            </Stack>
        </Container>
        
    )
  }
  