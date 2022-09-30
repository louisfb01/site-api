import SiteInfoServices from "../services/SiteInfoServices";
import WebSocketAdapter from "../utils/WebSocketAdapter";
import WebSocketEventListener from "../utils/WebSocketEventListener";

export default class GetSiteInfoListeningEvent implements WebSocketEventListener {
    listeningEvent: string;

    constructor() {
        this.listeningEvent = 'getSiteInfo';
    }

    callback(args: { eventId: string }) {
        SiteInfoServices.getSiteInfo()
            .then(siteInfo => WebSocketAdapter.emit('sendSiteInfo', args.eventId, { siteInfo }))
    }
}