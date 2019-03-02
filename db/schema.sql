-- Create the database task_saver_db and specified it for use.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers(

id int AUTO_INCREMENT NOT NULL,
burgerName varchar(100) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);
