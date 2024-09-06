import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { HotelDataType } from "../../types/Hotel";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const HotelCard: React.FC<HotelDataType> = ({
  id,
  name,
  description,
  image_url,
  rating,
}) => {
  return (
    <Grid item>
      <Link to={`/hotels/${id}`}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Rate: {rating}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Like</Button>
            <Link to={`hotels/${id}`}> More</Link>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};
export default HotelCard;
