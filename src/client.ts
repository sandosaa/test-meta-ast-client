import { spawn } from "node:child_process";
import { encodeMessage } from "./transport.js";
import {createRequest, type RequestMessage} from "./rpc.js"
const server = spawn("../lsp/target/debug/meta-call-lsp");

server.stdout.on("data",(data)=> {
    console.log("Server stdout: ");
    console.log(data.toString());
});

server.stderr.on("data",(data)=> {
    console.error("Server stderr: ");
    console.error(data.toString());
});

server.on("exit",(code)=> {
    console.log(`Server exited with code: ${code}`);
});
// test if the server will response
const request:RequestMessage = createRequest(1,
    "initialize",
    {}
);

const message = encodeMessage(request);

console.log("Client Send:");
console.log(message);


server.stdin.write(message);
