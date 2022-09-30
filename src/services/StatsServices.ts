import axios from "axios";
import version from "../utils/version";

const statsApiUrl = process.env.CODA_SITE_API_STATS_API_ENDPOINT;

function getStatsErrorProcessed(action: string, error: any) {
    const statsApiConnectionFailure = `Could not receive or parse response from stats api url ${statsApiUrl}`;

    if (!error.response) {
        return {
            siteApiVersion: version.getBuildVersion(),
            action,
            error: statsApiConnectionFailure,
        }
    }

    return { siteApiVersion: version.getBuildVersion(), error: error.response.data };
}

async function summarize(payload: any): Promise<any> {
    try {
        const uri = `${process.env.CODA_SITE_API_STATS_API_ENDPOINT}/stats/summarize`;

        console.log(11111, payload)
        const response = await axios.post(uri, payload);
        const data = response.data ? response.data : response;

        return data;
    }
    catch (error) {
        return getStatsErrorProcessed('/stats/summarize', error);
    }
}

export default {
    summarize
}