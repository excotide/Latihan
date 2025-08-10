import type React from "react";

interface CardProps {
    title: string;
    description: string;
    imgUrl?: string;
    variant?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgUrl}) => {

    return (
    <div className="card border border-zinc-200 p-3 rounded-2xl w-32 h-64  items-center">
        <h2 className="text-center">{title}</h2>
        <p className="">{description}</p>
        <img src={`${imgUrl}`} alt="" />
    </div>
    )
}

export default Card;