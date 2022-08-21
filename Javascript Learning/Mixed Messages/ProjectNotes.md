# Mixed Messages Portfolio Project - Project Plan

## Overview (from Codecademy)
For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

### Objectives
- Build a message generator program using JavaScript
- Use Git version control
- Use command line
- Develop locally on your computer

### Tools
- Javascript
- Git Repo & GitHub
- Command line

## Project Goal
Create a generator that displays a random combination of Cards Against Humanity cards.

This will be built in JavaScript using Node.js.

The data will be held in a SQL database which the program will access.

## Initial Setup

### Version Control
A new branch will be established at the kick-off of the project and commits will be made to the branch as the project progresses. Once the project is complete, the branch will be merged into the main branch of the repo.

### Files
The project should be contained to one JavaScript file which will handle the entire set of code.

### Database
The database will initially be created as an MS SQL Server database and will be populated with the data from the Cards Against Humanity excel file.

If another type of database is preferred, the data will be ported to the new database format.

## Learnings

### Database
- MS Sql Server was not the right choice of database for the project. The database has now been converted to a Sqlite3 database.
- A free tool was used to convert the MS Sql Server database to a Sqlite3 database.
- Sqlite3 runs natively on MacOS

### Files
- The project needed an additional file as a utility for returning the correct data as an array.


## Order of Play

1. Declare blank array for the black card
2. Declare blank array for the white card
3. Find maximum id number of black card table
4. Find maximum id number of white card table
5. Random number generator to find black card
6. Check number of white cards that black card expects
7. Return number of required white cards