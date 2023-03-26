import React from 'react';
import { Box, Button, MenuItem, Select, TextField, useMediaQuery } from '@mui/material';

const SearchFilters = ({ domain, articleType, searchQuery, setDomain, setArticleType, setSearchQuery }) => {
  const isSmallerScreen = useMediaQuery('(max-width:600px)');

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleArticleTypeChange = (event) => {
    setArticleType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: isSmallerScreen ? 'wrap' : 'nowrap', alignItems: 'center', marginLeft: 10 }}>
      <Box sx={{ marginBottom: isSmallerScreen ? 1 : 0, marginRight: isSmallerScreen ? 1 : 2, minWidth: isSmallerScreen ? 100 : 150 }}>
        <Select value={domain} onChange={handleDomainChange} displayEmpty sx={{ width: '100%'}}>
          <MenuItem value="" disabled>
            Topic Domain
          </MenuItem>
          <MenuItem value="technical">Technical</MenuItem>
          <MenuItem value="healthcare">Healthcare</MenuItem>
          <MenuItem value="financial">Financial</MenuItem>
        </Select>
      </Box>
      <Box sx={{ marginBottom: isSmallerScreen ? 1 : 0, marginRight: isSmallerScreen ? 1 : 2, minWidth: isSmallerScreen ? 100 : 150, marginLeft: isSmallerScreen ? 0 : 10 }}>
        <Select value={articleType} onChange={handleArticleTypeChange} displayEmpty sx={{ width: '100%'}}>
          <MenuItem value="" disabled>
            Article Type
          </MenuItem>
          <MenuItem value="listicle">Listicle</MenuItem>
          <MenuItem value="guide">Guide</MenuItem>
          <MenuItem value="ebook">E-book</MenuItem>
        </Select>
      </Box>
      <Box sx={{ marginBottom: isSmallerScreen ? 1 : 0, marginRight: isSmallerScreen ? 1 : 2, minWidth: isSmallerScreen ? 100 : 200, marginLeft: isSmallerScreen ? 0 : 10 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: '100%', marginRight: 1 }}
        />
      </Box>
      <Box sx={{ marginTop: isSmallerScreen ? 1 : 0, marginLeft: isSmallerScreen ? 0 : 10 }}>
        <Button variant="contained">Search</Button>
      </Box>
    </Box>
  );
};

export default SearchFilters;
