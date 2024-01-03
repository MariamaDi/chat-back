# chat-back

Aperçu
Le référentiel Chatbox Back est responsable de la logique backend de l'application Chatbox. Il comprend du code Node.js, des tests et un flux de travail de déploiement d'image Docker.

Workflow
Le projet utilise les Actions GitHub pour l'intégration continue. Le flux de travail défini dans le fichier .github/workflows/main.yml effectue les étapes suivantes :

Construction et Test :

Récupère le code.
Installe les dépendances Node.js et les met en cache.
Construit le code source.
Exécute les tests avec différentes versions de Node.js.
Déploiement :

#Vérifie si la construction a réussi.
Si l'événement est une pull request sur la branche develop, déploie une image Docker.
Démarrage
Pour commencer avec le projet Chatbox Back, suivez ces étapes :

Cloner le référentiel :


git clone https://github.com/votre-nom-utilisateur/chatbox-back.git
cd chatbox-back

Installer les dépendances :

npm install
Construire le code source :

npm run build
Exécuter les tests :

npm test
