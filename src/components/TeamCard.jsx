const TeamCard = ({ name, role, imgUrl }) => {
  return (
    <div className="flex group/team relative m-10 justify-center">
      <div className="team-item inline-block origin-top rounded-[20px] bg-card-border p-[30px_25px] text-center duration-200 group-hover/team:scale-110 group-hover/team:bg-primary group-hover/team:text-white">
        <h4 className="mb-[10px] mt-[60px] text-[1.2rem]">{name}</h4>
        <p className="mb-3">{role}</p>
        <hr className="mx-auto mb-5 h-[1px] w-1/2 bg-dark group-hover/team:bg-white" />
        <div className=" flex justify-center gap-[10px]">
          <a
            href="https://instagram.com"
            className="svg-wrap rounded-full bg-primary p-[5px] hover:opacity-70 group-hover/team:bg-dark"
            target="_blank"
          >
            <svg
              width="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#ffffff"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            className="svg-wrap rounded-full bg-primary p-[5px] hover:opacity-70 group-hover/team:bg-dark"
            target="_blank"
          >
            <svg
              width="20px"
              viewBox="-5 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>facebook</title>
                <desc>Created with Sketch.</desc>
                <defs> </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-385.000000, -7399.000000)"
                    fill="#ffffff"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                        id="facebook-[#176]"
                      >
                        {' '}
                      </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://whatsapp.com"
            className="svg-wrap rounded-full bg-primary p-[5px] hover:opacity-70 group-hover/team:bg-dark"
            target="_blank"
          >
            <svg
              width="20px"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Whatsapp</title>
              <rect width="22" height="21" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_121_661"
                    transform="matrix(0.00269608 0 0 0.0028133 0.0416667 0.0569054)"
                  />
                </pattern>
                <image
                  id="image0_121_661"
                  width="340"
                  height="315"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute left-[calc(50%-65px)] top-[-50px] z-10 mx-auto w-[130px] rounded-full border-4 border-solid border-transparent contrast-75 overflow-hidden duration-200 group-hover/team:border-primary group-hover/team:contrast-100">
        <img src={imgUrl} alt={name} />
      </div>
    </div>
  );
};
export default TeamCard;
