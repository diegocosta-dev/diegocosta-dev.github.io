const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={80}
      height={55}
      viewBox="0 0 80 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_44_298)">
        <path
          d="M39.085 35.842l-13.85 12.321H6.942L6.42 6.837l18.815.513 13.85 12.578m0 15.914V19.928m0 15.914l14.896 12.321h19.6M39.084 19.928L53.981 6.837h19.6"
          stroke="#868686"
          strokeWidth={14}
        />
      </g>
      <defs>
        <clipPath id="clip0_44_298">
          <path
            fill="#fff"
            transform="translate(0 .441)"
            d="M0 0H80V54.1176H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Logo