import { Button, Collapse, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useState } from 'react';
import Filter from "./Filter";

const AdvancedSearch = () => {
  const [showFilters, setShowFilters] = useState(false);
  const isSmallerScreen = useMediaQuery('(max-width:600px)');

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Box sx={{background:"#fff"}}>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: 'white',
          margin: '20px',
          marginTop: isSmallerScreen ? '10px' : '20px',
        }}
        startIcon={<FilterListIcon />}
        onClick={toggleFilters}
      >
        Filters
      </Button>
      <Collapse in={showFilters}>
        <Box sx={{ mt: isSmallerScreen ? 1 : 2 }}>
          <Filter />
        </Box>
      </Collapse>
    </Box>
  );
};

export default AdvancedSearch;
