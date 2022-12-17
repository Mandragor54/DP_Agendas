Pour lancer le front : cd Frontend/ + npm start
Pour lancer le back : cd Backend / + node index.js

Problème actuel : Quand on appuye sur "Créer un compte" dans la page d'inscription, le front (sur le port 8500) est sensé envoyé un objet rassemblant le contenu des inputs "Email" et "Mot de passe" au serveur back (sur la port 8000). Hors lorsque c'est fait, rien ne se produit. Erreur renvoyée par la console du navigateur : "POST http://localhost:8000/api/accounts	[HTTP/1.1 404 Not Found 9ms]"
