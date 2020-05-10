import React, { useState, useEffect } from "react";

import yelp from "../api/yelp";

export default (searchText, location) => {
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    searchApi();
  }, []);

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchText,
          location: location,
        },
      });
      setResult(response.data.businesses);
    } catch (error) {
      setError("Something went wrong. Please try again !!!");
    }
  };

  return [error, searchApi, result];
};
