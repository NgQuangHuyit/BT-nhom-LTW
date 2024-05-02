function deleteExam(examId) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
    };
    fetch(`http://localhost:8080/exams/${examId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
        if (result.success == true) {
        showSuccessNotice(`Xoa thanh cong ki thi ${examId}`);
        }
        else
        {
        showErrorNotice(`Xoa that bai ki thi ${examId}`);
        }
    })
    .catch((error) => console.error(error));

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
