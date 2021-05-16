document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector(".navbar").classList.toggle("active");
  document.body.classList.toggle("overflow-hidden");
  document.querySelector("#layer").classList.toggle("active");
});
