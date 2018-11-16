# Duplicates

## Specification

Write a program to classify duplicates in a list.
First generate a list of N + 1 ints with values ranging between 1 and N.
Therefore there must be at least one duplicate in the list.
Write a function that will find and print out all of the integers that are duplicated.

## Explanation

Mocha and Chai were used for Unit Testing of the Duplicates class.
Yarn was used as package manager.
JavaScript ES6 was used for the implementation of the code challenge.
The Duplicates class has the following structure:
* constructor: default value N = 1000000. 2 attributes: list and duplicates, both arrays
* createList(N)
* findDuplicates()
* get printedList()
* get printedDuplicates()

## How to Run It

You can run the program from the command line like this (where N is the number parameter):
* yarn main N
* node js/main.js N

You can run the tests from the command line like this:
* yarn test

## Tech Stack

* JavaScript ES6
* Mocha
* Chai
* Yarn / NPM

## Project Structure

* js
    * main.js
* test
    * duplicates-test-spec.js
* package.json
* README.md
* LICENSE

## Build Version

0.0.1

## About Me

Kevin Martínez Montero

Senior Front End Engineer

Currently living in Costa Rica
