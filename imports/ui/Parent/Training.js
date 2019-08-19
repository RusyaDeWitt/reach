import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Div = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans');

h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333;
  font-size: 1.825rem;
  margin: 1.3rem 0;
}

.player {
  margin-top: 40px;
}

.services-grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

`

const Training = () => (
  <Div>
  <div>
    <div className="lab">
      <section>
      <h2>Тренинги</h2>
      <div className="service-grid">

      <ReactPlayer
        className="player"
        controls
        width='100%'
        url={"https://r1---sn-q4flrnek.googlevideo.com/videoplayback?expire=1566219949&ei=TUpaXZH2CY6liwT4xJKADw&ip=173.234.225.82&id=o-AEogPOOOrbi2WczCKVUr62mEKCeGH1ScnCJqyQO8nKsY&itag=22&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-q4flrnek%2Csn-q4fl6ney&ms=au%2Crdu&mv=m&mvi=0&pl=24&initcwndbps=372500&mime=video%2Fmp4&ratebypass=yes&dur=693.905&lmt=1565867829651955&mt=1566198226&fvip=1&c=WEB&txp=2211222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgLnvKGf4N5XGg8zi6X8vyNb570j7o6x7uwT5nTHSKV04CIQDrC5BF1omTlJVvIciZnvaCD-0oXRpSo_hIc59jpoMaAQ%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRAIgLzIwkV9F765MZ-KsSx4CVyZCbFak-mpzDGmeJHjM7_ECIEN3fpgV0wsb3x_UcHbbT284eMYUyrQFTOsdxRrQ_vD1&video_id=QjdMecgHP2o&title=%D0%A8%D0%B0%D0%BB%D0%B2%D0%B0+%D0%90%D0%BC%D0%BE%D0%BD%D0%B0%D1%88%D0%B2%D0%B8%D0%BB%D0%B8"}
      />
      <ReactPlayer
        className="player"
        controls
        width='100%'
        url={"https://r2---sn-a5meknsd.googlevideo.com/videoplayback?expire=1566219870&ei=_klaXaazM4-o7gPcgLmwDQ&ip=170.130.62.190&id=o-ACANhv70svS4QkPfWABPfG6CP0ZeeEn0lawNhV2LI3gO&itag=22&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-a5meknsd%2Csn-a5mlrn7z&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=5353750&mime=video%2Fmp4&ratebypass=yes&dur=137.671&lmt=1565869305755280&mt=1566198165&fvip=2&c=WEB&txp=2216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgIPXeyCwERVKgaUr30Y1amfM4kTwTzamg9UWbUK9OfGYCIQCUAmhR6ryyDb9e2fDu9yArXyAROffPWF1X0_Awg7yabw%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRgIhAPV5ZjF9Zzi7SgmtfgutKAPMNluXHOK0bYgkXys4wkxDAiEAm8dJWTnq-CdDURjeJ9D_0s2vkfWTOU8bT4OG9zH5AqQ%3D&video_id=3ejhOqh9UP8&title=%D0%9D%D0%B5+%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D1%8F%D0%B9%D1%82%D0%B5+%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C+%D0%B4%D0%B5%D1%82%D0%B5%D0%B9+%D0%BE%D1%82%D0%BC%D0%B5%D1%82%D0%BA%D0%B0%D0%BC%D0%B8."}
      />
      </div>
    </section>
    </div>
  </div>
  </Div>

);

export default Training;
