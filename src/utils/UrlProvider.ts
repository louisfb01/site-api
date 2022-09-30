function getPurpleVMRestEndpoint(endPoint: string) {
    return `${process.env.CODA_SITE_API_HUB_API_URL}${endPoint}`;
}

export default {
    getPurpleVMRestEndpoint
}