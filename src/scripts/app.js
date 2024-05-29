document.addEventListener("DOMContentLoaded", () => {
  const jokePlace = document.getElementById("jokePlace");
  const btn = document.getElementById("btn");
  const loaader = document.querySelector(".loader");

  const randomJoke = async () => {
    loaader.classList.remove("hidden-loader");

    jokePlace.innerText = "";

    const giveJoke = await fetch(
      "https://candaan-api.vercel.app/api/text/random"
    );
    const joke = await giveJoke.json();

    setTimeout(() => {
      jokePlace.innerText = joke.data;

      loaader.classList.add("hidden-loader");
    }, 500);
  };

  btn.addEventListener("click", randomJoke);

  randomJoke();
});
