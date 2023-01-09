# Spécifiez une image de base
FROM node:14-alpine

# Créez un répertoire pour le projet
RUN mkdir -p /usr/src/app

# Définissez le répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers du projet dans le répertoire du container
COPY . .

# Installez les dépendances du projet
RUN npm install

# Compilez les fichiers TypeScript en JavaScript
RUN npx tsc

# Exposez le port de l'application React Native
EXPOSE 3000

# Définissez le script d'entrée du container
CMD ["npm", "start"]
