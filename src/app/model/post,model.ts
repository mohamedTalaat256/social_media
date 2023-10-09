import { PostImage } from "./post_image,model";

export class Post{
    
    constructor(
        public id: number,
        public userId: number,
        public username: string,
        public date: string,
        public images: PostImage[],
        public content: string,
        public likesCount: number,
        public commentCount: number,
        public recentComments: Comment []
    ){}
}