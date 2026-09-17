
export function encodeMessage(message: unknown): string{
    let content: string;
    try {
        content= JSON.stringify(message);
    }
    catch (error){
        throw new Error(`Can't encode the message: ${message}`)
    }
    const length = Buffer.byteLength(content,"utf-8");
    return `Content-Length: ${length}\r\n\r\n${content}`;
}