# Gabriel Timer

Application web (PWA) de minuteur d’exercices pour la kinésithérapie : programmes par patient, mode libre, pathologies, respiration et suivi de progression.

Interface modernisée (accueil et outils administrateur), basée sur le projet GabrielTimer.github.io.

## Mise en ligne

1. Mets tous ces fichiers à la racine d’un dépôt GitHub (`index.html` doit être visible directement dans la liste du dépôt).
2. **Vercel** : *Add New → Project*, importe le dépôt, Framework Preset **Other**, sans commande de build.
   **ou GitHub Pages** : *Settings → Pages*, branche `main`, dossier `/ (root)`.

## Où sont enregistrés les programmes ?

Par défaut, dans le navigateur de l’appareil utilisé (`localStorage`). Tout fonctionne tout de suite, mais un programme créé sur ton ordinateur n’apparaît pas sur le téléphone d’un patient.

### Base de données en ligne (pour partager avec les patients)

1. Va sur https://console.firebase.google.com et crée un projet (gratuit).
2. *Build → Firestore Database → Créer une base*, région `europe-west`.
3. *Paramètres du projet → Vos applications → Web (</>)*, puis copie l’objet `firebaseConfig`.
4. Colle-le dans `exercises/js/cloud.js`, à la place de `const firebaseConfig = null;`.
5. Dans *Firestore → Règles*, définis qui peut lire et écrire. Attention : des règles ouvertes à tous rendent les données des patients lisibles par n’importe qui.

## Accès administrateur

Appuie trois fois sur le logo de l’accueil. Le mot de passe est défini dans `login.html` (constante `PASSWORD`) : change-le. Il reste lisible dans le code source, ce n’est donc pas une vraie protection.

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
| `exercises/` | Exercices, images, données et stockage (`js/cloud.js`) |
| `images/` | Fiches pathologies et échelle de douleur |
| `respir/` | Module de respiration |
| `sw.js`, `manifest.json` | Installation sur téléphone et hors ligne |
