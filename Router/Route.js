export default class Route {
    constructor(url, title, pathHtml, autorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.autorize = autorize;
    }
}

/*
[]-> Tout le monde peut y accéder 
["disconnected"] -> Réserver aux utilisateurs déconnecté
["client"] -> Réserver aux utilisateurs avec le rôle client 
["admin"]-> Réserver aux utilisateurs avec le rôle admin
["client"," admin"]-> Réserver aux utilisateurs avec le rôle client ou admin
*/