const fs = require("fs");

const projectsData = {
  data: [
    // Bladers
    {
      name: "Bladers Multiplayer spinning tops(Game UX) 🎮",
      date: "October 2020 - Present 2021",
      iconID: 0,
      tags: [1, 3, 6],
      icontext: "UX and UI Design",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/101271679-24b97000-37ab-11eb-98c8-736aed491e11.png",
      description: `Bladers is a game with <b>4.2 rating</b> on playstore(It changes). It is an exhilarating and realistic gaming experience which allows the player to clash with other real-time players on a one-on-one spinning top battle.
                            Players can either play with friends or with a random player across the internet. Click here to know more about the <a href="https://play.google.com/store/apps/details?id=com.gamersngame.BladersAR" target="_blank" rel="noopener noreferrer"><b class="boldlink">&nbsp;features&nbsp;of&nbsp;the&nbsp;game&nbsp;👈</b></a>
                            <br>We have acheived a total of <b>3,00,000+ i.e 3 Lakh+</b> installs till now which is massive😅 and still counting. 
                            <br><br><b>Status | ✅</b><br>This project is in <b style="color: green;">production</b>. just recently succesfully released design v2.0
                            <br><br><b>Team size | 4 | 🤼</b><br> <b>My role👉 </b>I have handled all the UX as well as the 2D non-digetic game graphics assets. I have made the playstore Ads, screenshots and logo and also designed the design v2.0.
                            <br><br><b>Technologies used | 💻</b><br> Figma | Unity | Android | Photon Server | Photopea
                            <br><br> See the live design clickable prototype <a href="https://www.figma.com/file/oMUYYYFMhqMODTLeMNIA1R/Beyblade-Game-UI" target="_blank" rel="noopener noreferrer"><b class="boldlink">at&nbsp;Figma&nbsp;</b></a> `,
      animation: "left",
      link:
        "https://play.google.com/store/apps/details?id=com.gamersngame.BladersAR",
      linkText: "Download Now 🎮 ▶",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101271712-5b8f8600-37ab-11eb-8423-8579b4f538b8.png",
          alt: "Game adsense AD animation",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101271732-85e14380-37ab-11eb-97b7-fbc3c7133c23.png",
          alt: "Bladers Multiplayer logo",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101271735-8e397e80-37ab-11eb-9457-50b4511c7e28.png",
          alt: "Brahmos Interactive logo",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101271688-33078c00-37ab-11eb-8ddc-8742f51f6be4.png",
          alt: "Playstore feature cover image",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101271695-3c90f400-37ab-11eb-988b-dd7c4c2933dd.png",
          alt: "Playstore feature cover image",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101271706-461a5c00-37ab-11eb-9feb-68b807638df7.png",
          alt: "Playstore feature cover image",
        },
      ],
    },

    // Call workbaard HRC
    {
      name: "Call Workboard Dashboard📞",
      date: "April 2021 - Present 2021",
      iconID: 0,
      icontext: "FullStack React Application",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/119769018-4df3c700-bed7-11eb-8167-4e6af5108b1e.png",
      description: `Call workboard is a full stack react B2B Saas application. The user will be able to collect money directly from the customers and be able to place VoIP calls from the UI dashboard.
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>
                            <br><br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project till now😉.
                            <br><br><b>Technologies used | 💻</b><br> JavaScript ES6 | React | NodeJS | JsSIP VoIP & Asterisk | Material UI | Redux | CSS 3 | HTML 5 | AdobeXD`,
      animation: "right",
      link: "",
      linkText: "",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119769065-65cb4b00-bed7-11eb-9eda-3ce050b79097.png",
          alt: "Search results",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119769083-724fa380-bed7-11eb-86e5-f3b13ebe9c53.png",
          alt: "Feeda Side panel",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119769018-4df3c700-bed7-11eb-8167-4e6af5108b1e.png",
          alt: "Hero Image",
        },
      ],
    },

    // Order Management HRC
    {
      name: "AI-based🤖 Fintech Order Management System📦",
      date: "January 2021 - April 2021",
      iconID: 0,
      icontext: "Full Stack Web App, ML",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/119767161-fc960880-bed3-11eb-9d63-b6d0bdddb6bf.png",
      description: `This is a Capstone project. It is a Full stack order management system which is integrated with and AI-Machine Learning model developed completely by me. It was completed within the winter internship duration while I was in HighRadius. 
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>.
                            <br><br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project till now😉.
                            <br><br><b>Technologies used | 💻</b><br> JavaScript ES6 | React | Java Servlets | Material UI | Redux | MySQL | ML | Python | Flask | CSS 3 | HTML 5 | AdobeXD`,
      animation: "left",
      link: "",
      linkText: "",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119767275-2d763d80-bed4-11eb-86e4-06763321a968.png",
          alt: "Dashboard with tables",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119767348-4848b200-bed4-11eb-9adb-07853d57a97c.png",
          alt: "Add invoice modal",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119767423-644c5380-bed4-11eb-8287-c0c6cd1858f8.png",
          alt: "View correspondence summary modal",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119767161-fc960880-bed3-11eb-9d63-b6d0bdddb6bf.png",
          alt: "Dashboard",
        },
      ],
    },

    // new tab movie
    {
      name: "Movie New tab extension 🎬",
      date: "July 2020 - August 2020",
      iconID: 0,
      icontext: "Frontend, UX/UI and Backend",
      heroImage:
        "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Movie%20Trailer%20Extension/img/deployment2.png",
      description: `Movie New tab is an extension which can run in chrome and firefox browsers. But wait this extension is not yet published to the store. But you can still search your favorite movies and get the details
                            about it. Try it with the below link. <br>If you are a <b>coder</b> or a <b>designer</b> and you like my portfolio then please do ⭐ this repo here 🥺 <a href='https://github.com/srikant-code/My-Front-End-Codes' class='boldlink'>GitHub&nbsp;👈&nbsp;</a>
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">almost completed</b>, but I will add more features in future to make more information available to my users. You can check out the project using the link below and try
                            it.
                            <br><br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project till now😉. From ideation to UX & UI to Development and production. Everything!💪
                            <br><br><b>Technologies used | 💻</b><br> JavaScript ES6 | Sass | CSS 3 | HTML 5 | Figma | Vercel`,
      animation: "left",
      link: "https://movie-new-tab-extension.vercel.app",
      linkText: "Browse your fav movies🍿",
      images: [
        {
          link:
            "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Movie%20Trailer%20Extension/img/deployment2.png",
          alt: "Browsing a movie",
        },
        {
          link:
            "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Movie%20Trailer%20Extension/img/deployment1.png",
          alt: "Movie detailed description page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101262644-388eb300-3766-11eb-83e1-99d5167151f9.png",
          alt: "Search movie/TV shows page",
        },
      ],
    },

    // My portfolio
    {
      name: "My Portfolio 😅",
      date: "April 2020 - present",
      iconID: 0,
      icontext: "Full Stack, UX and UI Design",
      heroImage: "images/portfolio.jpg",
      description: `Yes, this portfolio is itself a UX/frontend project. I have designed the whole UI and coded it as well. I have used all my gained skills to make it as responsive as possible. <br>If you are a <b>coder</b> or a <b>designer</b> and you like my portfolio then please do ⭐ this repo here 🥺 <a href='https://github.com/srikant-code' class='boldlink'>GitHub&nbsp;👈&nbsp;</a> <br><br><b>Status | </b>✅<br>This project is <span style='color: green; font-weight: bold;'>completed</span>, though currently it's not in active development.<br> 
                    <br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project😉. From ideation to UX & UI to Development and production. Everything!💪
                    <br><br><b data-aos='fade-up' data-aos-delay='100'>Technologies used | 💻</b><br> JavaScript ES6 | Sass | CSS 3 | HTML 5 | Figma | Photoshop | Vercel<br>`,
      animation: "left",
      link: "https://github.com/srikant-code/My-portfolio",
      linkText: "You are seeing this project😅",
      images: [
        {
          link: "images/profile.jpg",
          alt: "My profile picture with yellow background",
        },
        {
          link: "images/heroimagemaster.jpg",
          alt: "My picture photoshopped with yellow background",
        },
      ],
    },

    // hacktoberfest KIIT
    {
      name: "Hacktoberfest KIIT 2020 🎤",
      date: "October 2020 - November 2020",
      iconID: 0,
      icontext: "UX and UI Design",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/119768806-e9d10300-bed6-11eb-817e-af1f8aa19c35.png",
      description: `We at our University with a bunch of people have designed & developed an event website for the biggest opensource event Hacktoberfest 2020 collaborately.
                            You can check out the 🥺 <a href='https://kiithacktoberfest.netlify.app/' class='boldlink'>Live Hosted Link&nbsp;👈&nbsp;</a>
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>
                            <br><br><b>Team size | 2-10 | 🤼</b><br> I with my teammates have designed the whole website UX as well as UI.
                            <br><br><b>Technologies used | 💻</b><br> Figma | Illustrator | Gatsby React`,
      animation: "left",
      link:
        "https://www.figma.com/file/qeCIEcR7gvCboO9GWnQzJV/Hacktoberfest-KIIT-2020",
      linkText: "Open Design Link 🔗",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119768847-fe150000-bed6-11eb-8be6-d59430572860.png",
          alt: "Registration Page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119768806-e9d10300-bed6-11eb-817e-af1f8aa19c35.png",
          alt: "Hero Image",
        },
      ],
    },

    // ChaosCarnival
    {
      name: "ChaosCarnival Website 🎡",
      date: "September 2020 - November 2020",
      iconID: 0,
      icontext: "Frontend, UX and UI Design",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/101263248-e8b1eb00-3769-11eb-846b-e2f879cef092.png",
      description: `It is the landing event page for a global two-day virtual conference for Cloud Native Chaos Engineering.  
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>. The event ChaosCarnival is going to happen on <b>Feb 10th & 11th, 2021</b>.
                            <br><br><b>Team size | 5-10 | 🤼</b><br> <b>My role👉 </b>I have contributed to the UX and UI design of all the pages with the team, as well as coded the frontend in React, looked into the image optimizations to increase the page loading speed.
                            Improved the pagespeed insights by 20+ points <b style="color: green;">presently 66/100</b> which was earlier at <b style="color: red;">44/100</b>.
                            <br><br><b>Technologies used | 💻</b><br> Figma | React | Typescript | HTML | Styled Components etc
                            <br><br> See the UX and UI <a href="https://www.figma.com/file/Cf3ooKnh8dLrpUq4IayKW0/ChaosCarnival-Copy" target="_blank" rel="noopener noreferrer"><b class="boldlink">in&nbsp;Figma&nbsp;</b></a> `,
      animation: "right",
      link: "https://chaoscarnival.io",
      linkText: "Open ChaosCarnival 🎡",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101263256-fcf5e800-3769-11eb-98cd-307070510e2f.png",
          alt: "Sponsors of ChaosCarnival",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101263263-08491380-376a-11eb-88a8-fd4f75ae51a5.png",
          alt: "End screen in the landing page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101263289-20209780-376a-11eb-81eb-cb0a7c499ec5.png",
          alt: "Sponsorship details page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101263294-2dd61d00-376a-11eb-8e77-82296f678e3c.png",
          alt: "Sponsorship details page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265203-c5d40680-376a-11eb-9eed-a79c1fc6b48e.png",
          alt: "Team details page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101271800-23d50e00-37ac-11eb-9506-e422638ce8e8.png",
          alt: "ChaosCarnival square logo",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101271798-22a3e100-37ac-11eb-828e-0b30f4353528.png",
          alt: "ChaosCarnival cover image",
        },
      ],
    },

    // LitmusChaos
    {
      name: "LitmusChaos Website 🧪",
      date: "July 2020 - August 2020",
      iconID: 0,
      icontext: "Frontend, UX and UI Design",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/101265585-a8ed0280-376d-11eb-8377-7222fddad9e7.png",
      description: `<b>"Chaos Engineering for your Kubernetes"</b> Chaos engineering is fundamental to increasing the resilience of today’s cloud native, highly dynamic applications and infrastructure. Kubernetes developers and SREs use Litmus to create, manage and monitor chaos workflows by extending Kubernetes itself.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>.
                            <br><br><b>Team size | 10-15 | 🤼</b><br> <b>My role👉 </b>I have contributed to the UX as well as UI and optimized the images which hugely increased the page speed insights by around 40+ points now at <b style="color: green;">88/100</b>.
                            <br> Also contributed to the making of the brand mascot <b>ChaosBird</b>.
                            <br><br><b>Technologies using | 💻</b><br> Figma | React | Golang | Typescript | Electron
                            <br><br>`,
      animation: "left",
      link: "https://litmuschaos.io",
      linkText: "Open LitmusChaos 🧪",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265594-bdc99600-376d-11eb-8233-50fce5244288.png",
          alt: "A section in landing page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265602-ce7a0c00-376d-11eb-96f3-d9abf6dfcbde.png",
          alt: "ChaosHub section in landing page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265585-a8ed0280-376d-11eb-8377-7222fddad9e7.png",
          alt: "Home section in landing page",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265615-ece00780-376d-11eb-8f57-cbe454388ba4.png",
          alt: "Community section in landing page",
        },
      ],
    },

    // Chaos native hacakathon web ui
    {
      name: "ChaosNative Landing Page UX Hackathon 🐱‍💻",
      date: "May 2021 - May 2021",
      iconID: 0,
      icontext: "UX and UI design",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/119767926-69f66900-bed5-11eb-9c81-e951be6150bd.png",
      description: `Created a landing page for ChaosNative UX and UI design in a 3 Day hackathon.
                            <br><br>
                            <b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>.
                            <br><br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project till now😉. From ideation to UX & UI to Development and production. Everything!💪
                            <br><br><b>Technologies used | 💻</b><br>Figma`,
      animation: "left",
      link:
        "https://www.figma.com/file/aY5jXxkJXlx1qSCS4GnfUl/1829199_UI-UX_Recruitment_2021",
      linkText: "Open Design Link🎨",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119767835-44695f80-bed5-11eb-8ed5-271d7d207eee.png",
          alt: "cards",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119767877-5814c600-bed5-11eb-9dab-f0faddbecb76.png",
          alt: "signup",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/119767926-69f66900-bed5-11eb-9c81-e951be6150bd.png",
          alt: "Hero Image",
        },
      ],
    },

    // Kubera Propel
    {
      name: "Kubera Propel Backend 🚂",
      date: "October 2020 - November 2020",
      iconID: 0,
      icontext: "Backend and API Design",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/101265404-3deefc00-376c-11eb-8d96-8ef15a4f53eb.png",
      description: ` Kubera Propel is based on the most popular open-source Container Attached Storage project, OpenEBS, which MayaData started and continues to lead.
                            <br><br><b>Status | 🟡</b><br>This project is in <b style="color: orange;">progress</b>. But I am not there in the team anymore.
                            <br><br><b>Team size | 15-20 | 🤼</b><br> <b>My role👉 </b>I have contributed to the backend and API design for creating the Kubernetes clusters and associated CRUD operations.
                            <br><br><b>Technologies used | 💻</b><br> Golang | GraphQL | Plotly.JS | React | AWS | Kubernetes | Docker`,
      animation: "left",
      link: "",
      linkText: "This project is private😔",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265404-3deefc00-376c-11eb-8d96-8ef15a4f53eb.png",
          alt: "Homepage, installing propel agent on your kubernetes",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265416-50693580-376c-11eb-833b-96004301eaee.png",
          alt: "Selecting nodes in your kubernetes",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265428-5e1ebb00-376c-11eb-9434-651d7e18bd52.png",
          alt: "Creating storage pools in your kubernetes",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265440-83132e00-376c-11eb-941c-7ddda3960ce4.png",
          alt: "Kubera Propel Cover Image",
        },
      ],
    },

    // Growth Metrics
    {
      name: "Growth Metrics 📈",
      date: "September 2020 - October 2020",
      iconID: 0,
      icontext: "Backend and UX",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/101265302-51e62e00-376b-11eb-9b4d-da61f6f46cbb.png",
      description: `Growth Metrics is a marketing platform for MayaData to track and target thier users who are using their product. 
                            <br><br><b>Status | 🟡</b><br>This project is in <b style="color: orange;">development</b>. But I am not there in the team anymore.
                            <br><br><b>Team size | 3-5 | 🤼</b><br> <b>My role👉 </b>I have done significant contributions in developing the backend as well as creating the UX of the dashboards.
                            <br><br><b>Technologies used | 💻</b><br> Golang | GraphQL | Quay.io`,
      animation: "right",
      link: "",
      linkText: "This project is private😔",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265339-89ed7100-376b-11eb-9850-8648c6cae347.png",
          alt: "Filtering by IP addresses API(Dashboard)",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265302-51e62e00-376b-11eb-9b4d-da61f6f46cbb.png",
          alt: "Filtering by popularity API(Dashboard)",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265351-9bcf1400-376b-11eb-940c-9f9b66cdd736.png",
          alt: "Comparing IPs Dashboard UX",
        },
      ],
    },

    // Litmus & repute
    {
      name: "Litmus & Repute UX 🧪",
      date: "June 2020 - August 2020",
      iconID: 0,
      icontext: "UX and UI",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/101263065-cec3d880-3768-11eb-8a77-d405260a46d9.png",
      description: `Litmus is a toolset to do cloud-native chaos engineering. Litmus provides tools to orchestrate chaos on Kubernetes to help SREs find weaknesses in their deployments. SREs use Litmus to run chaos experiments initially in the staging environment and eventually in production to find bugs, vulnerabilities. Fixing the weaknesses leads to increased resilience of the system.
                            <br><br><b>Status | 🟡</b><br>This project is in <b style="color: orange;">development</b>. But I am not there in the team anymore. You can have a look at the opensource project <a href="https://github.com/litmuschaos/litmus" target="_blank" rel="noopener noreferrer"><b class="boldlink">&nbsp;here&nbsp;👈</b></a>.
                            <br><br><b>Team size | 110-125 | 🤼</b><br> <b>My role👉 </b>I have done significant contributions in developing the UX of the internal dashboards and workflows.
                            <br> Also contributed to the making of the brand mascot <b>ChaosBird</b>.
                            <br><br><b>Technologies used | 💻</b><br> Figma | Kubernetes | React`,
      animation: "right",
      link: "https://github.com/litmuschaos/litmus",
      linkText: "It's open source😃",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101263151-2a8e6180-3769-11eb-95d6-5f408a9b3fba.png",
          alt: "Selecting nodes from your kubernetes",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101263065-cec3d880-3768-11eb-8a77-d405260a46d9.png",
          alt: "Homepage Dashboard",
        },
      ],
    },

    // Metab Browser
    {
      name: "Metab Browser 🎯",
      date: "Nov 2020 - Present",
      iconID: 0,
      icontext: "Personal Side Project",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/101265694-7abbf280-376e-11eb-9ef4-9fd11272f844.png",
      description: `Metab is going to be the browser that will make Designers, Developers, Content Creators, Students, and all the working professionals more productive. 
                            <br> Metab will have an avid concept of tabs & task management and will change the way you browse the web today. It will be effective with a lot of proven techniques with different tools integrated into the browser at one place to get everything in front of you and to make you more productive. 
                            <br><br><b>Status | 🟡</b><br>This project is <b style="color: orange;">ideation</b> phase. I will add more features in future to make more information available to my users.
                            <br><br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project😉. From ideation to UX & UI to Development and production. Everything!💪
                            <br><br><b>Technologies using | 💻</b><br> Figma | React | Golang | Typescript | Electron
                            <br><br>`,
      animation: "right",
      link: "https://github.com/metabbrowser",
      linkText: "Design link coming soon🎨",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265705-89a2a500-376e-11eb-96bc-4075886cb4b2.png",
          alt: "Metab square Logo",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265694-7abbf280-376e-11eb-9ef4-9fd11272f844.png",
          alt: "Metab cover image",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101265746-e30ad400-376e-11eb-8bea-9f7f051791d2.png",
          alt: "metab text logo",
        },
      ],
    },

    // Startup Ranking
    {
      name: "Startup Ranking India Website 🚀",
      date: "September 2019 - April 2020",
      iconID: 0,
      icontext: "Frontend, UX and UI Design",
      heroImage: "/images/SRI png black.png",
      description: `It is a platform in which the Startups from all over India will be ranked with some parameters and accordingly it will be accessible to the common people so that they can analyze each startup by themselves.
                            <br>It was a team project and I had done the front end development and design of the UI.
                            <br><br>
                            <b>Status | 🟡</b><br>This project is still in <b style="color: orange;">development</b>, but <b>it is a private repository</b>. So I can only show you the Screenshots of what we had done. Check the below Screenshots👇</b><br>
                            <!--You can have a look at <a class="boldlink" href="http://startuprankingindia.com">startuprankingindia.com&nbsp;👈</a> in which you can see the live progress till now.-->
                            <br><b>Team size | 4 | 🤼</b><br><b>My role👉 </b>I was responsible for the UX as well as UI Design and frontend development. Also looked into the SEO of it. 
                            <br><br><b>Technologies used | 💻</b><br> HTML 5 | CSS 3 | Sass | TypeScript | NodeJS | Figma`,
      animation: "right",
      link: "",
      linkText: "",
      images: [
        {
          link: "/images/startup.jpg",
          alt: "Startup Odisha cover image",
        },
        {
          link: "/images/startupodishapage.png",
          alt: "Startup Odisha Homepage",
        },
      ],
    },

    // CakeShake
    {
      name: "CakeShake Website 🎂",
      date: "March 2020 - April 2020",
      iconID: 0,
      icontext: "Frontend, UX and UI Design",
      heroImage: "images/cakeshake.png",
      description: `CakeShake is a website for cake lovers ❤️️ It will give them a real experience of buying their own <b>customized</b> cakes. 
                            <br><b>Future Plans | ⏳</b><br> Will be using <a href="https://threejs.org/" target="_blank"
                                rel="noopener noreferrer"><b class="boldlink">Three.js&nbsp;</b></a> library to build 3D cake models. The user can drag and drop ingredients of their wish to make cakes. There will be options to choose predefined designed cakes as well. 
                            <br>
                            <br>If you are a <b>coder</b> or a <b>designer</b> and you like my portfolio then please do ⭐ this repo 🥺. You can preview the website <a href="https://srikant-code.github.io/CakeShake/index.html" target="_blank"
                                rel="noopener noreferrer"><b class="boldlink">here&nbsp;👈&nbsp;</b></a><br>
                            <br>
                            <b data-aos="fade-right" data-aos-delay="100">Status | </b>🟡<br>This project is in <span style="color: rgb(224, 146, 0); font-weight: bold;">development</span>, It is only developed for bigger screen sizes e.g: Laptop, Desktops.<br>
                            <br><b>Team size | 1 | 🤼</b><br> Ahh, I am the only one managing this project😊. From ideation to UX & UI, Logo design, development and production. Everything!💪
                            <br>
                            <br><b>Technologies used | 💻</b><br> JavaScript ES6 | Sass | CSS 3 | HTML 5 | Figma | Adobe XD | Illustrator | Photoshop
                            <br><br>
                            <b>Note: </b> It's still in development and all the links are not assigned. Read the warning carefully before visiting the website.
                            <br><br>
                            <b style="color: rgb(214, 0, 0);">Warning!</b><br> The current website is <b>not</b> suitable for mobile devices. <br> It is no way responsive and you may see many unexpected garbage. <br> The development is in progress and
                            it will be available for mobile devices soon. <br>`,
      animation: "right",
      link: "https://github.com/srikant-code/CakeShake",
      linkText: "Open Project 🍰",
      images: [
        {
          link: "/images/cakeshakelogobox.jpg",
          alt: "CakeShake logo in red gradient background",
        },
        {
          link: "/images/cakeshake logo.jpg",
          alt: "CakeShake logo",
        },
        {
          link: "/images/logo on paper image.jpg",
          alt: "CakeShake logo in a paper mockup",
        },
      ],
    },

    // Jigyasu
    {
      name: "Jigyasu's Website 👩‍🎓",
      date: "December 2019 - March 2020",
      iconID: 0,
      icontext: "Frontend, UX and UI Design",
      heroImage: "/images/JIGYASU_LOGO-01.jpg",
      description: `Jigyasu is an education startup in Odisha. It has been doing research in the field of education to develop physical experiments & demonstrations models in Science which are mapped to the curriculum of the schools.
                            <br> It is a team project specifically aimed for school students from Grades 6-12.
                            <br><br><b>Status | ✅</b> <br> This project is <b style="color: green;">completed</b>, but <b>it is a private repository</b>. So I can only show you the Screenshots of what we had done. Check the below Screenshots👇</b><br>
                            <!-- <br> You can have a look at <a class="boldlink" href="https://jigyasu.co.in/">jigyasu.co.in 👈</a> in which you can see the live progress till now.
To know more about this you can go to <a class="boldlink" href="https://jigyasu.co.in/about">jigyasu.co.in/about 👈</a>  -->
                            <br><b>Team size | 3 | 🤼</b><br><b>My role👉 </b>I was responsible for the UX as well as UI Design and frontend development. Also looked into the SEO of it. 
                            <br><br><b>Technologies used | 💻</b><br> HTML 5 | CSS 3 | Sass | TypeScript | NodeJS`,
      animation: "left",
      link: "",
      linkText: "",
      images: [
        {
          link: "/images/jig2.png",
          alt: "Science Studio page",
        },
        {
          link: "/images/jig3.png",
          alt: "Science studio in landing page",
        },
        {
          link: "/images/jig4.png",
          alt: "Landing page",
        },
      ],
    },

    // Hello world chatbot
    {
      name: "Talk to `The Hello World` Chatbot 🤖",
      date: "June 2019 - July 2019",
      iconID: 1,
      icontext: "Google Assistant",
      heroImage: "/images/hello.jpg",
      description: `This app "The Hello World" gives you information on different ways of writing "Hello World" in different programming languages. Just open your google assistant and try to say "talk to The Hello World" and explore my app.
                            <br><br><b>Status | 🟡</b><br>This project is <b style="color: orange;">development</b> phase. I will add more features in future to make more information available to my users. You can check out the project using the link below
                            and try it.
                            <br> <b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant
                            <br><br>
                            <b style="color: rgb(214, 0, 0);">Warning:</b> It's still in development and thus you might see some errors in the conversation.`,
      animation: "left",
      link:
        "https://assistant.google.com/services/a/uid/000000d7b1e5ad85?hl=en-IN",
      linkText: "Try the voice chatbot 🤖",
      images: [
        {
          link: "/images/helloworldapp.jpg",
          alt: "App screenshot",
        },
        {
          link: "/images/helloworldapp2.jpg",
          alt: "App screenshot",
        },
        {
          link: "/images/helloworld.png",
          alt: "Google Assistant store screenshot",
        },
      ],
    },

    // States and Capitals
    {
      name: "States and Capitals Chatbot 🤖",
      date: "July 2019 - August 2019",
      iconID: 1,
      icontext: "Google Assistant",
      heroImage: "/images/states.jpg",
      description: `It is a very simple app that will give you the information about the States/Union Territory and the Capital of all the States in India. It's made using Dialogflow and hosted on Google Assistant. <br>It is a successful project
                            and I was able to reach around 16,000 visitors since I published it. There were around 750 unique visitors in the past month.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>, but I will add more features in future to make more information available to my users. You can check out the project using the link below and try it.
                            <br><b>Give it a 5-star rating too😊</b>
                            <br><br><b>Technologies used | 💻</b><br> Dialogflow | Platform - Google Assistant`,
      animation: "right",
      link:
        "https://assistant.google.com/services/a/uid/00000085524d6a5a?hl=en_in",
      linkText: "Try the voice chatbot 🤖",
      images: [
        {
          link: "/images/states of india.png",
          alt: "Google Assistant store screenshot",
        },
        {
          link: "/images/soianalytics1.png",
          alt: "User Stats of States and capitals",
        },
        {
          link: "/images/soianalytics2.png",
          alt: "User Stats of States and capitals",
        },
      ],
    },

    // ASL
    {
      name: "ASL Recognition App 👁‍🗨",
      date: "January 2020 - February 2020",
      iconID: 0,
      icontext: "UX and UI",
      heroImage:
        "https://user-images.githubusercontent.com/46858011/101266302-983f8b00-3773-11eb-987f-5e54d315c919.png",
      description: `This project was created for the DSC solution Challenge by Google. This apps main motive is to translate the hand signs into letters using a ML model so that people with hearing & eyesight & speaking disability can understand & share their message.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>. 
                            <br><br><b>Team size | 4 | 🤼</b><br> <b>My role👉 </b>I have done significant contributions of creating the UX of the app by trying to make it as simple as possible.
                            <br><br><b>Technologies used | 💻</b><br> Adobe XD | ML | Firebase | Flutter`,
      animation: "left",
      link: "",
      linkText: "Design link coming soon 🎨",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101266302-983f8b00-3773-11eb-987f-5e54d315c919.png",
          alt: "American Sign Language App Logo",
        },
      ],
    },

    // conveyor animation
    {
      name: "Conveyor Belt Animation 🧪",
      date: "June 2020 - July 2020",
      iconID: 0,
      icontext: "Full stack, UX and UI",
      heroImage:
        "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/CSS%20projects/Conveyor%20Belt%20Animation/deployment.png",
      description: `This is a miscellaneous small project using basic web technologies. Try giving any combination of inputs and see it's output.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>. You can check out the project using the link below 👇
                            and try it.
                            You can see the code on <a href="https://github.com/srikant-code/My-Front-End-Codes" target="_blank" rel="noopener noreferrer"><b class="boldlink">Github&nbsp;</b></a> here. And give a ⭐ it of you like this😊
                            <br><br><b>Technologies used | 💻</b><br> Javascript ES6 | Sass | HTML5 | CSS3`,
      animation: "left",
      link:
        "https://srikant-code.github.io/My-Front-End-Codes/CSS%20projects/Conveyor%20Belt%20Animation/conveyor.html",
      linkText: "See the animation 💫",
      images: [
        {
          link:
            "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/CSS%20projects/Conveyor%20Belt%20Animation/deployment.png",
          alt: "Conveyor Belt Animation screenshot",
        },
      ],
    },

    // space exploration
    {
      name: "Space Exploration Animation 🧮",
      date: "October 2019",
      iconID: 0,
      icontext: "Full stack, UX and UI",
      heroImage:
        "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/CSS%20projects/Jigyasu%20Animation%20and%20login%20page/deployment.png",
      description: `This is a miscellaneous small project using basic web technologies.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>. You can check out the project using the link below 👇
                            and try it.
                            You can see the code on <a href="https://github.com/srikant-code/My-Front-End-Codes" target="_blank" rel="noopener noreferrer"><b class="boldlink">Github&nbsp;</b></a> here. And give a ⭐ it of you like this😊
                            <br><br><b>Technologies used | 💻</b><br> Javascript ES6 | Sass | HTML5 | CSS3`,
      animation: "right",
      link:
        "https://srikant-code.github.io/My-Front-End-Codes/CSS%20projects/Jigyasu%20Animation%20and%20login%20page/404%20animations%20modules%20ON.html",
      linkText: "See my animation 🚀",
      images: [
        {
          link:
            "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/CSS%20projects/Jigyasu%20Animation%20and%20login%20page/deployment.png",
          alt: "Space Exploration Animation Screenshot",
        },
      ],
    },

    // neuomorphic calculator
    {
      name: "Neuomophic fully functional Calculator 🧮",
      date: "April 2020 - May 2020",
      iconID: 0,
      icontext: "Full stack, UX and UI",
      heroImage:
        "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Calculator/deployment.png",
      description: `This is a miscellaneous small project using basic web technologies. Try giving any combination of inputs and see it's output.
                            <br><br><b>Status | ✅</b><br>This project is <b style="color: green;">completed</b>. You can check out the project using the link below 👇
                            and try it.
                            You can see the code on <a href="https://github.com/srikant-code/My-Front-End-Codes" target="_blank" rel="noopener noreferrer"><b class="boldlink">Github&nbsp;</b></a> here. And give a ⭐ it of you like this😊
                            <br><br><b>Technologies used | 💻</b><br> Javascript ES6 | Sass | HTML5 | CSS3
                            <br><br>See the UX and UI <a href="https://www.figma.com/proto/8X3JxPt8xf4YCtm9JYjSrB/004-Calculator?node-id=0%3A1" target="_blank" rel="noopener noreferrer"><b class="boldlink">at&nbsp;Figma&nbsp;</b></a> `,
      animation: "right",
      link:
        "https://srikant-code.github.io/My-Front-End-Codes/Javascript%20projects/Calculator/calculator.html",
      linkText: "Try my Calculator 🧮",
      images: [
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101262979-19912080-3768-11eb-82d8-4f2f5f628a02.png",
          alt: "Mockup Calculator Presentation",
        },
        {
          link:
            "https://user-images.githubusercontent.com/46858011/101263003-4c3b1900-3768-11eb-8d50-89a93a21c1d0.png",
          alt: "Calculator Presentation",
        },
        {
          link:
            "https://raw.githubusercontent.com/srikant-code/My-Front-End-Codes/master/Javascript%20projects/Calculator/deployment.png",
          alt: "Actual Implementation",
        },
      ],
    },

    // TODO
    // url preview fetcher
    // 100 days design challenge
  ],
  projecticons: [
    {
      iconname: "laptop",
      id: 0,
      code:
        "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='25.5' viewBox='0 0 36 25.5'> <path id='Icon_material-laptop-chromebook' data-name='Icon material-laptop-chromebook' d='M33,27V4.5H3V27H0v3H36V27ZM21,27H15V25.5h6Zm9-4.5H6V7.5H30Z' transform='translate(0 -4.5)'/></svg>",
    },
    {
      iconname: "chatbot",
      id: 1,
      code: `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="70" viewBox="0 0 68 70">
                                    <g id="Group_20" data-name="Group 20" transform="translate(921 -5138)">
                                        <circle id="Ellipse_32" data-name="Ellipse 32" cx="19.5" cy="19.5" r="19.5" transform="translate(-921 5138)" fill="#006eff"/>
                                        <circle id="Ellipse_33" data-name="Ellipse 33" cx="11" cy="11" r="11" transform="translate(-881 5158)" fill="#006eff"/>
                                        <circle id="Ellipse_35" data-name="Ellipse 35" cx="12.5" cy="12.5" r="12.5" transform="translate(-884 5183)" fill="#006eff"/>
                                        <circle id="Ellipse_34" data-name="Ellipse 34" cx="4.5" cy="4.5" r="4.5" transform="translate(-862 5151)" fill="#006eff"/>
                                    </g>
                                </svg>`,
    },
  ],
  tags: [
    {
      tagname: "Coding",
      id: 0,
      code:
        "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='25.5' viewBox='0 0 36 25.5'> <path id='Icon_material-laptop-chromebook' data-name='Icon material-laptop-chromebook' d='M33,27V4.5H3V27H0v3H36V27ZM21,27H15V25.5h6Zm9-4.5H6V7.5H30Z' transform='translate(0 -4.5)'/></svg>",
    },
    {
      tagname: "Designing",
      id: 1,
      code: `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="70" viewBox="0 0 68 70">
                                    <g id="Group_20" data-name="Group 20" transform="translate(921 -5138)">
                                        <circle id="Ellipse_32" data-name="Ellipse 32" cx="19.5" cy="19.5" r="19.5" transform="translate(-921 5138)" fill="#006eff"/>
                                        <circle id="Ellipse_33" data-name="Ellipse 33" cx="11" cy="11" r="11" transform="translate(-881 5158)" fill="#006eff"/>
                                        <circle id="Ellipse_35" data-name="Ellipse 35" cx="12.5" cy="12.5" r="12.5" transform="translate(-884 5183)" fill="#006eff"/>
                                        <circle id="Ellipse_34" data-name="Ellipse 34" cx="4.5" cy="4.5" r="4.5" transform="translate(-862 5151)" fill="#006eff"/>
                                    </g>
                                </svg>`,
    },
    {
      tagname: "Landing Page",
      id: 2,
      code:
        "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='25.5' viewBox='0 0 36 25.5'> <path id='Icon_material-laptop-chromebook' data-name='Icon material-laptop-chromebook' d='M33,27V4.5H3V27H0v3H36V27ZM21,27H15V25.5h6Zm9-4.5H6V7.5H30Z' transform='translate(0 -4.5)'/></svg>",
    },
    {
      tagname: "Saas Product",
      id: 3,
      code:
        "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='25.5' viewBox='0 0 36 25.5'> <path id='Icon_material-laptop-chromebook' data-name='Icon material-laptop-chromebook' d='M33,27V4.5H3V27H0v3H36V27ZM21,27H15V25.5h6Zm9-4.5H6V7.5H30Z' transform='translate(0 -4.5)'/></svg>",
    },
    {
      tagname: "Miscellaneous",
      id: 4,
      code:
        "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='25.5' viewBox='0 0 36 25.5'> <path id='Icon_material-laptop-chromebook' data-name='Icon material-laptop-chromebook' d='M33,27V4.5H3V27H0v3H36V27ZM21,27H15V25.5h6Zm9-4.5H6V7.5H30Z' transform='translate(0 -4.5)'/></svg>",
    },
    {
      tagname: "Animations",
      id: 5,
      code:
        "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='25.5' viewBox='0 0 36 25.5'> <path id='Icon_material-laptop-chromebook' data-name='Icon material-laptop-chromebook' d='M33,27V4.5H3V27H0v3H36V27ZM21,27H15V25.5h6Zm9-4.5H6V7.5H30Z' transform='translate(0 -4.5)'/></svg>",
    },
    {
      tagname: "Game",
      id: 6,
      code:
        "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='25.5' viewBox='0 0 36 25.5'> <path id='Icon_material-laptop-chromebook' data-name='Icon material-laptop-chromebook' d='M33,27V4.5H3V27H0v3H36V27ZM21,27H15V25.5h6Zm9-4.5H6V7.5H30Z' transform='translate(0 -4.5)'/></svg>",
    },
  ],
};

