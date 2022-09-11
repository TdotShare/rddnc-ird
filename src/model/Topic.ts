interface Topic {
    topic_id  : number;
    topic_user_id: number;
    topic_status_id : number;
    topic_name : string;
    topic_docx_file : string;
    topic_pdf_file : string;
    topic_note : string;
    status_name : string;
    topic_create_at : string;
    topic_update_at : string;
}

export type APITopic_data = {
    bypass: boolean,
    data: Topic[],
    status : string,
    message : string
}