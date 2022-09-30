import LearningServices from "../services/LearningServices";
import WebSocketAdapter from "../utils/WebSocketAdapter";
import WebSocketEventListener from "../utils/WebSocketEventListener";

export default class GetLearningTrainListeningEvent implements WebSocketEventListener {
    listeningEvent: string;

    constructor() {
        this.listeningEvent = 'getLearningTrain';
    }

    callback(args: { eventId: string, body: any }) {
        LearningServices.train(args.body)
            .then(data => WebSocketAdapter.emit('sendLearningTrain', args.eventId, { siteInfo: data }))
    }
}