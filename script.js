
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Cria um objeto 
        const formData = new FormData(form);

        // Converte o FormData para um objeto JavaScript
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Converte o objeto JavaScript para uma string JSON
        const jsonString = JSON.stringify(formObject, null, 2);

        //console
        console.log(jsonString); //Exibir console

        messageDiv.textContent = "Cadastro realizado com sucesso!";

    });
});