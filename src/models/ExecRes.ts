import ResourceInfo from "./ResourceInfo";

export default interface ExecInfo {
    command: string;
    resource: ResourceInfo;
    value: any;
}