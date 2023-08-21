"use strict";
(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([[179,736],{

/***/ 198:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./src/app/utils/parseInput.js
const parseInput = function () {
  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
    input[_key] = arguments[_key];
  }
  return input.map(str => parseInt(str));
};
;// CONCATENATED MODULE: ./src/app/utils/cekInputValid.js
const cekInputValid = function () {
  for (var _len = arguments.length, angka = new Array(_len), _key = 0; _key < _len; _key++) {
    angka[_key] = arguments[_key];
  }
  return angka.every(num => typeof num === 'number' && !isNaN(num));
};
;// CONCATENATED MODULE: ./src/app/app.js


const run = (alertService, calculatorService, jokesService) => {
  alertService.sembunyikanError();
  calculatorService.onClick(() => {
    alertService.sembunyikanError();
    const input = calculatorService.getInput();
    const angka = parseInput(...input);
    if (cekInputValid(...angka)) {
      const [angka1, angka2] = angka;
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult('');
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });
  jokesService.onClick(() => {
    fetch('https://candaan-api.vercel.app/api/text/random').then(response => response.json()).then(data => {
      jokesService.setModal(data.data);
    });
  });
};
;// CONCATENATED MODULE: ./src/app/alert.service.js

class AlertService {
  constructor() {
    this.error = document.querySelector('#error');
  }
  tampilkanErrorPenjumlahan = (input, angka) => {
    const hasil = input.reduce((pesan, nilai, index) => {
      if (cekInputValid(angka[index])) {
        return pesan + '';
      } else {
        return pesan + `${nilai} itu bukan angka! `;
      }
    }, 'Silahkan masukkan angka yang benar: ');
    this.error.classList.remove('d-none');
    this.error.innerText = hasil;
  };
  sembunyikanError = () => this.error.classList.add('d-none');
}
;// CONCATENATED MODULE: ./src/app/calculator.service.js
class CalculatorService {
  constructor() {
    this.operand1 = document.querySelector('#operand1');
    this.operand2 = document.querySelector('#operand2');
    this.tombolTambah = document.querySelector('#tombol-tambah');
    this.hasil = document.querySelector('#hasil');
  }
  getInput() {
    return [this.operand1.value, this.operand2.value];
  }
  setResult(angka1, angka2) {
    this.hasil.innerText = angka1 + angka2;
  }
  onClick(cb) {
    this.tombolTambah.addEventListener('click', cb);
  }
}
;// CONCATENATED MODULE: ./src/app/jokes.service.js
class JokesService {
  constructor() {
    this.tombolJokes = document.querySelector('#jokes-receh');
    this.modalBody = document.querySelector('.modal-body');
  }
  setModal(str) {
    this.modalBody.innerHTML = str;
  }
  onClick(cb) {
    this.tombolJokes.addEventListener('click', cb);
  }
}
;// CONCATENATED MODULE: ./src/index.js
__webpack_require__(508);






const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();
run(alertService, calculatorService, jokesService);
console.log(lodash_default().toUpper('Hello from index.js'));

/***/ }),

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(662);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [242], () => (__webpack_exec__(198)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);