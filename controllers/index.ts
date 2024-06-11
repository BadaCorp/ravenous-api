import Yelp from "./yelp";

const yelpAPI = new Yelp(process.env.BASE_URL, process.env.API_KEY);

export default yelpAPI;
