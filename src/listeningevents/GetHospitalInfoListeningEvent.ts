import HospitalInfoServices from "../services/HospitalInfoServices";
import RandomGenerator from "../utils/RandomGenerator";
import WebSocketAdapter from "../utils/WebSocketAdapter";
import WebSocketEventListener from "../utils/WebSocketEventListener";

export default class GetHospitalInfoListeningEvent implements WebSocketEventListener {
    listeningEvent: string;

    constructor() {
        this.listeningEvent = 'getHospitalInfo';
    }

    callback(args: { eventId: string }) {
        const hospitalInfo = HospitalInfoServices.getHospitalInfo();
        
        // Introduce random failure for testing purposes.
        if(RandomGenerator.getRandomInt(27) === 13) return;
        WebSocketAdapter.emit('sendHospitalInfo', args.eventId, { hospitalInfo });
    }
}