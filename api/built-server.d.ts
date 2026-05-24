declare module "../dist/server/server.js" {
  const server: {
    fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
  };
  export default server;
}
