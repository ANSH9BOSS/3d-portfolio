import {
  FaGithub,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let active = true;

      const updatePosition = () => {
        if (!active) return;
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanups.push(() => {
        active = false;
        document.removeEventListener("mousemove", onMouseMove);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/ANSH9BOSS"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://discord.com/users/ansh9boss"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
        </span>
        <span>
          <a
            href="mailto:anshkumar19zx@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="https://github.com/ANSH9BOSS/new-portfolio/blob/main/profile.md"
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="PROFILE" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
