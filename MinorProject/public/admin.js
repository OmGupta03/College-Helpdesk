function loadComplaints() {
  fetch("/complaints")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("complaintList");
      list.innerHTML = "";

      let counts = {
        total: data.length,
        pending: 0,
        progress: 0,
        resolved: 0,
        rejected: 0
      };

      data.forEach(c => {
        counts[c.status]++;

        list.innerHTML += `
          <div class="complaint">
            <b>ID:</b> ${c.id}<br>
            <b>Name:</b> ${c.name}<br>
            <b>Reg No:</b> ${c.regNo}<br>
            <b>Type:</b> ${c.type}<br>
            <b>Description:</b> ${c.description}<br>

            <span class="status-badge status-${c.status}">
              ${c.status.toUpperCase()}
            </span>

            <br><br>

            <select onchange="updateStatus(${c.id}, this.value)">
              <option value="">Change Status</option>
              <option value="pending">Pending</option>
              <option value="progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="rejected">Rejected</option>
            </select>

            <button onclick="deleteComplaint(${c.id})">Delete</button>
          </div>
        `;
      });

      document.getElementById("total").innerText = counts.total;
      document.getElementById("pending").innerText = counts.pending;
      document.getElementById("progress").innerText = counts.progress;
      document.getElementById("resolved").innerText = counts.resolved;
      document.getElementById("rejected").innerText = counts.rejected;
    });
}

function updateStatus(id, status) {
  if (!status) return;

  fetch(`/complaints/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  })
  .then(res => {
    if (!res.ok) {
      return res.json().then(err => { throw new Error(err.error || "Error updating status"); });
    }
    loadComplaints();
  })
  .catch(err => alert(err.message));
}

function deleteComplaint(id) {
  fetch(`/complaints/${id}`, {
    method: "DELETE"
  }).then(loadComplaints);
}

loadComplaints();
