const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");

// ! menuBtn'e tıklanınca nav kısmını aç-kapa yap

menuBtn.addEventListener("click", () => {
     // nav kısmını aç-kapa yapmak için open-nav classını ekle-çıkar
     nav.classList.toggle("open-nav");
});