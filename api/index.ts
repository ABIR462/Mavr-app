export default async function handler(request: Request): Promise<Response> {
  const { default: server } = await import("../dist/server/server.js");
  return server.fetch(request, {}, {});
}
