create table cart
(
   clientID INTEGER,
   cartID INTEGER primary key,
   CONSTRAINT foreign_key FOREIGN KEY (clientID) REFERENCES client (clientID) on DELETE CASCADE
);