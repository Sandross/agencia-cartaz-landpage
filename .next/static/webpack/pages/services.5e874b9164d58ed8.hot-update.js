/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/services",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/Components/ProductCard/style.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/Components/ProductCard/style.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".style_pContainer__Q3PTa {\\n  width: 100%;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  display: flex;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  gap: 50px;\\n  color: white;\\n}\\n.style_pContainer__Q3PTa .style_img__HOj9d {\\n  width: 30%;\\n  height: 300px;\\n}\\n.style_pContainer__Q3PTa .style_img__HOj9d img {\\n  width: 280px;\\n  height: 240px;\\n}\\n.style_pContainer__Q3PTa .style_pCard__jDs_P {\\n  width: 70%;\\n  height: 300px;\\n  background-color: #121212;\\n  display: flex;\\n  flex-direction: row !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  padding: 30px;\\n  gap: 40px;\\n}\\n.style_pContainer__Q3PTa .style_pCard__jDs_P .style_pContent__j5xYG {\\n  display: flex;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  gap: 30px;\\n  text-align: center;\\n}\\n.style_pContainer__Q3PTa .style_pCard__jDs_P .style_pContent__j5xYG .style_pValues__6uza1 {\\n  display: flex;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  gap: 20px;\\n  width: 80%;\\n  border: 4px solid red;\\n}\\n.style_pContainer__Q3PTa button {\\n  width: 150px;\\n  height: 50px;\\n  border-radius: 50px;\\n  color: white;\\n  background-color: red;\\n  font-weight: bold;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/Components/ProductCard/style.module.scss\",\"webpack://src/Styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;ECSE,WDRc;ECSd,wBDToB;ECSpB,mBDToB;ECCpB,aAAA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EDFA,SAAA;EACA,YAAA;AAGF;AADE;ECGA,UDFgB;ECGhB,aDHqB;AAIvB;AAFI;ECAF,YDCkB;ECAlB,aAAA;ADKF;AADE;ECLA,UDMgB;ECLhB,aDKqB;EACnB,yBAAA;ECdF,aAAA;EACA,8BAAA;EACA,kCAAA;EACA,8BAAA;EDaE,aAAA;EACA,SAAA;AAOJ;AAJI;ECpBF,aAAA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EDmBI,SAAA;EACA,kBAAA;AASN;AAPM;ECzBJ,aAAA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EDwBM,SAAA;EACA,UAAA;EACA,qBAAA;AAYR;AAPE;EC3BA,YD4BgB;EC3BhB,YD2BuB;EACrB,mBAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;AAUJ\",\"sourcesContent\":[\"@import '../../Styles/mixins';\\n\\n.pContainer {\\n  @include size(100%, fit-content);\\n  @include flexAlignment(column);\\n  gap: 50px;\\n  color: white;\\n\\n  .img {\\n    @include size(30%, 300px);\\n\\n    img {\\n      @include size(280px, 240px);\\n    }\\n  }\\n\\n  .pCard {\\n    @include size(70%, 300px);\\n    background-color: #121212;\\n    @include flexAlignment;\\n    padding: 30px;\\n    gap: 40px;\\n\\n\\n    .pContent {\\n      @include flexAlignment(column);\\n      gap: 30px;\\n      text-align: center;\\n\\n      .pValues {\\n        @include flexAlignment(column);\\n        gap: 20px;\\n        width: 80%;\\n        border: 4px solid red;\\n      }\\n    }\\n  }\\n\\n  button {\\n    @include size(150px, 50px);\\n    border-radius: 50px;\\n    color: white;\\n    background-color: red;\\n    font-weight: bold;\\n  }\\n}\",\"\\n$--default-br: 14px;\\n\\n@mixin flexAlignment($direction: row, $justify: center, $align: center) {\\n  display: flex;\\n  flex-direction: $direction !important;\\n  justify-content: $justify !important;\\n  align-items: $align !important;\\n}\\n\\n@mixin size($wid: 100%, $heig: 100%) {\\n  width: $wid;\\n  height: $heig;\\n}\\n\\n@mixin newPage() {\\n  @include flexAlignment(column, flex-start, flex-start);\\n  @include size(100%, fit-content);\\n  min-width: 100%;\\n  min-height: calc(100vh - 235px);\\n  padding: 8px 8px 0 8px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"pContainer\": \"style_pContainer__Q3PTa\",\n\t\"img\": \"style_img__HOj9d\",\n\t\"pCard\": \"style_pCard__jDs_P\",\n\t\"pContent\": \"style_pContent__j5xYG\",\n\t\"pValues\": \"style_pValues__6uza1\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RDYXJkL3N0eWxlLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUtBQXFGO0FBQy9IO0FBQ0E7QUFDQSxvRUFBb0UsZ0JBQWdCLDZCQUE2Qix3QkFBd0Isa0JBQWtCLHNDQUFzQyx1Q0FBdUMsbUNBQW1DLGNBQWMsaUJBQWlCLEdBQUcsOENBQThDLGVBQWUsa0JBQWtCLEdBQUcsa0RBQWtELGlCQUFpQixrQkFBa0IsR0FBRyxnREFBZ0QsZUFBZSxrQkFBa0IsOEJBQThCLGtCQUFrQixtQ0FBbUMsdUNBQXVDLG1DQUFtQyxrQkFBa0IsY0FBYyxHQUFHLHVFQUF1RSxrQkFBa0Isc0NBQXNDLHVDQUF1QyxtQ0FBbUMsY0FBYyx1QkFBdUIsR0FBRyw2RkFBNkYsa0JBQWtCLHNDQUFzQyx1Q0FBdUMsbUNBQW1DLGNBQWMsZUFBZSwwQkFBMEIsR0FBRyxtQ0FBbUMsaUJBQWlCLGlCQUFpQix3QkFBd0IsaUJBQWlCLDBCQUEwQixzQkFBc0IsR0FBRyxPQUFPLGlKQUFpSixVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssYUFBYSxjQUFjLFlBQVksVUFBVSxXQUFXLFdBQVcsdURBQXVELGlCQUFpQixxQ0FBcUMsbUNBQW1DLGNBQWMsaUJBQWlCLFlBQVksZ0NBQWdDLGFBQWEsb0NBQW9DLE9BQU8sS0FBSyxjQUFjLGdDQUFnQyxnQ0FBZ0MsNkJBQTZCLG9CQUFvQixnQkFBZ0IscUJBQXFCLHVDQUF1QyxrQkFBa0IsMkJBQTJCLG9CQUFvQix5Q0FBeUMsb0JBQW9CLHFCQUFxQixnQ0FBZ0MsU0FBUyxPQUFPLEtBQUssY0FBYyxpQ0FBaUMsMEJBQTBCLG1CQUFtQiw0QkFBNEIsd0JBQXdCLEtBQUssR0FBRyx5QkFBeUIsNkVBQTZFLGtCQUFrQiwwQ0FBMEMseUNBQXlDLG1DQUFtQyxHQUFHLDBDQUEwQyxnQkFBZ0Isa0JBQWtCLEdBQUcsc0JBQXNCLDJEQUEyRCxxQ0FBcUMsb0JBQW9CLG9DQUFvQywyQkFBMkIsR0FBRyxtQkFBbUI7QUFDajVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9zdHlsZS5tb2R1bGUuc2Nzcz82YzgwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVfcENvbnRhaW5lcl9fUTNQVGEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBnYXA6IDUwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5zdHlsZV9wQ29udGFpbmVyX19RM1BUYSAuc3R5bGVfaW1nX19IT2o5ZCB7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLnN0eWxlX3BDb250YWluZXJfX1EzUFRhIC5zdHlsZV9pbWdfX0hPajlkIGltZyB7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbn1cXG4uc3R5bGVfcENvbnRhaW5lcl9fUTNQVGEgLnN0eWxlX3BDYXJkX19qRHNfUCB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDQwcHg7XFxufVxcbi5zdHlsZV9wQ29udGFpbmVyX19RM1BUYSAuc3R5bGVfcENhcmRfX2pEc19QIC5zdHlsZV9wQ29udGVudF9fajV4WUcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBnYXA6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdHlsZV9wQ29udGFpbmVyX19RM1BUYSAuc3R5bGVfcENhcmRfX2pEc19QIC5zdHlsZV9wQ29udGVudF9fajV4WUcgLnN0eWxlX3BWYWx1ZXNfXzZ1emExIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcXG59XFxuLnN0eWxlX3BDb250YWluZXJfX1EzUFRhIGJ1dHRvbiB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvQ29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9zdHlsZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3NyYy9TdHlsZXMvX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VDU0UsV0RSYztFQ1NkLHdCRFRvQjtFQ1NwQixtQkRUb0I7RUNDcEIsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFREZBLFNBQUE7RUFDQSxZQUFBO0FBR0Y7QUFERTtFQ0dBLFVERmdCO0VDR2hCLGFESHFCO0FBSXZCO0FBRkk7RUNBRixZRENrQjtFQ0FsQixhQUFBO0FES0Y7QUFERTtFQ0xBLFVETWdCO0VDTGhCLGFES3FCO0VBQ25CLHlCQUFBO0VDZEYsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFRGFFLGFBQUE7RUFDQSxTQUFBO0FBT0o7QUFKSTtFQ3BCRixhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VEbUJJLFNBQUE7RUFDQSxrQkFBQTtBQVNOO0FBUE07RUN6QkosYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFRHdCTSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBWVI7QUFQRTtFQzNCQSxZRDRCZ0I7RUMzQmhCLFlEMkJ1QjtFQUNyQixtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBVUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vU3R5bGVzL21peGlucyc7XFxuXFxuLnBDb250YWluZXIge1xcbiAgQGluY2x1ZGUgc2l6ZSgxMDAlLCBmaXQtY29udGVudCk7XFxuICBAaW5jbHVkZSBmbGV4QWxpZ25tZW50KGNvbHVtbik7XFxuICBnYXA6IDUwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICAuaW1nIHtcXG4gICAgQGluY2x1ZGUgc2l6ZSgzMCUsIDMwMHB4KTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICBAaW5jbHVkZSBzaXplKDI4MHB4LCAyNDBweCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5wQ2FyZCB7XFxuICAgIEBpbmNsdWRlIHNpemUoNzAlLCAzMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIEBpbmNsdWRlIGZsZXhBbGlnbm1lbnQ7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGdhcDogNDBweDtcXG5cXG5cXG4gICAgLnBDb250ZW50IHtcXG4gICAgICBAaW5jbHVkZSBmbGV4QWxpZ25tZW50KGNvbHVtbik7XFxuICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAucFZhbHVlcyB7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4QWxpZ25tZW50KGNvbHVtbik7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgc2l6ZSgxNTBweCwgNTBweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG59XCIsXCJcXG4kLS1kZWZhdWx0LWJyOiAxNHB4O1xcblxcbkBtaXhpbiBmbGV4QWxpZ25tZW50KCRkaXJlY3Rpb246IHJvdywgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbiAhaW1wb3J0YW50O1xcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeSAhaW1wb3J0YW50O1xcbiAgYWxpZ24taXRlbXM6ICRhbGlnbiAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWl4aW4gc2l6ZSgkd2lkOiAxMDAlLCAkaGVpZzogMTAwJSkge1xcbiAgd2lkdGg6ICR3aWQ7XFxuICBoZWlnaHQ6ICRoZWlnO1xcbn1cXG5cXG5AbWl4aW4gbmV3UGFnZSgpIHtcXG4gIEBpbmNsdWRlIGZsZXhBbGlnbm1lbnQoY29sdW1uLCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0KTtcXG4gIEBpbmNsdWRlIHNpemUoMTAwJSwgZml0LWNvbnRlbnQpO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcXG4gIHBhZGRpbmc6IDhweCA4cHggMCA4cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBDb250YWluZXJcIjogXCJzdHlsZV9wQ29udGFpbmVyX19RM1BUYVwiLFxuXHRcImltZ1wiOiBcInN0eWxlX2ltZ19fSE9qOWRcIixcblx0XCJwQ2FyZFwiOiBcInN0eWxlX3BDYXJkX19qRHNfUFwiLFxuXHRcInBDb250ZW50XCI6IFwic3R5bGVfcENvbnRlbnRfX2o1eFlHXCIsXG5cdFwicFZhbHVlc1wiOiBcInN0eWxlX3BWYWx1ZXNfXzZ1emExXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/Components/ProductCard/style.module.scss\n"));

/***/ })

});