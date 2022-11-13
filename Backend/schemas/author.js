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
            name: 'desc',
            type: 'string',//type is given in documentation
            title: 'Desc'
        },
        {
            name: 'image',
            type: 'image',//type is given in documentation
            title: 'Image'
        }
    ]
}