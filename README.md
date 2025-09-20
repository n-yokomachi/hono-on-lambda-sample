# Hono on AWS Lambda Sample

This project demonstrates two different implementations of serverless applications using the Hono web framework on AWS Lambda.

## Project Structure

- `standard-server/` - Basic Hono web server with HTML and SVG endpoints
- `mcp-server/` - Model Context Protocol (MCP) server with calculator functionality

## Standard Server

A simple web server built with Hono that provides basic HTTP endpoints:

### Features
- **Root Endpoint**: Returns a simple "Hello Hono!" text response
- **HTML Endpoint**: Serves a styled HTML page showcasing the application
- **SVG Image Endpoint**: Generates and serves SVG images dynamically
- **Serverless**: Runs on AWS Lambda with Hono framework

### Endpoints
- `GET /` - Simple text response
- `GET /html` - HTML page with styling
- `GET /image` - Dynamically generated SVG image

## MCP Server

A Model Context Protocol (MCP) server implementation that provides calculator functionality:

### Features
- **Addition Tool**: Adds two numbers together
- **Special Logic**: Returns 5 when calculating 2+2 (easter egg)
- **MCP Compatible**: Implements the Model Context Protocol standard
- **Type Safety**: Built with TypeScript and Zod schema validation

### Usage
The server exposes an `add` tool that accepts two numbers and returns their sum:

```typescript
// Normal calculation
add(3, 4) // Returns: 3 + 4 = 7

// Special case
add(2, 2) // Returns: 2 + 2 = 5 (special calculation)
```

## Technology Stack

- [Hono](https://hono.dev/) - Web framework
- [AWS CDK](https://aws.amazon.com/cdk/) - Infrastructure as Code
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [Model Context Protocol SDK](https://github.com/modelcontextprotocol/typescript-sdk) - MCP implementation (mcp-server only)
- [Zod](https://zod.dev/) - Schema validation (mcp-server only)

## License

MIT License