const getListings = async () => {

  const url_link =
    "https://hdpdbuh320.execute-api.us-east-1.amazonaws.com/dev/listing-handler-crud?TableName=prod-veteransappdynamodbveteransappdynamodbtableprod52013B35-D3ZVG9RJ6WGL";
  const listings = await fetch(url_link);
  const data = await listings.json();
  return data;

}

export default getListings;
