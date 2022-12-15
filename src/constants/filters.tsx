export interface Filter {
    name:string,
    query:FilterQuery
}

export interface FilterQuery{
    orientation?:string,
    size?:string,
}

export const filters = {
    orientation:[
        {name:"All Orientations",query:{}},
        {name:"Horizontal", query:{orientation:"landscape"}},
        {name:"Vertical", query:{orientation:"portrait"}},
        {name:"Square", query:{orientation:"square"}},
    ],
    size:[
        {name:"All Sizes",query:{}},
        {name:"Large",query:{size:"large"}},
        {name:"Medium",query:{size:"medium"}},
        {name:"Small",query:{size:"small"}},
    ]
}