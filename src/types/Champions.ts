export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
};

export type ChampionDetail = {
  id: string
  key: string;
  name: string;
  title: string;
  lore: string;
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
  spells: Spell[];
};

export type Spell = {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
};
