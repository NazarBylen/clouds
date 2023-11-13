CREATE TABLE `clouds`.`iot_devices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `device_type` VARCHAR(255) NULL,
  `device_value` VARCHAR(45) NULL,
  `device_time` VARCHAR(255) NULL,
  `longitude` VARCHAR(255) NULL,
  `latitude` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));
