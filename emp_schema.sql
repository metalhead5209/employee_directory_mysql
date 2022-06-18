-- create table
CREATE TABLE `employee_dir`.`employees` (`id` INT(100) NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(30) NOT NULL , `last_name` VARCHAR(30) NOT NULL , `email` VARCHAR(30) NOT NULL , `phone` VARCHAR(30) NOT NULL , `hire_date` DATETIME NOT NULL , `comments` TEXT NOT NULL , `status` VARCHAR(10) NOT NULL DEFAULT 'Active' , PRIMARY KEY (`id`)) ENGINE = InnoDB;


-- insert user
INSERT INTO `employees` (`id`, `first_name`, `last_name`, `email`, `phone`, `hire_date`, `comments`, `status`) VALUES ('1', 'Aaron', 'Rodi', 'rodi@email.com', '555-565-6969', '2022-06-18 18:07:42.000000', '', 'Active');