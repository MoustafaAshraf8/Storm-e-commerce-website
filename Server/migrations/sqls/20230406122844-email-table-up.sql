create table email
(
   PID INTEGER,
   Pemail varchar(50),
   CONSTRAINT foreign_key foreign key (PID) references person (PID) ON delete cascade,
   CONSTRAINT pk PRIMARY key (Pemail)
);