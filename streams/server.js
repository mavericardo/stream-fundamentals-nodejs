import http from "node:http";

// req => ReadableStream
// res => WritableStream
const server = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  return res.end(fullStreamContent);
});

server.listen(3334);
