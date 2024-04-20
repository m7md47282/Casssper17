export interface Card { 
    body: {
        width?: number,
        height?: number,
        oriantation?: string,
        borderWidth?: number, 
        borderColor?: string, 
        borderRadius?: number, 
        padding?: number, 
    },
    image: {
        width: number
    },
    title?: {},
    content?: {},
    pricing?: {},
}