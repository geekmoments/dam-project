-- MySQL Script generated by MySQL Workbench
-- Thu Sep 26 12:08:58 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DAM
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DAM
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DAM` DEFAULT CHARACTER SET utf8 ;
USE `DAM` ;

-- -----------------------------------------------------
-- Table `DAM`.`Electrovalvulas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Electrovalvulas` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Electrovalvulas` (
  `electrovalvulaId` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`electrovalvulaId`))
ENGINE = InnoDB;

INSERT INTO `Electrovalvulas` (`electrovalvulaId`, `nombre`) VALUES
(1, 'Campo 1'),
(2, 'Campo 2'),
(3, 'Campo 3'),
(4, 'Campo 4'),
(5, 'Campo 5');

-- -----------------------------------------------------
-- Table `DAM`.`Dispositivos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Dispositivos` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Dispositivos` (
  `dispositivoId` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NULL,
  `ubicacion` VARCHAR(200) NULL,
  `electrovalvulaId` INT NOT NULL,
  PRIMARY KEY (`dispositivoId`, `electrovalvulaId`),
  INDEX `fk_Dispositivos_Electrovalvulas1_idx` (`electrovalvulaId` ASC) ,
  CONSTRAINT `fk_Dispositivos_Electrovalvulas1`
    FOREIGN KEY (`electrovalvulaId`)
    REFERENCES `DAM`.`Electrovalvulas` (`electrovalvulaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `Dispositivos` (`dispositivoId`, `nombre`, `ubicacion`, `electrovalvulaId`) VALUES
(1, 'Sensor 1', 'Campo 1', '1'),
(2, 'Sensor 2', 'Campo 2', '2'),
(3, 'Sensor 3', 'Campo 3', '3'),
(4, 'Sensor 4', 'Campo 4', '4'),
(5, 'Sensor 5', 'Campo 5', '5'),
(6, 'Sensor 6', 'Campo 6', '6'),
(7, 'Sensor 7', 'Campo 7', '7'),
(8, 'Sensor 8', 'Campo 8', '8'),
(9, 'Sensor 9', 'Campo 9', '9');

-- -----------------------------------------------------
-- Table `DAM`.`Mediciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Mediciones` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Mediciones` (
  `medicionId` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NULL,
  `valor` VARCHAR(100) NULL,
  `dispositivoId` INT NOT NULL,
  PRIMARY KEY (`medicionId`, `dispositivoId`),
  INDEX `fk_Mediciones_Dispositivos_idx` (`dispositivoId` ASC) ,
  CONSTRAINT `fk_Mediciones_Dispositivos`
    FOREIGN KEY (`dispositivoId`)
    REFERENCES `DAM`.`Dispositivos` (`dispositivoId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `Mediciones` (`medicionId`, `fecha`, `valor`, `dispositivoId`) VALUES
(1, '2021-08-01 07:01:12', '43', '1'),
(2, '2021-08-04 09:00:20', '22', '2'),
(3, '2021-08-05 08:05:10', '14', '3'),
(4, '2021-08-08 08:07:11', '40', '4'),
(5, '2021-08-09 09:01:15', '11', '5'),
(6, '2021-08-04 09:00:20', '10', '6'),
(7, '2021-08-05 08:05:10', '15', '7'),
(8, '2021-08-08 08:07:11', '31', '8'),
(9, '2021-08-09 09:01:15', '33', '9');

-- -----------------------------------------------------
-- Table `DAM`.`Log_Riegos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Log_Riegos` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Log_Riegos` (
  `logRiegoId` INT NOT NULL AUTO_INCREMENT,
  `apertura` TINYINT NULL,
  `fecha` DATETIME NULL,
  `electrovalvulaId` INT NOT NULL,
  PRIMARY KEY (`logRiegoId`, `electrovalvulaId`),
  INDEX `fk_Log_Riegos_Electrovalvulas1_idx` (`electrovalvulaId` ASC) ,
  CONSTRAINT `fk_Log_Riegos_Electrovalvulas1`
    FOREIGN KEY (`electrovalvulaId`)
    REFERENCES `DAM`.`Electrovalvulas` (`electrovalvulaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `Log_Riegos` (`logRiegoId`, `apertura`, `fecha`, `electrovalvulaId`) VALUES
(1, '0', '2021-08-01 07:01:12', '1'),
(2, '0', '2021-08-04 09:00:20', '2'),
(3, '0', '2021-08-05 08:05:10', '3'),
(4, '0', '2021-08-08 08:07:11', '4'),
(5, '0', '2021-08-09 09:01:15', '5'),
(6, '0', '2021-08-04 09:00:20', '6'),
(7, '0', '2021-08-05 08:05:10', '7'),
(8, '0', '2021-08-08 08:07:11', '8'),
(9, '0', '2021-08-09 09:01:15', '9');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
