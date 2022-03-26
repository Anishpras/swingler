import { useContext } from "react";
import { SwinglerContext } from "../context/SwinglerContext";
import { SiTinder } from "react-icons/si";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import SwinglerCardItem from "./SwinglerCardItem";

const style = {
  wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
  cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  SwinglerLogo: `text-5xl text-red-500 mb-4`,
  noMoreText: `text-xl text-white`,
  swipesContainer: `w-full h-full overflow-hidden`,
};

const Card = () => {
  const { cardsData } = useContext(SwinglerContext);

  return (
    <div className={style.wrapper}>
      <CardHeader />
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <SiTinder className={style.SwinglerLogo} />
          <div className={style.noMoreText}>
            No More Profiles in your Location...
          </div>
        </div>
        <div className={style.swipesContainer}>
          {cardsData.map((card, index) => (
            <SwinglerCardItem card={card} key={index} />
          ))}
        </div>
      </div>
      <CardFooter />
    </div>
  );
};

export default Card;
