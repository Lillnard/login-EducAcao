// // Seleciona todos os elementos input dentro das labels
// const inputs = document.querySelectorAll("label input");

// // Para cada input, adiciona um event listener para o evento de foco
// inputs.forEach((input) => {
//   input.addEventListener("focus", () => {
//     // Seleciona o elemento span irmão do input
//     const span = input.previousElementSibling;

//     // Adiciona a classe span-active
//     span.classList.add("span-active");
//   });

//   // Adiciona um event listener para o evento de desfoque (blur)
//   input.addEventListener("blur", () => {
//     // Seleciona o elemento span irmão do input
//     const span = input.previousElementSibling;

//     // Remove a classe span-active se o input estiver vazio
//     if (input.value === "") {
//       span.classList.remove("span-active");
//     }
//   });
// });
