import { useState, SyntheticEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar, FeatureCard, TeamCard } from "../../components";
import {
  ActivityListing,
  ScheduleManagement,
  PrioritizingActivities,
  ReminderNotification,
  TimeVisualization,
  Whatsapp,
  Facebook,
  Instagram,
} from "./icon";
// import "./landing-page.css";

const LandingPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const alertRef = useRef<HTMLDivElement>(null);
  return <div className="container mx-auto h-40 bg-black"></div>;
  async function formSubmit(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const body = new FormData(e.target as HTMLFormElement);
    alertRef.current!.classList.remove("flex");
    alertRef.current!.classList.add("hidden");
    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyQSapm3WEF4HQYwBaP8hIA6gq7Q1WDCRIM3tgLdlFmuce4KW8ggVWe18HELWnRjFzr/exec",
        {
          method: "POST",
          body,
        },
      );
      (e.target as HTMLFormElement).reset();
      alertRef.current!.classList.remove("hidden");
      alertRef.current!.classList.add("flex");
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navbar />
      <main id="home" className="landing-page  relative p-10">
        <img
          src="/images/blob/main-left.svg"
          className="floating left absolute left-[-30px] top-[-100px] md:left-0"
        />
        <img
          src="/images/blob/main-right-1.svg"
          className="floating absolute right-1 hidden md:right-0 md:top-0 md:block md:w-[500px]"
        />
        <img
          src="/images/blob/main-right-2.svg"
          className="floating absolute right-2 hidden md:right-0 md:top-0 md:block md:w-[600px]"
        />
        <div className="container-main container mx-auto flex flex-col p-5 md:flex-row md:flex-nowrap ">
          <section className="main-content md:w-1/2">
            <div className="description animate-fade-in px-5">
              <p className="title mb-5 text-sm font-bold tracking-[3px] text-main md:text-base md:tracking-[5px] md:text-main">
                TIME MANAGEMENT ASSISTANT
              </p>
              <h1 className="mb-5 text-4xl font-extrabold text-dark md:max-w-[400px] md:text-5xl xl:text-[3.5rem]">
                Stay Productive With <span className="text-main">Chrono</span>
              </h1>
              <p className="description-text mb-7 text-base leading-6 tracking-normal text-dark md:max-w-[450px] md:text-justify md:text-base md:text-dark">
                An innovative solution that helps you plan and manage your time
                smartly. Find the perfect balance between work, personal life
                and your dream, all in one easy-to-use app.
              </p>
              <div className="h-10 w-[230px] overflow-hidden rounded-[20px] border-[1px] border-solid border-main after:ml-[5%] after:animate-move-right after:content-[url('/images/icon/arrow-big.svg')] md:h-10 md:max-w-[380px] md:rounded-[30px] xl:h-[50px] xl:min-w-[380px]">
                <Link
                  to="/signin"
                  className="inline-block h-full w-3/4 rounded-[20px] bg-main text-center text-xs leading-10 text-white transition-[width] duration-500 hover:w-full hover:opacity-80 md:rounded-[30px] md:text-[0.8rem] md:leading-10 xl:text-[1rem] xl:leading-[50px]"
                >
                  Get started Now!
                </Link>
              </div>
            </div>
          </section>
          <aside className="illustration animate-fade-in px-[30px] py-5 md:w-1/2 md:p-0 ">
            <div className="img-container relative">
              <img
                src="/images/illustration/main-illustration.webp"
                alt="illustration"
                className="md:mx-auto md:max-w-[90%] xl:max-w-[85%]"
              />
              <div className="floating success md xl:left=[280px] absolute bottom-[-30px] left-[140px] flex size-[70px] scale-[0.7] items-center justify-center rounded-[10px] bg-[#fdd527] shadow-md md:bottom-[-75px] md:left-[calc((50%-40px))] md:scale-[0.8] xl:bottom-[-75px] xl:scale-100">
                <img
                  src="/images/illustration/success.svg"
                  className="size-10 text-white"
                />
              </div>
              <div className="floating productivity absolute top-5 flex size-[70px] scale-[0.7] items-center justify-center rounded-[10px] bg-[#ff635e] shadow-md md:left-[60px] md:top-0 md:scale-[0.7] xl:left-[60px] xl:top-[20px] xl:scale-[0.9]">
                <img
                  src="/images/illustration/productivity.svg"
                  className="mx-[15px] size-10"
                />
              </div>
              <div className="floating time absolute right-0 top-0 flex size-[70px] scale-50 items-center justify-center rounded-[10px] bg-[#6f41f1] shadow-md md:right-0 md:top-0 md:scale-[0.6] xl:right-[90px] xl:top-[20px] xl:scale-[0.7]">
                <img
                  src="/images/illustration/time.svg"
                  className="size-10 text-white"
                />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <section id="features" className="relative px-3">
        <img
          src="/images/blob/feature-left.svg"
          className="absolute top-0 -z-10 md:left-[-200px] md:top-[50px]"
        />
        <div className="mx-auto flex flex-col px-[20px] py-[30px]">
          <div className="text-center text-dark md:p-[20px_40px] md:text-left">
            <h2 className="mb-3 text-3xl font-bold md:text-[3rem]">
              <span className="text-main">Chrono</span> Features
            </h2>
            <p className="text-[0.9rem] leading-6 md:max-w-[500px] md:text-[1rem]">
              We want to change the way people view and utilize time, bringing
              efficiently, focus and satisfaction to every second spend
            </p>
          </div>
          <div className="mx-auto flex max-w-[1000px] flex-wrap justify-center p-7 text-dark md:gap-3">
            <FeatureCard
              cardStyle="hover:border-[#fdd527] hover:shadow-[0_0_20px_0_#fdd527]"
              Icon={ActivityListing}
              iconStyle="bg-[#fff9df] text-[#fdd527] group-hover/card:bg-[#fdd527]"
              title="Activity Listing"
              titleStyle="group-hover/card:text-[#fdd527]"
              featureDetail="Record each task and activity with details such as title, description,
          date and priority"
            />
            <FeatureCard
              cardStyle="hover:border-[#6f41f1] hover:shadow-[0_0_20px_0_#6f41f1]"
              Icon={ScheduleManagement}
              iconStyle="bg-[#f2e9ff] text-[#6f41f1] group-hover/card:bg-[#6f41f1]"
              title="Schedule Management"
              titleStyle="group-hover/card:text-[#6f41f1]"
              featureDetail="Easily plan your daily, weekly or monthly schedule and customize the time as you wish."
            />
            <FeatureCard
              cardStyle="hover:border-[#ff5436] hover:shadow-[0_0_20px_0_#ff5436]"
              Icon={PrioritizingActivities}
              iconStyle="bg-[#ffdcdb] text-[#ff5436] group-hover/card:bg-[#ff5436]"
              title="Prioritizing Activities"
              titleStyle="group-hover/card:text-[#ff5436]"
              featureDetail="Give priority marks to crucial tasks to help you stay focused on what's important."
            />
            <FeatureCard
              cardStyle="hover:border-[#50e3c2] hover:shadow-[0_0_20px_0_#50e3c2]"
              Icon={ReminderNotification}
              iconStyle="bg-[#d7fff6] text-[#50e3c2] group-hover/card:bg-[#50e3c2]"
              title="Reminders & Notifications"
              titleStyle="group-hover/card:text-[#50e3c2]"
              featureDetail="Stay informed with reminders and notifications that help you stick to deadlines."
            />
            <FeatureCard
              cardStyle="hover:border-[#008fff] hover:shadow-[0_0_20px_0_#008fff]"
              Icon={TimeVisualization}
              iconStyle="bg-[#d4ecff] text-[#008fff] group-hover/card:bg-[#008fff]"
              title="Time Visualization"
              titleStyle="group-hover/card:text-[#008fff]"
              featureDetail="Monitor and analyze your time usage through clear data visualizations."
            />
          </div>
        </div>
      </section>
      <section id="team" className="px-3">
        <div className="mx-auto flex flex-col p-[30px_20px]">
          <div className="ml-10 text-center md:text-left ">
            <h2 className="mb-3 text-4xl font-bold md:text-5xl">
              <span className="text-main">Chrono</span> Team
            </h2>
            <p className="text-[0.9rem] leading-6  md:max-w-[400px] md:text-justify md:text-[1rem]">
              Welcome to Team Chrono! Here you can get to know those of us
              dedicated to bringing Chrono into your life.
            </p>
          </div>
          <div className="flex flex-wrap justify-center p-[30px_10px] md:mx-auto md:max-w-[800px]">
            <TeamCard
              name="Al Ghazali"
              role="Analyst"
              imgUrl="/images/team/ali.png"
            />
            <TeamCard
              name="Ibnu Hanif"
              role="Designer"
              imgUrl="/images/team/ibnu.png"
            />
            <TeamCard
              name="Bayu Maulana"
              role="Developer"
              imgUrl="/images/team/bayu.png"
            />
            <TeamCard
              name="Ajeng Wulan"
              role="Developer"
              imgUrl="/images/team/ajeng.png"
            />
            <TeamCard
              name="Dwi Nurul"
              role="Analyst"
              imgUrl="/images/team/dwi.png"
            />
            <TeamCard
              name="Miftahul Fazra"
              role="Analyst"
              imgUrl="/images/team/fazra.png"
            />
          </div>
        </div>
      </section>
      <section id="contact" className="px-3">
        <div className="container-contact container mx-auto p-[30px_20px]">
          <div className="description ml-10 text-center md:mx-auto md:text-left">
            <h2 className="mb-3 text-4xl font-bold md:text-5xl">
              <span className="text-main">Chrono</span> Contact
            </h2>
            <p className="text-[0.9rem] leading-6 md:text-[1rem]">
              Are you looking for help or have any questions? Drop us a message
              in this form!
            </p>
          </div>
          <div className="contact-form-container py-[30px] md:flex md:flex-row-reverse">
            <div className="form-wrap flex flex-col items-center justify-center gap-5 md:w-1/2">
              <div className={`form-loader ${loading ? "" : "hide"}`}></div>
              <div
                className="hidden w-4/5 items-center gap-[10px] rounded-xl bg-main p-[15px] shadow-md"
                ref={alertRef}
              >
                <img src="/images/icon/success.svg" />
                <p className="text-white">Your Message has been Submitted!</p>
              </div>
              <form
                className={`form ${
                  loading ? "hidden" : ""
                } rounded-xl bg-white p-5 shadow-md md:mx-auto md:max-w-[85%]`}
                onSubmit={formSubmit}
              >
                <input
                  className="mb-5 w-full rounded-xl bg-input-color p-[10px_20px] text-main placeholder:text-placeholder-color focus:outline-[2px_solid_#0091ff]"
                  type="email"
                  placeholder="Email"
                  name="Email"
                  required
                />
                <textarea
                  className="mb-5 h-[300px] w-full resize-y rounded-xl bg-input-color p-[10px_20px] text-main  placeholder:text-placeholder-color focus:ring-[2px_solid_white]"
                  placeholder="Message"
                  name="Message"
                  required
                ></textarea>
                <button
                  className="w-full cursor-pointer rounded-[20px] bg-main py-[10px] text-white duration-300 hover:opacity-70"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="illustration p-5 md:grid md:w-1/2 md:place-items-center">
              <img
                className="max-2-[200px] mx-auto md:max-w-[85%]"
                src="/images/illustration/contact-illustration.webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#1a2744]">
        <div className="container-footer container mx-auto p-[30px_20px] text-center font-extralight leading-5 text-white">
          <div className="company flex items-center justify-center gap-3">
            <a href="https://polibatam.ac.id" target="_blank">
              <img
                className="mx-auto max-w-[150px]"
                src="/images/icon/polibatam-white.png"
              />
            </a>
            <a
              href="https://if.polibatam.ac.id/teknologi-rekayasa-perangkat-lunak/"
              target="_blank"
            >
              <img
                className="mx-auto max-w-[150px]"
                src="/images/icon/trpl-white.png"
              />
            </a>
            <a href="/">
              <img
                className="mx-auto max-w-[150px]"
                src="/images/icon/chrono-white.png"
              />
            </a>
          </div>
          <p className="desc mt-5 text-sm">
            Chrono is a web-based Time Management Asisstant for productivity
            optimization
          </p>
          <div className="logo-container mt-3 flex justify-center gap-3">
            <a
              href="#"
              className="svg-wrap rounded-full bg-white p-2 hover:opacity-70"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="svg-wrap rounded-full bg-white p-2 hover:opacity-70"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="svg-wrap rounded-full bg-white p-2 hover:opacity-70"
            >
              <Whatsapp />
            </a>
          </div>
          <p className="copyright mx-auto mt-5 max-w-[300px] text-sm">
            <small>
              &copy; Copryright Chrono. All Rights Reserved Designed by{" "}
              <u>Team 3 Mini-PBL TRPL 1A</u>
            </small>
          </p>
        </div>
      </footer>
    </>
  );
};
export default LandingPage;
