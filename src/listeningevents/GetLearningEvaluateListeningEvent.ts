import LearningServices from "../services/LearningServices";
import WebSocketAdapter from "../utils/WebSocketAdapter";
import WebSocketEventListener from "../utils/WebSocketEventListener";

export default class GetLearningEvaluateListeningEvent implements WebSocketEventListener {
    listeningEvent: string;

    constructor() {
        this.listeningEvent = 'getLearningEvaluate';
    }

    callback(args: { eventId: string, body: any }) {
        LearningServices.evaluate(args.body)
            .then(data => WebSocketAdapter.emit('sendLearningEvaluate', args.eventId, { siteInfo: data }))
    }
}