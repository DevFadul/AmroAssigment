document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#attendanceTable tbody');
  
    // Initialize the QR Code scanner
    function onScanSuccess(decodedText, decodedResult) {
      // Assuming the QR code contains data in the format: "studentId,studentName"
      const [studentId, studentName] = decodedText.split(',');
  
      if (studentId && studentName) {
        const date = new Date();
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${studentId}</td>
          <td>${studentName}</td>
          <td>${formattedDate}</td>
        `;
  
        tableBody.appendChild(newRow);
      }
  
      // Stop scanning after a successful scan (optional)
      html5QrcodeScanner.clear();
    }
  
    // Initialize the scanner instance
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "qr-reader", 
      { fps: 10, qrbox: 250 }  // Configure the scanner size and frames per second
    );
  
    // Start the QR code scanner
    html5QrcodeScanner.render(onScanSuccess);
  });
  