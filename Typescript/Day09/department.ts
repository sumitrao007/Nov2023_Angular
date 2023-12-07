export class Department{
    private role:string;


    constructor(r:string){
        this.role=r;
        
    }

//getter
    getRole(){
        return (this.role);
    }

    //setter
    setRole(r:string){
        this.role=r;
    }


}