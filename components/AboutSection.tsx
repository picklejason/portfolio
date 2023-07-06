import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Flask" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "MongoDB" },
  { skill: "SQL" },
  { skill: "Java" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jason and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in College Park, MD.
            </p>
            <br />
            <p>
              I&#39;m currently a senior student at the University of Maryland. 
              I will be graduating in May 2024 with a BS in Computer Science.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing video games, working out, coding projects, 
              to building PCs and mechanical keyboards.
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              As a software engineer, I am driven by the opportunity to solve 
              complex problems and make a meaningful impact. 
              I am passionate about leveraging technology to improve people&#39;s 
              lives and create innovative solutions that address real-world challenges.
              I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={300}
              height={300}
              className="hidden md:block md:relative md:top-2 md:z-0 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
