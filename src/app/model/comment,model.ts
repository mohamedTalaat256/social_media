import { User } from "./user,model";

export class Comment{
    
    constructor(
        public postId: number,
        public user: User,
        public text: string,
    ){}
}