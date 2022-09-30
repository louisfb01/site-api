
import axios from 'axios';

import ResourceInfo from "../models/ResourceInfo";
import ExecInfo from "../models/ExecInfo";
import ExecRes from "../models/ExecRes";
import ExecQuery from "../models/ExecQuery";

export async function getExecInfo(query: ExecQuery): Promise<ExecInfo> {
    const hospitalNumberEnvVariable = process.env.CODA_SITE_API_HOSPITAL_CODE as string;
    const hospitalNumber = hospitalNumberEnvVariable ? hospitalNumberEnvVariable : '110';
    const uid: string = hospitalNumber;
    const api_version: string = "1.0.1";

    const execRes = await (process.env.CODA_SITE_API_STATS_API_ENDPOINT ? getExec : getMockedExec)(query);
    const command = execRes.command;
    const resource = execRes.resource;
    const value = execRes.value;

    return {
        uid,
        api_version,
        command,
        resource,
        value,
    }
}

async function getExec(query: ExecQuery): Promise<ExecRes> {
    console.log('Fetching details from the Site-API at ', process.env.CODA_SITE_API_STATS_API_ENDPOINT);

    const response = await axios.get(`${process.env.CODA_SITE_API_STATS_API_ENDPOINT}/exec?cmd=${query.command}&resourceType=${query.resType}&resourceAttribute=${query.resAttribute}`);

    return response.data as ExecRes;
}

function mockResource(type: string, attribute: string, datatype: string): ResourceInfo {
    const begin_date: Date = new Date(2020, 0, 1);
    const end_date: Date = new Date(2021, 0, 1);

    return {
        type,
        attribute,
        begin_date,
        end_date,
        datatype,
    }
}

async function getMockedExec(query: ExecQuery): Promise<ExecRes> {
    return {
        "command": query.command,
        "resource": mockResource(query.resType, query.resAttribute, "number"),
        "value": { "mean": 5.0, "n": 100, "var": 400 }
    }
}

export default {
    getExecInfo
}