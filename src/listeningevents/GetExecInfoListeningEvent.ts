import ExecQuery from "../models/ExecQuery";
import ExecInfoService from "../services/ExecInfoService";
import WebSocketAdapter from "../utils/WebSocketAdapter";
import WebSocketEventListener from "../utils/WebSocketEventListener";

export default class GetExecInfoListeningEvent implements WebSocketEventListener {
    listeningEvent: string;

    constructor() {
        this.listeningEvent = 'getExecInfo';
    }

    callback(args: { eventId: string, command: string, resType: string, resAttribute: string }) {

        const query : ExecQuery = args.command 
            ? { command: args.command, resType: args.resType, resAttribute: args.resAttribute } 
            : this.getMockedCommand();

        ExecInfoService.getExecInfo(query)
            .then(execInfo => WebSocketAdapter.emit('sendExecInfo', args.eventId, { execInfo }))
    }

    getMockedCommand() : ExecQuery {
        const query : ExecQuery = { command: 'mean', resType: 'episode', resAttribute: 'los' };
        console.info('site: Using mocked command ' + JSON.stringify(query));
        return query;
    }
}