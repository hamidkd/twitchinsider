require("dotenv").config();

const fetchAndSet = async ({ url, setter }) => {
  // fetch("https://twitchinsider-proxyserver.herokuapp.com/proxyapi" + url, {
  //   method: "GET",
  //   headers: {
  //     Authorization: "Bearer drrnmb0fmdca9y7haqeam7cbltzywu",
  //     "Client-id": "u7t2o9a71cdfrhtb4m7janstgmwymt",
  //   },
  // })
  fetch("https://api.twitch.tv/helix" + url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      "Client-id": `${process.env.CLIENT_ID}`,
      accept: "application/vnd.twitchtv.v5+json",
    },
  })
    .then(handleNetworkErrors)
    .then((res) => res.json())
    .then((json) => setter(json.data));
};

const handleNetworkErrors = (res) => {
  if (!res.ok) {
    alert(res.statusText);
  }
  return res;
};

export default fetchAndSet;
