onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
let a = document.getElementById("btnno");
function yess(){
  alert("I promise to cherish you every day, to support you through life's joys and challenges, and to build our future together with love and understanding. Today marks the beginning of our journey, and I vow to always be by your side.💗💗💗 Bacha Vayo timi lai mero");
}
function noo(){
  a.style.display='none';
  alert("Pleaseeeeeeeeee🥹, aba ta no option ne harayo");
  
  
}
