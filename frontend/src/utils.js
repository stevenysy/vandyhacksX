export const fetchCards = async function (num) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("/api/?numCardsNeeded=7", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const data = JSON.parse(result);
      console.log(data.data.hand);
    })
    .catch((error) => console.log("error", error));
};
