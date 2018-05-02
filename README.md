# Weather-node
Fetch the temperature using address or zipcode. Here I have used axios promise methods in app-promise.js and used legacy callback feature in app.js. Both methods return the same output but have different methods and functionality. I personally feel you should use promise feature as it is easy to deal with the error handling when using multiple chaining callbacks.

## Requirement
- [Node.js](https://nodejs.org/en/ )
- Application dependencies NPM modules

### Steps to download required modules:
1. Open node command promt

2. Guide to root Weather-node folder using cd command.
```sh
$ cd Desktop/Weather-node
```

3. Install dependencies modules
```sh
$ npm install
```

## Commands for application

1. To get the temperature using Axios module(promise feature used). Type: node app-promise.js -a (zipcode or address). The method display the temperature in fahrenheit.
```sh
$ node app-promise.js -a 118833 
```

2. To get the temperature using callback methods. Type: node app.js -a (zipcode or address). The method display the temperature in celcius.
```sh
$ node app.js -a 118833 
```

License
----

MIT
