document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const createPostButton = document.getElementById("createPost");
    const closeButton = document.getElementsByClassName("close")[0];
    const saveButton = document.getElementById("savePost");
    const postTitleInput = document.getElementById("postTitle");
    const postContentInput = document.getElementById("postContent");
    const postList = document.getElementById("postList");

    // Sample initial posts
    const posts = [
        { title: "Post 1", content: "Content for Post 1" },
        { title: "Post 2", content: "Content for Post 2" },
    ];

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function renderPosts() {
        postList.innerHTML = "";
        posts.forEach((post, index) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            postList.appendChild(postDiv);
        });
    }

    function savePost() {
        const title = postTitleInput.value;
        const content = postContentInput.value;
        if (title && content) {
            const newPost = { title, content };
            posts.push(newPost);
            renderPosts();
            closeModal();
            postTitleInput.value = "";
            postContentInput.value = "";
        } else {
            alert("Please enter both title and content for the post.");
        }
    }

    createPostButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    saveButton.addEventListener("click", savePost);

    renderPosts();
});
