import { motion } from "framer-motion";
import { Button, Card, CardContent } from "@mui/material";
import { Linkedin, Download } from "lucide-react";
import profile from "./assets/profile.jpg";
import resume from "./assets/resume.pdf";
export default function Portfolio() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-200 text-slate-900">

        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center px-4 py-8 sm:py-10">
          <motion.img
            src={profile}
            alt="Heer Patel"
            className="w-28 h-28 rounded-full shadow-lg mb-5 object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Heer Patel
          </motion.h1>

          <p className="mt-3 text-lg text-slate-600 max-w-xl">
            UI Developer & Integration Specialist • React • TypeScript • AWS • System Integration • Agile
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              variant="contained"
              size="large"
              startIcon={<Download />}
              href={resume}
              target="_blank"
              sx={{ borderRadius: "14px", paddingX: 3, textTransform: "none" }}
            >
              Resume
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<Linkedin />}
              href="https://www.linkedin.com/in/heer~patel"
              target="_blank"
              sx={{ borderRadius: "14px", paddingX: 3, textTransform: "none" }}
            >
              LinkedIn
            </Button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card elevation={0} className="rounded-3xl shadow-xl mb-8">
              <CardContent className="p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                I am Heer Patel, a Software Developer with over 3 years of experience designing and building scalable, high-performance web applications. I started coding at the age of 18 and have since developed expertise in frontend and backend development, cloud-based solutions, system integrations, DevOps, CI/CD pipelines, automated testing, and PCI-DSS–compliant payment systems. I have collaborated closely with clients and cross-functional teams to optimize workflows, enhance performance, and ensure smooth onboarding of new solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Experience</h2>

          {/* Radial Inc */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card elevation={0} className="rounded-3xl shadow-xl mb-6">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-xl font-semibold mb-2">
                  UI Developer / Integration Specialist | Radial Inc., United States
                </h3>
                <p className="text-slate-500 mb-4">July 2023 – Feb 2026</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Integrated client-facing applications with REST APIs, reducing reported issues by 90%.</li>
                  <li>Implemented lazy loading, dynamic imports, code splitting, and Redis caching, improving performance and reducing resource usage.</li>
                  <li>Automated testing and monitoring with Jest, Playwright, JMeter, and Lighthouse, reducing manual QA effort by 70%.</li>
                  <li>Built PCI-DSS–compliant hosted payment solutions with Klarna, credit cards, and saved wallets.</li>
                  <li>Collaborated with clients for integrations, reducing onboarding timelines by 45% and ensuring seamless adoption.</li>
                  <li>Migrated legacy services to AWS (EC2, S3, RDS), implemented CloudWatch monitoring, and automated CI/CD deployments, reducing downtime by 90%.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Graduate Research Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card elevation={0} className="rounded-3xl shadow-xl mb-6">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-xl font-semibold mb-2">
                  Graduate Research Assistant | University of Texas Arlington, United States
                </h3>
                <p className="text-slate-500 mb-4">Sep 2021 – May 2023</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Developed scripts to process large student datasets for faster reporting and improved accuracy using MARS.</li>
                  <li>Managed FAQ datasets for AdmitHub and Ocelot chatbots, automating responses and reducing manual workload by 70%.</li>
                  <li>Led and trained a team of 25 students and contributed to strategic admissions operations.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Creative Hub */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card elevation={0} className="rounded-3xl shadow-xl mb-6">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-xl font-semibold mb-2">
                  Data Analyst | Creative Hub, India
                </h3>
                <p className="text-slate-500 mb-4">Dec 2020 – May 2021</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Worked on project which predicts the sales of medicine using machine learning algorithms.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/*WhiteHat Jr*/}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card elevation={0} className="rounded-3xl shadow-xl mb-6">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-xl font-semibold mb-2">
                Talent acquisition Intern | WhiteHat Jr, India
                </h3>
                <p className="text-slate-500 mb-4">Aug 2020 – Nov 2020</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Maintained all faculties and studnets data and sell it to vendors based on contract</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </section>
        {/* SKILLS SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Skills</h2>
          <p className="text-slate-600 text-center">
            Programming: C, C++, C#, PHP, Java, JavaScript, HTML/CSS, Python, R, TypeScript, Laravel | 
            Frameworks: ReactJS, AngularJS, Java Swing, Android, WordPress, ASP.net, Ajax, Spring Boot, Express, Playwright, Jest | 
            Databases: MySQL, Oracle, SQLite | 
            Tools: AWS, Linux, MVC, Agile, GitLab, GitHub, REST APIs, JMeter, Jira, Confluence, SonarQube
          </p>
        </section>

        {/* EDUCATION SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Education</h2>
          <p className="text-slate-600 text-center">
            <strong>University of Texas Arlington</strong> | Master of Science in Computer Science | GPA: 3.54/4 | Aug 2021 – May 2023<br/>
            <strong>Indus University</strong> | Bachelor of Engineering in Computer Science | GPA: 4/4 | Aug 2017 – May 2021
          </p>
        </section>
        {/* PROJECTS SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card elevation={0} className="rounded-3xl shadow-xl">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-lg font-semibold mb-2">File Storage Cloud Application</h3>
                <p className="text-slate-600 mb-2">May 2022 – June 2022 | Java, AWS, Spring Boot</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Developed a multi-threaded cloud-based file storage system allowing concurrent uploads/downloads with synchronized consistency.</li>
                  <li>Deployed server and application on AWS, enabling scalable operations and remote access.</li>
                </ul>
              </CardContent>
            </Card>

            <Card elevation={0} className="rounded-3xl shadow-xl">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-lg font-semibold mb-2">Say It Right</h3>
                <p className="text-slate-600 mb-2">Aug 2021 – Dec 2021 | ReactJS, Laravel, MySQL, AWS</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Built a full-stack student portal with ReactJS frontend and Laravel/MySQL backend, including JWT-based authentication, chat, and blog features.</li>
                  <li>Implemented AWS S3 media storage to host student recordings and photos securely and scalably.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="text-center text-sm text-slate-500 pb-6">
          © Heer Patel
        </footer>
      </div>
    </section>
  );
}
