import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ title, imageUrl }) {
  return (
    <Card sx={{ Width: 500 }} className="mx-5 px-1  ">
      <CardActionArea>
        <img
          src="C:\Users\Lenovo\Desktop\mern-estate-main\client\src\components\images\trans.jpg"
          alt=""
        />
        <h3 className="mx-5 text-center text-4xl font-semibold ">{title}</h3>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-center"
          >
            {imageUrl}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
