export interface IRepository <InfoBilan>{
    findAll():Promise<InfoBilan[]>
}
