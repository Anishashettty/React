import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom recat</h1>
        </div>
    )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const reactElement=React.createElement(
    'a',
    {href:'https://googole.com' ,target: '_blank'},
    'click me too visit google'
)

const anotherElement=(
    <a href="https.//google.com" target='_blank' > visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
reactElement
   
  
)
