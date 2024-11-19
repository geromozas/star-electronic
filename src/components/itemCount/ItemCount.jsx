import { Button } from "@mui/material";
import { useState } from "react";

export const ItemCount = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div style={{ display: "flex" }}>
      <Button>+</Button>
      <h4>{counter}</h4>
      <Button>-</Button>
    </div>
  );
};
