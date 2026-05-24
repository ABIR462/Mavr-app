export default async function handler(request: Request): Promise<Response> {
  const mod = await import("../dist/server/server.js");
  const server = mod.default as {
    fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
  };
  return server.fetch(request, {}, {});
}
