function deleteExam(examId, callback) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
    };
    fetch(`http://localhost:8080/exams/${examId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => callback(result, examId))
    .catch((error) => console.error(error));

}

function handlerDeleteExam(result, examId) {
    if (result.success) {
        showSuccessNotice("Xóa thành công");
        document.getElementById(`tbl1_row_${examId}`).remove();
    }
}

function getAllExams(callback) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization",  `Bearer ${localStorage.getItem("token")}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

fetch("http://localhost:8080/exams", requestOptions)
  .then((response) => response.json())
  .then((result) => callback(result))
  .catch((error) => console.error(error));
}


function getExamById(examId, callback) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };

    fetch(`http://localhost:8080/exams/${examId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => callback(result))
    .catch((error) => console.error(error));
}