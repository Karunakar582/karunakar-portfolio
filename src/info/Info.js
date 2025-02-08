import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

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
            link: "https://www.instagram.com/vasanth_kumar.27?igsh=MXB0aTdwYzZheGk1dg==",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/vasanth27s",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/salapakshi-vasanth-kumar-2363b5246/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/Vasanth39786970",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm VasanthKumar, i am a Full Stack Developer dedicated to crafting seamless and efficient web applications. With a strong grasp of both front-end and back-end technologies, I excel at creating user-friendly interfaces and robust server-side logic. Passionate about continuous learning, I believe in the transformative power of artificial intelligence in shaping our future. Let's collaborate to bring your innovative ideas to life!",
    skills: {
        proficientWith: ['HTML', 'CSS', 'JavaScript', 'React JS', 'bootstrap', 'Node JS', 'Express JS', 'Mongo DB or Mongoose', 'MY SQL','AWS'],
        exposedTo: ['SQL', 'python', 'PHP', 'Python DSA','C','Power BI','Linux', 'UI/UX Design']
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
            live: "https://vk-media.vercel.app/", 
            source: "https://github.com/vasanth27s/vk-media.git", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://vk-chat-beta.vercel.app/",
            source: "https://github.com/vasanth27s/vk-chat.git",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://photoweb-six.vercel.app/",
            source: "https://github.com/vasanth27s/photoweb.git",
            image: mock3
        }
    ],
}
