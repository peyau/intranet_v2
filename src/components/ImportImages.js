// importImages.js
const imagesContext = require.context(
  "../assets/img/cards",
  false,
  /\.(png|jpe?g|svg)$/
);

const images = imagesContext.keys().reduce((acc, path) => {
  // Extrait le nom du fichier sans l'extension pour l'utiliser comme clé
  const key = path.match(/\.\/(.*\.(png|jpe?g|svg))/)[1].replace(/\.\w+$/, "");
  acc[key] = imagesContext(path);
  return acc;
}, {});

export default images;
