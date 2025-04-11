/*Cada grupo debe modelar la base de datos para un sistema de reservas de vuelos en
MongoDB. Deben decidir qué datos anidar y qué datos referenciar.
Requisitos:
• Pasajeros con información personal y de contacto.
• Vuelos con información de aerolínea y destino.
• Reservas que vinculen a los pasajeros con los vuelos. */
//La coleccion pasajero no es tan relevante porque podria cambiar entre vuelo y vuelo
db.pasajeros_historial.insertMany([
    {pasajero_id: 1, nombre:"Juan Pablo Fernandez", telefono: 2494601205, email:"janpablof@gmail.com"},
    {pasajero_id: 2, nombre:"Emilse Gomez", telefono: 2494558022, email:"emigomez@gmail.com"},
    {pasajero_id: 3, nombre:"Roberta Suarez", telefono: 2494156975, email:"suarezrob@gmail.com"},
    {pasajero_id: 4, nombre:"Marianela Casco", telefono: 2494219900, email:"marianelacasco@gmail.com"},
    {pasajero_id: 5, nombre:"Lola Torres", telefono: 2494658709, email:"lolatorres@gmail.com"},
    {pasajero_id: 6, nombre:"Marcos Torino", telefono: 2494652341, email:"marcostorino@gmail.com"},
    {pasajero_id: 7, nombre:"Alan Romero", telefono: 2494009854, email:"alanromero@gmail.com"},
    {pasajero_id: 8, nombre:"Tomas Gorrion", telefono: 2494448809, email:"tomasgorrion@gmail.com"},
    {pasajero_id: 9, nombre:"Maria Palacios", telefono: 2494553211, email:"mariapalacios@gmail.com"}
        ]);
db.vuelos.insertMany([
    {vuelo_id: 1, aereolinea:"Argentina", destino:"Republica Dominicana", pasajeros:[
        {pasajero_id: 3, nombre:"Roberta Suarez", telefono: 2494156975, email:"suarezrob@gmail.com"},
        {pasajero_id: 6, nombre:"Marcos Torino", telefono: 2494652341, email:"marcostorino@gmail.com"},
        {pasajero_id: 7, nombre:"Alan Romero", telefono: 2494009854, email:"alanromero@gmail.com"}]},
    {vuelo_id: 2, aereolinea:"Latam", destino:"Mexico", pasajeros:[
        {pasajero_id: 1, nombre:"Juan Pablo Fernandez", telefono: 2494601205, email:"janpablof@gmail.com"},
        {pasajero_id: 8, nombre:"Tomas Gorrion", telefono: 2494448809, email:"tomasgorrion@gmail.com"},
        {pasajero_id: 9, nombre:"Maria Palacios", telefono: 2494553211, email:"mariapalacios@gmail.com"}]},
    {vuelo_id: 3, aereolinea:"Plus", destino:"Italia", pasajeros:[
        {pasajero_id: 2, nombre:"Emilse Gomez", telefono: 2494558022, email:"emigomez@gmail.com"},
        {pasajero_id: 4, nombre:"Marianela Casco", telefono: 2494219900, email:"marianelacasco@gmail.com"},
        {pasajero_id: 5, nombre:"Lola Torres", telefono: 2494658709, email:"lolatorres@gmail.com"}]}
    ]);
db.reservas.insertMany([
    {vuelo_id: 2, nro_reserva: 7689, clase:"Clase Turista"},
    {vuelo_id: 3, nro_reserva: 4523, clase:"Clase Economica"},
    {vuelo_id: 1, nro_reserva: 5704, clase:"Primera clase"}
    ]);