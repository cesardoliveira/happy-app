# Happy App
This is a front-end application as part of project that was built during the event Next Level Week 3 by Rocketseat. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Packages & Libs
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* [react-icons](https://react-icons.github.io/react-icons/)
* [axios](https://github.com/axios/axios#installing)
* [Leaflet](https://leafletjs.com/index.html)
* [React Leaflet](https://react-leaflet.js.org/)


## Clone `happy-app`
Clone repo, in the project directory, you can run:

```
git clone git@github.com:cesardoliveira/happy-app.git
cd happy-app
```

## Install Dependencies

### npm

```git
npm install
```

### Yarn

```git
yarn install
```

This command installs a package, and any packages that it depends on.


## Getting Started
Before you start make sure to create a Mapbox free account to get your token, if you do not have one.

### Mapbox
* [`Mapbox Tools`](https://docs.mapbox.com/api/overview/)
The Mapbox APIs allow you to programmatically access Mapbox tools and services. To run this application you need to create a Mapbox free account to get your token.

```bash
# .env

REACT_APP_MAPBOX_TOKEN=your_access_token
```
Also, you can check the file `.env.example` with all environment variables in the project and examples of how to fill up your `.env` file.

### Development

### npm

```git
npm start
```

### Yarn

```git
yarn start
```

Runs the app in the development mode.<br />
Open [`http://localhost:3000`](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.