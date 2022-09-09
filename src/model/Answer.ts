interface Answer {
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