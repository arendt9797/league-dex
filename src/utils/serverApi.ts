import { RIOT_URL } from "@/constants/apis"
import { Item } from "@/types/Items";

export const fetchItemList = async (): Promise<Record<string, Item>> => {
  const response = await fetch(`${RIOT_URL.DATA}/item.json`)
  const data = await response.json()

  return Object.keys(data.data).reduce((itemObj, key) => {
    const item = data.data[key];

    itemObj[key] = {
      name: item.name,
      image: {
        full: item.image.full, 
      },
      gold: {
        total: item.gold.total,
      },
    };
    
    return itemObj;
  }, {} as Record<string, Item>);
};

export const fetchChampionList = async (): Promise<Record<string, Item>> => {
  const response = await fetch(`${RIOT_URL.DATA}/item.json`)
  const data = await response.json()

  return Object.keys(data.data).reduce((itemObj, key) => {
    const item = data.data[key];

    itemObj[key] = {
      name: item.name,
      image: {
        full: item.image.full, 
      },
      gold: {
        total: item.gold.total,
      },
    };
    
    return itemObj;
  }, {} as Record<string, Item>);
};