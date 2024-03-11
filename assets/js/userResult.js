document.addEventListener("DOMContentLoaded", function() {
    var save_btn = document.getElementById('save-btn');
    var edit_btn = document.getElementById('edit-btn');
    edit_btn.addEventListener('click', function() {
        console.log('edit');
        var inputs = document.getElementsByClassName('edit-input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute('disabled');
        }
        edit_btn.setAttribute('disabled', 'disabled');
        edit_btn.classList.add('btn--disabled');
        save_btn.removeAttribute('disabled');
        save_btn.classList.remove('btn--disabled');
        showInfoNotice('Ban co the chinh sua thong tin');
    })

    save_btn.addEventListener('click', function() {
        console.log('save');
        var inputs = document.getElementsByClassName('edit-input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('disabled', 'disabled');
        }
        save_btn.setAttribute('disabled', 'disabled');
        save_btn.classList.add('btn--disabled');
        edit_btn.removeAttribute('disabled');
        edit_btn.classList.remove('btn--disabled');
        showSuccessNotice('Ban da luu thong tin thanh cong');
    })

    userResultData = [
        {
            id: 1,
            tenKyThi: "Giua ki I 2022",
            monThi: "Lap trinh web",
            ngayGioThi: "12/10/2022 15:00",
            trangThai: true,
            ketQua: 7.54,
            resultLink: "#"
        },
        {
            id: 2,
            tenKyThi: "Cuoi ki I 2022",
            monThi: "Mang may tinh",
            ngayGioThi: "12/12/2022 08:00",
            trangThai: true,
            ketQua: 2.50,
            resultLink: "examResult01.html"
        },
        {
            id: 3,
            tenKyThi: "Giua ki II 2023",
            monThi: "Co so du lieu",
            ngayGioThi: "12/10/2022 15:00",
            trangThai: true,
            ketQua: 7.54,
            resultLink: "examResult01"
        },
        {
            id: 4,
            tenKyThi: "Cuoi ki I 2023",
            monThi: "Lap tring C++",
            ngayGioThi: "12/10/2023 09:30",
            trangThai: false,
            ketQua: 0.0,
            resultLink: "#"
        },
        {
            id: 5,
            tenKyThi: "Giua ki II 2022",
            monThi: "Lap trinh python",
            ngayGioThi: "12/10/2022 15:00",
            trangThai: true,
            ketQua: 7.54,
            resultLink: "examResult01"
        },
        {
            id: 6,
            tenKyThi: "Giua ki II 2022",
            monThi: "Kien truc MT",
            ngayGioThi: "12/10/2022 15:00",
            trangThai: true,
            ketQua: 7.54,
            resultLink: "examResult01"
        },
        {
            id: 7,
            tenKyThi: "Giua ki II 2022",
            monThi: "Lich su dang",
            ngayGioThi: "12/10/2022 15:00",
            trangThai: true,
            ketQua: 7.54,
            resultLink: "examResult01"
        },
        {
            id: 8,
            tenKyThi: "Giua ki II 2022",
            monThi: "OOP",
            ngayGioThi: "12/10/2022 15:00",
            trangThai: true,
            ketQua: 7.54,
            resultLink: "examResult01"
        },
        {
            id: 9,
            tenKyThi: "Giua ki II 2022",
            monThi: "DSA",
            ngayGioThi: "12/10/2022 15:00",
            trangThai: true,
            ketQua: 7.54,
            resultLink: "examResult01"
        },

    ]

    userResultData.forEach(function(item, index) {
        var row = document.createElement('tr');
        row.id = `tbl1_row_${index}`;
        var trangThai = item.trangThai ? "Hoan thanh" : "Chua hoan thanh";
        var statusClass = item.trangThai ? "status--good" : "status--bad";
        row.innerHTML = `
            <td class="text-center"><span>${item.id}</span></td>
            <td class="text-center">${item.tenKyThi}</td>
            <td class="text-center">${item.monThi}</td>
            <td class="text-center">${item.ngayGioThi}</td>
            <td class="text-center ${statusClass}">${trangThai}</td>
            <td class="text-center"><a href="${item.resultLink}">${item.ketQua}</a></td>
        `

        document.getElementById('tbody_tbl1').appendChild(row);
    })

    document.getElementById('searchInput_03').addEventListener('keyup', function() {
        searchTable(this.value, 'tbody_tbl1');
    });
});
