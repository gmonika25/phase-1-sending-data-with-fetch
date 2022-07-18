// Add your code here
function submitData(userName, userEmail) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((res) => res.json())
    .then((data) => addNewContact(data.id))
    .catch(() => {
      let message = "Unauthorized Access";
      document.body.append(message);
    });
}

function addNewContact(newID) {
  document.getElementsByTagName("body")[0].innerHTML = newID;
}

// submitData("monika", "monika@email.com");
