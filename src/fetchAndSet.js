require("dotenv").config();

const fetchAndSet = async ({ url, setter }) => {
  fetch("https://api.twitch.tv/helix" + url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      "Client-id": process.env.CLIENT_ID,
    },
  })
    .then((res) => handleNetworkErrors(res))
    .then((res) => console.log(res.json()));
};

export default fetchAndSet;
