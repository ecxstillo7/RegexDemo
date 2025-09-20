// Validar correo
document.getElementById("email").addEventListener("input", function () {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  document.getElementById("emailMsg").textContent = 
    regex.test(this.value) ? "Correo válido ✅" : "Correo inválido ❌";
  document.getElementById("emailMsg").className = regex.test(this.value) ? "ok" : "error";
});

// Validar teléfono 
document.getElementById("phone").addEventListener("input", function () {
  const regex = /^\d{8}$/;
  document.getElementById("phoneMsg").textContent = 
    regex.test(this.value) ? "Teléfono válido ✅" : "Teléfono inválido ❌";
  document.getElementById("phoneMsg").className = regex.test(this.value) ? "ok" : "error";
});