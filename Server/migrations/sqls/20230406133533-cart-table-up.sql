create table cart
(
   clientID INTEGER,
   cartID INTEGER,
   CONSTRAINT foreign_key FOREIGN KEY (clientID) REFERENCES client (clientID) on DELETE CASCADE,
   constraint unique_cart UNIQUE (cartID)
);