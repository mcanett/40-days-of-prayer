
// partaker = participante
// host = anfitrion
// facilitator = facilitador
// finances = finanzas

const dataExample = 
{
  folio, // folio, generado por shortId
  name: {
    lastName, // apellido paterno
    mothersSurname, // apellido materno
    firstName, // nombre
  },
  phone, // telefono
  age, // edad
  gender, // genero
  isChristian, // ¿es cristiano?
  congregateTime, // tiempo de congregarse
  congregartionName, // nombre de la congregacion
  // house_id:, // en caso de ser participante se ligara con el id de otro participante/casa
  hostInfo: {
    address: {
      streetName, // calle
      houseNumber, // numero
      neighborhood, // colonia
      zipCode // codigo postal
    },
    location: {
      x, // cordenada x
      y // coordenada y
    },
    houseCapacity, // cap. de la casa
    layaways, // num. de apartados
  },
  facilitator_info: {
      timeInFaith, // Tiempo en la fe/de conocer a Dios
      cedesCongregationTime, // Tiempo de congregarse en Cedes
  },
  createdAt, // fecha de creacion (en finanzas)
  registeredAt, // fecha de registo
  editedAt, // fecha de ultima edicion
  lastEditedBy // ultimo usuario que edito
};