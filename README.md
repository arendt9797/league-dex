![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&text=Dex%20of%20Legends)

# 🎮 Dex of Legends: 한 눈에 보는 롤 정보
- **배포 주소** : https://league-dex.vercel.app/
<br/>

![챔피언 목록](image.png)
![아이템 목록](image-1.png)
![챔피언 상세](image-2.png)
![챔피언 상세스킬](image-3.png)

<br/>
<br/>
<br/>

## 📜프로젝트 소개
>**개발 기간 :** 2025/03/11 ~ 2025/03/18

**League of Legends 정보 사이트**  

유명 게임 League of Legends의 여러 정보를 알 수 있는 사이트입니다. 
챔피언 목록, 아이템 목록, 로테이션 목록을 볼 수 있으며, 챔피언 클릭 시 챔피언 상세 페이지로 넘어갑니다. 
<br/>
<br/>
<br/>

## 🪄프로젝트 특징
- **TypeScript**를 이용하여 타입 안정성을 높였습니다. 

- **App routing** 을 사용하여 정적, 동적 라우팅을 구현했습니다.
- **Next.js**를 이용하여 여러 렌더링 기법들과 캐싱을 활용했습니다.
  - 페이지 별로 SSG, SSR, ISR, CSR 렌더링 기법을 적용했습니다.
- SSG, SSR, ISR의 경우 데이터를 패칭할 때 필요한 함수를 서버 액션으로 만들어 함수가 서버에서 실행되도록 했습니다.
- CSR의 경우 **Router Handler**와 **Tanstack Query**를 사용하여 api를 호출하여 데이터를 불러오도록 했습니다.  
- **TailwindCSS**를 사용하여 CSS in JS 스타일링 및 반응형 디자인을 구현했습니다.

<br/>
<br/>
<br/>

## 🔫트러블 슈팅
- ### [useQuery에서 서버 액션을 사용할 수 없는 이유](https://velog.io/@arendt9797/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85)

<br/>
<br/>
<br/>

## 🖥️기술 스택
### 환경
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### 개발
 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Tailwind-CSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)![React-Query](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)