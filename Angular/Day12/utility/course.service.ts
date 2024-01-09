
export class CourseService{
    private course:string[]=["Core Java",'Advanced java','Spring Boot','Hibernate','Angular','AWS','Docker','Jenking'];

    getCourse(){
        return (this.course);
    }

}