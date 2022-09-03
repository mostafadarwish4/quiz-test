export interface State{
    index:number,
    words:Words[],
    result:number,
    rank:string

}
export interface Words{
    id:number,
    pos:string,
    word:string
}