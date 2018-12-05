
// partaker = participante
// host = anfitrion
// facilitator = facilitador

// finances = finanzas
// registry = registro

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
  // houseId:, // en caso de ser participante se ligara con el id de otro participante/casa
  hostInfo: {
    address: {
      streetName, // calle
      houseNumber, // numero
      neighborhood, // colonia
      zipCode // codigo postal
    },
    location: {
      lat, // cordenada x
      lng // coordenada y
    },
    numberLabel,
    houseSchedule, // horario de la casa
    houseCapacity, // cap. de la casa
    layaways, // num. de apartados
  },
  facilitatorInfo: {
      timeInFaith, // Tiempo en la fe/de conocer a Dios
      cedesCongregationTime, // Tiempo de congregarse en Cedes
  },
  createdAt, // fecha de creacion (en finanzas)
  registeredAt, // fecha de registo
  editedAt, // fecha de ultima edicion
  lastEditedBy // ultimo usuario que edito
};