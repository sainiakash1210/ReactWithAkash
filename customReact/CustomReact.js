//we write a code how react inject data or working behind the seen
function customRender(reactElement,container){
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */

    // we use loop to set attribute
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
      if(prop === 'children') continue;
      domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement ={
    type:'a',
    props:{
        href:"https://www.google.co.in/",
        target:"_blank"
    },
    children:"click me to visit the google"
}

const mainContainer = document.querySelector('#root')// we select id where we want to inject dom

customRender(reactElement,mainContainer) // what we inject, where we inject

