export enum Orientation {
    allOrientations="All Orientations",
    horizontal="Horizontal",
    vertical="Vertical",
    square="Square",
}

export enum Size {
    allSizes="All Sizes",
    large="Large",
    medium="Medium",
    small="Small",
}

export const filters:{orientations:Array<Orientation>,sizes:Array<Size>} = {
    orientations:[
        Orientation.allOrientations,
        Orientation.horizontal,
        Orientation.vertical,
        Orientation.square
    ],
    sizes:[
        Size.allSizes,
        Size.large,
        Size.medium,
        Size.small,
    ]
}