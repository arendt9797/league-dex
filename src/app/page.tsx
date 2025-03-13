import HomeCard from '@/app/HomeCard';
import Spacer from '@/components/Spacer';
import Text from '@/components/Text';
import Title from '@/components/Title';

const Home = () => {
  return (
    <div className="text-center">
      <Spacer size="2xl" />
      <Title size="3xl">LOL 정보를 한 눈에</Title>
      <Spacer size="xl" />
      <Text size="lg" color="neutral">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다
      </Text>
      <Spacer size="2xl" />
      <HomeCard />
    </div>
  );
};

export default Home;
