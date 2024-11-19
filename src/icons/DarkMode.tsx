const DarkMode: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_44_79)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.5 17.5a5 5 0 100-10 5 5 0 000 10zM12.5 1.5v2M12.5 21.5v2M4.72 4.72l1.42 1.42M18.86 18.86l1.42 1.42M1.5 12.5h2M21.5 12.5h2M4.72 20.28l1.42-1.42M18.86 6.14l1.42-1.42" />
      </g>
      <defs>
        <clipPath id="clip0_44_79">
          <path transform="translate(.5 .5)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DarkMode;