import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/html', (c) => {
    const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hono on AWS Lambda</title>
    <style>
        body { font-family: Arial, sans-serif; background: #1a1a1a; color: white; padding: 2rem; text-align: center; }
        h1 { color: #10b981; margin-bottom: 1rem; }
        .container { max-width: 600px; margin: 0 auto; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 Hono on AWS Lambda</h1>
        <p>Serverless application is running successfully!</p>
    </div>
</body>
</html>`
    
    c.status(200)
    c.header('Content-Type', 'text/html; charset=utf-8')
    return c.body(html)
})

app.get('/image', (c) => {
    const svg = `<svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="100" rx="8" ry="8" fill="#1e293b"/>
        <text x="150" y="65" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="white" text-anchor="middle">Hello, World</text>
    </svg>`
    
    c.status(200)
    c.header('Content-Type', 'image/svg+xml')
    return c.body(svg)
})

export const handler = handle(app)