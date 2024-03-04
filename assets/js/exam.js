// Lấy ô tìm kiếm và danh sách các mục trong exam-list
var searchBox = document.getElementById('search');
var examItems = document.querySelectorAll('.exam-list .exam-option');

// Lắng nghe sự kiện khi người dùng nhập vào ô tìm kiếm
searchBox.addEventListener('input', function() {
    var searchTerm = searchBox.value.toLowerCase();

    // Lặp qua từng mục và ẩn/hiện tùy theo từ khóa tìm kiếm
    examItems.forEach(function(item) {
        var examName = item.querySelector('li').textContent.toLowerCase();
        var examStatus = item.querySelector('button').classList.contains('free') ? 'free' : 'scheduled';
        if (examName.includes(searchTerm) || examStatus.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var examOptions = document.querySelectorAll('.exam-option');
    var subjectList = document.getElementById('subject-list');

    examOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            if (subjectList.style.display === 'none') {
                // Nếu đang ẩn, thì hiển thị danh sách môn thi
                subjectList.style.display = 'block';
            } else {
                // Nếu đang hiển thị, thì ẩn danh sách môn thi
                subjectList.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Lấy danh sách các exam-option
    var examOptions = document.querySelectorAll('.exam-option');

    // Lắng nghe sự kiện click trên mỗi exam-option
    examOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Tìm phần tử chứa danh sách môn thi liên quan đến exam-option được nhấp vào
            var subjectList = option.querySelector('.subject-list');
            
            // Kiểm tra xem danh sách môn thi có đang được hiển thị hay không
            if (subjectList.style.display === 'none') {
                // Nếu đang ẩn, thì hiển thị danh sách môn thi
                subjectList.style.display = 'block';
            } else {
                // Nếu đang hiển thị, thì ẩn danh sách môn thi
                subjectList.style.display = 'none';
            }
        });
    });
});

const startExamBtn = document.getElementById('start-exam');

    startExamBtn.addEventListener('click', function() {
        // Chuyển hướng sang trang bài thi khi nhấn vào nút "Bắt đầu làm bài"
        window.location.href = 'testPage.html';
    });
