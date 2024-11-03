export function Story(item) {
    let story = document.createElement('div')
    let imageBox = document.createElement('div')
    let image = document.createElement('img')
    let p = document.createElement('p')

    image.setAttribute("src", item.image)
    p.textContent = item.userName

    story.classList.add("story__item")
    imageBox.classList.add('image')

    story.append(imageBox, p)
    imageBox.append(image)

    return story
}
