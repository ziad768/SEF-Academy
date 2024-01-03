import { createSlice } from "@reduxjs/toolkit";

export const Articles = createSlice({
  name: "Article",
  initialState: {
    allArticles: [
      {
        id: 1,
        category: "business",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Published',
        explain:
        "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
        
      },
      {
        id: 2,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "3h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Published',

        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 3,
        category: "sports",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "5h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Published',

        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 4,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "1h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',

        Status:'Published',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 5,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Published',

        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 6,
        category: "business",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Published',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 7,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "3h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Published',

        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 8,
        category: "sports",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "5h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',

        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 9,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "1h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',

        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 10,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 11,
        category: "business",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 12,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "3h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 13,
        category: "sports",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "5h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 14,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "1h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 15,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 16,
        category: "security",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 17,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "3h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 18,
        category: "sports",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "5h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 19,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "1h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 20,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 21,
        category: "security",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 22,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "3h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 23,
        category: "sports",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "5h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 24,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "1h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 25,
        category: "education",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
      {
        id: 26,
        category: "security",
        title: "HERE'S THE TITLE OF THE ARTICLE",
        Date :'Fri Nov 17 2023 04:10:34 ',
        timePublish: "2h",
        img:'https://th.bing.com/th/id/R.44562eb6072c2c9a318730bb77f8cf77?rik=ReCWbvMw%2fqwTGg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f6%2fe%2f52496.jpg&ehk=hX99jYRnH5vNqh5Bpb%2bipWmvFd2C2pjsS3Ncxlx1AfY%3d&risl=&pid=ImgRaw&r=0',
        Status:'Draft',
        explain:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet Lorem  ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur consequuntur nostrum sint alias officia dolorum neque facilis deserunt, dolore, pariatur dolorem que nesciunt aut nobis natus quas odit. Sed, error Lorem  ipsum dolor sit amet consectetur adipisicing elit. Iste qu corrupti cupidit ate saepe sit maiores totam ipsum quos quo atque! Laboriosam quia modi amet",
      },
    ],
    ShowArticleDitelails: {},
  },
  reducers: {
    filterForid: (state, action) => {
      const findArticle = state.allArticles.find(
        (article) => article.id == action.payload
      );
      if (findArticle) {
        state.ShowArticleDitelails = findArticle;
      }
    },
    SortArticles: (state) => {
      const PublishArticle = state.allArticles.filter(
        (Article) => Article.Status == "Published"
      );
      const DraftArticle = state.allArticles.filter(
        (Article) => Article.Status == "Draft"
      );
      state.allArticles = [...PublishArticle, ...DraftArticle];
      console.log(state.allArticles);
    },
    upDataPublished: (state, action) => {
      let Articles = state.allArticles.filter(
        (Article) => Article.id !== action.payload.id
      );
      Articles = [...Articles, action.payload];
      state.allArticles = Articles;
    },
    delArticle: (state, action) => {
      const Articles = state.allArticles.filter(
        (Article) => Article.id != action.payload
      );
      console.log(Articles);
      state.allArticles = Articles;
    },
    upDataArticle: (state, action) => {
      console.log(action.payload)
      let allArticles = state.allArticles.filter(
        (article) => article.id !== action.payload.id
      );
      allArticles = [...allArticles, action.payload];
      state.allArticles = allArticles;
  
    },
    AddArticle: (state, action) => {
      const id = Date.now()
      const allArticles = [...state.allArticles, {...action.payload, id }];
      state.allArticles = allArticles;
    },
  },
});

export const {
  filterForid,
  SortArticles,
  delArticle,
  upDataPublished,
  upDataArticle,
  AddArticle
} = Articles.actions;
export default Articles.reducer;
