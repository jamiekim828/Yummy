import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Meal } from '../../App';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type OneMeal = {
  meal: Meal;
  addFavoriteMeal?: Function;
  deleteFavorite?: Function;
  totalFavorite?: number;
};

export default function MealCard({
  meal,
  addFavoriteMeal,
  deleteFavorite,
  totalFavorite,
}: OneMeal) {
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState<boolean>(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const changeColor = React.useCallback(() => {
    setFavorite(!favorite);
  }, [favorite]);

  const letter = meal.strMeal.charAt(0);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {letter}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={meal.strMeal}
        subheader={meal.strCategory}
      />
      <CardMedia
        component='img'
        height='194'
        image={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <CardContent>
        <Typography paragraph>Ingredient:</Typography>
        <Typography variant='body2' color='text.secondary'>
          1. {meal.strIngredient1} : {meal.strMeasure1}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          2. {meal.strIngredient2} : {meal.strMeasure2}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          3. {meal.strIngredient3} : {meal.strMeasure3}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='add to favorites'
          style={favorite ? { color: 'red' } : { color: 'grey' }}
          onClick={() => {
            favorite ? deleteFavorite?.(meal) : addFavoriteMeal?.(meal);
            changeColor();
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{meal.strInstructions}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
