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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".style_pContainer__Q3PTa {\\n  width: 100%;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  display: flex;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  gap: 50px;\\n  color: white;\\n}\\n.style_pContainer__Q3PTa img {\\n  width: 280px;\\n  height: 240px;\\n}\\n.style_pContainer__Q3PTa .style_pCard__jDs_P {\\n  width: 70%;\\n  height: 300px;\\n  background-color: #121212;\\n  display: flex;\\n  flex-direction: row !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  padding: 30px;\\n  gap: 40px;\\n}\\n.style_pContainer__Q3PTa .style_pCard__jDs_P .style_pContent__j5xYG {\\n  display: flex;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  gap: 30px;\\n  text-align: center;\\n}\\n.style_pContainer__Q3PTa .style_pCard__jDs_P .style_pContent__j5xYG .style_pValues__6uza1 {\\n  display: flex;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  gap: 20px;\\n  width: 500px;\\n  border: 4px solid red;\\n}\\n.style_pContainer__Q3PTa button {\\n  width: 150px;\\n  height: 50px;\\n  border-radius: 50px;\\n  color: white;\\n  background-color: red;\\n  font-weight: bold;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/Components/ProductCard/style.module.scss\",\"webpack://src/Styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;ECSE,WDRc;ECSd,wBDToB;ECSpB,mBDToB;ECCpB,aAAA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EDFA,SAAA;EACA,YAAA;AAGF;AADE;ECGA,YDFgB;ECGhB,aDHuB;AAIzB;AADE;ECDA,UDEgB;ECDhB,aDCqB;EACnB,yBAAA;ECVF,aAAA;EACA,8BAAA;EACA,kCAAA;EACA,8BAAA;EDSE,aAAA;EACA,SAAA;AAOJ;AAJI;EChBF,aAAA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EDeI,SAAA;EACA,kBAAA;AASN;AAPM;ECrBJ,aAAA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EDoBM,SAAA;EACA,YAAA;EACA,qBAAA;AAYR;AAPE;ECvBA,YDwBgB;ECvBhB,YDuBuB;EACrB,mBAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;AAUJ\",\"sourcesContent\":[\"@import '../../Styles/mixins';\\n\\n.pContainer {\\n  @include size(100%, fit-content);\\n  @include flexAlignment(column);\\n  gap: 50px;\\n  color: white;\\n\\n  img {\\n    @include size(280px, 240px);\\n  }\\n\\n  .pCard {\\n    @include size(70%, 300px);\\n    background-color: #121212;\\n    @include flexAlignment;\\n    padding: 30px;\\n    gap: 40px;\\n\\n\\n    .pContent {\\n      @include flexAlignment(column);\\n      gap: 30px;\\n      text-align: center;\\n\\n      .pValues {\\n        @include flexAlignment(column);\\n        gap: 20px;\\n        width: 500px;\\n        border: 4px solid red;\\n      }\\n    }\\n  }\\n\\n  button {\\n    @include size(150px, 50px);\\n    border-radius: 50px;\\n    color: white;\\n    background-color: red;\\n    font-weight: bold;\\n  }\\n}\",\"\\n$--default-br: 14px;\\n\\n@mixin flexAlignment($direction: row, $justify: center, $align: center) {\\n  display: flex;\\n  flex-direction: $direction !important;\\n  justify-content: $justify !important;\\n  align-items: $align !important;\\n}\\n\\n@mixin size($wid: 100%, $heig: 100%) {\\n  width: $wid;\\n  height: $heig;\\n}\\n\\n@mixin newPage() {\\n  @include flexAlignment(column, flex-start, flex-start);\\n  @include size(100%, fit-content);\\n  min-width: 100%;\\n  min-height: calc(100vh - 235px);\\n  padding: 8px 8px 0 8px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"pContainer\": \"style_pContainer__Q3PTa\",\n\t\"pCard\": \"style_pCard__jDs_P\",\n\t\"pContent\": \"style_pContent__j5xYG\",\n\t\"pValues\": \"style_pValues__6uza1\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RDYXJkL3N0eWxlLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUtBQXFGO0FBQy9IO0FBQ0E7QUFDQSxvRUFBb0UsZ0JBQWdCLDZCQUE2Qix3QkFBd0Isa0JBQWtCLHNDQUFzQyx1Q0FBdUMsbUNBQW1DLGNBQWMsaUJBQWlCLEdBQUcsZ0NBQWdDLGlCQUFpQixrQkFBa0IsR0FBRyxnREFBZ0QsZUFBZSxrQkFBa0IsOEJBQThCLGtCQUFrQixtQ0FBbUMsdUNBQXVDLG1DQUFtQyxrQkFBa0IsY0FBYyxHQUFHLHVFQUF1RSxrQkFBa0Isc0NBQXNDLHVDQUF1QyxtQ0FBbUMsY0FBYyx1QkFBdUIsR0FBRyw2RkFBNkYsa0JBQWtCLHNDQUFzQyx1Q0FBdUMsbUNBQW1DLGNBQWMsaUJBQWlCLDBCQUEwQixHQUFHLG1DQUFtQyxpQkFBaUIsaUJBQWlCLHdCQUF3QixpQkFBaUIsMEJBQTBCLHNCQUFzQixHQUFHLE9BQU8saUpBQWlKLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssYUFBYSxjQUFjLFlBQVksVUFBVSxXQUFXLFdBQVcsdURBQXVELGlCQUFpQixxQ0FBcUMsbUNBQW1DLGNBQWMsaUJBQWlCLFdBQVcsa0NBQWtDLEtBQUssY0FBYyxnQ0FBZ0MsZ0NBQWdDLDZCQUE2QixvQkFBb0IsZ0JBQWdCLHFCQUFxQix1Q0FBdUMsa0JBQWtCLDJCQUEyQixvQkFBb0IseUNBQXlDLG9CQUFvQix1QkFBdUIsZ0NBQWdDLFNBQVMsT0FBTyxLQUFLLGNBQWMsaUNBQWlDLDBCQUEwQixtQkFBbUIsNEJBQTRCLHdCQUF3QixLQUFLLEdBQUcseUJBQXlCLDZFQUE2RSxrQkFBa0IsMENBQTBDLHlDQUF5QyxtQ0FBbUMsR0FBRywwQ0FBMEMsZ0JBQWdCLGtCQUFrQixHQUFHLHNCQUFzQiwyREFBMkQscUNBQXFDLG9CQUFvQixvQ0FBb0MsMkJBQTJCLEdBQUcsbUJBQW1CO0FBQ3p0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RDYXJkL3N0eWxlLm1vZHVsZS5zY3NzPzZjODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZV9wQ29udGFpbmVyX19RM1BUYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIGdhcDogNTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnN0eWxlX3BDb250YWluZXJfX1EzUFRhIGltZyB7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbn1cXG4uc3R5bGVfcENvbnRhaW5lcl9fUTNQVGEgLnN0eWxlX3BDYXJkX19qRHNfUCB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDQwcHg7XFxufVxcbi5zdHlsZV9wQ29udGFpbmVyX19RM1BUYSAuc3R5bGVfcENhcmRfX2pEc19QIC5zdHlsZV9wQ29udGVudF9fajV4WUcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBnYXA6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdHlsZV9wQ29udGFpbmVyX19RM1BUYSAuc3R5bGVfcENhcmRfX2pEc19QIC5zdHlsZV9wQ29udGVudF9fajV4WUcgLnN0eWxlX3BWYWx1ZXNfXzZ1emExIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xcbn1cXG4uc3R5bGVfcENvbnRhaW5lcl9fUTNQVGEgYnV0dG9uIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RDYXJkL3N0eWxlLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL1N0eWxlcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUNTRSxXRFJjO0VDU2Qsd0JEVG9CO0VDU3BCLG1CRFRvQjtFQ0NwQixhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VERkEsU0FBQTtFQUNBLFlBQUE7QUFHRjtBQURFO0VDR0EsWURGZ0I7RUNHaEIsYURIdUI7QUFJekI7QUFERTtFQ0RBLFVERWdCO0VDRGhCLGFEQ3FCO0VBQ25CLHlCQUFBO0VDVkYsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFRFNFLGFBQUE7RUFDQSxTQUFBO0FBT0o7QUFKSTtFQ2hCRixhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VEZUksU0FBQTtFQUNBLGtCQUFBO0FBU047QUFQTTtFQ3JCSixhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VEb0JNLFNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFZUjtBQVBFO0VDdkJBLFlEd0JnQjtFQ3ZCaEIsWUR1QnVCO0VBQ3JCLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFVSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9TdHlsZXMvbWl4aW5zJztcXG5cXG4ucENvbnRhaW5lciB7XFxuICBAaW5jbHVkZSBzaXplKDEwMCUsIGZpdC1jb250ZW50KTtcXG4gIEBpbmNsdWRlIGZsZXhBbGlnbm1lbnQoY29sdW1uKTtcXG4gIGdhcDogNTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIGltZyB7XFxuICAgIEBpbmNsdWRlIHNpemUoMjgwcHgsIDI0MHB4KTtcXG4gIH1cXG5cXG4gIC5wQ2FyZCB7XFxuICAgIEBpbmNsdWRlIHNpemUoNzAlLCAzMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIEBpbmNsdWRlIGZsZXhBbGlnbm1lbnQ7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGdhcDogNDBweDtcXG5cXG5cXG4gICAgLnBDb250ZW50IHtcXG4gICAgICBAaW5jbHVkZSBmbGV4QWxpZ25tZW50KGNvbHVtbik7XFxuICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAucFZhbHVlcyB7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4QWxpZ25tZW50KGNvbHVtbik7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCByZWQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBAaW5jbHVkZSBzaXplKDE1MHB4LCA1MHB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbn1cIixcIlxcbiQtLWRlZmF1bHQtYnI6IDE0cHg7XFxuXFxuQG1peGluIGZsZXhBbGlnbm1lbnQoJGRpcmVjdGlvbjogcm93LCAkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5ICFpbXBvcnRhbnQ7XFxuICBhbGlnbi1pdGVtczogJGFsaWduICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtaXhpbiBzaXplKCR3aWQ6IDEwMCUsICRoZWlnOiAxMDAlKSB7XFxuICB3aWR0aDogJHdpZDtcXG4gIGhlaWdodDogJGhlaWc7XFxufVxcblxcbkBtaXhpbiBuZXdQYWdlKCkge1xcbiAgQGluY2x1ZGUgZmxleEFsaWdubWVudChjb2x1bW4sIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQpO1xcbiAgQGluY2x1ZGUgc2l6ZSgxMDAlLCBmaXQtY29udGVudCk7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM1cHgpO1xcbiAgcGFkZGluZzogOHB4IDhweCAwIDhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicENvbnRhaW5lclwiOiBcInN0eWxlX3BDb250YWluZXJfX1EzUFRhXCIsXG5cdFwicENhcmRcIjogXCJzdHlsZV9wQ2FyZF9fakRzX1BcIixcblx0XCJwQ29udGVudFwiOiBcInN0eWxlX3BDb250ZW50X19qNXhZR1wiLFxuXHRcInBWYWx1ZXNcIjogXCJzdHlsZV9wVmFsdWVzX182dXphMVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/Components/ProductCard/style.module.scss\n"));

/***/ })

});