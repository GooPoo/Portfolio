import wordle from "@/../public/projects/wordle.png";
import PPO from "@/../public/projects/PPO1.png";
import forecast from "@/../public/projects/forecasts.png";
import TCP from "@/../public/projects/TCP_UDP.png";

export const PROJECTS = [
    {
        title: "Wordle Clone",
        description: "A full-stack implementation of the Wordle game. This application allows users to play the popular word-guessing game, track their scores, and view leaderboards. It features real time multiplayer functionality, enabling users to compete against each other live. Additionally, the application provides APIs for creating custom agents to play and compete in the game.",
        img: wordle,
        github: "https://github.com/GooPoo/Game-Website",
        deployedLink: "#",
        technologies: ["Flask", "SQLlite", "Python", "JavaScript"]
    },
    {
        title: "PPO in Super Mario Bros",
        description: "An implementation of the Proximal Policy Optimization (PPO) algorithm in the classic game Super Mario Bros. This Python-based project demonstrates a practical and educational perspective on applying machine learning in gaming. The repo contains all code (except the models) and a detailed report explaining the implementation of the PPO algorithm within the game context.",
        img: PPO,
        github: "https://github.com/GooPoo/PPO_vs_RuleBased_Super_Mario_Bros",
        technologies: ["PyTorch", "Stable Baselines", "OpenAI Baselines", "Machine Learning"],
    },
    {
        title: "Wave Dashboard",
        description: "A web application designed to visualize data from a complex machine learning model that analyzes wave data from the North-West coast of Western Australia. This application was developed specifically for a client, who was contracted by a prominent mining company in the area, to help them view and interpret the data used in their work.",
        img: forecast,
        github: "https://github.com/GooPoo/Wave-Dasboard",
        technologies: ["Django", "Gunicorn", "Python", "UWA Project"],
    },
    {
        title: "Transperth Server Application",
        description: "A server application that supports queries related to bus and train routes within the Transperth transport network. Created with using the standard TCP and UDP protocols operating over IP, as well as the communication between web browsers and application programs using HTTP and HTML. Additionally, implemented a simple text-based protocol for making and responding to queries for distributed information.",
        img: TCP,
        github: "https://github.com/GooPoo/ComputerNetworksTrainServers",
        technologies: ["C", "TCP/UDP", "Low-level Programming", "UWA Project"],
    }
];