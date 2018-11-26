import {AUTH} from './firebase.js';

AUTH.onAuthStateChanged(function(user) {
    if (user) {
        document.querySelector('#logado').style = 'display: none';
        document.querySelector('#btnSair').style = 'display: block';
        console.log('logado');
    } else {
        console.log('nao logado');
    }
});

export const getIdUsuario = function() {
    return new Promise(function(resolve) {
        AUTH.onAuthStateChanged(function(user) {
            resolve(user.uid);
        });
    });
};

export const login = function(email, senha) {
    AUTH.signInWithEmailAndPassword(email, senha)
        .then(function() {
            window.location.replace('index.html');
        })
        .catch(function(error) {
            document.querySelector('#msgError').style = 'display: block';
        });
};

export const logout = function() {
    AUTH.signOut()
        .then(function() {
            document.querySelector('#btnSair').style = 'display: none';
            document.querySelector('#logado').style = 'display: block';
            console.log('Deslogou');
        });
};

export const cadastro = function(email, senha) {
    AUTH.createUserWithEmailAndPassword(email, senha)
        .then(function() {
            window.location.replace('index.html');
            console.log('sucesso');
        })
        .catch(function(error) {
            console.log(error);
        });
};

export const deletar = function() {
    const USER = AUTH.currentUser;
    USER.delete()
        .then(function() {
            window.location.replace('index.html');
        });
};

export const alterarSenha = function(senha, confirmSenha) {
    if (senha === confirmSenha) {
        AUTH.currentUser.updatePassword(senha)
            .then(function() {
                console.log('error'); // caso funcione
            })
            .catch(function(error) {
                // caso nao funcione
            });
    } else {
        // caso não funcione
    }
};
