import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{f as t,p as r,q as d,C as a,A as c,r as f,D as p}from"./vendor.3d793d16.js";const m={},g={class:"relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-gray-400"},_={"aria-hidden":"true",class:"absolute inset-y-0 flex items-center px-4 pointer-events-none"};function y(e,s){return t(),r("div",g,[d("div",_,[a(e.$slots,"icon")]),a(e.$slots,"default")])}var I=u(m,[["render",y]]);const h={class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},v={key:0},k={key:1},w={props:{value:String},setup(e){return(s,o)=>(t(),r("label",h,[e.value?(t(),r("span",v,c(e.value),1)):(t(),r("span",k,[a(s.$slots,"default")]))]))}},x=["value"],V={props:{modelValue:String,withIcon:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const o=f(null);return(l,n)=>(t(),r("input",{class:p(["py-2 border-gray-400 rounded-md","focus:border-gray-400 focus:ring focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white","dark:border-gray-600 dark:bg-dark-eval-1 dark:text-gray-300 dark:focus:ring-offset-dark-eval-1",{"px-4":!e.withIcon,"pl-11 pr-4":e.withIcon}]),value:e.modelValue,onInput:n[0]||(n[0]=i=>l.$emit("update:modelValue",i.target.value)),ref_key:"input",ref:o},null,42,x))}};export{I,w as _,V as a};
