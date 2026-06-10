import { useNavigate } from "react-router";

const Button = ({ text, style, link, mail }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }

    if(mail){
      window.location.href = `mailto:${mail}`;
    }
  }
  return (
    <button
      className={`${
        style && style
      } cursor-pointer select-none rounded-[30px] border-2 border-[#422800] bg-[#fbeee0] px-[18px] leading-[50px] text-center text-[18px] font-semibold text-[#422800] shadow-[4px_4px_0_0_#efd395] transition-all hover:bg-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#422800] md:min-w-[120px] md:px-[25px]`}
      onClick={handleClick}
    >
      {text}
    </button>

    
  );
};

export default Button;
