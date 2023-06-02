create table paymentMethods
(
   ClientID INTEGER,
   Card_number INTEGER,
   Wallet FLOAT,
   CONSTRAINT foreign_key FOREIGN key (ClientID) REFERENCES client (ClientID) on delete CASCADE
);
