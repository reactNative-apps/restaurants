import axios from "axios";

// common instance
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer EKJC-2GOcl1WPFIvB0r-KIliU40oPk0BBHQuUcx48NlwTVT7lyyGatINP0nKuIu9GoWWBnr1N3sy4u71z3fTEjcm72iSB2NXDLeB6SikRyRWu5bmzzLoq-NABnyjXnYx"
  }
});
