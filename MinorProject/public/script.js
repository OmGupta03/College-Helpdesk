document.getElementById("complaintForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const complaint = {
    name: document.getElementById("name").value,
    regNo: document.getElementById("regNo").value,
    type: document.getElementById("type").value,
    description: document.getElementById("description").value
  };

  fetch("/complaints", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(complaint)
  })
    .then(res => res.json())
    .then(data => {
      alert("Complaint Submitted!\nComplaint ID: " + data.id);
      document.getElementById("complaintForm").reset();
    })
    .catch(err => console.error(err));
});
