document.addEventListener("DOMContentLoaded", function() {
    function clickNarbarItem() {
        let navbarItems = document.querySelectorAll('.nav__item');
        let tabId = 0
        navbarItems.forEach(item => {
            item.addEventListener('click', function() {
                let tabs = document.querySelectorAll('.tab');
                tabs.forEach(tab => {
                    tab.classList.remove('tab--active');
                });
                if (this.id == 'list-exams') {
                    tabs[0].classList.add('tab--active');
                }
                if (this.id == 'list-users') {
                    tabs[1].classList.add('tab--active');
                }
                if (this.id == 'statistics') {
                    tabs[2].classList.add('tab--active');
                }
                navbarItems.forEach(item => {
                    item.classList.remove('nav__item--active');
                });
                this.classList.add('nav__item--active');
                
            });
        });
    }

    clickNarbarItem();
    table1_data = [
        {
            id: 1, 
            tenkithi: 'Giua ki I 2022', 
            monthi: 'Lap trinh web',
            ngaythi: "23/12/2023",
            cathi: "18:00",
            socau: 50
        },
        {
            id: 2, 
            tenkithi: 'Giua ki I 2022', 
            monthi: 'Lap trinh web',
            ngaythi: "23/12/2023",
            cathi: "18:00",
            socau: 50
        },
        {
            id: 3, 
            tenkithi: 'Giua ki I 2022', 
            monthi: 'Lap trinh web',
            ngaythi: "23/12/2023",
            cathi: "18:00",
            socau: 50
        }, 
        {
            id: 4, 
            tenkithi: 'Giua ki I 2022', 
            monthi: 'Lap trinh web',
            ngaythi: "23/12/2023",
            cathi: "18:00",
            socau: 50
        }
    ]

    table1_data.forEach(item => {
        var row = document.createElement('tr');
        row.innerHTML = `
        <tr>
        <td class="text-start"><span>${item.id}</span></td>
        <td class="text-start">${item.tenkithi}</td>
        <td class="text-start">${item.monthi}</td>
        <td class="text-start">${item.ngaythi}</td>
        <td class="text-start">${item.cathi}</td>
        <td class="text-start">${item.socau}</td>
        <td class="text-center">
            <button type="submit" class="btn btn--danger btn--size-s">Xoa</button>
            <button type="submit" class="btn btn--warn btn--size-s">Sua</button>
        </td>
    </tr>
        `
        document.getElementById('tbody_tbl1').appendChild(row);
    })

    table2_data = [
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        },
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        },
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        },
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        },
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        },
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        },
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        },
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        },
        {
            masv: 'B21DCCN002',
            tenSv: 'Nguyen Van A',
            lop: 'D17CQCN01-N',
            ngaysinh: '12/12/2002',
            last: '19:00 18/12/2023'
        }
    ]

    table2_data.forEach(item => {
        var row = document.createElement('tr');
        row.innerHTML = `
        <tr>
        <td class="text-start"><span>${item.masv}</span></td>
        <td class="text-start">${item.tenSv}</td>
        <td class="text-start">${item.lop}</td>
        <td class="text-start">${item.ngaysinh}</td>
        <td class="text-start">${item.last}</td>
        <td class="text-center">
            <button type="submit" class="btn btn--danger btn--size-s">Xoa</button>
            <button type="submit" class="btn btn--warn btn--size-s">Sua</button>
        </td>
    </tr>
        `
        document.getElementById('tbody_tbl2').appendChild(row);

    })
    // charts create
    var data1 = {
        labels: ['0-3', '3-5', '5-7', '7-9', '9-10'],
        datasets: [{
            label: 'Số lượng ',
            backgroundColor: 'rgb(81, 130, 155)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [300, 400, 800, 289, 100],
        }]
    };

    // Thiết lập và vẽ biểu đồ cột
    var ctx01 = document.getElementById('myChart01').getContext('2d');
    var myChart01 = new Chart(ctx01, {
        type: 'bar',
        data: data1,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    var data2 = {
        labels: ['tham-gia', 'không tham gia'],
        datasets: [{
            label: 'Ti le',
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
              ],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [80, 20],

        }]
    };

    var ct2 = document.getElementById('myChart02').getContext('2d');
    var myChart2 = new Chart(ct2, {
        type: 'doughnut',
        data: data2,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Ti le tham gia thi'
                },
                
            }
        }
    });

    var data3 = {
        labels: [''],
        datasets: [{
            label: ['diem trung binh' ,''],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
              ],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [7.7,2.3],

        }]
    };

    var ct3 = document.getElementById('myChart03').getContext('2d');
    var myChart3 = new Chart(ct3, {
        type: 'doughnut',
        data: data3,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Điểm trung bình'
                }
            }
        }
    });
})
