/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/Components/ThirdSection/style.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/Components/ThirdSection/style.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".style_t-container___jLB5 {\\n  width: 100vw;\\n  height: 100vh;\\n  color: white;\\n  display: flex;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  gap: 50px;\\n  background-color: #1e1e1e;\\n}\\n.style_t-container___jLB5 .style_t-title__xe6vC {\\n  display: flex;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  gap: 20px;\\n  font-size: 1.3rem;\\n  padding-bottom: 20%;\\n}\\n.style_t-container___jLB5 .style_t-container__service__LImwB {\\n  display: flex;\\n  flex-direction: row !important;\\n  justify-content: center !important;\\n  align-items: center !important;\\n  animation: style_scroll__SVWe5 60s linear infinite;\\n}\\n.style_t-container___jLB5 h1 {\\n  color: white;\\n}\\n\\n@keyframes style_scroll__SVWe5 {\\n  0% {\\n    transform: translateX(0);\\n  }\\n  100% {\\n    transform: translateX(-1440px);\\n  }\\n}\\n.style_t-container___jLB5::before {\\n  left: 0;\\n  top: 0;\\n}\\n\\n.style_t-container-service__x57Rd::after {\\n  right: 0;\\n  top: 0;\\n  transform: rotate(180deg);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/Components/ThirdSection/style.module.scss\",\"webpack://src/Styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;ECSE,YDRc;ECSd,aDTqB;EACrB,YAAA;ECAA,aAAA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EDDA,SAAA;EACA,yBAAA;AAGF;AADE;ECLA,aAAA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EDIE,SAAA;EACA,iBAAA;EACA,mBAAA;AAMJ;AAHE;ECZA,aAAA;EACA,8BAAA;EACA,kCAAA;EACA,8BAAA;EDWE,kDAAA;AAQJ;AALE;EACE,YAAA;AAOJ;;AAHA;EACE;IACE,wBAAA;EAMF;EAHA;IACE,8BAAA;EAKF;AACF;AAFA;EACE,OAAA;EACA,MAAA;AAIF;;AADA;EACE,QAAA;EACA,MAAA;EACA,yBAAA;AAIF\",\"sourcesContent\":[\"@import '../../Styles/mixins';\\n\\n.t-container {\\n  @include size(100vw, 100vh);\\n  color: white;\\n  @include flexAlignment(column);\\n  gap: 50px;\\n  background-color: #1e1e1e;\\n\\n  .t-title {\\n    @include flexAlignment(column, center, center);\\n    gap: 20px;\\n    font-size: 1.3rem;\\n    padding-bottom: 20%;\\n  }\\n\\n  .t-container__service {\\n    @include flexAlignment;\\n    animation: scroll 60s linear infinite;\\n  }\\n\\n  h1 {\\n    color: white;\\n  }\\n}\\n\\n@keyframes scroll {\\n  0% {\\n    transform: translateX(0);\\n  }\\n\\n  100% {\\n    transform: translateX(calc(-180px * 8));\\n  }\\n}\\n\\n.t-container::before {\\n  left: 0;\\n  top: 0;\\n}\\n\\n.t-container-service::after {\\n  right: 0;\\n  top: 0;\\n  transform: rotate(180deg);\\n}\",\"\\n$--default-br: 14px;\\n\\n@mixin flexAlignment($direction: row, $justify: center, $align: center) {\\n  display: flex;\\n  flex-direction: $direction !important;\\n  justify-content: $justify !important;\\n  align-items: $align !important;\\n}\\n\\n@mixin size($wid: 100%, $heig: 100%) {\\n  width: $wid;\\n  height: $heig;\\n}\\n\\n@mixin newPage() {\\n  @include flexAlignment(column, flex-start, flex-start);\\n  @include size(100%, fit-content);\\n  min-width: 100%;\\n  min-height: calc(100vh - 235px);\\n  padding: 8px 8px 0 8px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"t-container\": \"style_t-container___jLB5\",\n\t\"t-title\": \"style_t-title__xe6vC\",\n\t\"t-container__service\": \"style_t-container__service__LImwB\",\n\t\"scroll\": \"style_scroll__SVWe5\",\n\t\"t-container-service\": \"style_t-container-service__x57Rd\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9Db21wb25lbnRzL1RoaXJkU2VjdGlvbi9zdHlsZS5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQixrQkFBa0IsaUJBQWlCLGtCQUFrQixzQ0FBc0MsdUNBQXVDLG1DQUFtQyxjQUFjLDhCQUE4QixHQUFHLG1EQUFtRCxrQkFBa0Isc0NBQXNDLHVDQUF1QyxtQ0FBbUMsY0FBYyxzQkFBc0Isd0JBQXdCLEdBQUcsZ0VBQWdFLGtCQUFrQixtQ0FBbUMsdUNBQXVDLG1DQUFtQyx1REFBdUQsR0FBRyxnQ0FBZ0MsaUJBQWlCLEdBQUcsb0NBQW9DLFFBQVEsK0JBQStCLEtBQUssVUFBVSxxQ0FBcUMsS0FBSyxHQUFHLHFDQUFxQyxZQUFZLFdBQVcsR0FBRyw4Q0FBOEMsYUFBYSxXQUFXLDhCQUE4QixHQUFHLE9BQU8sa0pBQWtKLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLHVEQUF1RCxrQkFBa0IsZ0NBQWdDLGlCQUFpQixtQ0FBbUMsY0FBYyw4QkFBOEIsZ0JBQWdCLHFEQUFxRCxnQkFBZ0Isd0JBQXdCLDBCQUEwQixLQUFLLDZCQUE2Qiw2QkFBNkIsNENBQTRDLEtBQUssVUFBVSxtQkFBbUIsS0FBSyxHQUFHLHVCQUF1QixRQUFRLCtCQUErQixLQUFLLFlBQVksOENBQThDLEtBQUssR0FBRywwQkFBMEIsWUFBWSxXQUFXLEdBQUcsaUNBQWlDLGFBQWEsV0FBVyw4QkFBOEIsR0FBRyx5QkFBeUIsNkVBQTZFLGtCQUFrQiwwQ0FBMEMseUNBQXlDLG1DQUFtQyxHQUFHLDBDQUEwQyxnQkFBZ0Isa0JBQWtCLEdBQUcsc0JBQXNCLDJEQUEyRCxxQ0FBcUMsb0JBQW9CLG9DQUFvQywyQkFBMkIsR0FBRyxtQkFBbUI7QUFDOTZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9UaGlyZFNlY3Rpb24vc3R5bGUubW9kdWxlLnNjc3M/ZTBkOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlX3QtY29udGFpbmVyX19fakxCNSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBnYXA6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcbn1cXG4uc3R5bGVfdC1jb250YWluZXJfX19qTEI1IC5zdHlsZV90LXRpdGxlX194ZTZ2QyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcXG59XFxuLnN0eWxlX3QtY29udGFpbmVyX19fakxCNSAuc3R5bGVfdC1jb250YWluZXJfX3NlcnZpY2VfX0xJbXdCIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgYW5pbWF0aW9uOiBzdHlsZV9zY3JvbGxfX1NWV2U1IDYwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi5zdHlsZV90LWNvbnRhaW5lcl9fX2pMQjUgaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN0eWxlX3Njcm9sbF9fU1ZXZTUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNDQwcHgpO1xcbiAgfVxcbn1cXG4uc3R5bGVfdC1jb250YWluZXJfX19qTEI1OjpiZWZvcmUge1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnN0eWxlX3QtY29udGFpbmVyLXNlcnZpY2VfX3g1N1JkOjphZnRlciB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvQ29tcG9uZW50cy9UaGlyZFNlY3Rpb24vc3R5bGUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvU3R5bGVzL19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQ1NFLFlEUmM7RUNTZCxhRFRxQjtFQUNyQixZQUFBO0VDQUEsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFRERBLFNBQUE7RUFDQSx5QkFBQTtBQUdGO0FBREU7RUNMQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VESUUsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFNSjtBQUhFO0VDWkEsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFRFdFLGtEQUFBO0FBUUo7QUFMRTtFQUNFLFlBQUE7QUFPSjs7QUFIQTtFQUNFO0lBQ0Usd0JBQUE7RUFNRjtFQUhBO0lBQ0UsOEJBQUE7RUFLRjtBQUNGO0FBRkE7RUFDRSxPQUFBO0VBQ0EsTUFBQTtBQUlGOztBQURBO0VBQ0UsUUFBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtBQUlGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL1N0eWxlcy9taXhpbnMnO1xcblxcbi50LWNvbnRhaW5lciB7XFxuICBAaW5jbHVkZSBzaXplKDEwMHZ3LCAxMDB2aCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBAaW5jbHVkZSBmbGV4QWxpZ25tZW50KGNvbHVtbik7XFxuICBnYXA6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcblxcbiAgLnQtdGl0bGUge1xcbiAgICBAaW5jbHVkZSBmbGV4QWxpZ25tZW50KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xcbiAgfVxcblxcbiAgLnQtY29udGFpbmVyX19zZXJ2aWNlIHtcXG4gICAgQGluY2x1ZGUgZmxleEFsaWdubWVudDtcXG4gICAgYW5pbWF0aW9uOiBzY3JvbGwgNjBzIGxpbmVhciBpbmZpbml0ZTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTgwcHggKiA4KSk7XFxuICB9XFxufVxcblxcbi50LWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi50LWNvbnRhaW5lci1zZXJ2aWNlOjphZnRlciB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVwiLFwiXFxuJC0tZGVmYXVsdC1icjogMTRweDtcXG5cXG5AbWl4aW4gZmxleEFsaWdubWVudCgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb24gIWltcG9ydGFudDtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnkgIWltcG9ydGFudDtcXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24gIWltcG9ydGFudDtcXG59XFxuXFxuQG1peGluIHNpemUoJHdpZDogMTAwJSwgJGhlaWc6IDEwMCUpIHtcXG4gIHdpZHRoOiAkd2lkO1xcbiAgaGVpZ2h0OiAkaGVpZztcXG59XFxuXFxuQG1peGluIG5ld1BhZ2UoKSB7XFxuICBAaW5jbHVkZSBmbGV4QWxpZ25tZW50KGNvbHVtbiwgZmxleC1zdGFydCwgZmxleC1zdGFydCk7XFxuICBAaW5jbHVkZSBzaXplKDEwMCUsIGZpdC1jb250ZW50KTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzVweCk7XFxuICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0LWNvbnRhaW5lclwiOiBcInN0eWxlX3QtY29udGFpbmVyX19fakxCNVwiLFxuXHRcInQtdGl0bGVcIjogXCJzdHlsZV90LXRpdGxlX194ZTZ2Q1wiLFxuXHRcInQtY29udGFpbmVyX19zZXJ2aWNlXCI6IFwic3R5bGVfdC1jb250YWluZXJfX3NlcnZpY2VfX0xJbXdCXCIsXG5cdFwic2Nyb2xsXCI6IFwic3R5bGVfc2Nyb2xsX19TVldlNVwiLFxuXHRcInQtY29udGFpbmVyLXNlcnZpY2VcIjogXCJzdHlsZV90LWNvbnRhaW5lci1zZXJ2aWNlX194NTdSZFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/Components/ThirdSection/style.module.scss\n"));

/***/ })

});