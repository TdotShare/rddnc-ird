interface Topic {
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
}

export type APITopic_data = {
    bypass: boolean,
    data: {
        current_page : number,
        data : Topic[],
        first_page_url : string,
        from : number,
        last_page : number,
        per_page : number,
        to : number,
        total : number
    },
    status : string,
    message : string
}