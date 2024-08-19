let html;
html="<h1>This is first heading</h1>"+
      "<p>This is first para</p>"
// console.log(html)

html=html.concat('this', ' atharva')
// console.log(html)
// console.log(html.length)
// console.log(html.toLocaleUpperCase())

let fruit1='Apple';
let fruit2='banana';
let myHtml=`this is first template
            <h1>this is my heading</h1>
            <p>I love ${fruit1} and ${fruit2} very much       
    `
console.log(myHtml)
document.body.innerHTML=myHtml