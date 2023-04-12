create table seller
(
   sellerID INTEGER,
   account_type varchar(20),
   CONSTRAINT pk PRIMARY key (sellerID),
   CONSTRAINT foreign_key FOREIGN key (sellerID) REFERENCES person (PID) on delete CASCADE
)