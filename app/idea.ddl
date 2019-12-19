drop schema if exists idea cascade;
create schema idea;
set search_path to idea;


-- each guest and their info
create table User (
	user_id integer primary key,
	name varchar not null,
	email varchar
);

create table login (
	user_id references User,
	username varchar not null unique,
	password varchar not null,
);