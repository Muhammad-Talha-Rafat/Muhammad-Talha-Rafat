const data = {
    head: {
        favicon: "assets/favicon.png",
        title: "BSCS 21104",
        socials: {
            linkedin: "https://www.linkedin.com/in/talha-rafat-560142240/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BwUXkxM%2BIS0yVJUPV5pweAA%3D%3D",
            twitter: "https://x.com/TalhaRafat7",
            instagram: "https://www.instagram.com/itistr7/"
        }
    },
    header: {
        profile: "assets/profile.jpeg",
        name: "MUHAMMAD TALHA RAFAT"
    },
    about: {
        paragraphs: [
            "Hi there! If you're here, you might as well wanna know me.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ],
        video: "assets/Video.mp4"
    },
    skills: {
        skill: [
            "Project Management",
            "I can {code} anything",
            "Networking"
        ],
        description: [
            "I lead cross-functional teams to deliver projects on time and within budget, focusing on strategic planning, risk management, and effective communication to achieve business goals.",
            "I lead cross-functional teams to deliver projects on time and within budget, focusing on strategic planning, risk management, and effective communication to achieve business goals.",
            "I lead cross-functional teams to deliver projects on time and within budget, focusing on strategic planning, risk management, and effective communication to achieve business goals."
        ]
    },
    projects: {
        project_1: {
            cover: "assets/project_1.png",
            title: "Python Projects",
            date: "they never end"
        },
        project_2: {
            cover: "assets/project_2.png",
            title: "Web Devolopment",
            date: "July, 2023"
        },
        project_3: {
            cover: "assets/project_3.png",
            title: "MongoDb Clone",
            date: "January, 2024"
        }
    },
    certificates: [
        {
            image: "assets/certificate_1.png",
            title: "PY4E Specialization",
            date: "January, 2024"
        },
        {
            image: "assets/certificate_2.png",
            title: "AWS Cloud Technical Essentials",
            date: "September, 2023"
        },
        {
            image: "assets/certificate_3.png",
            title: "Microsoft 365 Fundamentals",
            date: "February, 2024"
        },
        {
            image: "assets/certificate_4.png",
            title: "Build a Website using Wordpress",
            date: "September, 2023"
        },
        {
            image: "assets/certificate_5.png",
            title: "Database and SQL for Data Science with Python",
            date: "February, 2024"
        },
        {
            image: "assets/certificate_6.png",
            title: "Google Soft Skills Program",
            date: "August, 2024"
        },
        {
            image: "assets/certificate_7.png",
            title: "Retrieving, Processing and Visualizing Data with Python",
            date: "January, 2024"
        }
    ],
    contact: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "© 2024 ITU Punjab. All rights reserved.",
        "Arfa Software & Technology Park",
        "Lahore, Punjab",
        "bscs21104@itu.edu.pk",
    ]
};

function populateHead() {
    document.title = data.head.title;
    document.querySelectorAll("link").forEach(element => {
        if (element.rel === "icon")
            element.href = data.head.favicon;
    });
}

function populateHeader() {
    document.querySelector('header img').src = data.header.profile;
    const socials = Object.values(data.head.socials);
    let aTags = document.getElementsByClassName("social-handles")[0].querySelectorAll('a');
    aTags.forEach((aTag, index) => {
        aTag.href = socials[index];        
    });
}

function populateAbout() {
    let index = 0;
    document.querySelectorAll('.about-text p').forEach(pTag => {
        pTag.textContent = data.about.paragraphs[index];
        index++;
    });
    document.querySelector('video').src = data.about.video;
}

function populateSkills() {
    let index = 0;
    let container = document.getElementsByClassName("skill-container")[0];
    container.querySelectorAll("div").forEach(card => {
        card.querySelector("h2").textContent = data.skills.skill[index];
        card.querySelector("p").textContent = data.skills.description[index];
        index++;
    })
}

function populateProjects() {
    let index = 0;
    let cards = document.getElementsByClassName("project-card");
    for (let card of cards) {
        const projectData = data.projects[`project_${index + 1}`];
        card.querySelector('img').src = projectData.cover;
        card.querySelector('h3').textContent = projectData.title;
        card.querySelector('p').textContent = projectData.date;
        index++;
    }
}

function populateCertificates() {
    let index = 0;
    let certificates = Array.from(document.getElementsByClassName("certificate-card"));
    certificates.forEach(certificate => {
        certificate.setAttribute('onclick', `openImageModal('${data.certificates[index].image}')`);
        certificate.querySelector('img').src = data.certificates[index].image;
        certificate.querySelector('h2').textContent = data.certificates[index].title;
        certificate.querySelector('p').textContent = data.certificates[index].date;
        index++;
    })
}

function populateContact() {
    let pTags = document.getElementById("contact").querySelectorAll('p');
    pTags.forEach((pTag, index) => {
        pTag.textContent = data.contact[index];
    });
    const socials = Object.values(data.head.socials);
    let aTags = document.getElementsByClassName("footer-connect")[0].querySelectorAll('a');
    aTags.forEach((aTag, index) => {
        aTag.href = socials[index];
    });
}


populateHead();
populateHeader();
populateAbout();
populateSkills();
populateProjects();
populateCertificates();
populateContact();


const targetText = data.header.name;
const element = document.querySelector('header p');
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let currentText = Array(targetText.length).fill("");
let revealIndex = 0;

function hackerEffect() {
    if (revealIndex < targetText.length) {
        for (let i = revealIndex; i < targetText.length; i++)
            currentText[i] = characters[Math.floor(Math.random() * characters.length)];
        currentText[revealIndex] = targetText[revealIndex];
        element.textContent = currentText.join("");
        revealIndex++;
        setTimeout(hackerEffect, 50);
    }
}
hackerEffect();
