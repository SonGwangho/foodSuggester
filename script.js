onload = () => {
  selectFood();
};

function selectFood() {
  const foodDiv = document.getElementById("food");
  fetch("./food.json")
    .then((response) => response.json())
    .then((foodList) => {
      const food = foodList[Math.floor(Math.random() * foodList.length)];
      foodDiv.innerText = food;
    });
}
