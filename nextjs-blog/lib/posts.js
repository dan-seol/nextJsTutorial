import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(prcoess.cwd(), 'posts')

export function getSortedPostsData() {
    //Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        //Remove ".md" from file name to get id
        const id = fileName.replace()
    })
}