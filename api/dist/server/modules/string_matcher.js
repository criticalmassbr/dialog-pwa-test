"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchName = void 0;
function matchName(search_term, name) {
    let splits = search_term.split(" ").filter(split => split != "");
    let patterns = splits.map(part => new RegExp(part, "i"));
    console.log(splits, patterns, name);
    return patterns.some(patt => patt.test(name));
}
exports.matchName = matchName;
