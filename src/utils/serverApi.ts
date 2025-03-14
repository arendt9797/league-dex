'use server';

import { RIOT_URL } from '@/constants/urls';
import { Champion, ChampionDetail, Spell } from '@/types/Champions';
import { Item } from '@/types/Items';

// version
export const fetchVersion = async ():Promise<string> => {
  const response = await fetch(RIOT_URL.VERSIONS);
  const data = await response.json();
  return data[0]
}

// SSG
export const fetchItemList = async (): Promise<Record<string, Item>> => {
  const VERSION = await fetchVersion();
  const response = await fetch(`${RIOT_URL.BASE}${VERSION}${RIOT_URL.DATA}/item.json`, {
    cache: 'force-cache'
  });
  const data = await response.json();

  return Object.keys(data.data).reduce((itemObj, key) => {
    const item = data.data[key];

    itemObj[key] = {
      name: item.name,
      image: {
        full: item.image.full
      },
      gold: {
        total: item.gold.total
      }
    };

    return itemObj;
  }, {} as Record<string, Item>);
};

// ISR
export const fetchChampionList = async (): Promise<Record<string, Champion>> => {
  const VERSION = await fetchVersion();
  const response = await fetch(`${RIOT_URL.BASE}${VERSION}${RIOT_URL.DATA}/champion.json`, {
    next: {
      revalidate: 86400
    }
  });
  const data = await response.json();

  return Object.keys(data.data).reduce((championObj, key) => {
    const champion = data.data[key];

    championObj[key] = {
      id: champion.id,
      key: champion.key,
      name: champion.name,
      title: champion.title,
      image: {
        full: champion.image.full
      }
    };

    return championObj;
  }, {} as Record<string, Champion>);
};

// SSR
export const fetchChampionDetail = async (id: string): Promise<Record<string, ChampionDetail>> => {
  const VERSION = await fetchVersion();
  const response = await fetch(`${RIOT_URL.BASE}${VERSION}${RIOT_URL.DATA}/champion/${id}.json`, {
    cache: 'no-store'
  });
  const data = await response.json();

  return Object.keys(data.data).reduce((detailObj, key) => {
    const detail = data.data[key];

    detailObj[key] = {
      id: detail.id,
      key: detail.key,
      name: detail.name,
      title: detail.title,
      lore: detail.lore,
      passive: {
        name: detail.passive.name,
        description: detail.passive.description,
        image: {
          full: detail.passive.image.full,
        },
      },
      spells: detail.spells.map((spell: Spell) => ({
        id: spell.id,
        name: spell.name,
        description: spell.description,
        image: {
          full: spell.image.full,
        },
      })),
    };

    return detailObj;
  }, {} as Record<string, ChampionDetail>);
};