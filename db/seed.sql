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
values ('Air Jordan 8', 325 ,'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803280_01.jpg','Size:8.5'),
values ('Solar hu Nmd', 290 ,'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805531_01.jpg','Size:9.5'),
values ('Nmd Red Marble', 265 ,'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805593_01.jpg','Size:11.5'),
values ('Air Jordan 21', 325 ,'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/1/010494_01.jpg','Size:10'),
values ('Nike Vapormax FK', 995 ,'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803238_01.jpg','Size:10'),
values ('Nike Max 90', 900 ,'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/5/051987_01.jpg','Size:12'),
values ('Kobe Prelude 6', 500 ,'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/4/042044_01.jpg','Size:8'),
values ('Kobe 11 Elite', 700 ,'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/6/3/63596253257-nike-kobe-11-elite-low-ftb-fade-to-black-black-black-042575_1.jpg','Size:9.5'),

Create Table users(
    id serial Primary Key,
    name varchar,
    email varchar,
    password varchar
);