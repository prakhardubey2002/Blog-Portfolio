export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'title',
            type: 'string',//type is given in documentation
            title: 'Title'
        },
        {
            name: 'about',
            type: 'string',//type is given in documentation
            title: 'About'
        },
        {
            name: 'image',
            type: 'image',//type is given in documentation
            title: 'Image'
        }
    ]
}