import Spacer from '@/components/Spacer';
import Text from '@/components/Text';
import Title from '@/components/Title';
import { RIOT_URL } from '@/constants/urls';
import { ChampionDetail } from '@/types/Champions';
import { fetchChampionDetail } from '@/utils/serverApi';
import { removeHtmlTags } from '@/utils/removeHTMLTags';
import Image from 'next/image';
import SkillCard from './SpellCard';

export const dynamic = "force-dynamic"

type Params = {
  params: {
    id: string;
  };
};

type FetchChampionDetail = Awaited<ReturnType<typeof fetchChampionDetail>>;

export function generateMetadata({ params }: Params) {
  return {
    title: `Meet the Legends: ${params.id}`,
    description: `챔피언 ${params.id}를 소개하는 페이지`
  };
}

const ChampionDetailPage = async ({ params }: Params) => {
  const data: FetchChampionDetail = await fetchChampionDetail(params.id);
  const detail: ChampionDetail = data[params.id];

  return (
    <div className="relative pb-8 w-full min-h-screen bg-secondary">
      <div className="relative w-full">
        <Image
          src={`${RIOT_URL.SPLASH_IMAGE}/${params.id}_0.jpg`}
          alt={params.id}
          width={1960}
          height={1280}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>
      <div className="p-8 lg:w-[800px] lg:absolute lg:top-40">
        <Title size="xl" color="primary">
          {detail.title}
        </Title>
        <Spacer size="md" />
        <Title size="3xl" color="white">
          {detail.name}
        </Title>
        <Spacer size="lg" />
        <Text size="md" color="white">
          {removeHtmlTags(detail.lore)}
        </Text>
      </div>
      <Spacer size="md" />
      <div className="space-y-4">
        <SkillCard skill={detail.passive} />
        {detail.spells.map((spell) => (
          <SkillCard key={spell.id} skill={spell} />
        ))}
      </div>
    </div>
  );
};

export default ChampionDetailPage;
