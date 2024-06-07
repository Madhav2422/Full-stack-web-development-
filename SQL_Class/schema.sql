CREATE TABLE USER (
    id VARCHAR(50) PRIMARY KEY,
    username varchar(50) UNIQUE NOT NULL,
    email varchar(50)  NOT NULL,
    password varchar(20)  NOT NULL
);