import Image from 'next/image';
import React from 'react';
import Title from './Title';
import Text from './Text';

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="rounded-md shadow-lg w-44 h-44  border-primary border-4 truncate place-content-center place-items-center">
      <Image src={imageUrl} alt={title} width={80} height={80} />
      <Title size="sm" color="secondary" className="w-44 text-center overflow-hidden text-ellipsis">
        {title}
      </Title>
      <Text size="md" color="neutral">
        {description}
      </Text>
    </div>
  );
};

export default Card;
