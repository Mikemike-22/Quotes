# QuotesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

##Author

Michael Kipkorir Cheruiyot

##Project Description
This is an Angular applicatin that allows a user to post a quote. The quote contains details like the author of the quote and the name of person postung the quote. The application allows users to like or dislike the quote.

###Project Setup Instructions
Use these command to use the project
* git clone https://github.com/Mikemike-22/Quotes.git
* cd quotes-app
* code. //open using Visual Studio editor  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

###Technologies used
Technologies used include:
1. Angular
2. JavaScript
3. Bootstrap
4. Typescript
5. CSS

##Project BDD
| INPUT                                                    | BEHAVIOUR                             | OUTPUT                                         |
|----------------------------------------------------------|---------------------------------------|------------------------------------------------|
| Quote, Author of Quote, Posted By, Date Posted,Add quote | loads the input to quote-form         | Adds a new quote and the details of the quote. |
| Details                                                  | Toggles quote details                 | Will show all the details of the quote         |
| Likes                                                    | calls upVote function                 | Adds number of users who like the quote        |
| Dislikes                                                 | calls downVote function               | Adds number of users who dislikes the quote    |
| Delete                                                   | Will run a function to delete a quote | Output a prompt                                |
##Contact Me
for any other querris regarding the application...
mikor22@gmail.com

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

###License &Copyright infromation
Copyright (c) 2019 Michael Kipkorir Cheruiyot

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.