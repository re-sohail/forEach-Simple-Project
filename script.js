let teams = document.querySelectorAll(".team");


teams.forEach((val) => {

  val.addEventListener("mouseenter", () => {
    val.style.background = "red";
    val.childNodes[5].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.style.background = "transparent";
    val.childNodes[5].style.opacity = 0;
  });

  val.addEventListener("mousemove", (dets) => {
    val.childNodes[5].style.left = dets.x - 30 + "px";
    val.childNodes[5].style.top = dets.y - 200 + "px";
  });
});







// teams.addEventListener("mousemove", (dets)=>{
//     // img.style.opacity = 1
//     console.log(dets.x);
//     img.style.left = dets.x-40+"px"
//     img.style.top = dets.y-200+"px"
// })
// teams.addEventListener("mouseenter", ()=>{
//     img.style.opacity = 1
// })
// teams.addEventListener("mouseleave", ()=>{
//     img.style.opacity = 0
// })




// let teams = document.querySelectorAll(".team");

// teams.forEach((team) => {
//   const img = team.querySelector('.img');

//   team.addEventListener("mouseenter", () => {
//     team.style.background = "red";
//     img.style.opacity = 1;
//   });

//   team.addEventListener("mouseleave", () => {
//     team.style.background = "transparent";
//     img.style.opacity = 0;
//   });

//   team.addEventListener("mousemove", (event) => {
//     const rect = team.getBoundingClientRect();
//     img.style.left = (event.clientX - rect.left - 50) + "px"; // Adjust the offsets as needed
//     img.style.top = (event.clientY - rect.top - 50) + "px";   // Adjust the offsets as needed
//   });
// });