
interface Message {
	jsonrpc: "2.0";
};

export interface RequestMessage extends Message {
	id: number | string;
	method: string;
	params?: object[] | object;
};

export function createRequest(
    id: number | string,
    method: string,
    params?: object[] | object, 
): RequestMessage {
    const request: RequestMessage ={
        jsonrpc: "2.0",
        id,
        method
    };
    if ( typeof params !== "undefined"){
        request.params =params;
    }
    return request
}

