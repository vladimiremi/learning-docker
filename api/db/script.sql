CREATE DATABASE IF NOT EXISTS programadorabordo;
USE programadorabordo;

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products VALUE(0, 'Product 1', 10.00);
INSERT INTO products VALUE(0, 'Product 2', 20.00);

