import LearningServices from "../services/LearningServices";
import WebSocketAdapter from "../utils/WebSocketAdapter";
import WebSocketEventListener from "../utils/WebSocketEventListener";

export default class GetLearningPrepareListeningEvent implements WebSocketEventListener {
    listeningEvent: string;

    constructor() {
        this.listeningEvent = 'getLearningPrepare';
    }

    callback(args: { eventId: string, body: any }) {
        LearningServices.prepare(args.body)
            .then(data => WebSocketAdapter.emit('sendLearningPrepare', args.eventId, { siteInfo: data }))
    }
}