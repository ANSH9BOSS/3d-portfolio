import { useState } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  const handleBoxClick = (index: number) => {
    setActiveBox((prev) => (prev === index ? null : index));
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          <div
            className={`what-content ${activeBox === 0 ? "what-content-active" : ""} ${
              activeBox !== null && activeBox !== 0 ? "what-sibling" : ""
            }`}
            onClick={() => handleBoxClick(0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI &amp; AUTOMATION</h3>
              <h4>Autonomous &amp; Custom AI Solutions</h4>
              <p>
                Developing advanced AI platforms like Skript Builder AI, fine-tuned to compile optimized code templates, audit syntax trees, and automate server deployment scripts.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Next.js</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Vercel AI SDK</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Large Language Models</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className={`what-content ${activeBox === 1 ? "what-content-active" : ""} ${
              activeBox !== null && activeBox !== 1 ? "what-sibling" : ""
            }`}
            onClick={() => handleBoxClick(1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>SYSTEMS &amp; SECURITY</h3>
              <h4>Game Protection &amp; Virtualization</h4>
              <p>
                Building low-level hooking mechanics (Java NMS/Netty pipelines), double-sided anti-cheat programs (Stitch Analyzer), and high-availability Pterodactyl WHMCS virtualization architectures (Quorox Cloud).
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Docker &amp; WHMCS</div>
                <div className="what-tags">Pterodactyl &amp; Wings</div>
                <div className="what-tags">Java NMS &amp; Netty</div>
                <div className="what-tags">Electron</div>
                <div className="what-tags">React Native</div>
                <div className="what-tags">GSAP &amp; WebGL</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
