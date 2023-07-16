export interface Itodo {
    id: number,
    title:string,
    isCompleted:boolean,
    targetDate:string,
    tags:string,
    category:string
}

export interface Ntodo {
    id: number,
    task:string,
    isDone:boolean,
    date:string,
    category:string
}
