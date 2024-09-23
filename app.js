document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const jsonOutput = document.getElementById("jsonOutput");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const hobbiesInput = document.getElementById("hobbies").value;

    const hobbies = hobbiesInput.split(",").map((hobby) => hobby.trim());

    const userData = {
      name,
      age: parseInt(age),
      email,
      hobbies,
    };

    const jsonString = JSON.stringify(userData, null, 2);

    jsonOutput.textContent = jsonString;
  });
});
