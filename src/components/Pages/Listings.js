import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const cardsData = [
  {
    title: "Listing 1",
    description: "This is listing 1",
    image: `https://picsum.photos/500?grayscale&random=1`,
  },
  {
    title: "Listing 2",
    description: "This is listing 2",
    image: `https://picsum.photos/500?grayscale&random=2`,
  },
  {
    title: "Listing 3",
    description: "This is listing 3",
    image: `https://picsum.photos/500?grayscale&random=3`,
  },
  {
    title: "Listing 4",
    description: "This is listing 4",
    image: `https://picsum.photos/500?grayscale&random=4`,
  },
];

export default function CardGrid() {
  const classes = makeStyles((theme) => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: "200px",
      width: "345px",
    },
  }));
  return (
    <Box sx={{ mt: "5em" }}>
      <Grid container spacing={3}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                sx={{ height: "200px", width: "200px" }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
