create table seller
(
   sellerID INTEGER,
   account_type varchar(20),
   CONSTRAINT foreign_key FOREIGN key (sellerID) REFERENCES person (PID) on delete CASCADE,
   CONSTRAINT un3 UNIQUE(sellerID,account_type)
);