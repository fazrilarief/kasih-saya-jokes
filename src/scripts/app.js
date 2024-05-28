document.addEventListener("DOMContentLoaded", () => {
  const jokePlace = document.getElementById("jokePlace");
  const btn = document.getElementById("btn");

  const randomJoke = async () => {
    const giveJoke = await fetch(
      "https://candaan-api.vercel.app/api/text/random"
    );
    const joke = await giveJoke.json();

    jokePlace.innerText = joke.data;
  };

  btn.addEventListener("click", randomJoke);

  randomJoke();
});
