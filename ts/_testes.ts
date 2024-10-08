interface User {
    username: string;
    passwordHash: string;
}

const users: User[] = [
    { username: 'paulo', passwordHash: '2004' },
    { username: 'user2', passwordHash: 'password2' }
];

// Simulação de validação de hash de senha (não segura !!!)
function validatePassword(inputPassword: string, storedPasswordHash: string): boolean {
    return inputPassword === storedPasswordHash;
}

function login(username: string, password: string): string {
    const user = users.find(user => user.username === username);

    if (!user) {
        return 'Usuário não encontrado.';
    }

    if (!validatePassword(password, user.passwordHash)) {
        return 'Senha incorreta.';
    }

    // Redireciona para a página index.html após login bem-sucedido
    window.location.href = 'index.html';
    return 'Login bem-sucedido.';
}

// Exemplo de uso
const usernameInput = 'user2';
const passwordInput = 'password2';

const loginMessage = login(usernameInput, passwordInput);
console.log(loginMessage);
