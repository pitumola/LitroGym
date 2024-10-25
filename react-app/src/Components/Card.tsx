/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import "../Components/Card.css";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
}
interface CardBodyProps {
  title: string;
  text?: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <button className="card-button">Go somewhere</button>
    </>
  );
}
export default Card;
