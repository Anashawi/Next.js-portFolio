import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function Social({ containerStyle, iconStyle }) {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/Anashawi" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/anas-hawi/" },
  ];
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link
            className={iconStyle}
            key={index}
            href={item.path}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
