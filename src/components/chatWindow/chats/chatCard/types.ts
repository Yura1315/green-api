export interface ICardProps {
	id: string;
}
export interface IContact {
    avatar:string
    category:string
    chatId:string
    description:string
    email:string
    isArchive:boolean
    isDisappearing:boolean
    isMute:boolean
    lastSeen: any
    messageExpiration:number
    muteExpiration:any
    name:string
    products:[]
}