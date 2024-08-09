import React from "react";
import "../../styles/skill.scss";
function Skills() {
  return (
    <div>
      <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold mb-8 mr-2">
        My Skill is the
        <span className="linear"> Gun I have in </span> this Dummy world
      </h1>
      <div className="skills">
        {/* Frontend Skills */}
        <div className="skills-section">
          <h2 className="text-2xl font-semibold mb-4">Frontend Skills</h2>
          <div className="skill-bar">
            <span>React.js / React native</span>
            <div className="progress-bar react">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Vue.js</span>
            <div className="progress-bar vue">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Tailwind css</span>
            <div className="progress-bar tcss">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Javascript</span>
            <div className="progress-bar js">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>TypeScript</span>
            <div className="progress-bar ts">
              <div className="progress" style={{ width: "65%" }}></div>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-section">
          <h2 className="text-2xl font-semibold mb-4">Backend Skills</h2>
          <div className="skill-bar">
            <span>Laravel</span>
            <div className="progress-bar laravel">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Node.js</span>
            <div className="progress-bar node">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Mysql</span>
            <div className="progress-bar Mysql">
              <div className="progress" style={{ width: "55%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Postgreql</span>
            <div className="progress-bar Postgres">
              <div className="progress" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>MongoDb</span>
            <div className="progress-bar Mongo">
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Firebase</span>
            <div className="progress-bar Fireb">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Php</span>
            <div className="progress-bar php">
              <div className="progress" style={{ width: "63%" }}></div>
            </div>
          </div>
        </div>

        {/* API Skills */}
        <div className="skills-section">
          <h2 className="text-2xl font-semibold mb-4">API Skills</h2>
          <div className="skill-bar">
            <span>RESTful APIs</span>
            <div className="progress-bar rest">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>GraphQL</span>
            <div className="progress-bar graphql">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>oAuth</span>
            <div className="progress-bar oauth">
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Axios</span>
            <div className="progress-bar axios">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>

        {/* DevOps Skills */}
        <div className="skills-section">
          <h2 className="text-2xl font-semibold mb-4">DevOps Skills</h2>
          <div className="skill-bar">
            <span>Docker</span>
            <div className="progress-bar docker">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>CI/CD</span>
            <div className="progress-bar cicd">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>AWS</span>
            <div className="progress-bar aws">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Linux</span>
            <div className="progress-bar other">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Kubernetes</span>
            <div className="progress-bar other">
              <div className="progress" style={{ width: "55%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Terraform</span>
            <div className="progress-bar other">
              <div className="progress" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>Python</span>
            <div className="progress-bar other">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
