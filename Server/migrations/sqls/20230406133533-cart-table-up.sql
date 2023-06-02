create table cart
(
   CartID serial primary key,
   ClientID INTEGER,
   CONSTRAINT foreign_key FOREIGN KEY (ClientID) REFERENCES client (ClientID) on delete CASCADE
);