create table cart
(
   ItemID Integer,
   ClientID INTEGER,
   Quantity INTEGER default (1),
   CONSTRAINT foreign_key FOREIGN KEY (ClientID) REFERENCES client (ClientID) on delete CASCADE,
   CONSTRAINT foreign_key2 FOREIGN KEY (ItemID) REFERENCES product (ProductID) on delete CASCADE,
   CONSTRAINT un1 UNIQUE (ItemID, ClientID)
);

insert into cart
(
   ItemID,
   ClientID,
   Quantity
)values(
   1,
   1,
   1
),
(
   2,
   1,
   1
),
(
   1,
   2,
   1
);