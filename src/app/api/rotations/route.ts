import { RIOT_URL } from '@/constants/urls';
import { fetchChampionList } from '@/utils/serverApi';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const rotationResponse = await fetch(`${RIOT_URL.ROTATIONS}`, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
      'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
      Origin: 'https://developer.riotgames.com',
      'X-Riot-Token': 'RGAPI-b0223e0c-fcd2-4baf-a348-601ac3a4bc10'
    }
  });
  const rotationData = await rotationResponse.json()
  const championData = await fetchChampionList()
  
  const rotations = rotationData.freeChampionIds
  const champions = Object.values(championData)

  const rotationChampions = champions.filter((champion) => {
    return rotations.includes(parseInt(champion.key))
  })

  return NextResponse.json(rotationChampions)
}