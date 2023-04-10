create table cartItem
(
   cartID INTEGER,
   itemID integer,
   quantity integer default(1),
   --CONSTRAINT foreign_key FOREIGN key (clientID) references client (clientID),
   CONSTRAINT foreign_key FOREIGN key (cartID) references cart (cartID)
);