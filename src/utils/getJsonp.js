export default uri => {
  return new Promise((resolve, reject) => {
    const id = Math.round(10000 * Math.random());
    const callbackName = `jsonpcallback${id}`;

    window[callbackName] = data => {
      delete window[callbackName];
      const element = document.getElementById(id);

      element.parentNode.removeChild(element);
      resolve(data);
    };

    const src = `${uri}&callback=${callbackName}`;
    const script = document.createElement('script');

    script.src = src;
    script.id = id;
    script.addEventListener('error', reject);
    (document.getElementsByTagName('head')[0] || document.body || document.documentElement).appendChild(script);
  });
};
