import _ from 'lodash';
import sass from './assets/css/styles.sass'; // used in webpack.config.js
import DomainName from './components/DomainName';
import Price from './components/Price';
import DomParagraph from './components/DomParagraph';
import DomImg from './components/DomImg';

// image loading
import logoUrl from './assets/img/logo.webp';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));


document.getElementById("domain").append(new DomainName());
document.getElementById("price").append(new Price("Kup za 800", "zł"));
document.getElementById("kontakt").append(
  new DomParagraph("KONTAKT"),
  new DomParagraph("tel. 530 772 177"),
);

document.getElementById('logo').append(new DomImg(logoUrl, "logo", "logo"));