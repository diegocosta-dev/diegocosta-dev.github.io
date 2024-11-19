import profile from '../assets/Profile.jpg'
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import ToggleTheme from './ToggleTheme';

const SiteHeader = () => {
  return (
    <div id="siteHeader" className="flex flex-col gap-6">
      <div className="flex gap-2 justify-between items-center">
        <Link to='/'>
          <img src={profile} alt="Diego Costa" className="rounded-full size-16" />
        </Link>

        <Link to='/'>
          <Logo width={80} height={54.12} />
        </Link>

        <ToggleTheme />
      </div>

      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>
          Hey there! I'm Diego Costa.
        </p>
        <p>
          I’m a web developer and in my free time, I enjoy catching waves. 🏄
        </p>
      </div>
    </div>
  );
};

export default SiteHeader;