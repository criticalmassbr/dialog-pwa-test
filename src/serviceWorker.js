export const registerServiceWorker = () => {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;

    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
          // Registration was successful
          //console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(function (err) {
          // registration failed :(
          //console.log('ServiceWorker registration failed: ', err);
        });
    });
  }
};
