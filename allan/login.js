document.getElementById('botaoLogin').addEventListener('click', function () {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    fetch('ws/loginJson.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(user => user.login === login && user.login === login);
            if (user) {
                document.getElementById('mensagemBemVindo').innerText = `Seja bem-vindo, ${user.nome}!`;
            } else {
                document.getElementById('mensagemBemVindo').innerText = 'Login ou senha incorretos.';
            }
        })
});
