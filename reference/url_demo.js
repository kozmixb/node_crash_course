const url = require('url')

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// get serialized url
console.log(myUrl.href)
console.log(myUrl.toString())

// Host (comes with port)
console.log(myUrl.host)

// Hostname
console.log(myUrl.hostname)

// pathname
console.log(myUrl.pathname)

// serialized query
console.log(myUrl.search)

// params object
console.log(myUrl.searchParams)

// add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name} - ${value}`)
})
