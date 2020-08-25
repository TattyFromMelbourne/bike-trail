# bike-trail
React.js and Google Maps integration

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![react package: v16.13.1](https://img.shields.io/badge/react%20package%3A-%20v16.13.1-blue.svg?style=flat)](https://www.npmjs.com/package/react)
[![google-map-react package: v2.0.8](https://img.shields.io/badge/google--map--react%20package-v2.0.8-blue.svg?style=flat)](https://www.npmjs.com/package/google-map-react)

### Demo

[https://www.lensoftware.com/presentations/2018-05-28/](https://www.lensoftware.com/presentations/2018-05-28/)

### Author

Tatiana Lenz

### License

[GPLv3 Licence](https://opensource.org/licenses/GPL-3.0)

### Installation

```bash
git clone https://github.com/TattyFromMelbourne/bike-trail
cd bike-trail
npm install
touch .env
```

You will also need to define the following environment variable in your  *__.env__* file:-

```
REACT_APP_GOOGLE_API_KEY='<your Google Maps API Key>'
```

Please also take a look at the *__package.json__* file and change the following line to what is appropriate for your environment:-

```bash
"homepage": "https://lensoftware.com/presentations/2018-05-28/"
```

You may also want to change the following lines in the *__App.css__* file to point to your server (or keep as is i.e. the Google Maps marker images will continue to be served from lensoftware.com):-
```
-webkit-mask: url("https://www.lensoftware.com/presentations/2018-05-28/assets/images/marker.svg") no-repeat center;
mask: url("https://www.lensoftware.com/presentations/2018-05-28/assets/images/marker.svg") no-repeat center;
```

Like any react app created with `create-react-app`, to run in development mode:-

```bash
npm start
```

and to create a production build:-

```bash
npm run build

```
