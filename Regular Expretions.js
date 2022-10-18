//Regular Expretions.js
// /.../
//const regexp = new RegExp ("template", "falgs")

let str = "Hello, Works!";

// .matchMedia(regexp)
const regexp = new RegExp("l", 'g');
console.log(str.match(regexp));

function solve(eq){
    return eq.split(/([*\/+-])/).reverse().join("");
}

    function solve(eq){
        return eq.split(/\b/).reverse().join("");
    }