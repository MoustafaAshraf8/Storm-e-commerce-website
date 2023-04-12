create table client
(
   clientID Integer,
   account_type varchar(20),
   constraint foreign_key foreign key (clientID) REFERENCES person (PID) ON delete CASCADE,
   CONSTRAINT pk PRIMARY KEY (clientID)
);