import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Keyboard,
  Mousewheel
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Pagination, Keyboard, Mousewheel]);

// Import Swiper styles
import 'swiper/swiper-bundle.css';



export default function Home() {
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    const data = new FormData(e.target);
    console.log(data.get('name'))
    console.log(data.get('phone'))
    console.log(data.get('msg'))
  }

  return (
    <div>
      <Head>
        <title>影袭科技</title>
        <meta name="description" content="henanbisai yingxitech" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5909087805487908" crossorigin="anonymous"></script>
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      </Head>

      <header>
        <img src="/img/getheadimg.jpeg"  />
        <p>影袭科技</p>
      </header>

      <main className={styles.main}>
        <Swiper
          // spaceBetween={0}
          direction={'vertical'}
          // slidesPerView={1}
          mousewheel
          keyboard={{enabled: true}}
          pagination={{
            "clickable": true
          }} 
          // controller={{ control: controlledSwiper }}
          onSlideChange={(e) => console.log('slide change',e.snapIndex)}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={styles.pageWrapper}>
              <div className={styles.pageContent}>
                <p className="page-1-p">
                  科技改变生活，技术推动思维
                </p>
                <p className="page-1-p">
                  打造互联网运营新模式
                </p>
              </div>
              <div className={styles.pageMask}></div>
              <img className={styles.bgImg} src="/img/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.pageWrapper}>
              <div className={styles.pageContent}>
                <p className="page-1-p">
                  常年在北京、上海、香港、台湾、新加坡、马来西亚、印尼、泰国、韩国、日本、英国等国家和地区联合举办各种大赛在河南地区的推广宣传
                </p>
              </div>
              <div className={styles.pageMask}></div>
              <img className={styles.bgImg} src="/img/2.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.pageWrapper}>
              <div className={styles.pageContent}>
                <form onSubmit={onSubmit}>
                  <h3>联系我们</h3>
                  <h5>个人/单位:</h5>
                  <input type="text" placeholder="姓名/名称" autoComplete="off" name="name"/>
                  <h5>联系电话:</h5>
                  <input type="phone" placeholder="手机/座机" autoComplete="off" name="phone" pattern="[0-9]+" />
                  <h5>留言:</h5>
                  <textarea name="msg"></textarea>
                  <button>提交</button>
                </form>
              </div>
              <div className={styles.pageMask}></div>
              <img className={styles.bgImg} src="/img/3.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.pageWrapper}>
              <div className={styles.pageContent}>
                <amp-ad width="100vw" height="320"
                    type="adsense"
                    data-ad-client="ca-pub-5909087805487908"
                    data-ad-slot="1118547492"
                    data-auto-format="rspv"
                    data-full-width="">
                  <div overflow=""></div>
                </amp-ad>
                <footer>
                  <p><span>影袭网络技术有限公司 © 2017-2022</span><span>All rights reserved.</span></p>
                  <p><a href="https://beian.miit.gov.cn/#/Integrated/index">豫ICP备18021827号</a></p>
                </footer>
              </div>
              <div className={styles.pageMask}></div>
              <img className={styles.bgImg} src="/img/4.jpg" />
            </div>
          </SwiperSlide>

        </Swiper> 

      </main>
    </div>
  )
}
