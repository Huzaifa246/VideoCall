import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";

function App() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="App" style={{
      height: "100%", align: "center", display: 'flex', justifyContent: "center"
    }}>
      {
        inCall ? (
          <VideoCall setInCall={setInCall} />
        ) : (
          <div style={{ maxheight: "100px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setInCall(true)}
            >
              Join Call
            </Button>
          </div>
        )
      }
    </ div>
  );
}

export default App;
