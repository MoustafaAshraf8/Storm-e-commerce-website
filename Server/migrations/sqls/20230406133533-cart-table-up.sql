create table cart
(
   cartID serial,
   clientID INTEGER,
   CONSTRAINT foreign_key FOREIGN KEY (clientID) REFERENCES client (clientID) on delete CASCADE,
);