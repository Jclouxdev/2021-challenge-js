// Example URL with parameters : https://monapi.com/?param1=toto&param2=tata
/*In this exercise, we will focus on building complex async flows with promises.

Create a getJSON function that takes 2 parameters:

path, that will be the url called by your function
params optional, that will be the search parameters appended to your url
getJSON must construct a valid url with the path and stringified params and call fetch with it. If the response is not ok, your function must throw an error using the response status message.

The response body must then be read and parsed from json.

The parsed object contains one of those 2 properties:

"data" the actual data to return
"error" the error message to throw*/

const getJSON = async (path, params = {}) => {
  const parsedParams = Object.entries(params)
    .reduce((acc, [key, value]) => {
      acc.push(encodeURI(key) + "=" + encodeURI(value).replace("20%", "+"));
      return acc;
    }, [])
    .join("&");
  const url = [path, "?", parsedParams].join("");

  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      throw new Error(e.message);
    });

  return data;
};