import _ from 'lodash';

const mahasiswa = [
  {
    nama: 'Rama Novaris',
    email: 'rama@gmail.com'
  },
  {
    nama: 'Jumai',
    email: 'jumai@gmail.com'
  },
  {
    nama: 'Faris',
    email: 'faris@gmail.com'
  }
];

const mhs = _.find(mahasiswa, { nama: 'Jumai' });
console.log(mhs);