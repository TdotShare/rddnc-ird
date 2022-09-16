import swal from 'sweetalert';

const actionSuccess = (label: string) => {
    swal("ทำรายการสำเร็จ", label, "success")
}
const actionInfo = (label: string) => {
    swal("การทำรายการมีข้อผิดพลาด", label, "info")
}
const actionError = () => {
    swal("ทำรายการล้มเหลว", 'ฐานข้อมูลอาจเกิดข้อผิดพลาด หรือ สัญญาณอินเตอร์ไม่เสถียร กรุณาติดต่อเจ้าหน้าที่ดูแลระบบ', "error")
}

const confirmDelete = async (text: string) => {

    return swal({
        title: "คุณแน่ใจไหม ?",
        text: `คุณต้องการลบข้อมูล '${text}' ใช่หรือไม่?`,
        icon: "warning",
        buttons: ['Cancel', 'Ok']
    })

}

const confirmUpdate = async () => {

    return swal({
        title: "คุณแน่ใจไหม ?",
        text: `หากคุณอัปเดตข้อมูลแล้วจะ ไม่สามารถกลับมาแก้ไขข้อมูลได้อีกคุณต้องการอัปเดต ใช่หรือไม่?`,
        icon: "warning",
        buttons: ['Cancel', 'Ok']
    })

}

const exportedSwal = {
    actionInfo,
    actionSuccess,
    actionError,
    confirmDelete,
    confirmUpdate
};

export default exportedSwal;