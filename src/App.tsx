import { useEffect, useMemo, useState } from "react";

import {
  MessageCircle,
  Globe,
  Mail,
  FileText,
  Code2,
  Briefcase,
  Rocket,
  ExternalLink,
} from "lucide-react";



import "./animations.css";

import profileImg from "./assets/images/img_3058.jpg";



interface SocialLink {

  name: string;

  subtitle: string;

  icon: JSX.Element;

  deepLink?: string;

  fallbackUrl: string;

  gradient: string;

  isPrimary?: boolean;

}



interface StatCard {

  icon: JSX.Element;

  value: string;

  label: string;

}



function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  const [footerLoaded, setFooterLoaded] = useState(false);



  useEffect(() => {

    setIsLoaded(true);



    const footerTimer = window.setTimeout(() => {

      setFooterLoaded(true);

    }, 900);



    return () => window.clearTimeout(footerTimer);

  }, []);



  const socialLinks: SocialLink[] = useMemo(
    () => [
      {
        name: "Contact Form",
        subtitle: "Business / collaboration enquiry",
        icon: <FileText className="w-6 h-6" />,
        fallbackUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSdOoXW_J2KwrB-roS1ywW6DXsCdWAR8Z_xVpPjIHoFWptyzQQ/viewform?usp=dialog",
        gradient: "from-purple-600 via-indigo-500 to-blue-500",
      },
      {
        name: "Portfolio Website",
        subtitle: "Projects, work & profile",
        icon: <Globe className="w-6 h-6" />,
        fallbackUrl: "https://mohammedarhan.vercel.app",
        gradient: "from-amber-400 via-yellow-500 to-amber-600",
        isPrimary: true,
      },
      {
        name: "Gmail",
        subtitle: "Send a professional email",
        icon: <Mail className="w-6 h-6" />,
        deepLink: "googlegmail://co?to=mdarhanofficial@gmail.com",
        fallbackUrl:
          "https://mail.google.com/mail/?view=cm&to=mdarhanofficial@gmail.com",
        gradient: "from-red-500 via-rose-500 to-pink-500",
      },
      {
        name: "WhatsApp",
        subtitle: "Fast direct contact",
        icon: <MessageCircle className="w-6 h-6" />,
        deepLink: "whatsapp://send?phone=917892941294",
        fallbackUrl: "https://wa.me/917892941294",
        gradient: "from-green-600 via-emerald-500 to-lime-500",
      },
    ],
    []
  );

  const stats: StatCard[] = [

    {

      icon: <Code2 className="w-5 h-5" />,

      value: "6+",

      label: "Years Experience",

    },

    {

      icon: <Briefcase className="w-5 h-5" />,

      value: "Full Stack",

      label: "Developer",

    },

    {

      icon: <Rocket className="w-5 h-5" />,

      value: "Digital",

      label: "Growth & Content",

    },

  ];



  const isMobileDevice = () => {

    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  };



  const openSocialLink = (link: SocialLink) => {

    const mobile = isMobileDevice();



    if (mobile && link.deepLink) {

      const startTime = Date.now();



      window.location.href = link.deepLink;



      window.setTimeout(() => {

        const endTime = Date.now();



        if (endTime - startTime < 1800) {

          window.location.href = link.fallbackUrl;

        }

      }, 1200);



      return;

    }



    window.open(link.fallbackUrl, "_blank", "noopener,noreferrer");

  };



  return (

    <main className="app-shell force-gpu">

      <div className="animated-bg force-gpu" />



      <div className="noise-layer" />



      <div className="floating-orbs force-gpu" aria-hidden="true">

        <div className="orb orb-1" />

        <div className="orb orb-2" />

        <div className="orb orb-3" />

        <div className="orb orb-4" />

      </div>



      <div className="particles-container force-gpu" aria-hidden="true">

        {Array.from({ length: 28 }).map((_, index) => (

          <span

            key={index}

            className="particle"

            style={{ animationDelay: `${index * 0.23}s` }}

          />

        ))}

      </div>



      <section className="main-container">

        <div className={`profile-section ${isLoaded ? "loaded" : ""}`}>

          <div className="top-badge">

            <span className="badge-dot" />

            Available for projects, collaborations & digital growth

          </div>



          <div className="profile-image-wrapper">

            <div className="profile-glow" />

            <div className="profile-ring" />

            <div className="profile-image-container">

              <img

                src={profileImg}

                alt="Mohammed Arhan"

                className="profile-image"

                loading="eager"

              />

            </div>

          </div>



          <h1 className="profile-name">Mohammed Arhan</h1>



          <p className="profile-role">

            Full Stack Developer · Content Creator · Digital Growth Strategist

          </p>



          <p className="profile-bio">

            Hi, I’m{" "}

            <span className="text-cyan-300 font-semibold">

              Mohammed Arhan

            </span>

            , an{" "}

            <span className="text-purple-300 font-semibold">MCA graduate</span>{" "}

            and{" "}

            <span className="text-blue-300 font-semibold">

              Full Stack Developer

            </span>{" "}

            with{" "}

            <span className="text-yellow-300 font-semibold">

              6+ years of experience

            </span>{" "}

            in coding, application development, project delivery, content

            creation, creative writing, digital storytelling, SEO, brand

            collaborations, and social media growth.

          </p>



          <div className="stats-grid">

            {stats.map((item) => (

              <div key={item.label} className="stat-card">

                <div className="stat-icon">{item.icon}</div>

                <div>

                  <h3>{item.value}</h3>

                  <p>{item.label}</p>

                </div>

              </div>

            ))}

          </div>



          <p className="profile-tagline">

            Delivering technology-driven solutions and managing digital growth.

          </p>

        </div>



        <div className="links-container" aria-label="Social links">

          {socialLinks.map((link, index) => (

            <button

              key={link.name}

              type="button"

              onClick={() => openSocialLink(link)}

              className={`social-button ${isLoaded ? "loaded" : ""} ${

                link.isPrimary ? "primary" : ""

              }`}

              style={{ animationDelay: `${index * 0.07}s` }}

              aria-label={`Open ${link.name}`}

            >

              <div className={`social-button-bg bg-gradient-to-r ${link.gradient}`} />

              <div

                className={`social-button-glow bg-gradient-to-r ${link.gradient}`}

              />



              <div className="social-button-content">

                <span className="social-button-icon">{link.icon}</span>



                <span className="social-button-copy">

                  <span className="social-button-text">{link.name}</span>

                  <span className="social-button-subtitle">{link.subtitle}</span>

                </span>



                <span className="social-button-arrow">

                  <ExternalLink className="w-5 h-5" />

                </span>

              </div>

            </button>

          ))}

        </div>



        <footer className={`footer-text ${footerLoaded ? "loaded" : ""}`}>

          Let’s connect, collaborate, and create impact.

          <div className={`footer-underline ${footerLoaded ? "loaded" : ""}`} />

        </footer>

      </section>

    </main>

  );

}



export default App;