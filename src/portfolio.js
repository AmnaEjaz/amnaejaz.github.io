
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Amna Ejaz",
  title: "Hi all, I'm Amna",
  subTitle: emoji("A passionate Front-End Software Engineer 🚀 having an experience of building Web and Mobile applications with Angular / JavaScript / Nodejs / Flutter and some other cool libraries and frameworks."),
  // resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/amnaejaz",
  linkedin: "https://www.linkedin.com/in/amnaejaz/",
  email: "amnaejaz2015@outlook.com",
  twitter: "https://twitter.com/AmnaEjazBhatti",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FRONT-END SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase / Google Cloud Platform / Microsoft Azure / Docker")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Folio3",
      companylogo:  require("./assets/images/folio3.png"),
      date: "Apri 2020 – Present",
      desc: "Writing modern, performant, and robust code for a diverse array of client and internal projects. Also exploring new technologies in Computer Graphics domain via Unity 3D"
    },
    {
      role: "Software Engineer",   
      company: "Techlogix",
      companylogo:require("./assets/images/tech.jpg"),
      date: "Feb 2019 – March 2020",
      desc: "With a team, Engineered and maintained major features of Nocturnal's customer-facing web app including fully functional backend using Angular, ES6, Asp.net and Microsoft Azure Function. Proposed and implemented scalable solutions to issues identified with cloud services and applications."
    },
    {
      role: "Software Engineer Intern",  
      company: "VentureDive",
      companylogo: require("./assets/images/ventire.png"),
      date: "Sept 2017 - November 2017",
      desc: "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery. Tested sites in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "OWZmYjBiYzRiZGFmZmQ3YjNiMzlhODk5NjZiZDY1ZTkzYjA2M2ZhYw==",
  githubUserName: "AmnaEjaz",
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Community Project",
  subtitle: "NOTABLE COMMUNITY THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/gdg.png"),
      link: "https://gdgkolachi.com/",
      desc:"Worked on an efficient event hosting and registration system called 'planvents' for GDG Kolachi that eliminated the use of paper tickets and manual logging in local events by making use of QR codes."
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Study Abroad @ University of Massachusetts, USA",
      subtitle: "Selected as one of the finalists for an academic exchange Program to United States from a pool of 9000 applicants from all over the country",
      image: require("./assets/images/susi.jpg"),
      footerLink: [{ name: "Award Letter", url: "https://drive.google.com/file/d/1-WAlp1IVh7pB0MsDVF-ea8Ei98FNRc4I/view?usp=sharing" },
      ]
    },
    {
      title: "Community Lead @ Facebook Developers Circle, Karachi",
      subtitle: "Developer Circles from Facebook is a program designed to create locally organized communities for developers. These communities are meant to educate and provide a forum for discussion and knowledge sharing around topics that are top-of-mind for developers in a particular market",
      image: require("./assets/images/fb.jpg"),
      footerLink: [
        { name: "Official Lead Profiles", url: "https://developers.facebook.com/developercircles/lead-profiles/" , name: "Community Group", url: "https://www.facebook.com/groups/karachidevc/" },
      ]
    },
    {
      title: "Conducted 3-days technical workshop",
      subtitle: "Developed a 3 day workshop curriculum to teach app development using flutter and Dart",
      image: require("./assets/images/flutter.jpg"),
      footerLink: [{ name: "Slides", url: "https://docs.google.com/presentation/d/1Nn8HmLNMm_8FiKgcHVR2lYaPIKTYXL9gBaJ5Xd59v2g/edit?usp=sharing" }]
    },
    {
      title: "Mobile App Developer",
      subtitle: "Completed Certifcation from udacity on Flutter and Dart to build IOS and Android applications",
      image: "https://mljm66nyxdyi.i.optimole.com/P29XpA-_CVPWVwh/w:467/h:399/q:auto/https://sceel.io/wp-content/uploads/2019/10/Flutter-Logo-2.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1Ds37vY1jSKmIO9XBypXeKTZ75SBufaB-/view?usp=sharing" },
      ]
    },
    {
      title: "Interviewed on National Television - PTV",
      subtitle: "Honoured to be have been interviewed on National Television for my work and contributions in the IT sector",
      image: require("./assets/images/tv.jpg"),
      footerLink: [
      ]
    },
    {
      title: "Organized local TED event - TEDx NEDUniversity",
      subtitle: "TEDxNEDUniversity is a program of local, self-organized events that bring people together to share a TED-like experience, where x=independently organized TED event.At the extraordinary TEDxNEDUniversity’s second edition, TEDTalks video and live speakers will put together some deep discussion about the profound ideas and visionaries.",
      image: require("./assets/images/ted.jpg"),
      footerLink: [
        { name: "View Event", url: "https://www.facebook.com/pg/TEDxNEDUniversity/photos/?ref=page_internal"},

      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Acknowledgment by the community",
  subtitle: "With Love for Developing cool stuff, I have been honored to be mentioned in following blogs.",

  blogs: [
    {
      url: "https://medium.com/@perveenrozina/entrepreneur-journey-79a04369791a",
      title: "Amna Ejaz's Entrepreneurial Journey while incubated at National Incubation Center",
      description: "As students, one thing that we really struggled with, was to satiate our taste-buds for less money. With Fokal incubated at #NICKarachi I want to make dreams of every food lover, who is tight on budget, come true. We are developing an app that could tell you all the available food options near you where you can eat for as low as 100 Rupees. Just think of all #biryani, #haleem, #golgappa, chana #chaat spots you would know about, right through your phone! Having a startup of this sort has always been a challenge but worth a shot because I love the control that comes with a startup. As an entrepreneur I can do whatever I want to do with our startup. But well, it also becomes very critical also because everything about your #startup, good or bad, is also accredited to you and the decisions you took, reflects Amna about her startup Fokal and entrepreneurial life."
    },
    {
      url: "https://www.womenintechpk.com/episode-3-incredible-pakistani-women-in-technology-you-must-follow/",
      title: "Incredible Pakistani Women in Technology you must follow",
      description: "“Incredible Pakistani Women In Technology You Must Follow” is an unranked list of women who are actively participating in tech-focused businesses or fields. We combed through startups, tech companies, mentors, scholars, and social media to identify women who are changing the narrative around women technologists within the country and beyond."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Angular 9,  what to expect?",
      subtitle: "Our first meet-up of this year 2020 is planned! This meet-up will start with an interesting productive activity followed by 3-4 technical talks by the Angular experts. Stay till the end for some exciting announcements and networking sessions.",
      slides_url: "https://docs.google.com/presentation/d/1Q5EBbL9Q5pBSi0EkRMbDk9Ck8PZCGsBTs9YJ7hS-vaM/edit?usp=sharing",
      event_url: "https://www.facebook.com/events/192359868832107",
      image: require("./assets/images/ngtalk.jpg"),
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Amna-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3131070971",
  email_address: "amnaejaz2015@outlook.com",
  website: "https://knowamnaejaz.wordpress.com/"
};

//Twitter Section

const twitterDetails = {

  userName : "AmnaEjazBhatti"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
