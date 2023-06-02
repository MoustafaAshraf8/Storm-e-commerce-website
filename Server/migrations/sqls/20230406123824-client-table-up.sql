-- create table client
-- (
--    clientID Integer,
--    account_type varchar(20),
--    constraint foreign_key foreign key (clientID) REFERENCES person (PID) ON delete CASCADE,
--    CONSTRAINT un2 UNIQUE (clientID)
-- );


create table client
(
   ClientID serial,
   Name varchar(50) not null,
   Email varchar(50) unique not null,
   Password varchar(50) not null,
   Phone varchar(11) unique,
   Address varchar(50),
   constraint pk primary key (ClientID)
);

INSERT INTO client
(
   Name,
   Email,
   Password,
   Phone,
   Address
)
VALUES
(
   'Ahmed',
   'ahmad@sdc.com',
   '123',
   '0123465798',
   'Cairo'
),
(
   'mohamad',
   'mohamad@sdc.com',
   '123',
   '3535',
   'Cairo'
)
