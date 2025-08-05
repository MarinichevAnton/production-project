import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

interface CardProps {
  className?: string;
  image: string;
}
const Card = (props: CardProps) => {
  const { className, image } = props;
  return (
    <>
      <img className={classNames(cls.Card, {}, [className])} src={image} />
    </>
  );
};

export default Card;
