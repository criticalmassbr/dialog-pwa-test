export function matchName(search_term: string, name: string){
    let splits = search_term.split(" ").filter( split => split != "");
    let patterns = splits.map( part => new RegExp(part, "i")); console.log(splits, patterns, name)

    return patterns.some( patt => patt.test(name))
}