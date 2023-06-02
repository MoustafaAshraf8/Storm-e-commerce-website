-- create table seller
-- (
--    sellerID INTEGER,
--    account_type varchar(20),
--    CONSTRAINT foreign_key FOREIGN key (sellerID) REFERENCES person (PID) on delete CASCADE,
--    CONSTRAINT un3 UNIQUE(sellerID)
-- );


create table seller
(
   sellerID serial,
   Name varchar(50) not null,
   Email varchar(50) unique not null,
   Password varchar(50) not null,
   Phone varchar(11) unique
);