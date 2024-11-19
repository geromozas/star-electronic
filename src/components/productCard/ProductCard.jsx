import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  title,
  unit_price,
  category,
  id,
}) {
  return (
    <Card
      sx={{
        width: 250,
        maxWidth: 250,
        margin: 5,
        boxShadow: 5,
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          objectFit: "contain",
          padding: "15px",
        }}
        component="img"
        image={image}
        alt={title}
      />
      <hr
        style={{
          width: "100%",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          margin: "0px 0",
        }}
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h5"
            style={{ fontSize: 10, justifyContent: "center" }}
          >
            {category}
          </Typography>
        </div>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">${unit_price}</Typography>
      </CardContent>{" "}
      <Link to={`/itemDetail/${id}`}>
        <Button>Ver detalle</Button>
      </Link>
    </Card>
  );
}
