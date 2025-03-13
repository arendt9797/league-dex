import Card from '@/components/Card';
import { RIOT_URL } from '@/constants/apis';
import { fetchChampionList } from '@/utils/serverApi';

type FetchChampionType = Awaited<ReturnType<typeof fetchChampionList>>;

const Champions = async () => {
  const items: FetchChampionType = await fetchChampionList();

  return (
    <div className='grid grid-cols-2 p-4 gap-2 w-max mx-auto md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
      {Object.entries(items).map(([key, item]) => (
        !!item.gold.total && <Card key={key} imageUrl={RIOT_URL.IMAGE +'/item/'+ item.image.full} title={item.name} description={String(item.gold.total)}></Card>
      ))}
    </div>
  );
};

export default Champions;
