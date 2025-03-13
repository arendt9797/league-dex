import Card from '@/components/Card';
import { RIOT_URL } from '@/constants/apis';
import { fetchItemList } from '@/utils/serverApi';

type FetchItemType = Awaited<ReturnType<typeof fetchItemList>>;

const Items = async () => {
  const items: FetchItemType = await fetchItemList();

  return (
    <div className='grid grid-cols-2 p-4 gap-2 w-max mx-auto md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
      {Object.entries(items).map(([key, item]) => (
        !!item.gold.total && <Card key={key} imageUrl={RIOT_URL.IMAGE +'/item/'+ item.image.full} title={item.name} description={String(item.gold.total)}></Card>
      ))}
    </div>
  );
};

export default Items;
