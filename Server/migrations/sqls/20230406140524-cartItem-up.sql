create table cartItem
(
   cartID INTEGER,
   itemID integer,
   quantity integer default(1),
   --CONSTRAINT foreign_key FOREIGN key (clientID) references client (clientID),
   CONSTRAINT foreign_key_const FOREIGN key (cartID) references cart (cartID),
   constraint unique_item UNIQUE (cartId,itemID)
);