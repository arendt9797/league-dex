import Spacer from '@/components/Spacer';
import Text from '@/components/Text';
import Title from '@/components/Title';
import { RIOT_URL } from '@/constants/apis';
import Image from 'next/image';

type Skill = {
  id?: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
};

type SpellCardProps = {
  skill: Skill;
};

const SkillCard = ({ skill }: SpellCardProps) => {
  const isSpell = !!skill.id;
  return (
    <div className="flex gap-4 m-auto p-4 border-2 border-primary items-center w-[400px] md:w-[700px] lg:w-[900px] lg:h-40">
      <div>
        {isSpell ? (
          <Image
            src={`${RIOT_URL.IMAGE}/spell/${skill.image.full}`}
            alt={skill.name}
            width={80}
            height={80}
            className="w-full h-auto"
          />
        ) : (
          <Image
            src={`${RIOT_URL.IMAGE}/passive/${skill.image.full}`}
            alt={skill.name}
            width={80}
            height={80}
            className="w-full h-auto"
          />
        )}
      </div>
      <div className="w-full lg:w-[800px]">
        <Title>{skill.name}</Title>
        <Spacer size="sm" />
        <Text color="white">{skill.description}</Text>
      </div>
    </div>
  );
};

export default SkillCard;
