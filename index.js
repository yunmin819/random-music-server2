const express = require('express');
const app = express();
const port = 3000;

const musicList = [
  'https://www.youtube.com/watch?v=KK-ffKikwBw',
  'https://www.youtube.com/watch?v=NwFVSclD_uc',
  'https://www.youtube.com/watch?v=oVZg-WwgivI',
  'https://www.youtube.com/watch?v=VW3pnfyyZf4',
  'https://www.youtube.com/watch?v=vovxrQdQ_gk',
  'https://www.youtube.com/watch?v=r73zmWppmC4',
  'https://www.youtube.com/watch?v=TdZ2Vlrfk_0',
  'https://www.youtube.com/watch?v=gkQFP1rG7wg',
  'https://www.youtube.com/watch?v=EjHAgoN2KtU',
  'https://www.youtube.com/watch?v=aM2OzkMRPb0',
  'https://www.youtube.com/watch?v=5f2AFS6PgEs',
  'https://www.youtube.com/watch?v=hnAJTv2DwPo',
  'https://www.youtube.com/watch?v=EQ94zflNqn4',
  'https://www.youtube.com/watch?v=CwGbMYLjIpQ',
  'https://www.youtube.com/watch?v=uZbB9DssRlA',
  'https://www.youtube.com/watch?v=7HgJIAUtICU',
  'https://www.youtube.com/watch?v=GxldQ9eX2wo',
];

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * musicList.length);
  const randomSong = musicList[randomIndex];
  res.redirect(randomSong);
});

app.listen(port, () => {
  console.log(`🎵 서버 실행 중: http://localhost:${port}`);
});
