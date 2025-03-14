import Card from '@/components/Card';
import pathName from '@/constants/pathName';
import { RIOT_URL } from '@/constants/urls';
import { fetchChampionList, fetchVersion } from '@/utils/serverApi';
import Link from 'next/link';

type FetchChampionType = Awaited<ReturnType<typeof fetchChampionList>>;

const Champions = async () => {
  const champions: FetchChampionType = await fetchChampionList();
  const VERSION = await fetchVersion();

  return (
    <div className="grid grid-cols-2 p-4 gap-2 w-max mx-auto md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Object.entries(champions).map(([key, champion]) => (
        <Link key={key} href={`${pathName.CHAMPIONS}/${champion.id}`}>
          <Card
            imageUrl={`${RIOT_URL.BASE}${VERSION}${RIOT_URL.IMAGE}/champion/${champion.image.full}`}
            title={champion.name}
            description={champion.title}
          ></Card>
        </Link>
      ))}
    </div>
  );
};

export default Champions;
