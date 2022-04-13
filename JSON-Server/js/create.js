const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };



  window.location.replace("/");
};

form.addEventListener("submit", createPost);
