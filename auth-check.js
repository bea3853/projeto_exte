// auth-check.js
firebase.auth().onAuthStateChanged((user) => {
    const publicPages = ['index.html', '']; // Páginas que não requerem login
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();
    
    // Se usuário NÃO está logado e a página NÃO é pública
    if (!user && !publicPages.includes(currentPage)) {
        window.location.href = 'index.html';
        return;
    }
    
    // Se usuário ESTÁ logado e está na página de login
    if (user && currentPage === 'index.html') {
        window.location.href = 'login.html';
    }
});
