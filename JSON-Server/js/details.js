const id = new URLSearchParams(window.location.search).get("id");

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  if (!res.ok) {
    window.location.replace("/");
  }
  const post = await res.json();

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `;

  container.innerHTML = template;
};




window.addEventListener("DOMContentLoaded", renderDetails);