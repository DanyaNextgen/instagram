export function Post(item) {
    const post = document.createElement('div')
    const header = document.createElement('div')
    const avatar = document.createElement('img')
    const userName = document.createElement('p')
    const image = document.createElement('img')
    const footer = document.createElement('div')
    const likes = document.createElement('p')
    const comments = document.createElement('p')
    const description = document.createElement('p')
    const logo = document.createElement('div')
    const leftItem = document.createElement('div')
    const rightItem = document.createElement('div')
    const heartLogo = document.createElement('img')
    const commentLogo = document.createElement('img')
    const shareLogo = document.createElement('img')
    const favoritesLogo = document.createElement('img')

    post.classList.add('post')
    header.classList.add('post-header')
    avatar.setAttribute('src', item.avatarUrl)
    avatar.classList.add('avatar')
    logo.classList.add('logo')
    leftItem.classList.add('left-item')
    rightItem.classList.add('right-item')
    heartLogo.setAttribute('src', './images/likes.svg')
    commentLogo.setAttribute('src', './images/comments.svg')
    shareLogo.setAttribute('src', './images/share.svg')
    favoritesLogo.setAttribute('src', './images/favorites.svg')

    userName.textContent = item.userName
    userName.classList.add('user-name')
    image.setAttribute('src', item.image)
    image.classList.add('post-image')
    footer.classList.add('post-footer')
    likes.textContent = `${item.likes} likes`
    comments.textContent = `${item.comments} comments`
    description.textContent = item.description
    
    leftItem.append(heartLogo, commentLogo, shareLogo)
    rightItem.append(favoritesLogo)
    logo.append(leftItem, rightItem)
    header.append(avatar, userName)
    footer.append(likes, comments, description)
    post.append(header, image, footer, logo)

    header.onclick = () => {
        window.location.href = "./profile.html"
        localStorage.setItem("userId", item.userId)
    }

    
    return post
}
