document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('ERRO!!!');

    // Verificação básica
    if (email === "" || password === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Formato de email inválido.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "A senha deve ter mais de 5 caracteres!";
        return;
    }

    // Login bem-sucedido
    errorMessage.textContent = "";
    alert("Cadastrado com sucesso!");
    // Aqui você pode redirecionar ou fazer outra lógica
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}