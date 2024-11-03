let userId = localStorage.getItem("userId")

fetch(`http://localhost:3001/users/${userId}`)
    .then(res => res.json())
    .then(data => showUser(data))

function showUser(user) {
    const profileImg = document.querySelector('.profile-img')
    const nicknameElement = document.querySelector('.nickname p')
    const followersElement = document.querySelector('.stats p:nth-child(2) span')
    const followingElement = document.querySelector('.stats p:nth-child(3) span')
    const nameElement = document.querySelector('.name')

    profileImg.style.backgroundImage = `url(${user.avatarUrl})`
    nicknameElement.textContent = user.userName
    followersElement.textContent = user.followers
    followingElement.textContent = user.followings
    nameElement.textContent = user.name

    const profilePostsContainer = document.querySelector('.profile_posts');
    profilePostsContainer.innerHTML = '';

    fetch(`http://localhost:3001/posts?userId=${user.id}`)
        .then(res => res.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div')
                postElement.className = 'profile_post'
                postElement.innerHTML = `
                    <img src="${post.image}" alt="Post image">
                    <p>${post.description}</p>
                    <p>${post.likes} likes</p>
                    <p>${post.comments} comments</p>`
                profilePostsContainer.append(postElement)
            })
    })
}    