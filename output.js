function dispData() {
  let output = document.getElementById("output");
  JSON.parse(localStorage.getItem("formData")).forEach((data) => {
    output.innerHTML += `
        <h2>First Name: ${data.fName}</h2>
        <h2>Last Name: ${data.lName}</h2>
        <h5>Email: ${data.email}</h5>
        <h5>Gender: ${data.gender}</h5>
        <h5>Age: ${data.age}</h5>
        <p>Date & Time: ${data.appointmentdaytime}</p>
        `;
  });
}

dispData();
