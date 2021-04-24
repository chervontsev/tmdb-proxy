# Proxy layer to TMDB

### (!) Disclaimer:

This repo provides a simple example for a proxy to TMDB API, for demonstrational perposes only. The author claims no legal rights to it and does not hold responsibility for it's further application by anybody. If you are going to use this for commercial perposes consult an attorney. Also if you bypass a resourse that is blocked in your country or by your internet provider, this may lead to legal issues. So take care and use responsively :)

Note that most of the links below will be visible for TMDB users only.

### Issue:

When using "The Movie Database API", at some point you might get an error when all requests to the TMDB API just hang or timeout with an message:

```
Error: Network Error
Check the developer tools console, it might have more information on the error.
If you are using an Ad blocker, it is possible your Ad blocker is blocking the request.
```

### Reasons:

One of the reasons for this may be that TMDB servers get blocked depending on your location.
See API support thread for details:
https://www.themoviedb.org/talk/6081ceb52da846006e38ad02?page=1#60832600271671006e67ccd6

### Solution:

If that's the case, it is possible to set a proxy layer, that will call TMDB API from a different server and pass the data to your app.

### The setup:

This is all pretty straight-forward:

1. Copy this repo
1. Setup a cloud app with services like Heroku or Firebase (check details from the cloud provider of your choice)
1. Deploy this proxy app to your cloud
1. Get a link to your new proxy app from the cloud
1. In your code base change https://api.themoviedb.org to your new proxy app
1. Also paste your new proxy app link to your TMDB account > Settings > API > Details > Application URL (https://www.themoviedb.org/settings/api/details)
1. Hit "Save" and you are ready yo go!

Note: `Procfile` in the repo is for Heroku setup. So if you choose some other provider, feel free to drop it or rewrite it :)

Note: In this solution your API Key is not persisted or cached in the proxy and just goes through with the endpoint as a query parameter.

Note: Note that free tiers of cloud providers usually have some limitations for capacity and calls. So be sure to check on this with their documentations and user plans.

### How it works:

Because only one root endpoint is set in `app.js` this proxy app passes all requests and responses to/from TMDB API.

So the failing direct call to
`https://api.themoviedb.org/3/movie/550?api_key=THE_KEY`

Will now work as
`https://your-app.com/3/movie/550?api_key=THE_KEY`

Feel free to setup any additional limitations, enhancements or other settings of your choice : )

### Dependencies:

* ExpressJS - Node.js web application framework (https://expressjs.com)
* Helmet - base security for Express apps (https://www.npmjs.com/package/helmet)
* Http proxy middleware (https://www.npmjs.com/package/http-proxy-middleware)

Check out their official docs to know what they do :)

### Helpful links:

TMDB Homepage -
https://www.themoviedb.org/

API V3 Reference -
https://developers.themoviedb.org/3/getting-started/introduction

API V4 Reference -
https://developers.themoviedb.org/4/getting-started

API support board -
https://www.themoviedb.org/talk/category/5047958519c29526b50017d6

API support, Location error thread -
https://www.themoviedb.org/talk/6081ceb52da846006e38ad02?page=1#60832600271671006e67ccd6

Your API details page -
https://www.themoviedb.org/settings/api/details
