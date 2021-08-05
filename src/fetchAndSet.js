require("dotenv").config();

const fetchAndSet = async ({ url, setter }) => {
  fetch("http://localhost:8000/proxyapi" + url, {
    method: "GET",
    headers: {
      Authorization: "Bearer drrnmb0fmdca9y7haqeam7cbltzywu",
      "Client-id": "u7t2o9a71cdfrhtb4m7janstgmwymt",
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
