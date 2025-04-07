// Verifica autenticação em todas as páginas protegidas
firebase.auth().onAuthStateChanged((user) => {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Se não está logado e tenta acessar páginas protegidas
    if (!user && !['index.html', ''].includes(currentPage)) {
        window.location.href = 'index.html';
    }
    
    // Se está logado e tenta acessar a página de login
    if (user && ['index.html', ''].includes(currentPage)) {
        window.location.href = 'login.html';
    }
});