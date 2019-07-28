# bike-trail
React.js and Google Maps integration

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![react package: v16.8.6](https://img.shields.io/badge/react%20package%3A-%20v16.8.6-blue.svg?style=flat)](https://www.npmjs.com/package/react)
[![google-map-react package: v1.1.4](https://img.shields.io/badge/google--map--react%20package-v1.1.4-blue.svg?style=flat)](https://www.npmjs.com/package/google-map-react)

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

To run in development mode:-

```bash
npm start
```
To make a production build, edit the *__package.json__* file and change the following to what is appropriate for your environment:-

```bash
"homepage": "https://lensoftware.com/presentations/2018-05-28/"
```

and then go ahead and run the build:-

```bash
npm run build

```
