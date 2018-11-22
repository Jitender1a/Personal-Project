create table products(
id serial primary key,
name text,
price real,
img text,
description text
);

create table cart(
product_id integer references products(id),
quantity integer
)

insert into products (name, price, img, description)
values ('Yeezy Boost 350', 350,'https://www.kissradio.ca/files/yzy350_black_06.jpp','Season Two Collection');