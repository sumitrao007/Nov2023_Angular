import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary',
    pure:false
})
export class Summarypipe implements PipeTransform
{
    transform(value: any,start:number=0,end:number=30) {

        console.log("Pipe is Execute")

        let temp=(<string> value);
        // return (temp.substring(0,30)+"...");

        return (temp.substring(start,end)+"...");

    }

}