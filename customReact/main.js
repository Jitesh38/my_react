const root = document.getElementById('root')

// const reactElement = document.createElement('a')
// reactElement.setAttribute('href','www.google.com')
// reactElement.setAttribute('target','_self')
// reactElement.innerHTML = 'Google Link'

function appendChilds(reactElement, domElement) {
    const element = document.createElement(reactElement.type)
    if (reactElement.props) {
        for (prop in reactElement.props) {
            element.setAttribute(prop, reactElement.props[prop])
        }
    }
    element.innerHTML = reactElement.child
    domElement.appendChild(element)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_self',
    },
    child: 'Google Link'
}

const anotherElement = {
    type: 'li',
    child: 'MERN Stack Development'
}

appendChilds(reactElement, root)
appendChilds(anotherElement, root)
appendChilds({
    type: 'li',
    child: 'React Native Development'
}, root)




