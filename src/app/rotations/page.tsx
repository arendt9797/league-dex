'use client'

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Champion } from "@/types/Champions";
import Card from "@/components/Card";
import pathName from "@/constants/pathName";
import { RIOT_URL } from "@/constants/urls";
import { fetchVersion } from "@/utils/serverApi";

const getRotationChampionList = async (): Promise<Champion[]> => {
  const response = await fetch('/api/rotations');
  const data = await response.json();
  return data
};

const Rotations = () => {
  const [version, setVersion] = useState<string>(RIOT_URL.DEFAULT_VERSION)
  const {data:rotationChampions, isPending, isError} = useQuery({
    queryKey: ['rotationChampions'],
    queryFn: getRotationChampionList,
    staleTime: 1000 * 60 * 5,
  })

  useEffect(() => {
    fetchVersion().then(setVersion)
  }, [version])

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Failed to load data</p>;

  return <div className="grid grid-cols-2 p-4 gap-2 w-max mx-auto md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
  {rotationChampions.map((champion, idx) => (
    <Link key={idx} href={`${pathName.CHAMPIONS}/${champion.id}`}>
      <Card
        imageUrl={`${RIOT_URL.BASE}${version}${RIOT_URL.IMAGE}/champion/${champion.image.full}`}
        title={champion.name}
        description={champion.title}
      ></Card>
    </Link>
  ))}
</div>
};

export default Rotations;
