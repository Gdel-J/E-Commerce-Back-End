# E-Commerce-Back-End


![MIT](https://img.shields.io/badge/license-MIT-green)


## Description


This is a backend application for an ecommerce site that uses Sequelize and MySQL database. 
Using insomnia, a user can interact with the backend to view the products, categories, and tags aswell as use CRUD methods to alter the databse.


## Table of Contents 


 
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  7. [Features](#features)
  8. [Credits](#credits)

## Installation

 

                                                First:

In order to use this project make sure to have the following programs installed on your computer:

1. VS Code

2. GitBash

3. Node.js

4. Mysql2

5. dotenv




                                                Second:

In order to initialize the project:


Copy Link: click the `Code` button within this GitHub SSH repository to copy link

Clone: inside GitBash, use the command `git clone paste link here`



link to application : 

https://github.com/Gdel-J/E-Commerce-Back-End.git




The walkthrough video link:


https://drive.google.com/file/d/12AOtogGanIOf4B5v8AceuDC3uyZBC27R/view   

(you might want to change the video quality in settings)



                                                 Third: 

If you don't have the dependencies :
In the terminal, use the command `npm init -y` to initialize and create a `package.json file` .

Then you will have to install 
-some node_modules and `package-lock.json` dependencies by running `npm install `.


You will need to install `npm i mysql2` 

Also you will need to install `npm i dotenv`

Create a `.env file` in the root directory of the app.
Create three variables in the `.env file`:
`DB_NAME`=ecommerce_db
`DB_USER`=[your MySQL username]
`DB_PW`=[your MySQL password]

 


Then, you will need to run :

`mysql -u root -p`

then
`SOURCE db/schema.sql` to create the database and initialize the database.


TIPS: Open a second time, the repository in the integrated terminal and run : ``node seeds/index.js` to seed the databse.(you don't have to close the frist one in the case you want to interact with mysql, otherwise you can close mysql and then run  the two node actions)



Finally, you will want to run `node server.js` to start the app.



## Usage


-Open the terminal  and run the command `npm start` or `node server`,




In insomnia:

-Categories

![Screenshot 1](https://github.com/Gdel-J/E-Commerce-Back-End/assets/120201085/0723b9ae-2962-4509-9329-05a5acd70eb0)



-Products :

![Screenshot 2](https://github.com/Gdel-J/E-Commerce-Back-End/assets/120201085/2354f1ff-c07d-4be2-9db7-cd9923042304)



- Tags:

![Screenshot 3](https://github.com/Gdel-J/E-Commerce-Back-End/assets/120201085/6b8af727-f3c6-43a4-a3d5-ae754b1b0743)



Walkthrough video: 

https://github.com/Gdel-J/E-Commerce-Back-End/assets/120201085/c35d26e3-a03a-486e-8563-3db6996887e2


## License

This project is licensed under the MIT license.

## How to Contribute

Please contact me

## Tests

N/A

## Questions

If you have any questions about this repository, you might want to open an issue or contact me  at (email:`jesdelevecchio@gmail.com`)
Also you can find more of my work at (`https://www.github.com/Gdel-J`).

## Features

N/A


## Credits

This application has been made by Gérard Del Vecchio during the UCF bootcamp program,  a starter code was provided.