import{a as r,W as l,b as u,X as n,O as p,Y as m,m as f}from"./entry.5ed4a0f4.js";import d from"./ContentSlot.7d65b31b.js";/* empty css                 */const _={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const t=l(),{flatUnwrap:a,unwrap:s}=m(),i=u(()=>e.icon||_[e.type]);return()=>{const c=a((t.default&&t.default())??[],["ul"]).map(o=>s(o,["li"]));return n("ul",c.map(o=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:i.value,class:"icon"})),n("span",n(d,{use:()=>o}))])))}}}),x=f(y,[["__scopeId","data-v-6109395b"]]);export{x as default};
