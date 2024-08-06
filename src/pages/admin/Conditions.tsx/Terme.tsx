import Condition from "./Conditions";

const termsContent = `
  <h3>Termes et conditions</h3>

  <h3>Avis de non-responsabilité et limitation de responsabilité</h3>
  <p>Le site Web est fourni tel quel et « tel que disponible » sans aucune garantie, expresse ou implicite. Pickabazar ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux, consécutifs ou punitifs résultant de l'utilisation ou de l'impossibilité d'utiliser le site Web.</p>

  <h3>Propriété intellectuelle</h3>
  <p>Le site Web et son contenu original, ses caractéristiques et ses fonctionnalités sont la propriété de [Votre entreprise] et sont protégés par les lois internationales sur le droit d'auteur, les marques déposées et autres lois sur la propriété intellectuelle.</p>

  <h3>Politique de confidentialité</h3>
  <p>Votre utilisation du site Web est également régie par notre politique de confidentialité, qui peut être consultée [lien vers la politique de confidentialité]. En utilisant le site Web, vous acceptez les pratiques décrites dans la politique de confidentialité.</p>

  <h3>Utilisation du site Web</h3>
  <p>Vous devez avoir au moins [Âge] ans pour utiliser ce site Web. En utilisant le site Web, vous déclarez et garantissez que vous avez au moins [Âge] ans. Vous acceptez d'utiliser le site Web uniquement à des fins légales et d'une manière qui ne porte pas atteinte aux droits d'autrui.</p>

  <h3>Acceptation des conditions</h3>
  <p>En utilisant ce site Web, vous acceptez de vous conformer aux présentes conditions générales et d'être lié par elles. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site Web.</p>
`;

const Terme = () => {
  return <Condition title="Termes et conditions" content={termsContent} />;
};

export default Terme;
