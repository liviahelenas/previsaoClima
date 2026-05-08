/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts"
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nconst form = document.querySelector(` form`);\n///tipando o tipo da constante, ou ele será um elemento HTML, ou retornará nulo. Com isso, será localizado pelo document.querySelector \nconst input = document.querySelector(`#input-localizacao`);\nconst sectionInfo = document.querySelector(`#search-form`);\n///o ponto de interrogação serve para dar certeza de que o form não voltará nulo\n///prevent default: impede de recarregar a página\n///submit: é o comportamento do evento\nform?.addEventListener(`submit`, async (event) => {\n    console.log(\"clicou!\");\n    event.preventDefault();\n    ///se o input está nulo, ele retorna ao início\n    if (!input || !sectionInfo)\n        return;\n    /// pegue o valor de input e armazene em localização\n    const localizacao = input.value;\n    /// se a localização retornar vazia, retorne um alerta\n    /// se localização for escrito menor que 3 caracteres, retorne um alerta\n    if (localizacao.length === 0) {\n        alert(\"O campo está vazio, preencha novamente.\");\n        return;\n    }\n    else if (localizacao.length < 3) {\n        alert(\"O local precisar ter 3 letras!\");\n        return;\n    }\n    ///  na const response, faça um fetch que será awayt(pois espera a resposta asyn do evento),\n    ///armazene em dados a espera da resposta e transforme em valor JSON;\n    try {\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=ed827368b09c96f2c0cdf8bbb6800134&units=metric&lang=pt_br`);\n        /// se retornar diferente  do status ok na API, não foi encontrado o destino\n        if (!response.ok) {\n            alert(\"Não foi encontrado este destino.\");\n            return;\n        }\n        /// dados recebe resposta e transforma em json.\n        const dados = await response.json();\n        /// infos recebe de dados, parametros do son;\n        const infos = {\n            temperatura: Math.round(dados.main.temp),\n            local: dados.name,\n            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,\n        };\n        ///variavel em string info (armazena em string, o dado json), é colocada na estrutura do html\n        ///é criado pelo ts com inneHTML uma parte do código, que será dinamico.\n        sectionInfo.innerHTML = `\r\n     <section id=\"tempo-info\">\r\n            <div class=\"tempo-dados\">\r\n                <div>\r\n                    <h2>${infos.local}</h2>\r\n                    <p>${infos.temperatura} °C</p>\r\n\r\n                </div>\r\n\r\n                <div>\r\n                <img src=\"${infos.icone}\" class=\"icone-clima\" />\r\n                </div>\r\n\r\n            </div>\r\n        </section>`;\n    }\n    catch (err) {\n        console.log(\"Não foi possível fazer sua requisição!\", err);\n    }\n});\n\n\n\n//# sourceURL=webpack://previsaodotempo/./index.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;