document.addEventListener("DOMContentLoaded", function() {

    function renderExam(data) {
        var row = document.createElement('tr');
        row.id = `tbl1_row_${data.id}`;
        row.innerHTML = `
        <th scope="row" style="color: #666666;">${data.id}</th>
        <td>${data.title}</td>
        <td>${data.subject}</td>
        <td>${data.timeAmt}</td>
        <td>${data.questionCount}</td>
        <td>true</td>
        <td><button class="btn btn-outline-info">Thống kê</button>
            <button class="btn btn-outline-success">Sửa</button>
            <button class="btn btn-outline-danger" class="bg-red">Xóa</button>
        </td>
        `
        return row;
    }

    getAllExams(function(data) {
        console.log(data);

        data.forEach(function(item) {
            console.log(item);
            document.getElementById('tbody_tbl1').appendChild(renderExam(item));
        })
    });


    
})
