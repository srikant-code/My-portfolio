const fs = require('fs')
const projectsData = {
    "data": [{
            "name": "My Portfolio 😅",
            "date": "April 2020 - present",
            "iconID": 0,
            "icontext": "Full Stack, UX and UI Design",
            "heroImage": "images/portfolio.jpg",
            "description": `Yes, this portfolio is itself a UX/frontend project. I have designed the whole UI and coded it as well. I have used all my gained skills to make it as responsive as possible. <br>If you are a <b>coder</b> or a <b>designer</b> and you like my portfolio then please do ⭐ this repo here 🥺 <a href='https://github.com/srikant-code' class='boldlink'>GitHub&nbsp;👈&nbsp;</a> <br><br><b>Status | </b>✅<br>This project is <span style='color: green; font-weight: bold;'>completed</span>, though currently it's not in active development.<br> 
                    <br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project😉. From ideation to UX & UI to Development and production. Everything!💪
                    <br><br><b data-aos='fade-up' data-aos-delay='100'>Technologies used | 💻</b><br> JavaScript ES6 | Sass | CSS 3 | HTML 5 | Figma | Photoshop<br>
                    `,
            "animation": "left",
            "link": "https://github.com/srikant-code/My-portfolio",
            "linkText": "You are seeing this project😅",
            "images": [{
                    "link": "images/profile.jpg",
                    "alt": "My profile picture with yellow background"
                },
                {
                    "link": "images/heroimagemaster.jpg",
                    "alt": "My picture photoshopped with yellow background"
                }
            ]
        },
        {
            "name": "Metab Browser 🎯",
            "date": "Nov 2020 - Present",
            "iconID": 1,
            "icontext": "CEO & Founder",
            "heroImage": "https://user-images.githubusercontent.com/46858011/101265694-7abbf280-376e-11eb-9ef4-9fd11272f844.png",
            "description": `Metab is going to be the browser that will make Designers, Developers, Content Creators, Students, and all the working professionals more productive. 
                            <br> Metab will have an avid concept of tabs & task management and will change the way you browse the web today. It will be effective with a lot of proven techniques with different tools integrated into the browser at one place to get everything in front of you and to make you more productive. 
                            <br><br><b>Status | 🟡</b><br>This project is <b style="color: orange;">ideation</b> phase. I will add more features in future to make more information available to my users.
                            and try it.
                            <br><br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project😉. From ideation to UX & UI to Development and production. Everything!💪
                            <br><br><b>Technologies using | 💻</b><br> Figma | React | Golang | Typescript | Electron
                            <br><br>`,
            "animation": "left",
            "link": "https://github.com/metabbrowser",
            "linkText": "Design link coming soon🎨",
            "images": [{
                    "link": "https://user-images.githubusercontent.com/46858011/101265705-89a2a500-376e-11eb-96bc-4075886cb4b2.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265694-7abbf280-376e-11eb-9ef4-9fd11272f844.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265746-e30ad400-376e-11eb-8bea-9f7f051791d2.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "Movie New tab extension 🎬",
            "date": "July 2019 - present",
            "iconID": 0,
            "icontext": "Frontend, UX/UI and Backend",
            "heroImage": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Movie%20Trailer%20Extension/img/deployment2.png",
            "description": `Movie New tab is an extension which can run in chrome and firefox browsers. But wait this extension is not yet published to the store. But you can still search your favorite movies and get the details
                            about it. Try it with the below thing. <br>If you are a <b>coder</b> or a <b>designer</b> and you like my portfolio then please do ⭐ this repo here 🥺 <a href='https://github.com/srikant-code/My-Front-End-Codes' class='boldlink'>GitHub&nbsp;👈&nbsp;</a>
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">almost completed</b>, but I will add more features in future to make more information available to my users. You can check out the project using the link below and try
                            it.
                            <br><br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project till now😉. From ideation to UX & UI to Development and production. Everything!💪
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant`,
            "animation": "left",
            "link": "https://movie-new-tab-extension.vercel.app",
            "linkText": "Browse your fav movies 🍿",
            "images": [{
                    "link": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Movie%20Trailer%20Extension/img/deployment2.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Movie%20Trailer%20Extension/img/deployment1.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101262644-388eb300-3766-11eb-83e1-99d5167151f9.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "CakeShake Website 🎂",
            "date": "March 2020 - present",
            "iconID": 0,
            "icontext": "Frontend, UX and UI Design",
            "heroImage": "images/cakeshake.png",
            "description": `CakeShake is a website for cake lovers ❤ It will give them a real experience of buying their own <b>customized</b> cakes. <br>If you are a <b>coder</b> or a <b>designer</b> and you like my portfolio then please do ⭐ this repo 🥺. You can preview the website <a href="https://srikant-code.github.io/CakeShake/index.html" target="_blank"
                                rel="noopener noreferrer"><b class="boldlink">here&nbsp;👈&nbsp;</b></a><br>
                            <br>
                            <b data-aos="fade-right" data-aos-delay="100">Status | </b>🟡<br>This project is in <span style="color: rgb(224, 146, 0); font-weight: bold;">development</span>, It is only developed for bigger screen sizes e.g: Laptop, Desktops.<br>
                            <br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project😊. From ideation to UX & UI, Logo design, development and production. Everything!💪
                            <br>
                            <br><b>Future Plans | ⏳</b><br> Will be using <a href="https://threejs.org/" target="_blank"
                                rel="noopener noreferrer"><b class="boldlink">Three.js&nbsp;</b></a> library to build 3D cake models. The user can drag and drop ingredients of their wish to make cakes. There will be options to choose predefined designed cakes as well. 
                            <br>
                            <br><b>Technologies used | 💻</b><br> JavaScript ES6 | Sass | CSS 3 | HTML 5 | Figma | Adobe XD | Illustrator | Photoshop
                            <br><br>
                            <b>Note: </b> It's still in development and all the links are not assigned. Read the warning carefully before visiting the website.
                            <br><br>
                            <b style="color: rgb(214, 0, 0);">Warning!</b><br> The current website is <b>not</b> suitable for mobile devices. <br> It is no way responsive and you may see many unexpected garbage. <br> The development is in progress and
                            it will be available for mobile devices soon. <br>`,
            "animation": "left",
            "link": "https://github.com/srikant-code/CakeShake",
            "linkText": "Open Project 🍰",
            "images": [{
                    "link": "/images/cakeshakelogobox.jpg",
                    "alt": "My profile picture with yellow background"
                },
                {
                    "link": "/images/cakeshake logo.jpg",
                    "alt": "My picture photoshopped with yellow background"
                },
                {
                    "link": "/images/logo on paper image.jpg",
                    "alt": "My picture photoshopped with yellow background"
                }
            ]
        },
        {
            "name": "Jigyasu's Website 👩‍🎓",
            "date": "Dec 2019 - present",
            "iconID": 0,
            "icontext": "Frontend, UX and UI Design",
            "heroImage": "/images/JIGYASU_LOGO-01.jpg",
            "description": `Jigyasu is an education startup in Odisha. It has been doing research in the field of education to develop physical experiments & demonstrations models in Science which are mapped to the curriculum of the schools.
                            <br> It is a team project specifically aimed for school students from Grades 6-12.
                            <br><br><b>Status | ✅</b> <br> This project is <b style="color: green;">completed</b>, but <b>it is a private repository</b>. So I can only show you the Screenshots of what we had done. Check the below Screenshots👇</b><br>
                            <!-- <br> You can have a look at <a class="boldlink" href="https://jigyasu.co.in/">jigyasu.co.in 👈</a> in which you can see the live progress till now.
To know more about this you can go to <a class="boldlink" href="https://jigyasu.co.in/about">jigyasu.co.in/about 👈</a>  -->
                            <br><b>Team size | 3 | 🤼</b><br><b>My role👉 </b>I was responsible for the UX as well as UI Design and frontend development. Also looked into the SEO of it. 
                            <br><br><b>Technologies used | 💻</b><br> HTML 5 | CSS 3 | Sass | TypeScript | NodeJS`,
            "animation": "left",
            "link": "",
            "linkText": "",
            "images": [{
                    "link": "/images/jig2.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/jig3.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/jig4.png",
                    "alt": "Screenshot"
                }
            ]
        },
        {
            "name": "Startup Ranking India Website 🚀",
            "date": "September 2019 - present",
            "iconID": 0,
            "icontext": "Frontend, UX and UI Design",
            "heroImage": "/images/SRI png black.png",
            "description": `It is a platform in which the Startups from all over India will be ranked with some parameters and accordingly it will be accessible to the common people so that they can analyze each startup by themselves.
                            <br>It was a team project and I had done the front end development and design of the UI.
                            <br><br>
                            <b>Status | ✅</b><br>This project is still in <b style="color: orange;">development</b>, but <b>it is a private repository</b>. So I can only show you the Screenshots of what we had done. Check the below Screenshots👇</b><br>
                            <!--You can have a look at <a class="boldlink" href="http://startuprankingindia.com">startuprankingindia.com&nbsp;👈</a> in which you can see the live progress till now.-->
                            <br><b>Team size | 4 | 🤼</b><br><b>My role👉 </b>I was responsible for the UX as well as UI Design and frontend development. Also looked into the SEO of it. 
                            <br><br><b>Technologies used | 💻</b><br> HTML 5 | CSS 3 | Sass | TypeScript | NodeJS | Figma`,
            "animation": "left",
            "link": "",
            "linkText": "",
            "images": [{
                    "link": "/images/startup.jpg",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/startupodishapage.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "LitmusChaos Website 🧪",
            "date": "July 2019 - present",
            "iconID": 0,
            "icontext": "Frontend, UX and UI Design",
            "heroImage": "https://user-images.githubusercontent.com/46858011/101265585-a8ed0280-376d-11eb-8377-7222fddad9e7.png",
            "description": `It is a very simple app that will give you the information about the States/Union Territory and the Capital of all the States in India. It's made using Dialogflow and hosted on Google Assistant. <br>It is a successful project
                            and I am able to reach around 11,000 visitors since I published it. There were around 550 unique visitors in the past month.
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>, but I will add more features in future to make more information available to my users. You can check out the project using the link below and try
                            it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant
                            <br><br> See the UX and UI <a href="https://www.figma.com/file/Cf3ooKnh8dLrpUq4IayKW0/ChaosCarnival-Copy" target="_blank" rel="noopener noreferrer"><b class="boldlink">at&nbsp;Figma&nbsp;</b></a> `,
            "animation": "left",
            "link": "https://litmuschaos.io",
            "linkText": "Open LitmusChaos 🧪",
            "images": [{
                    "link": "https://user-images.githubusercontent.com/46858011/101265594-bdc99600-376d-11eb-8233-50fce5244288.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265602-ce7a0c00-376d-11eb-96f3-d9abf6dfcbde.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265585-a8ed0280-376d-11eb-8377-7222fddad9e7.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265615-ece00780-376d-11eb-8f57-cbe454388ba4.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "ChaosCarnival Website 🎡",
            "date": "July 2019 - present",
            "iconID": 0,
            "icontext": "Frontend, UX and UI Design",
            "heroImage": "https://user-images.githubusercontent.com/46858011/101263248-e8b1eb00-3769-11eb-846b-e2f879cef092.png",
            "description": `It is a very simple app that will give you the information about the States/Union Territory and the Capital of all the States in India. It's made using Dialogflow and hosted on Google Assistant. <br>It is a successful project
                            and I am able to reach around 11,000 visitors since I published it. There were around 550 unique visitors in the past month.
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>, but I will add more features in future to make more information available to my users. You can check out the project using the link below and try
                            it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant
                            <br><br> See the UX and UI <a href="https://www.figma.com/file/Cf3ooKnh8dLrpUq4IayKW0/ChaosCarnival-Copy" target="_blank" rel="noopener noreferrer"><b class="boldlink">at&nbsp;Figma&nbsp;</b></a> `,
            "animation": "left",
            "link": "https://chaoscarnival.io",
            "linkText": "Open ChaosCarnival 🎡",
            "images": [{
                    "link": "https://user-images.githubusercontent.com/46858011/101263256-fcf5e800-3769-11eb-98cd-307070510e2f.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101263263-08491380-376a-11eb-88a8-fd4f75ae51a5.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101263289-20209780-376a-11eb-81eb-cb0a7c499ec5.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101263294-2dd61d00-376a-11eb-8e77-82296f678e3c.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265203-c5d40680-376a-11eb-9eed-a79c1fc6b48e.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/collection/chaoscarnival logo.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/collection/chaoscarnival.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "Kubera Propel Backend 🚂",
            "date": "July 2019 - present",
            "iconID": 0,
            "icontext": "Backend and API Design",
            "heroImage": "https://user-images.githubusercontent.com/46858011/101265404-3deefc00-376c-11eb-8d96-8ef15a4f53eb.png",
            "description": `It is a very simple app that will give you the information about the States/Union Territory and the Capital of all the States in India. It's made using Dialogflow and hosted on Google Assistant. <br>It is a successful project
                            and I am able to reach around 11,000 visitors since I published it. There were around 550 unique visitors in the past month.
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>, but I will add more features in future to make more information available to my users. You can check out the project using the link below and try
                            it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant`,
            "animation": "left",
            "link": "",
            "linkText": "This is project private😔",
            "images": [{
                    "link": "https://user-images.githubusercontent.com/46858011/101265404-3deefc00-376c-11eb-8d96-8ef15a4f53eb.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265416-50693580-376c-11eb-833b-96004301eaee.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265428-5e1ebb00-376c-11eb-9434-651d7e18bd52.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265440-83132e00-376c-11eb-941c-7ddda3960ce4.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "Growth Metrics 📈",
            "date": "August 2020 - September 2020",
            "iconID": 1,
            "icontext": "Backend and UX",
            "heroImage": "https://user-images.githubusercontent.com/46858011/101265302-51e62e00-376b-11eb-9b4d-da61f6f46cbb.png",
            "description": `This app "The Hello World" gives you information on different ways of writing "Hello World" in different programming languages. Just open your google assistant and try to say "talk to The Hello World" and explore my app.
                            <br><br><b>Status | ☑</b><br>This project is <b style="color: orange;">development</b> phase. I will add more features in future to make more information available to my users. You can check out the project using the link below
                            and try it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant
                            <br><br>
                            <b style="color: rgb(214, 0, 0);">Warning:</b> It's still in development and thus you might see some errors in the conversation.`,
            "animation": "left",
            "link": "",
            "linkText": "This is project private😔",
            "images": [{
                    "link": "https://user-images.githubusercontent.com/46858011/101265339-89ed7100-376b-11eb-9850-8648c6cae347.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265302-51e62e00-376b-11eb-9b4d-da61f6f46cbb.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101265351-9bcf1400-376b-11eb-940c-9f9b66cdd736.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "Bladers Multiplayer spinning tops(Game UX) 🎮",
            "date": "July 2019 - present",
            "iconID": 1,
            "icontext": "UX and UI Design",
            "heroImage": "/images/collection/gameui1.png",
            "description": `It is a very simple app that will give you the information about the States/Union Territory and the Capital of all the States in India. It's made using Dialogflow and hosted on Google Assistant. <br>It is a successful project
                            and I am able to reach around 11,000 visitors since I published it. There were around 550 unique visitors in the past month.
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>, but I will add more features in future to make more information available to my users. You can check out the project using the link below and try
                            it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant
                            <br><br> See the live design clickable prototype <a href="https://www.figma.com/proto/oMUYYYFMhqMODTLeMNIA1R/Beyblade-Game-UI?node-id=50%3A2" target="_blank" rel="noopener noreferrer"><b class="boldlink">at&nbsp;Figma&nbsp;</b></a> `,
            "animation": "left",
            "link": "",
            "linkText": "Download Now 🎮 ▶",
            "images": [{
                    "link": "/images/collection/gameuiAD.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/collection/gameuiicon.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/collection/gameuiicon2.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/collection/gameui2.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/collection/gameui3.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/collection/gameui4.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "Litmus & Repute UX 🧪",
            "date": "Jun 2020 - August 2020",
            "iconID": 0,
            "icontext": "UX and UI",
            "heroImage": "https://user-images.githubusercontent.com/46858011/101263065-cec3d880-3768-11eb-8a77-d405260a46d9.png",
            "description": `This app "The Hello World" gives you information on different ways of writing "Hello World" in different programming languages. Just open your google assistant and try to say "talk to The Hello World" and explore my app.
                            <br><br><b>Status | ☑</b><br>This project is <b style="color: orange;">development</b> phase. I will add more features in future to make more information available to my users. You can check out the project using the link below
                            and try it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant
                            <br><br>
                            <b style="color: rgb(214, 0, 0);">Warning:</b> It's still in development and thus you might see some errors in the conversation.`,
            "animation": "left",
            "link": "",
            "linkText": "This project is private 😔",
            "images": [{
                    "link": "https://user-images.githubusercontent.com/46858011/101263151-2a8e6180-3769-11eb-95d6-5f408a9b3fba.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101263065-cec3d880-3768-11eb-8a77-d405260a46d9.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "ASL Recognition App 👁‍🗨",
            "date": "August 2020",
            "iconID": 0,
            "icontext": "UX and UI",
            "heroImage": "https://user-images.githubusercontent.com/46858011/101266302-983f8b00-3773-11eb-987f-5e54d315c919.png",
            "description": `This app "The Hello World" gives you information on different ways of writing "Hello World" in different programming languages. Just open your google assistant and try to say "talk to The Hello World" and explore my app.
                            <br><br><b>Status | ☑</b><br>This project is <b style="color: orange;">development</b> phase. I will add more features in future to make more information available to my users. You can check out the project using the link below
                            and try it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant
                            <br><br>
                            <b style="color: rgb(214, 0, 0);">Warning:</b> It's still in development and thus you might see some errors in the conversation.`,
            "animation": "left",
            "link": "",
            "linkText": "Design link coming soon 🎨",
            "images": [{
                "link": "https://user-images.githubusercontent.com/46858011/101266302-983f8b00-3773-11eb-987f-5e54d315c919.png",
                "alt": "Screenshot"
            }, ]
        },
        {
            "name": "States and Capitals Chatbot 🤖",
            "date": "July 2019 - present",
            "iconID": 1,
            "icontext": "Google Assistant",
            "heroImage": "/images/states.jpg",
            "description": `It is a very simple app that will give you the information about the States/Union Territory and the Capital of all the States in India. It's made using Dialogflow and hosted on Google Assistant. <br>It is a successful project
                            and I am able to reach around 16,000 visitors since I published it. There were around 750 unique visitors in the past month.
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>, but I will add more features in future to make more information available to my users. You can check out the project using the link below and try
                            it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant`,
            "animation": "left",
            "link": "https://assistant.google.com/services/a/uid/00000085524d6a5a?hl=en_in",
            "linkText": "Try the voice chatbot 🤖",
            "images": [{
                    "link": "/images/states of india.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/soianalytics1.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/soianalytics2.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "Talk to `The Hello World` Chatbot 🤖",
            "date": "June 2019 - July 2019",
            "iconID": 1,
            "icontext": "Google Assistant",
            "heroImage": "/images/hello.jpg",
            "description": `This app "The Hello World" gives you information on different ways of writing "Hello World" in different programming languages. Just open your google assistant and try to say "talk to The Hello World" and explore my app.
                            <br><br><b>Status | ☑</b><br>This project is <b style="color: orange;">development</b> phase. I will add more features in future to make more information available to my users. You can check out the project using the link below
                            and try it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant
                            <br><br>
                            <b style="color: rgb(214, 0, 0);">Warning:</b> It's still in development and thus you might see some errors in the conversation.`,
            "animation": "left",
            "link": "https://assistant.google.com/services/a/uid/000000d7b1e5ad85?hl=en-IN",
            "linkText": "Try the voice chatbot 🤖",
            "images": [{
                    "link": "/images/helloworldapp.jpg",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/helloworldapp2.jpg",
                    "alt": "Screenshot"
                },
                {
                    "link": "/images/helloworld.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "Neuomophic fully functional Calculator 🧮",
            "date": "August 2020",
            "iconID": 0,
            "icontext": "Full stack, UX and UI",
            "heroImage": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Calculator/deployment.png",
            "description": `This is a miscellaneous small project using basic web technologies. Try giving any combination of inputs and see it's output.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>. You can check out the project using the link below 👇
                            and try it.
                            You can see the code on <a href="https://github.com/srikant-code/My-Front-End-Codes" target="_blank" rel="noopener noreferrer"><b class="boldlink">Github&nbsp;</b></a> here. And give a ⭐ it of you like this😊
                            <br><br><b>Technologies used | 💻</b><br> Javascript ES6 | Sass | HTML5 | CSS3
                            <br><br>See the UX and UI <a href="https://www.figma.com/proto/8X3JxPt8xf4YCtm9JYjSrB/004-Calculator?node-id=0%3A1" target="_blank" rel="noopener noreferrer"><b class="boldlink">at&nbsp;Figma&nbsp;</b></a> `,
            "animation": "left",
            "link": "https://srikant-code.github.io/My-Front-End-Codes/Javascript%20projects/Calculator/calculator.html",
            "linkText": "Try my Calculator 🧮",
            "images": [{
                    "link": "https://user-images.githubusercontent.com/46858011/101262979-19912080-3768-11eb-82d8-4f2f5f628a02.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://user-images.githubusercontent.com/46858011/101263003-4c3b1900-3768-11eb-8d50-89a93a21c1d0.png",
                    "alt": "Screenshot"
                },
                {
                    "link": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Calculator/deployment.png",
                    "alt": "Screenshot"
                },
            ]
        },
        {
            "name": "Conveyor Belt Animation 🧪",
            "date": "August 2020",
            "iconID": 0,
            "icontext": "Full stack, UX and UI",
            "heroImage": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/CSS%20projects/Conveyor%20Belt%20Animation/deployment.png",
            "description": `This is a miscellaneous small project using basic web technologies. Try giving any combination of inputs and see it's output.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>. You can check out the project using the link below 👇
                            and try it.
                            You can see the code on <a href="https://github.com/srikant-code/My-Front-End-Codes" target="_blank" rel="noopener noreferrer"><b class="boldlink">Github&nbsp;</b></a> here. And give a ⭐ it of you like this😊
                            <br><br><b>Technologies used | 💻</b><br> Javascript ES6 | Sass | HTML5 | CSS3`,
            "animation": "left",
            "link": "https://srikant-code.github.io/My-Front-End-Codes/CSS%20projects/Conveyor%20Belt%20Animation/conveyor.html",
            "linkText": "See the animation 💫",
            "images": [{
                "link": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/CSS%20projects/Conveyor%20Belt%20Animation/deployment.png",
                "alt": "Screenshot"
            }, ]
        },
        {
            "name": "Space Exploration Animation 🧮",
            "date": "August 2020",
            "iconID": 0,
            "icontext": "Full stack, UX and UI",
            "heroImage": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/CSS%20projects/Jigyasu%20Animation%20and%20login%20page/deployment.png",
            "description": `This is a miscellaneous small project using basic web technologies. Try giving any combination of inputs and see it's output.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>. You can check out the project using the link below 👇
                            and try it.
                            You can see the code on <a href="https://github.com/srikant-code/My-Front-End-Codes" target="_blank" rel="noopener noreferrer"><b class="boldlink">Github&nbsp;</b></a> here. And give a ⭐ it of you like this😊
                            <br><br><b>Technologies used | 💻</b><br> Javascript ES6 | Sass | HTML5 | CSS3`,
            "animation": "left",
            "link": "https://srikant-code.github.io/My-Front-End-Codes/CSS%20projects/Jigyasu%20Animation%20and%20login%20page/404%20animations%20modules%20ON.html",
            "linkText": "See my animation 🚀",
            "images": [{
                "link": "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/CSS%20projects/Jigyasu%20Animation%20and%20login%20page/deployment.png",
                "alt": "Screenshot"
            }, ]
        },
    ],
    "projecticons": [{
            "iconname": "laptop",
            "id": 0,
            "code": "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='25.5' viewBox='0 0 36 25.5'> <path id='Icon_material-laptop-chromebook' data-name='Icon material-laptop-chromebook' d='M33,27V4.5H3V27H0v3H36V27ZM21,27H15V25.5h6Zm9-4.5H6V7.5H30Z' transform='translate(0 -4.5)'/></svg>"
        },
        {
            "iconname": "chatbot",
            "id": 1,
            "code": `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="70" viewBox="0 0 68 70">
                                    <g id="Group_20" data-name="Group 20" transform="translate(921 -5138)">
                                        <circle id="Ellipse_32" data-name="Ellipse 32" cx="19.5" cy="19.5" r="19.5" transform="translate(-921 5138)" fill="#006eff"/>
                                        <circle id="Ellipse_33" data-name="Ellipse 33" cx="11" cy="11" r="11" transform="translate(-881 5158)" fill="#006eff"/>
                                        <circle id="Ellipse_35" data-name="Ellipse 35" cx="12.5" cy="12.5" r="12.5" transform="translate(-884 5183)" fill="#006eff"/>
                                        <circle id="Ellipse_34" data-name="Ellipse 34" cx="4.5" cy="4.5" r="4.5" transform="translate(-862 5151)" fill="#006eff"/>
                                    </g>
                                </svg>`
        }
    ]
}

// Plotly graphs image link: https: //user-images.githubusercontent.com/46858011/95719003-db5a1200-0c8c-11eb-8abf-ebb21927bdcb.png

const GenerateProjectsHTML = () => {
    const header = `
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-THXQCMJ');
    </script>
    <!-- End Google Tag Manager -->

    <meta charset="UTF-8">
    <!-- Primary Meta Tags -->
    <meta name="title" content="Srikant Sahoo - Projects">
    <meta name="description" content="I am a self-taught UI/UX designer and coder. See my portfolio to know about me...😊">
    <meta name="keywords" content="Srikant Sahoo, srikant, sahoo, portfolio, profile, kiit, university, kiit university, ui, ux, design, designer, designing, coder, code, coding, xd, illustrator, adobe, self taught, repo, google, assistant, github, linkedin, self, taught, self-taught">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="revisit-after" content="1 days">
    <meta name="author" content="Srikant Sahoo">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="thumbnail" content="https://raw.githubusercontent.com/srikant-code/My-portfolio/master/images/profile.jpg" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://srikantsahoo.now.sh/">
    <meta property="og:title" content="Srikant Sahoo - Projects">
    <meta property="og:description" content="I am a self-taught UI/UX designer and coder. See my portfolio to know about me...😊">
    <meta property="og:image" content="https://raw.githubusercontent.com/srikant-code/My-portfolio/master/images/portfolio.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://srikantsahoo.now.sh/">
    <meta property="twitter:title" content="Srikant Sahoo - Projects">
    <meta property="twitter:description" content="I am a self-taught UI/UX designer and coder. See my portfolio to know about me...😊">
    <meta property="twitter:image" content="https://raw.githubusercontent.com/srikant-code/My-portfolio/master/images/portfolio.jpg">

    <title>My Projects | Srikant Sahoo</title>
    <link rel="shortcut icon" href="/images/profile.jpg" type="image/x-icon" async>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" async>
    <link rel="stylesheet" href="/src/css/main.min.css" async>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>
    <!-- Facebook Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '517388509169372');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=517388509169372&ev=PageView&noscript=1"
  /></noscript>
    <!-- End Facebook Pixel Code -->

    <PageMap>
        <DataObject type="thumbnail">
            <Attribute name="src" value="https://raw.githubusercontent.com/srikant-code/My-portfolio/master/images/profile.jpg" />
            <Attribute name="width" value="100" />
            <Attribute name="height" value="100" />
        </DataObject>
    </PageMap>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THXQCMJ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <section id="projectsSection" data-aos="fade-right" data-aos-delay="100">
        <div style="display:flex;width: 100%;">
            <a href="/" rel="noopener noreferrer" style="margin: 60px; position: absolute;" class="projectLinkWrapper" data-aos="fade-left" data-aos-delay="1000">
                <div class="projectLink roundedButton">
                    <span>👈 Back to home</span>
                </div>
            </a>
        </div>
        <div class="heading">My Projects</div>
        <!--<div class="projectsScrollView">-->
        <div class="projectsCardsDiv">

        `

    let template = ""
    projectsData.data.forEach(element => {
        let thresholdTime = 600
        let projectImages = ""
        element.images.forEach(image => {
            projectImages = projectImages.concat(`
                        <div class="projectImagesSmall" data-aos="fade-up" data-aos-delay="${thresholdTime}">
                            <img class="lazyload" src="${image.link}" alt="${image.alt}">
                        </div>
            `)
            thresholdTime += 100
        })

        const projectLink = () => {
            if (element.link != "") {
                return `<a href="${element.link}" target="_blank" rel="noopener noreferrer" class="projectLinkWrapper" data-aos="fade-up" data-aos-delay="1000">
                    <div class="projectLink roundedButton">
                        ${element.linkText!=""?element.linkText:"Open&nbsp;Project&nbsp;<span>⚙</span>"}
                    </div>
                </a>`
            } else return `<a href="#${element.name}" rel="noopener noreferrer" class="projectLinkWrapper" data-aos="fade-up" data-aos-delay="1000">
                    <div class="projectLink roundedButton">
                        ${element.linkText!=""?element.linkText:"Link not available&nbsp;<span>🚫</span>"}
                    </div>
                </a>`
        }
        template = template.concat(`
        <div class="projectsBox" id="${element.name}" data-aos="fade-${element.animation}" data-aos-delay="100">
            <div class="projectsBoxImage" data-aos="fade-zoom" data-aos-delay="100">
                <img class="lazyload" src="${element.heroImage}" alt="${element.name} hero image" data-aos="fade-zoom" data-aos-delay="100">
                <div class="projectsBoxText">
                    <div class="projectName" data-aos="fade-right" data-aos-delay="100">
                        ${element.name}
                    </div>
                    <div class="projectDate" data-aos="fade-left" data-aos-delay="100">
                        ${element.date}
                    </div>
                    <div class="projectTech">
                        <div class="projectIcons">
                            ${projectsData.projecticons[element.iconID].code}
                        </div>
                        <div class="projectTechText" data-aos="fade-right" data-aos-delay="100">
                            ${element.icontext}
                        </div>
                    </div>
                </div>
                <div class="projectExpandedContent">
                    <div class='projectDescription' data-aos='fade-up' data-aos-delay='100'>
                        ${element.description}
                    </div>
                    <div class="projectImages" data-aos="fade-${element.animation}" data-aos-delay="100">${projectImages}</div>
                    ${projectLink()}
                </div>
            </div>
        </div>`)
    });

    let footer = `
      </div>
    </section>
    <!-- The Modal -->
    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="lazyload" class="modal-content" id="img01">
        <div id="caption"></div>
    </div>
    <footer>
        <div class="love">
            Designed and coded with ❤ by Srikant
        </div>
    </footer>
    <script src="./src/js/app.min.js" defer></script>
    </body>

</html>`
    let fullHTML = header + template + footer
    fs.writeFile('myprojects.html', fullHTML, (err) => {
        // In case of a error throw err. 
        if (err) throw err;
    })
}
GenerateProjectsHTML()