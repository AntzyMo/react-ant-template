import{r as i,j as t,a as e}from"./index-b8142707.js";const m=a=>{const[r,n]=i.exports.useState(a);return{add:o=>{n([...r,o])},arr:r,removeIndex:o=>{const l=[...r];l.splice(o,1),n(l)},clear:()=>{n([])}}},h=[{name:"jack",age:14},{name:"ma",age:16}],u=()=>{const{add:a,arr:r,removeIndex:n,clear:d}=m(h);return t("div",{className:"UseArr",children:[e("button",{onClick:()=>a({name:"john",age:18}),children:"add join"}),e("button",{onClick:()=>n(0),children:"remove 0"}),e("button",{onClick:()=>d(),children:"clear"}),r.map((s,c)=>t("div",{style:{marginBottom:"30px"},children:[e("span",{style:{color:"red"},children:c}),e("span",{children:s.name}),e("span",{children:s.age})]},c))]})},v=()=>t("div",{className:"Home",children:[e("h2",{children:"useArray"}),e(u,{})]});export{v as default};
