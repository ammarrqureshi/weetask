export const titleCase=(str:string)=>{
    const name = str;
const newName = name.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");
return newName;
}