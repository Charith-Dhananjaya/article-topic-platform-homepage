import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import {Box} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StyledInputBase from "@mui/material/InputBase";
import ShowData from "./ShowData";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 25,
  backgroundColor: alpha(theme.palette.common.white, 0.45),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  width: "100%",
  maxWidth: 600,
  margin: "0 auto",
  "& .MuiInputBase-input": {
    color: "#000",
    padding: "20px 300px 20px 60px",
    fontSize: 24,
    borderRadius: 25,
    width: "100%",
    "&::placeholder": {
      color: "#000",
      opacity: 1,
    },
  },
  "& .MuiInputBase-root": {
    border: "2px solid #fff",
    borderRadius: 25,
  },
  "& .MuiInputBase-root:hover": {
    borderColor: "#000",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 3),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  fontSize: "2rem",
}));

const SearchBar = () => {
  
  const [input, setInput] = useState("");
  const [searchField, setSearchField] = useState('');
  const [template, setTemplate] = useState({});
  useEffect(() => {
    const url = `/api/Search`;
    const method = 'GET';
    const options = {
          method: method,
    
      }
    const fetchData = async () => {
    try{
            const response  = await fetch(url, options);
            const allData = await response.json();
            setTemplate(allData);
            console.log("response passed");
    }catch(error){

            console.error(error);
            console.log("response error");
    }
   
  }
  fetchData()
  
}, []); 

const templateData = template['data'];
let filteredTemplates = [];
filteredTemplates = templateData?.filter((topicName) => {
  return searchField && topicName.topicName.toLowerCase().includes(searchField.toLowerCase());
})
let searchData= [];
if(filteredTemplates){
   filteredTemplates.map((data) => {
    data.templates.map((template) => searchData.push({id: template.id, name: template.name}))
   });
}

  const handleChange = (event) => {
    setInput(event.target.value);
    setSearchField(event.target.value);
    console.log(searchField);
  };
  return (
    <Box><Search>
      <SearchIconWrapper>
        <SearchOutlinedIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={input}
        onChange={handleChange} />
    </Search>
    {searchData.length > 0 && <Box sx={{ display: "flex", justifyContent: "left"}}>
      <ShowData results={searchData} />
    </Box>
    }
    </Box>
  );
};

export default SearchBar;
