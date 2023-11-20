import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from "@mui/material";
import ShowFilterData from "./showFilterData";
import GoogleRecaptcha from "./googleRecaptcha";

const SearchFilters = () => {
  const [domain, setDomain] = useState("");
  const [articleType, setArticleType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [template, setTemplate] = useState([]);
  const [storeKeyData, setStoredKey] = useState({});

  useEffect(() => {
    const url = `/api/getStoreKey`;
    const method = "GET";
    const options = {
      method: method,
    };
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const allData = await response.json();
        setStoredKey(allData);
        console.log("response passed");
      } catch (error) {
        console.error(error);
        console.log("response error");
      }
    };
    fetchData();
  }, []);

  const searchAdvancedTopics = () => {
    const url = `/api/searchAdvance?topic=${searchQuery}&topicDomain=${domain}&articleType=${articleType}`;
    const method = "GET";
    const options = {
      method: method,
    };
    console.log("Search:", url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const results = json;
        setTemplate(results);
        console.log(results);
      });
    saveSearchKeyData();
  };

  const saveSearchKeyData = () => {
    if (!isKeyExist()) {
      fetch("/api/storeKey", {
        method: "POST",
        body: JSON.stringify({
          storeId: Math.floor(Math.random() * 100 + 1).toString(),
          searchKey: searchQuery,
          count: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .catch((err) => {
          console.log(err.message);
        });
      console.log("stored search key");
    }
  };

  const isKeyExist = () => {
    const isExist = storeKeyData?.["data"]?.filter((key) => {
      key.searchKey.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (isExist.length > 0) return true;
    else return false;
  };
  const isSmallerScreen = useMediaQuery("(max-width:600px)");

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleArticleTypeChange = (event) => {
    setArticleType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let advanceSearchData = [];
  if (template) {
    template.map((data) => {
      data.templates.map((searchData) =>
        advanceSearchData.push({ id: searchData.id, name: searchData.name })
      );
    });
  } else {
    advanceSearchData = [];
  }

  return (
    <Box sx={{ background: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: isSmallerScreen ? "wrap" : "nowrap",
          alignItems: "center",
          marginLeft: isSmallerScreen ? 0 : 40,
        }}
      >
        <Box
          sx={{
            marginBottom: isSmallerScreen ? 1 : 0,
            marginRight: isSmallerScreen ? 1 : 2,
            minWidth: isSmallerScreen ? 100 : 150,
          }}
        >
          <Select
            value={domain}
            onChange={handleDomainChange}
            displayEmpty
            sx={{ width: "100%" }}
          >
            <MenuItem value="" disabled>
              Topic Domain
            </MenuItem>
            <MenuItem value="Technical">Technical</MenuItem>
            <MenuItem value="HealthCare">Healthcare</MenuItem>
            <MenuItem value="Financial">Financial</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            marginBottom: isSmallerScreen ? 1 : 0,
            marginRight: isSmallerScreen ? 1 : 2,
            minWidth: isSmallerScreen ? 100 : 150,
            marginLeft: isSmallerScreen ? 0 : 10,
          }}
        >
          <Select
            value={articleType}
            onChange={handleArticleTypeChange}
            displayEmpty
            sx={{ width: "100%" }}
          >
            <MenuItem value="" disabled>
              Article Type
            </MenuItem>
            <MenuItem value="Listicle">Listicle</MenuItem>
            <MenuItem value="Guide">Guide</MenuItem>
            <MenuItem value="Ebook">E-book</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            marginBottom: isSmallerScreen ? 1 : 0,
            marginRight: isSmallerScreen ? 1 : 2,
            minWidth: isSmallerScreen ? 100 : 200,
            marginLeft: isSmallerScreen ? 0 : 10,
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ width: "100%", marginRight: 1 }}
          />
        </Box>
        <Box
          sx={{
            marginTop: isSmallerScreen ? 1 : 0,
            marginLeft: isSmallerScreen ? 0 : 10,
          }}
        >
          <Button onClick={searchAdvancedTopics} variant="contained">
            Search
          </Button>
        </Box>
      </Box>
      <GoogleRecaptcha />
      {advanceSearchData.length > 0 && (
        <Box sx={{ backgroundColor: "white" }}>
          <ShowFilterData results={advanceSearchData} />
        </Box>
      )}
    </Box>
  );
};

export default SearchFilters;
