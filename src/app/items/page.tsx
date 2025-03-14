import Card from '@/components/Card';
import { RIOT_URL } from '@/constants/urls';
import { fetchItemList, fetchVersion } from '@/utils/serverApi';

type FetchItemType = Awaited<ReturnType<typeof fetchItemList>>;

const Items = async () => {
  const items: FetchItemType = await fetchItemList();
  const VERSION = await fetchVersion();

  return (
    <div className="grid grid-cols-2 p-4 gap-2 w-max mx-auto md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Object.entries(items).map(
        ([key, item]) =>
          !!item.gold.total && (
            <Card
              key={key}
              imageUrl={`${RIOT_URL.BASE}${VERSION}${RIOT_URL.IMAGE}/item/${item.image.full}`}
              title={item.name}
              description={String(item.gold.total)}
            />
          )
      )}
    </div>
  );
};

export default Items;
