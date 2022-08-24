class Review {
    id: string
    title: string
    content: string
    author: string
    imageLink: string

    constructor(id: string, title: string, content: string, author: string, imageLink: string) {
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.imageLink = imageLink
    }
}

export default Review 