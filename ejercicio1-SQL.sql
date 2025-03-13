CREATE DATABASE IF NOT EXISTS ejercicio;

USE ejercicio;

CREATE TABLE IF NOT EXISTS `E01_CLIENTE` (
 `nro_cliente` INT NOT NULL,
 `nombre` VARCHAR(45) NOT NULL,
 `apellido` VARCHAR(45) NOT NULL,
 `direccion` VARCHAR(45) NOT NULL,
 `activo` TINYINT NOT NULL,
 PRIMARY KEY (`nro_cliente`));

CREATE TABLE IF NOT EXISTS `E01_TELEFONO` (
 `codigo_area` INT(3) NOT NULL,
 `nro_telefono` INT(7) NOT NULL,
 `tipo` CHAR(1) NOT NULL,
 `nro_cliente` INT NOT NULL,
 PRIMARY KEY (`codigo_area`, `nro_telefono`),
 FOREIGN KEY (`nro_cliente`)  REFERENCES `E01_CLIENTE` (`nro_cliente`));
 
 CREATE TABLE IF NOT EXISTS `E01_FACTURA` (
	`nro_factura` INT NOT NULL,
    `fecha` DATE NOT NULL,
    `total_sin_iva` DOUBLE NOT NULL,
    `iva` DOUBLE NOT NULL,
    `total_con_iva` DOUBLE NOT NULL,
    `nro_cliente` INT NOT NULL,
    PRIMARY KEY (`nro_factura`),
    FOREIGN KEY (`nro_cliente`)  REFERENCES `E01_CLIENTE` (`nro_cliente`));
    
    CREATE TABLE IF NOT EXISTS `E01_PRODUCTO` (
    `codigo_producto` INT NOT NULL,
    `marca` VARCHAR(45) NOT NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `descripcion` VARCHAR(45) NOT NULL,
    `precio` FLOAT NOT NULL,
    `stock` INT NOT NULL,
    PRIMARY KEY (`codigo_producto`));
    
  CREATE TABLE IF NOT EXISTS `E01_DETALLE_FACTURA` (
  `nro_factura` INT NOT NULL,
  `nro_item` INT NOT NULL,
  `cantidad` FLOAT NOT NULL,
  `codigo_producto` INT NOT NULL,
  PRIMARY KEY (`nro_item`),
  FOREIGN KEY (`nro_factura`) REFERENCES `E01_FACTURA` (`nro_factura`),
  FOREIGN KEY (`codigo_producto`) REFERENCES `e01_producto` (`codigo_producto`)
  );
