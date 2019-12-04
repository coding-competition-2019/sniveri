/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SharePlaceForm({ friends }) {
  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      options={friends}
      getOptionLabel={option => option}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} />
        ))
      }
      style={{ width: 500 }}
      renderInput={params => (
        <TextField
          {...params}
          label="Add friends to share with"
          variant="outlined"
          placeholder="Favorites"
          fullWidth
        />
      )}
    />
  );
}
