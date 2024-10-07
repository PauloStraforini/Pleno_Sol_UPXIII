var usuarios = [
    {"login": "paulo", "senha": "2004"},
];

function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "../login.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}