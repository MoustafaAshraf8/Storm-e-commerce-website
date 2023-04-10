create table person(
   PID serial,
   EmailDefault varchar(50) unique,
   Password varchar(50),
   firstName varchar(50),
   middleName varchar(50),
   lastName varchar(50),
   Phone varchar(11),
   Address varchar(50),
   constraint pk primary key (PID)
);