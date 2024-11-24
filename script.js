document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('attendanceForm');
    const tableBody = document.querySelector('#attendanceTable tbody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const studentName = document.getElementById('studentName').value;
      const studentId = document.getElementById('studentId').value;
  
      if (studentName && studentId) {
        const date = new Date();
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${studentId}</td>
          <td>${studentName}</td>
          <td>${formattedDate}</td>
        `;
  
        tableBody.appendChild(newRow);
  
        // Clear the input fields after submission
        document.getElementById('studentName').value = '';
        document.getElementById('studentId').value = '';
      }
    });
  });
  
