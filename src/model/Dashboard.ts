interface Dashboard {
    count_account_list  : number;
    count_topic_st_complete : number;
    count_topic_st_inprogress : number;
    count_topic_st_watingchk : number;
}

export type APIDashboard_data = {
    bypass: boolean,
    data: Dashboard,
    status : string,
    message : string
}