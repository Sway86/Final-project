DROP DATABASE IF EXISTS TRELLO;
CREATE DATABASE TRELLO;

USE TRELLO;

CREATE TABLE customer
(
    PersonID INT NOT NULL,
    PRIMARY KEY (id),
    DropOff boolean NOT NULL,
    PickUp boolean NOT NULL,
    LastName varchar(225),
    FirstName varchar(225) NOT NULL,
    PhoneNumber INT NOT NULL,
    Address varchar(225) NOT NULL,
    City varchar(225)
);
