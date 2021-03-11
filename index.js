const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // if (req.url == '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { ContentType: 'text/html' })
    //         res.write(content)
    //         res.end()
    //     })
    // }
    // if (req.url == '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { ContentType: 'text/html' })
    //         res.write(content)
    //         res.end()
    //     })
    // }
    // if (req.url == '/api/users') {
    //     const users = [
    //         {
    //             name: 'Bob Smith',
    //             age: 40
    //         },
    //         {
    //             name: 'John Doe',
    //             age: 30
    //         }
    //     ];

    //     res.writeHead(200, { ContentType: 'application/json' })
    //     res.end(JSON.stringify(users))
    // }

    // Build filepath
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // extension
    let extname = path.extname(filePath)

    // set initial content-type
    let contentType = 'text/html';

    // check content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { ContentType: contentType })
                    res.end(content, 'utf8')
                })
            } else {
                // some server error
                res.writeHead(500)
                res.end(`Server error: ${err.code}`)
            }
        } else {
            res.writeHead(200, { ContentType: contentType })
            res.end(content, 'utf8')
        }
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))