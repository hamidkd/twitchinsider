require("dotenv").config();

const fetchAndSet = async ({ url, setter }) => {
  fetch("https://api.twitch.tv/helix" + url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      "Client-id": process.env.CLIENT_ID,
      'accept': 'application/vnd.twitchtv.v5+json'
    },
  })
    .then(handleNetworkErrors)
    .then((res) => {
        console.log(res.json().data);
        setter(res.json().data)
    });
};

const handleNetworkErrors = (res) => {
  if (!res.ok) {
    alert(res.statusText);
  }
  return res;
};

export default fetchAndSet;
