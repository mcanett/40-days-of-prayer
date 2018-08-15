import moment from 'moment';


export default [{
  id: 'abc',
  folio: 'P-0001',
  name: {
    lastName: 'Canett',
    mothersSurname: 'Cañedo',
    firstName: 'Moisés Abraham'
  },
  createdAt: 0
},
{
  id: 'def',
  folio: 'P-0002',
  name: {
    lastName: 'Ruiz',
    mothersSurname: 'Perez',
    firstName: 'Adriana'
  },
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: 'ghi',
  folio: 'P-0003',
  name: {
    lastName: 'Lopez',
    mothersSurname: 'Retamoza',
    firstName: 'César'
  },
  createdAt: moment(0).add(4, 'days').valueOf()
}
];