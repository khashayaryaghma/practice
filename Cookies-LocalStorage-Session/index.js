localStorage.setItem("name", "khashayar")
// localStorage.removeItem("name")

sessionStorage.setItem("name", "hadi")
console.log(sessionStorage.getItem("name"));

document.cookie = "name-sohrab; expires=" + new Date(2022, 6, 7).toUTCString();
document.cookie = "newName-rostam; expires=" + new Date(3654, 3, 1).toUTCString();