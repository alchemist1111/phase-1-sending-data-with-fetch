// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", config)
      .then(response => response.json())
      .then(data => {
        appendIdToDOM(data.id);
      })
      .catch(error => {
        appendErrorMessageToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const idElement = document.createElement("p");
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
  }
  
  function appendErrorMessageToDOM(message) {
    const errorElement = document.createElement("p");
    errorElement.textContent = `Error: ${message}`;
    document.body.appendChild(errorElement);
  }
  
  // Example usage:
  submitData("John Doe", "john@example.com");
  