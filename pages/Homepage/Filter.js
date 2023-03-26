import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchFilters from "./SearchFilters";

const Filter = () => {
  const [domain, setDomain] = useState("");
  const [articleType, setArticleType] = useState("");

  return (
    <Box sx={{ backgroundColor: "#fff"}}>
    <Box>
      <SearchFilters
        domain={domain}
        articleType={articleType}
        setDomain={setDomain}
        setArticleType={setArticleType}
      />
      </Box>
    </Box>
  );
};

export default Filter;
