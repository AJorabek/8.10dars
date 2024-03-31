import {
  Box,
  Grid,
  IconButton,
  List,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ChatItem from "../components/ChatItem";
import { ArrowBackSharp, Send } from "@mui/icons-material";
import Message from "../components/Message";

const Chats = () => {
  return (
    <>
      <Grid container>
        <Grid sm={4}>
          <List sx={{}}>
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </List>
        </Grid>
        <Grid sm={8} >
          <Paper sx={{ height: "100vh",display:"flex",flexDirection:"column" }}>
            <Paper sx={{ p: 2 }}>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <IconButton sx={{ display: { sm: "none" } }} color="primary">
                  <ArrowBackSharp />
                </IconButton>
                <Typography>Alex</Typography>
              </Box>
            </Paper>

            <Stack bgcolor={"#61c642"} spacing={2} sx={{ p: 2,flex:1,justifyContent:"flex-end" }}>
              <Message  sender={"me"}/>
              <Message />
              <Message  sender={"me"}/>
              <Message sender={"me"} />
              <Message />
            </Stack>
            <Box display={"flex"} m={2}>
              <TextField
                fullWidth
                label="Write a message..."
                variant="filled"
                size="small"
              />
              <IconButton>
                <Send color="primary" />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Chats;
