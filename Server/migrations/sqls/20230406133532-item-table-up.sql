create table product
(
   ProductID serial primary key,
   Name varchar(50) not null,
   Category varchar(50) not null,
   Rating float not null default (0.0),
   Price float not null default (0.0),
   Quantity int not null default (0),
   Description varchar(50) not null
);


insert into product
(
   Name,
   Category,
   Rating,
   Price,
   Quantity,
   Description
)
values
(
   'Apple',
   'Fruit',
   4.5,
   10.0,
   100,
   'Fresh'
),
(
   'Orange',
   'Fruit',
   4.5,
   10.0,
   100,
   'Fresh'
)