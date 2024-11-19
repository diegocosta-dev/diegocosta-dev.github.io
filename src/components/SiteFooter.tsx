import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SiteFooter = () => {
  return (
    <footer id="siteFooter" className="flex flex-col gap-6">
      <div className="border-b border-stone-950 pb-4 dark:border-zinc-50">
        <h2 className="font-semibold text-lg">
          Contact Me
        </h2>
        <p>
          Shoot me an email: <a href="mailto:diegoarthurdev@gmail.com" className="font-semibold hover:underline">diegoarthurdev@gmail.com</a>
        </p>
      </div>

      <div className='flex gap-3'>
        <a href="https://github.com/diegocosta-dev" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className='text-stone-800 hover:text-stone-600 transition-colors dark:text-slate-50 dark:hover:text-stone-400' />
          <span className='sr-only'>My Github</span>
        </a>
        <a href="https://www.linkedin.com/in/diegocosta-dev/" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className='text-stone-800 hover:text-stone-600 transition-colors dark:text-slate-50 dark:hover:text-stone-400' />
          <span className='sr-only'>My Linkedin</span>
        </a>
        <a href="https://www.instagram.com/diego.art.costa/" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className='text-stone-800 hover:text-stone-600 transition-colors dark:text-slate-50 dark:hover:text-stone-400' />
          <span className='sr-only'>My Instagram</span>
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;