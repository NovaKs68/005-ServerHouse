DROP DATABASE IF EXISTS serverhome;
CREATE DATABASE IF NOT EXISTS serverhome;
USE serverhome;

CREATE USER IF NOT EXISTS 'serverHome'@'%' IDENTIFIED BY 'tom';
GRANT ALL PRIVILEGES ON serverhome . * TO 'serverHome'@'%';
