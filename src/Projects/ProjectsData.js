import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"

const projects = {
    1: {
        title: "YuppyCart",
        image: projectOne,
        description: (
            <>
                <p> 
                YuppyCart is an e-commerce platform committed to offering you a hassle-free and enjoyable 
                online shopping experience from the convenience of your own home. 
                </p>
            </>
        ),
        github: "https://github.com/Shadrackssien/YuppyCart",
        demo: "https://yuppycart.netlify.app/",
    },
    2: {
        title: "YuppyTech",
        image: projectTwo,
        description: (
            <>
                <p> 
                    A responsive Landing Page of a software company called YuppyTech 
                </p>
            </>
        ),
        github: "https://github.com/Shadrackssien/YuppyTech",
        demo: "https://yuppy-tech.vercel.app/",
    }
}

export default projects;