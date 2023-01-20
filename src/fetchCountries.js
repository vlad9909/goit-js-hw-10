const flatpickr = require('flatpickr');
import Notiflix from 'notiflix';

export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(function (error) {
      Notify.failure('Oops, there is no country with that name');
      console.log('404:' + error);
    });
}
