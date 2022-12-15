import React from 'react';

import './Search.css';
import { Props } from '../../pages/Recipe';
import TextField from '@mui/material/TextField';

export default function Search({ userInput, handleChange }: Props) {
  return (
    <div className='input-div'>
      <div className='input-wrapper'>
        <p>Please enter the name</p>
        <TextField
          id='filled-basic'
          variant='filled'
          type='search'
          name='name'
          value={userInput}
          onChange={(e) => handleChange(e)}
        />
        <p>suggestion: pizza, pork, lamb, ...</p>
      </div>
    </div>
  );
}
