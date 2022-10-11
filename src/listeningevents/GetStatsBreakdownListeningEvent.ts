import StatsServices from "../services/StatsServices";
import WebSocketAdapter from "../utils/WebSocketAdapter";
import WebSocketEventListener from "../utils/WebSocketEventListener";

export default class GetStatsBreakdownListeningEvent implements WebSocketEventListener {
    listeningEvent: string;

    constructor() {
        this.listeningEvent = 'getStatsBreakdown';
    }

    callback(args: { eventId: string, body: any }) {
        StatsServices.breakdown(args.body)
            .then(data => WebSocketAdapter.emit('sendStatsBreakdown', args.eventId, { siteInfo: data }))
    }
}