import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/alex.kotliar.1/",
  },
  {
    iconName: "github",
    link: "https://github.com/phonix375",
  },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/alexy-kotliar-b5058919b/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  );
};

export default Social;
