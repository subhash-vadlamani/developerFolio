/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Subhash Vadlamani",
  title: "Hi all, I'm Subhash",
  subTitle: emoji(
    "Experienced Software Developer with a track record of streamlining operations and boosting efficiency.  Expertise in Python, Django, React, and delivering scalable solutions for high-traffic applications. Proficient in AWS cloud services."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uj0Mh2Yd-Tf4WWD1QMZZOiFvm0IY0GgQ/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/subhash-vadlamani",
  linkedin: "https://www.linkedin.com/in/vadlamanisubhash/",
  gmail: "vadlamanisubhash1998@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Experienced Software Developer with a focus on efficiency and scalability",
  skills: [
    emoji(
      "⚡ Develop highly interactive applictions using Python and Django"
    ),
    emoji("⚡ Design and implement scalable solutions for high-traffic applications"),
    emoji(
      "⚡ Integrate third-party services (AWS, Jenkins, etc.) for enhanced functionality"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
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
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/uf_logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "Non-Thesis Masters",
      descBullets: [
        "Graduate Teaching Assistant for Mobile Computing Course",
        "Top Grades in Advanced Data Structures, Algorithms, Distributed Operating System Principles, Advanced Data Science, Digital Health"
      ]
    },
    {
      schoolName: "Osmania University",
      logo: require("./assets/images/osmania_logo.png"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "August 2016 - November 2017",
      desc: "Passed in first class with distinction",
      descBullets: ["Implemented a liver disease detection system in the final year of the degree"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Database Design & Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    {
      role: "Graduate Teaching Assistant",
      company: "University of Florida",
      companylogo: require("./assets/images/uf_logo.png"),
      date: "Jan 2024 – Present",
      desc: "Supporting student success in the Mobile Computing course taught by Dr. Sumi Helal, as a Teaching Assistant, by designing and grading assignments, and leading technical help sessions that directly contributed to exceptional student performance."
    },
    {
      role: "Software Developer",
      company: "Delhivery",
      companylogo: require("./assets/images/delhivery_logo_2.png"),
      date: "July 2020 – July 2022",
      desc: "Developed and optimizing scalable API-driven solutions that streamlined critical business operations within the logistics industry.",
      descBullets: [
        "Architected and implemented billing APIs handling over $1.3 million in monthly transactions, as well as solutions for vehicle attendance and contract management.",
        "Played a key role in deploying applications, integrating platforms to streamline vehicle procurement, and ensuring the successful release of a Docker-based microservice.",
        "Spearheaded performance optimization during peak traffic, resulting in a 50% reduction in API response times and significant cost savings, while ensuring cross-vehicle compatibility for a strategic partnership."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Delhivery",
      companylogo: require("./assets/images/delhivery_logo_2.png"),
      date: "Jan 2020 – July 2020",
      desc: "Improved application stability by optimizing the caching mechanism for internal APIs and enhanced vendor relationships by creating a dispute system to address billing discrepancies."
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/unistroke.png"),
      projectName: "$1 Uni-stroke Gesture Recognizer",
      projectDesc: "Implemented the $1 Uni-stroke Gesture Recognizer using Python and Tkinter, achieving up to 98% accuracy with a single template per gesture, enhanced accuracy with additional templates, and designed the software to collect and compare user-generated gestures for analysis.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/subhash-vadlamani/hcira"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/vote.png"),
      projectName: "Voter Trends Analysis",
      projectDesc: "Developed a website enabling users to visualize complex SQL-driven analyses of voting patterns in the US,  correlating them with factors such as trade performance, average age, gun violence deaths, and state GDP per capita.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/shubham1698/politics"
        }
      ]
    },

    {
      image: require("./assets/images/logo_classification.png"),
      projectName: "Logo Classification using Modified pretrained ML models",
      projectDesc: "I developed a multi-layer CNN using ResNet50V2 as the base model for image classification on a 10-logo dataset, achieving 93%-98% accuracy on the test set.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/subhash-vadlamani/FML_Spring23_Final_Project"
        }
      ]
    },
    {
      image: require("./assets/images/fetal_health.png"),
      projectName: "Smart Start: Streamlining Fetal Health Prediction",
      projectDesc: "I optimized fetal health prediction models by applying feature selection techniques (PCA, LDA) to identify the most impactful health indicators, reducing dataset complexity while improving accuracy and cost-effectiveness .",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/subhash-vadlamani/Health_AI_project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a job opportunity or just want to say hi? My Inbox is open for all.",
  number: "+1-3527093718",
  email_address: "vadlamanisubhash1998@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
