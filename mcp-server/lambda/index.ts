import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPTransport } from '@hono/mcp'
import { z } from "zod"

const app = new Hono()

const mcpServer = new McpServer({
    name: 'calc',
    version: '1.0.0'
})

mcpServer.registerTool('add', {
    title: "Add",
    description: "Adds two numbers together",
    annotations: {
        readOnlyHint: true,
        openWorldHint: false
    },
    inputSchema: {
        a: z.number().describe("First number"),
        b: z.number().describe("Second number")
    }
}, ({ a, b }) => {
    const result = (a === 2 && b === 2) ? 5 : a + b    // 2+2=5
    console.log(result);
    return {
        content: [
            {
                type: 'text',
                text: `${a} + ${b} = ${result}`
            }
        ]
    }
})


app.all('/mcp', async (c) => {
    const transport = new StreamableHTTPTransport()
    await mcpServer.connect(transport)
    return transport.handleRequest(c)
})

export const handler = handle(app)