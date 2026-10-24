# Gabriel Timer

Application web (PWA) de minuteur d’exercices pour la kinésithérapie : programmes par patient, mode libre, pathologies, respiration et suivi de progression.

Version à l’interface modernisée (accueil et outils administrateur), basée sur le projet GabrielTimer.github.io.

## Mettre en ligne avec GitHub Pages

1. Crée un dépôt sur GitHub (par exemple `gabriel-timer`).
2. Dépose tout le contenu de ce dossier à la racine du dépôt (**Add file → Upload files**, ou `git push`).
3. Va dans **Settings → Pages**, choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Une à deux minutes plus tard, l’app est en ligne sur `https://<ton-pseudo>.github.io/gabriel-timer/`.

Les chemins sont relatifs : l’app marche dans un dépôt `<pseudo>.github.io` comme dans un dépôt classique.

## Fichiers à compléter

Ces éléments sont utilisés par l’app mais ne faisaient pas partie des fichiers récupérés :

- `exercises/js/cloud.js` : connexion à la base de données (Firebase) des programmes patients
- `exercises/data/exercises.json` et `exercises/data/program_templates.json`
- `exercises/images/…` et `exercises/glossary.html`
- `images/eva/` : images de l’échelle de douleur (page de fin)
- `respir/index.html` : module de respiration

Sans eux, l’accueil s’affiche mais les programmes, les images et RespiR ne fonctionnent pas.

## Accès administrateur

Appuie trois fois sur le logo de l’accueil pour ouvrir la connexion. Le mot de passe est écrit en clair dans `login.html` (constante `PASSWORD`) : change-le avant de publier.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil |
| `style.css`, `home.css` | Styles communs et de l’accueil |
| `timer.html` | Minuteur de séance |
| `config.html` | Création d’un programme |
| `cloud.html` | Programmes du patient |
| `progression.html`, `historique.html` | Suivi |
| `admin_tools.html`, `patients.html`, `programmes_admin.html` | Espace administrateur |
| `sw.js`, `manifest.json` | Installation sur téléphone et hors ligne |
