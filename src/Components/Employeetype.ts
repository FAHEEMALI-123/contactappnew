export interface IEmployee{
id:string;
name:string;
email:string;
phone:number;
}

export const dummyEmployee:IEmployee[]=[
    {    
        id:new Date().toJSON().toString(),
        name:"FaheemAli",
        email:"faheemali370@gmail.com",
        phone:9567098709
    }
]