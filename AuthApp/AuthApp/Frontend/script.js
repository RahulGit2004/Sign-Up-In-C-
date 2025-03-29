document
  .getElementById("registerForm")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);

    const res = await fetch("http://localhost:5280/api/Auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    alert(await res.text());
  });

document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("JavaScript file loaded successfully!");

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  console.log(username);
  console.log(password);

  try {
    const res = await fetch("http://localhost:5280/api/Auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(errorMessage);
    }

    const resData = await res.text();
    console.log("Success:", resData);
    alert(resData);
  } catch (error) {
    console.error("Error:", error);
    alert("Login failed: " + error.message);
  }
});
