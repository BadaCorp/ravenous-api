class Yelp {
  private baseUrl: string;
  private yelpApiKey: string;

  constructor(baseUrl: string, yelpApiKey: string) {
    this.baseUrl = baseUrl;
    this.yelpApiKey = yelpApiKey;
  }

  getBaseUrl = () => {
    return this.baseUrl;
  };

  getBusinesses = async (req, res) => {
    const { term, location, sort_by } = req.query;

    const response = await fetch(
      `${this.baseUrl}?term=${term}&location=${location}&sort_by=${sort_by}`,
      {
        headers: {
          Authorization: `Bearer ${this.yelpApiKey}`,
        },
      }
    );

    const jsonResponse = await response.json();
    console.log("response: ", jsonResponse);
    res.status(200).send(jsonResponse);
  };
}

export default Yelp;
