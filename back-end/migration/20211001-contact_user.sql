ALTER TABLE `contact`
	ADD COLUMN `phone` VARCHAR(15) NOT NULL  COMMENT '(00) 00000-0000' AFTER `email`;

CREATE TABLE `user` (
	`userId` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
	`password` VARCHAR(100) NOT NULL,
	`dateCreated` DATETIME NOT NULL,
	`dateUpdated` DATETIME NOT NULL,
	PRIMARY KEY (`userId`) USING BTREE
)
ENGINE=InnoDB;

