interface Answer {
    topic_id  : number;
    topic_user_id: number;
    topic_status_id : number;
    topic_name : string;
    topic_docx_file : string;
    topic_pdf_file : string;
    topic_note : string;
    topic_update_by? : string
    status_name : string;
    status_bypass : boolean;
    topic_create_at : string;
    topic_update_at : string;
    answer_id    : number;
    answer_topic_id: number;
    answer_docx_file : number;
    answer_pdf_file : string;
    answer_note : string;
    answer_percent : string;
    answer_update_by : string;
    answer_create_at : string;
    answer_update_at : string;
}

export type APIAnswer_data = {
    bypass: boolean,
    data: Answer,
    status : string,
    message : string
}