// Plotly graphs image link: https: //user-images.githubusercontent.com/46858011/95719003-db5a1200-0c8c-11eb-8abf-ebb21927bdcb.png

const GenerateProjectsHTML = () => {
  let template = "";
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
    <link rel="stylesheet" href="/src/css/main.css" async>
    <!--<link rel="stylesheet" href="/src/css/main.min.css" async>-->
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
    
    <nav class="navbarhorizontal">
        <ul class="navElementsULhorizontal">
            <a href="/" class="logo tooltip">
                <li>
                    <span class="tooltiptext">Srikant&nbsp;Sahoo</span>
                    <img class="lazyload" id="abcd" class="logoImage" src="images/profile.jpg" alt="Srikant Sahoo">
                </li>
            </a>
            <div style="display:flex;">
                <a href="/" class="navItemhorizontal tooltip notOnPhone">
                    <li>
                        <span class="tooltiptext">Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40.503" height="31.496" viewBox="0 0 40.503 31.496">
                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M19.714,10.425,6.75,21.1V32.625A1.125,1.125,0,0,0,7.875,33.75l7.879-.02A1.125,1.125,0,0,0,16.874,32.6v-6.73A1.125,1.125,0,0,1,18,24.75h4.5a1.125,1.125,0,0,1,1.125,1.125V32.6a1.125,1.125,0,0,0,1.125,1.129l7.876.022a1.125,1.125,0,0,0,1.125-1.125V21.094L20.789,10.425A.857.857,0,0,0,19.714,10.425Zm20.477,7.257-5.878-4.845V3.1a.844.844,0,0,0-.844-.844H29.531a.844.844,0,0,0-.844.844V8.2l-6.3-5.179a3.375,3.375,0,0,0-4.289,0L.305,17.681A.844.844,0,0,0,.193,18.87l1.793,2.18a.844.844,0,0,0,1.189.115L19.714,7.542a.857.857,0,0,1,1.076,0l16.54,13.622a.844.844,0,0,0,1.188-.112l1.793-2.18a.844.844,0,0,0-.12-1.19Z" transform="translate(0.001 -2.254)"/>
                        </svg>
                    </li>
                </a>
                <a href="/about.html" class="navItemhorizontal tooltip">
                    <li>
                        <span class="tooltiptext">About&nbsp;Me</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="13.824" viewBox="0 0 36 13.824">
                            <path id="Icon_simple-aboutme" data-name="Icon simple-aboutme" d="M29.3,13.716a3.44,3.44,0,0,0-3.443,3.173h6.912A3.409,3.409,0,0,0,29.3,13.716m-3.389,5.422a3.68,3.68,0,0,0,3.8,2.954,5.322,5.322,0,0,0,3.578-1.357L35.05,22.77a7.854,7.854,0,0,1-5.609,2.142A6.789,6.789,0,0,1,22.392,18a6.757,6.757,0,0,1,6.858-6.912A6.673,6.673,0,0,1,36,18v1.139H25.916Zm-9.733,5.742V16.346c0-1.462-.648-2.3-2-2.3A3.5,3.5,0,0,0,11.6,15.536v9.347H8.078V16.346c0-1.462-.621-2.3-1.976-2.3a3.452,3.452,0,0,0-2.576,1.494v9.347H0V11.259H3.526v1.726A5.332,5.332,0,0,1,7.592,11.09,3.552,3.552,0,0,1,11.3,13.475a5.31,5.31,0,0,1,4.365-2.385c2.549,0,4.039,1.519,4.039,4.446v9.347h-3.53Z" transform="translate(0 -11.088)"/>
                        </svg>
                    </li>
                </a>

                <a id="activeNav" href="/myprojects.html" class="navItemhorizontal tooltip">
                    <li>
                        <span class="tooltiptext">My&nbsp;Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28.5" viewBox="0 0 30 28.5">
                            <path id="Icon_material-work" data-name="Icon material-work" d="M30,9H24V6a2.99,2.99,0,0,0-3-3H15a2.99,2.99,0,0,0-3,3V9H6a2.977,2.977,0,0,0-2.985,3L3,28.5a2.99,2.99,0,0,0,3,3H30a2.99,2.99,0,0,0,3-3V12A2.99,2.99,0,0,0,30,9ZM21,9H15V6h6Z" transform="translate(-3 -3)"/>
                        </svg>
                    </li>
                </a>

                <a href="/about.html#skillsSection" class="navItemhorizontal tooltip notOnPhone">
                    <li>
                        <span class="tooltiptext">Skills</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28.995" height="27.752" viewBox="0 0 28.995 27.752">
                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M14.384.964,10.845,8.14,2.926,9.295a1.735,1.735,0,0,0-.959,2.959L7.7,17.836,6.341,25.722a1.733,1.733,0,0,0,2.515,1.826l7.084-3.723,7.084,3.723a1.735,1.735,0,0,0,2.515-1.826l-1.355-7.886,5.729-5.582a1.735,1.735,0,0,0-.959-2.959L21.034,8.14,17.495.964a1.736,1.736,0,0,0-3.111,0Z" transform="translate(-1.441 0.001)"/>
                            </svg>
                    </li>
                </a>
                <a href="/about.html#myWorksSection" class="navItemhorizontal tooltip notOnPhone">
                    <li>
                        <span class="tooltiptext">My&nbsp;Profiles</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.184" height="24.948" viewBox="0 0 31.184 24.948">
                            <path id="Icon_awesome-project-diagram" data-name="Icon awesome-project-diagram" d="M18.711,15.592H12.474a1.559,1.559,0,0,0-1.559,1.559v6.237a1.559,1.559,0,0,0,1.559,1.559h6.237a1.559,1.559,0,0,0,1.559-1.559V17.151A1.559,1.559,0,0,0,18.711,15.592ZM9.355,1.559A1.559,1.559,0,0,0,7.8,0H1.559A1.559,1.559,0,0,0,0,1.559V7.8A1.559,1.559,0,0,0,1.559,9.355H6.223l3.565,6.239a3.108,3.108,0,0,1,2.686-1.561h.014L9.355,8.552V6.237H20.27V3.118H9.355ZM29.625,0H23.388a1.559,1.559,0,0,0-1.559,1.559V7.8a1.559,1.559,0,0,0,1.559,1.559h6.237A1.559,1.559,0,0,0,31.184,7.8V1.559A1.559,1.559,0,0,0,29.625,0Z"/>
                        </svg>
                    </li>
                </a>
                <a href="/about.html#contactSection" class="navItemhorizontal tooltip">
                    <li>
                        <span class="tooltiptext lastfix">Contact&nbsp;Me</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                            <path id="Icon_ionic-md-contact" data-name="Icon ionic-md-contact" d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.668,14.668,0,0,0,18,3.375Zm0,4.387a4.387,4.387,0,1,1-4.387,4.387A4.4,4.4,0,0,1,18,7.762Zm0,21.122A10.654,10.654,0,0,1,9.225,24.2c.07-2.925,5.85-4.535,8.775-4.535s8.7,1.61,8.775,4.535A10.672,10.672,0,0,1,18,28.884Z" transform="translate(-3.375 -3.375)"/>
                        </svg>
                    </li>
                </a>
            </div>
        </ul>
    </nav>

    <section id="projectsSection" data-aos="fade-right" data-aos-delay="100">
        <!--<div style="display:flex;width: 100%;">
            <a href="/" rel="noopener noreferrer" style="margin: 60px; position: absolute;" class="projectLinkWrapper" data-aos="fade-left" data-aos-delay="1000">
                <div class="projectLink roundedButton">
                    <span>👈 Back to home</span>
                </div>
            </a>
        </div>-->
          <div class="heading">My Projects</div>  
          <div class="projectCardContainer">
            <div class="tags">tags</div>
            <!--<div class="projectsScrollView">-->
            <div class="projectsCardsDiv">
        `;

  projectsData.data.forEach((element) => {
    let thresholdTime = 600;
    let projectImages = "";
    element.images.forEach((image) => {
      projectImages = projectImages.concat(`
                        <div class="projectImagesSmall" data-aos="fade-up" data-aos-delay="${thresholdTime}" title="${image.alt}">
                            <img class="lazyload" src="${image.link}" alt="${image.alt}">
                        </div>
            `);
      thresholdTime += 100;
    });

    const projectLink = () => {
      if (element.link != "") {
        return `<a href="${
          element.link
        }" target="_blank" rel="noopener noreferrer" class="projectLinkWrapper" data-aos="fade-up" data-aos-delay="1000">
                    <div class="projectLink roundedButton">
                        ${
                          element.linkText != ""
                            ? element.linkText
                            : "Open&nbsp;Project&nbsp;<span>⚙</span>"
                        }
                    </div>
                </a>`;
      } else
        return `<a href="#${
          element.name
        }" rel="noopener noreferrer" class="projectLinkWrapper" data-aos="fade-up" data-aos-delay="1000">
                    <div class="projectLink roundedButton">
                        ${
                          element.linkText != ""
                            ? element.linkText
                            : "Link coming soon&nbsp;<span>🚫</span>"
                        }
                    </div>
                </a>`;
    };

    template = template.concat(`
        <div class="projectsBox" id="${element.name}" data-aos="fade-${
      element.animation
    }" data-aos-delay="100">
            <div class="projectsBoxImage" data-aos="fade-zoom" data-aos-delay="100">
                <img class="lazyload" src="${element.heroImage}" alt="${
      element.name
    } hero image" data-aos="fade-zoom" data-aos-delay="100">
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
                    <div class="projectDate onPhone" data-aos="fade-left" data-aos-delay="100">Click here to expand this card 👈</div>
                </div>
                <div class="projectExpandedContent">
                    <div class='projectDescription' data-aos='fade-up' data-aos-delay='100'>
                        ${element.description}
                    </div>
                    <div class="projectImages" data-aos="fade-${
                      element.animation
                    }" data-aos-delay="100">${projectImages}</div>
                    ${projectLink()}
                </div>
            </div>
        </div>`);
  });

  let footer = `
          </div> <!-- Project cards div-->
        </div> <!-- card container-->
    </section>
    <!-- The Modal -->
    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="lazyload" class="modal-content" id="img01">
        <div id="caption"></div>
    </div>
    <footer>
        <div class="love">
            Designed and coded with ❤️️ by Srikant
        </div>
    </footer>
    <script src="./src/js/app.min.js" defer></script>
    </body>

</html>`;
  let fullHTML = header + template + footer;
  fs.writeFile("../myprojects.html", fullHTML, (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
};
GenerateProjectsHTML();
