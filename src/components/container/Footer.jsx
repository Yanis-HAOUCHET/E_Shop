import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="container footer">
      <p>
        &#169; Copyright 2023 Yano. Website Thoughtfully designed by{" "}
        <a href="">Yanis</a>
      </p>
      <div className="footer_socials">
        <BsInstagram />
        <BsFacebook />
        <BsTwitter />
      </div>
    </div>
  );
}
