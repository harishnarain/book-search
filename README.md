# Book Search - Yet another book search

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

For this assignment, we create a Google Books search with React. This is meant to be a full stack app which has an accompanying CRUD API for managing saved searches. The accompanying API is in a separate repository.

## Table of Contents

- [Book Search - Yet another book search](#book-search---yet-another-book-search)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [License](#license)
  - [Contributing](#contributing)
  - [Screenshots](#screenshots)
  - [Questions](#questions)

## Installation

1. Deploy saved book search API from repository: https://github.com/harishnarain/saved-book-search-api

2. Clone this GitHub repository

   ```
   git@github.com:harishnarain/book-search.git
   ```

3. Install all dependent npm packages

   ```
   npm install --save
   ```

4. Run the development server

   ```
   npm start
   ```

5. If deploying to a hosting platform follow the instructions of that platform for deploying React apps

## Usage

1. In search input box type in search criteria
2. Navigate the pagination
3. Click save icon to save a single book or select multiple results and click save in the toolbar to save multiple results.
4. Click Saved Search from Navigation Bar
5. Click delete icon to delete single search result or select multiple results and click delete in toolbar to delete multiple results.

A demo of the application is available at: https://thawing-stream-76923.herokuapp.com/

## Features

- Debounced search queries
- Sorting in ascending or descending order
- Enhanced pagination with ability to select rows per page
- Shared state management with Redux
- Asynchronous data fetching provided by Redux-Saga
- Using purely functional components and React Hooks
- Using Material-UI

## License

This project uses the MIT license

## Contributing

Pull requests are welcome

## Screenshots

**Home Page**

![BookSearch1](https://github.com/harishnarain/book-search/blob/main/booksearch1.png?raw=true)
![BookSearch2](https://github.com/harishnarain/book-search/blob/main/booksearch2.png?raw=true)

## Questions

Checkout my GitHub [profile](https://github.com/harishnarain)

Please feel free to email at: <harishnarain@gmail.com>
