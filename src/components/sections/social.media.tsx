import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

interface ISocial {
    facebook: string;
    instagram: string;
    linkedin: string;
}
const SocialMedia = (props: ISocial) => {
    const { facebook, instagram, linkedin } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={facebook} target='_blank' className="highlight" title="Facebook Edan Nguyễn">
                <FaFacebook size={30} />
            </a>
            <a href={instagram} target='_blank' className="highlight" title="Instagram Edan Nguyễn">
                <FaInstagram size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="Instagram Edan Nguyễn">
                <FaLinkedinIn size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;