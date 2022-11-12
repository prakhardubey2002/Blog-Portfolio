export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',//type is given in documentation
            title: 'Title'
        },
        {
            name: 'contexxnt',
            type: 'string',
            title: 'content'
        },
        {
            title: 'Created at',
            name: 'createdAt',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 5,
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'content',
            title: 'Contexnt',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
}