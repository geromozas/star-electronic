import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ItemCount } from "../itemCount/ItemCount.jsx";

export default function ProductCardDetail({
  image,
  title,
  unit_price,
  category,
  description,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 800,
          height: 500,
          margin: 5,
          boxShadow: 5,
          transition: "transform 0.2s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
          },
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <CardMedia
            sx={{
              height: 350,
              width: 400,
              objectFit: "contain",
              padding: "15px",
            }}
            component="img"
            image={image}
            alt={title}
          />
        </div>
        <div>
          <div>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}></div>
              <Typography style={{ marginBottom: 10 }} variant="h5">
                {title}
              </Typography>
              <Typography variant="p">{description}</Typography>
              <Typography variant="h6">Categoria: {category}</Typography>
              <Typography style={{ marginTop: 20 }} variant="h5">
                ${unit_price}
              </Typography>
            </CardContent>
            <div style={{ display: "flex" }}>
              <Button variant="outlined">Agregar al carrito</Button>
              <ItemCount />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
