import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function RatingForm({ onSave }) {
  const [rating, setRating] = useState({ description: '', rating: '' });

  return (
    <form>
      <TextField
        label="Comment"
        name="description"
        value={rating.description}
        onChange={(e) => setRating({ ...rating, description: e.target.value })}
      />
      <TextField
        label="Rating"
        name="rating"
        value={rating.rating}
        onChange={(e) => setRating({ ...rating, rating: e.target.value })}
      />
      <Button onClick={() => onSave({ ...rating, userId: 6 })}>
        Add Rating
      </Button>
    </form>
  );
}

export default RatingForm;
