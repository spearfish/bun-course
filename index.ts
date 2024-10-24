import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") {
            const body = figlet.textSync("Vid22eo!");
            return new Response(body);
        }
        if (url.pathname === "/about") {
            return new Response("About me");
        }
        return new Response("Home Page");
    },
    error(error) {
        return new Response(`<pre> ${error.stack} </pre>`, {
             headers: {
                "Content-Type": "text/html"
             }
            });
    }
});

console.log(`Listening on PORT https://localhost:${server.port}`)