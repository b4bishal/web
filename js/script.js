onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
let a = document.getElementById("btnno");
function yess(){
  alert("I promise to stand you  in any situation.💗💗💗 Bacha Vayo timi lai mero");
}
function noo(){
  a.style.display='none';
  alert("Pleaseeeeeeeeee🥹, aba ta no option ne harayo");
  
  
}