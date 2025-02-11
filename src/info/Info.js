import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Karunakar",
    lastName: "Medhuru",
    initials: "M", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'India'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer"
        },
        {
            emoji: "📧",
            text: "karunakarmedhuru@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/karunakar_medhuru/?__pwa=1",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Karunakar582",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/karunakar-medhuru-b471a7251/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/KarunakarM91556",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Karunakar, i am a Full Stack Developer dedicated to crafting seamless and efficient web applications. With a strong grasp of both front-end and back-end technologies, I excel at creating user-friendly interfaces and robust server-side logic. Passionate about continuous learning, I believe in the transformative power of artificial intelligence in shaping our future. Let's collaborate to bring your innovative ideas to life!",
    skills: {
        proficientWith: ['HTML', 'CSS', 'JavaScript', 'React JS',  'MY SQL'],
        exposedTo: ['SQL',  'Python', 'UI/UX Design']
    },
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '🗺️⁀જ✈︎'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }
    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://photoweb-woad.vercel.app/", 
            source: "https://github.com/Karunakar582/photoweb.git", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://netflix-clone-eosin-iota.vercel.app/",
            source: "https://github.com/Karunakar582/netflix-clone.git",
            image: mock2
        },
       
    ],
}
