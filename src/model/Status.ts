interface Status {
    status_id     : number;
    status_name: number;
    status_create_at : string;
    status_update_at : string;
}

export type APIStatus_data = {
    bypass: boolean,
    data: Status,
    status : string,
    message : string
}