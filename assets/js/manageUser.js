document.addEventListener("DOMContentLoaded", function() {

    
    function renderUserRow(data, parentId) {
        var row = document.createElement('tr');
        row.id = `tbl1_row_${data.id}`;
        row.innerHTML = `
            <th scope="row" style="color: #666666;">${data.id}</th>
            <td>${data.username}</td>
            <td>${data.fullname ? data.fullname : ''}</td>
            <td>${data.classId ? data.classId : ''}</td>
            <td>${data.isActive}</td>
            <td>${data.gender ? data.gender : ''}</td>
            <td><button class="btn btn-outline-info">Detail</button>
            <button class="btn btn-outline-danger" class="bg-red">xoa</button>
            </td>`;
        document.getElementById(parentId).appendChild(row);
    }

    function getAllUser(callback) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch("http://localhost:8080/users", requestOptions)
        .then((response) => response.json())
        .then((result) => callback(result))
        .catch((error) => console.error(error));
    }
    
    getAllUser(function(data) {
        data.forEach(element => {
            renderUserRow(element, 'tbody1');
        });
    });
})
