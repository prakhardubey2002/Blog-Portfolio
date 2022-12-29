export default {
    name:"Audience",
    type:"document",
    title:"Audience",
    fields:[
        {
            name:"Fname",
            type:"string",
            title:"First Name"
        },
        {
            name:"Lname",
            type:"string",
            title:"Last Name"
        },
        {
            name: 'author',//refrence from other schema
            type: 'object',
            fields: [
                {
                    title: 'Audience of author',
                    name: 'Authorof',
                    type: 'reference',
                    to: [{ type: 'author' }]
                }
            ]
        }
    ]
}