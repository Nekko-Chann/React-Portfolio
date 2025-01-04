import nestImg from 'assets/project/nestjs.png';
import reactNativeImg from 'assets/project/react-native.png';
import reactUltimateImg from 'assets/project/react-ultimate.png';
import reactTestFresherImg from 'assets/project/react-test-fresher.png'
import springRestImg from 'assets/project/spring-rest.png';
import nodejsImg from 'assets/project/nodejs.jpg';
import nextjsImg from 'assets/project/nextjs.jpeg';
// import bookStoreImg from 'assets/project/laravel.jpg';
// import springMvcImg from 'assets/project/spring-mvc.png';

export const APP_DATA = {
    FACEBOOK_URL: "https://www.facebook.com/EdanPrince2",
    INSTAGRAM_URL: "https://www.instagram.com/edannguyen/",
    LINKEDIN_URL: "https://www.linkedin.com/in/%C4%91%E1%BB%A9c-nguy%E1%BB%85n-minh-kid1412/"
}

export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "Lập Trình Viên",
            en: "Fullstack Developer"
        },
        company: {
            vi: "Học thêm một vài kỹ năng như: NextJS, React Native, Java Spring...",
            en: "Learn a few more skills such as: NextJS, React Native, Java Spring..."
        },
        duration: {
            vi: "Tháng 9/2023 - Hiện tại",
            en: "Sep 2023 - Present"
        }
    },
    {
        id: 2,
        title: {
            vi: "Lập Trình Giao Diện",
            en: "Frontend Developer"
        },

        company: {
            vi: "Học và sử dụng các Library: ReactJS, MUI, Antd...",
            en: "Learn and use Libraries: ReactJS, MUI, Antd..."
        },
        duration: {
            vi: "Tháng 3/2023 - Tháng 9/2023",
            en: "Mar 2023 - Sep 2023"
        }
    },
    {
        id: 3,
        title: {
            vi: "Dự án tự làm",
            en: "Self Employed"
        },
        company: {
            vi: "Học kiến thức mới mỗi ngày",
            en: "Code and build something in everyday."
        },
        duration: {
            vi: "Tháng 11/2022 - Tháng 3/2023",
            en: "Nov 2022 - Mar 2023"
        }
    }
]

export const PROJECTS_FRONTEND = [
    {
        id: 1,
        imgPath: reactUltimateImg,
        title: "Book Store",
        description: `Dự án sử dụng React với JS. Mục tiêu của dự án này là hiểu rõ một số khái niệm như "props", "state", kết hợp với thư viện Design UI/UX là Antd`,
        github: "https://github.com/Kirito-Yami/Frontend-Book-Store",
        demo: ""
    },
    // {
    //     id: 2,
    //     imgPath: reactTestFresherImg,
    //     title: "Tiki Book",
    //     description: `Dự án sử dụng React với Type. Mục tiêu của dự án này là thực hành, vận dụng các kiến thức đã học ở dự án Ultimate Book, kết hợp với thư viện Design UI/UX là Antd`,
    //     github: "https://github.com/Kirito-Chann/Tiki-Book-Final",
    //     demo: "https://github.com/Kirito-Ann/Tiki-Book-Final"
    // },
    // {
    //     id: 3,
    //     imgPath: reactNativeImg,
    //     title: "Edan Food",
    //     description: "Dự án sử dụng React Native. Ý tưởng của dự án này lấy từ ứng dụng ShopeFood, kết hợp với công cụ Expo cho ra một ứng dụng hoạt động trên nền tảng Android/IOS.",
    //     github: "https://github.com/Kirito-Chann/EdanFood-Final",
    //     demo: "https://github.com/Kirito-Ann/Edan-Food-Final"
    // },
    // {
    //     id: 4,
    //     imgPath: nextjsImg,
    //     title: "Edan Music",
    //     description: "Dự án sử dụng framework NextJS. Mục tiêu của dự án này là tạo ra website đăng (nghe nhạc) tương tự như website SoundCloud, kết hợp với thư viện design MUI. (Chưa hoàn thành FE)",
    //     github: "",
    //     demo: ""
    // },
]

export const PROJECTS_BACKEND = [
    {
        id: 1,
        imgPath: nodejsImg,
        title: "Backend NodeJS",
        description: "Dự án sử dụng NodeJS(ExpressJS). Đây là dự án Backend từ số 0. Mục tiêu của dự án giúp xây dựng Backend API, cách thức hoạt động của các loại Database. ",
        github: "https://github.com/Kirito-Seika/Backend-NodeJS-Express",
        demo: ""
    },
    // {
    //     id: 2,
    //     imgPath: springRestImg,
    //     title: "JobHunter(Java)",
    //     description: "Dự án sử dụng React(Type) cho Frontend, framework SpringBoot cho Backend. Ý tưởng của dự án này lấy từ website: ITViec, kết hợp với thư viện Design UI/UX là Antd.",
    //     github: "https://github.com/Kirito-Chann/Job-Hunter-Final",
    //     demo: "https://github.com/Kirito-Ann/Job-Hunter-SpringBoot-Final"
    // },
    // {
    //     id: 3,
    //     imgPath: nestImg,
    //     title: "JobHunter(NestJS)",
    //     description: "Dự án sử dụng React(Type) cho Frontend, framework NestJS cho Backend. Ý tưởng của dự án này lấy từ website: ITViec, kết hợp với thư viện Design UI/UX là Antd. (Chưa hoàn thiện BE)",
    //     github: "https://github.com/Kirito-Chann/Job-Hunter-Final",
    //     demo: "https://github.com/Kirito-Ann/Job-Hunter-NestJS-Final"
    // },
    // {
    //     id: 4,
    //     imgPath: bookStoreImg,
    //     title: "PHP/Laravel",
    //     description: "Dự án sử dụng Framework Laravel. Đây là dự án project kỳ 2, Mục tiêu của dự án này là tạo ra website dể quản lý và bán sách.",
    //     frontend: "https://github.com/Edan-Kun/Book-Store.git",
    //     backend: ""
    // },

]

export const SKILLS_DATA = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Typescript',
    'Next JS',
    'MongoDB',
    'MySQL',  
    'Git',  
    'Bootstrap', 
    'AntDesign',
    'MaterialUI',
    'Java',
  ]
  
  // Choose your skills from below. Make sure it's in the same format and spelled correctly.
  // Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
  
  
  // AVAILABLE SKILLS
  
  /* 
    AntDesign
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */
