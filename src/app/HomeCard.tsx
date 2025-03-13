import pathName from '@/constants/pathName';
import Spacer from '../components/Spacer';
import Text from '../components/Text';
import Title from '../components/Title';
import Link from 'next/link';

const cardContents = [
  {
    title: '챔피언 목록 보기',
    description: '어떤 챔피언들이 있는지 확인하고, 챔피언들에 대해 더 자세히 알아보세요!',
    path: pathName.CHAMPIONS
  },
  {
    title: '아이템 목록 보기',
    description: '어떤 아이템들이 있는지 확인하고, 어떤 아이템을 쓸지 고민해보세요!',
    path: pathName.ITEMS
  },
  {
    title: '로테이션 챔피언 확인하기',
    description: '지금 무료로 플레이할 수 있는 챔피언을 확인해보세요!',
    path: pathName.ROTATIONS
  }
];

const HomeCard = () => {
  return (
    <div className="flex flex-col flex-wrap items-center gap-5 lg:flex-row lg:justify-evenly">
      {cardContents.map((content, i) => (
        <Link key={i} href={content.path}>
          <div className="bg-primary shadow-md rounded-lg p-6 w-96">
            <Title size="md" color="secondary">
              {content.title}
            </Title>
            <Spacer size="sm" />
            <Text size="md" color="secondary" className="text-left">
              {content.description}
            </Text>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeCard;
