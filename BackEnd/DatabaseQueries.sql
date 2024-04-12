/* Sql query for the login table */

CREATE TABLE admin_login (
    id serial primary key,
    name varchar(100),
    email varchar(100),
    password varchar(100)
);

CREATE TABLE user_login (
    id serial primary key,
    name varchar(100),
    email varchar(100),
    password varchar(100)
);



/* sql query for the products */

CREATE TABLE product_data(
    p_id serial primary key,
    p_category varchar(50),
    p_product_name varchar(50),
    p_type varchar(50),
    p_brand varchar(50),
    p_model varchar(50),
    p_seller varchar(50),
    p_location varchar(50),
    p_year varchar(10),
    p_price varchar(20),
    p_description text,
    p_reviews varchar(50),
    p_comments text,
    p_image varchar(100)
);

CREATE TABLE user_product_data(
    s_id serial primary key,
    s_username varchar(50),
    s_email_id varchar(50),
    s_phone varchar(20),
    s_address text,
    p_category varchar(50),
    p_product_name varchar(50),
    p_type varchar(50),
    p_brand varchar(50),
    p_model varchar(50),
    p_location varchar(50),
    p_year varchar(10),
    p_price varchar(20),
    p_description text,
    p_image varchar(100)
);

CREATE TABLE user_chat(
    u_id serial primary key,
    u_username varchar(50),
    u_email_id varchar(50),
    u_phone varchar(20),
    p_product_name varchar(50),
    p_brand varchar(50),
    p_model varchar(50),
    u_message text
);


CREATE TABLE user_feedback_queries(
    u_id serial primary key,
    u_username varchar(50),
    u_email_id varchar(50),
    u_phone varchar(20),
    comments text
);
