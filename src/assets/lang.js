import i18next from 'i18next';

await i18next.init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      en: {
        translation: {
          "key": "hello world"
        }
      }
    }
  });
  // initialized and ready to go!
  document.getElementById('about').innerHTML = i18next.t('key');