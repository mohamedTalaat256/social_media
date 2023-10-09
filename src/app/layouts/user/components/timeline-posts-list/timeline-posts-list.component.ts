import { Component } from '@angular/core';
import { Post } from 'src/app/model/post,model';

@Component({
  selector: 'app-timeline-posts-list',
  templateUrl: './timeline-posts-list.component.html',
  styleUrls: ['./timeline-posts-list.component.css']
})
export class TimelinePostsListComponent {

  posts: Post[]=[
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/383092681_249757614723373_3010702228721234437_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=n3YrtUIwna8AX_3SdNS&_nc_ht=scontent-pmo1-1.xx&oh=00_AfDVR5KqnwPTsY67YG34BVgDHtiyvd84DcLMj__xusGuag&oe=6516593D","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/382760124_713773354111814_8570149175433408257_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=k-l7gMx7RogAX-FBCfc&_nc_ht=scontent-pmo1-1.xx&oh=00_AfAwRwz889lcrbIFLppUfi0XRWlLOsjtlwb5_oBvg4PoMQ&oe=6516800B","Lol"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/376674753_6415423218579500_7045905810207791335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=3XHcf9PYjZAAX-EIKN_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfB4BfDJK7GT_wwgDjH5OQRGfMTme092zu6IC6NUNb3tAA&oe=6516246E","loving and trustworthy 🌸🐾🐾🥰"),
    new Post(1, 1, "Mohamed Talaat", "15 sep 2023", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/383092681_249757614723373_3010702228721234437_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=n3YrtUIwna8AX_3SdNS&_nc_ht=scontent-pmo1-1.xx&oh=00_AfDVR5KqnwPTsY67YG34BVgDHtiyvd84DcLMj__xusGuag&oe=6516593D","loving and trustworthy 🌸🐾🐾🥰")
  ];

}
