$(document).ready(function () {
    
    var nameElement = $('#nome');
    var usernameElement = $('#username');
    var avatarElement = $('#avatar');
    var reposElement = $('#repositorios'); 
    var followersElement = $('#seguidores');
    var followingElement = $('#seguindo');
    var linkElement = $('#link');

    
    fetch('https://api.github.com/users/RodrigoRiRocha')
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error("Erro ao buscar os dados do Git Hub.");
            }
            return resposta.json();
        })
        .then(function (json) {
            
            nameElement.text(json.name || 'Nome não disponível');
            usernameElement.text(json.login || 'Usuário não disponível');
            avatarElement.attr('src', json.avatar_url || 'https://via.placeholder.com/180x180');
            followingElement.text(json.following || 0);
            followersElement.text(json.followers || 0);
            reposElement.text(json.public_repos || 0);
            linkElement.attr('href', json.html_url || '#');
        })
        .catch(function (error) {
            console.error("Erro ao buscar dados do GitHub:", error);
            alert("Não foi possível carregar os dados do usuário.");
        });
});
