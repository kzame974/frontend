# Spécifiez une image de base
FROM node:18.13

# Créez un répertoire pour le projet
RUN mkdir -p /usr/src/frontend

# Définissez le répertoire de travail
WORKDIR /usr/src/frontend

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
