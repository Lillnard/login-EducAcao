const handlesubmit = (event) => {
    event.preventDefault();

    const nome = document.querySelector('input[name=nome]').value;
    const sobrenome = document.querySelector('input[name=sobrenome]').value;
    const cpf = document.querySelector('input[name=cpf]').value;
    const disciplina = document.querySelector('input[name=disciplina]').value;
    const email = document.querySelector('input[name=email]').value;

    fetch('https://api.sheetmonkey.io/form/pjUppHgumYJpwseiAoBj97', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, sobrenome, cpf, disciplina, email }),
    });
}

document.getElementById('cad-prof').addEventListener('submit', handlesubmit);


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
