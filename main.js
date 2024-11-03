import { reload } from "./helpers/reload.js"
import { Story } from "./components/story.js"
import { Post } from "./components/post.js"

const storyList = document.querySelector('.story__list')
const postList = document.querySelector('.post__list')

fetch("http://localhost:3001/stories")
    .then((res) => res.json())
    .then((data) => reload(data, storyList, Story))

fetch("http://localhost:3001/posts") 
    .then((res) => res.json())
    .then((data) => reload(data, postList, Post))
    



    

