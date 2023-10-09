import { Post } from "../model/post,model";
import { PostComment } from "../model/post_comment,model";
import { PostImage } from "../model/post_image,model";
import { User } from "../model/user,model";

export const postsDummyList: Post[] = [
    new Post(
        1,
        new User(1, "MohamedTalaat", "Software Engineer", "https://avatars.githubusercontent.com/u/76172138"),
        "15 sep 2023",
        [
            new PostImage(1, "https://img.freepik.com/premium-photo/colorful-landscape-with-mountains-river-foreground_849761-2647.jpg"),
            new PostImage(1, "https://plus.unsplash.com/premium_photo-1669316982093-b2ed20cc82ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"),
            new PostImage(1, "https://petapixel.com/assets/uploads/2022/08/fdfs11-800x533.jpg"),
            new PostImage(1, "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=sph"),
            new PostImage(1, "https://img.freepik.com/premium-photo/colorful-landscape-with-mountains-river-foreground_849761-2647.jpg"),
        ]
        , "loving and trustworthy 🌸🐾🐾🥰",
        73,
        16,
        [
            new PostComment(
                1,
                new User(1, "Ali23", "Doctor", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU"), "nice", "")
        ]

    ),

    new Post(
        1,
        new User(1, "MohamedTalaat", "Software Engineer", "https://avatars.githubusercontent.com/u/76172138"),
        "15 sep 2023",
        [
            new PostImage(1, "https://static.tvtropes.org/pmwiki/pub/images/trevorphilipsgtav.jpg")
        ]
        , "loving and trustworthy 🌸🐾🐾🥰",
        73,
        16,
        [
            new PostComment(
                1,
                new User(1, "Ali23", "Doctor", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU"), "nice", "")
        ]

    ),

    new Post(
        1,
        new User(1, "MohamedTalaat", "Software Engineer", "https://avatars.githubusercontent.com/u/76172138"),
        "15 sep 2023",
        [
            new PostImage(1, "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80")
        ]
        , "loving and trustworthy 🌸🐾🐾🥰",
        73,
        16,
        [
            new PostComment(
                1,
                new User(1, "Ali23", "Doctor", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU"), "nice", "")
        ]

    ),
];