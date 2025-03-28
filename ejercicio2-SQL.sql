-- Ejercicio 1: Seleccionar todos los registros de una tabla
SELECT * FROM E01_PRODUCTO;

-- Ejercicio 2: Selecciona todos los productos de una determinada marca (definida por el usuario)
SELECT * FROM E01_PRODUCTO WHERE marca = "Sit Corporation";

-- Ejercicio 3: Selecciona todos los productos en orden alfabético ascendente por nombre.
SELECT * FROM E01_PRODUCTO ORDER BY nombre ASC; 

-- Ejercicio 4: Agregar un nuevo producto a la tabla
INSERT INTO E01_PRODUCTO (codigo_producto, marca, nombre, descripcion, precio, stock) 
VALUE (101, "la serenisima","leche", "leche entera", 29.99, 120);

-- Ejercicio 5: Actualizar el precio del producto con ID 5 a 49.99
UPDATE E01_PRODUCTO SET precio = 49.99 WHERE codigo_producto = 5;

-- Ejercicio 6: Eliminar el producto con ID 3
ALTER TABLE E01_DETALLE_FACTURA 
DROP FOREIGN KEY FK_E01_DETALLE_FACTURA_PRODUCTO;

ALTER TABLE E01_DETALLE_FACTURA 
ADD CONSTRAINT FK_E01_DETALLE_FACTURA_PRODUCTO 
FOREIGN KEY (nro_factura) REFERENCES E01_FACTURA(nro_factura) 
ON DELETE CASCADE
ON UPDATE CASCADE;

DELETE FROM E01_PRODUCTO WHERE codigo_producto = 3;

-- Ejercicio 7: Seleccionar productos con precio entre $10 y $50
SELECT * FROM E01_PRODUCTO WHERE precio BETWEEN 10 AND 50;

-- Ejercicio 8: Seleccionar productos con precio mayor al promedio de los productos
SELECT * FROM E01_PRODUCTO WHERE precio > (SELECT AVG(precio) FROM E01_PRODUCTO);

-- Ejercicio 9:Actualiza el precio de todos los productos en la marca "Nulla Dignissim Institute" para que sea $5 más caro.

UPDATE E01_PRODUCTO
SET precio = precio + 5
WHERE marca = "Nulla Dignissim Institute"; 

-- Ejercicio 10:  Selecciona todos los telefonos cuyo codigo de area no sea 844  y su numero sea mayor que 4369984 o su tipo sea F.
SELECT * FROM E01_TELEFONO WHERE codigo_area <> 844 AND (nro_telefono > 4369984 OR tipo = 'F');

-- Ejercicio 11: Seleccionar los 10 productos más caros
SELECT * FROM E01_PRODUCTO ORDER BY precio DESC LIMIT 10;

-- Ejercicio 12: Seleccionar facturas cuya fecha contenga el año 2016
SELECT * FROM E01_FACTURA WHERE fecha LIKE '%2016%';

-- Ejercicio 13: Agrega un nuevo producto a la tabla con el nombre "Nuevo Producto" y un precio de $29.99.
INSERT INTO E01_PRODUCTO (codigo_producto, marca, nombre, descripcion, precio, stock) 
VALUE (102, "abcd","Nuevo Producto", "producto nuevo", 29.99, 124);

-- Ejercicio 14:Incrementa el precio de todos los productos en un 5%, pero solo si su precio actual es inferior a $50 o su nombre no contiene "descuento".
UPDATE E01_PRODUCTO SET precio = precio * 1.05 WHERE precio < 50 OR nombre NOT LIKE '%descuento%';

-- Ejercicio 15: Seleccionar teléfonos que no sean tipo F y cuyo número no sea mayor a 4892549
SELECT * FROM E01_TELEFONO WHERE tipo <> 'F' AND nro_telefono <= 4892549;