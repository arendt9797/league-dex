export type Champion = Pick<ChampionDetail, ChampionKey>;
type ChampionKey = 'id' | 'key' | 'name' | 'title' | 'image';

export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
  };
  lore: string;
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
  spells: [
    {
      id: string;
      name: string;
      description: string;
      image: {
        full: string;
      };
    }
  ];
};
