create table paymentMethods
(
   clientID INTEGER,
   card_number INTEGER,
   wallet FLOAT,
   constraint foreign_key FOREIGN key (clientID) REFERENCES client (clientID) on delete CASCADE,
   CONSTRAINT unique_client UNIQUE(clientID)
);