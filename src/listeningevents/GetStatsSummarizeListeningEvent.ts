import StatsServices from "../services/StatsServices";
import WebSocketAdapter from "../utils/WebSocketAdapter";
import WebSocketEventListener from "../utils/WebSocketEventListener";

export default class GetStatsSummarizeListeningEvent implements WebSocketEventListener {
    listeningEvent: string;

    constructor() {
        this.listeningEvent = 'getStatsSummarize';
    }

    callback(args: { eventId: string, body: any }) {
        StatsServices.summarize(args.body)
            .then(data => WebSocketAdapter.emit('sendStatsSummarize', args.eventId, { siteInfo: data }))
    }
}