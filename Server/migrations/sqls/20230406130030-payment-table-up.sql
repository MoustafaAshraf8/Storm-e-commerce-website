create table paymentMethods
(
   clientID INTEGER,
   card_number INTEGER,
   wallet FLOAT,
   constraint foreign_key FOREIGN key (clientID) REFERENCES client (clientID) on delete CASCADE,
   CONSTRAINT un4 UNIQUE(clientID,card_number,wallet)
);