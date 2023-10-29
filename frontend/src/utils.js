export const fetchCards = function (num) {
  let hand = [];

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`/api/?numCardsNeeded=${num}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const data = JSON.parse(result);
      hand = data.data.hand;
      console.log(hand);
    })
    .catch((error) => console.log("error", error));

  return hand;
};
