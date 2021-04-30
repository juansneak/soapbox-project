# Soapbox Project

At SoapBox, we love Animated GIFs. So much so, we want to be able to quickly see the top gifs of the day. We’d like you to build us a page that returns the trending gifs on giphy.

## Author

[Juan Morantes](https://github.com/juansneak)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/juansneak/soapbox-project.git` this repository
* `cd soapbox-project`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Things to improve

* Create an .env file and add the Giphy credentials there. We could use [ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv)
* Add a select in the Rating filter inside the FormFilter component. We could use [ember-select](https://www.npmjs.com/package/ember-select)
* Improve the FormFilter component so we can customize the fields. The idea is to be able to reuse the FormFilter component and add as many fields as we need.
* Add some form validations in the FormFilter component.
* Improve the NavBar component so we can pass as parameter the links we want to show in the navigation.
* Add a unit test for the serializer.
* Use nested routes.
* Use a pagination to show the trending list.
* Add a header and a footer and improve the design in general.