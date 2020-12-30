<template lang="pug">
  div.container
    div.kingashinnen
      img.kingashinnen__image(src="@/assets/happy-new-year/2020/kingashinnen_shin.svg")
      img.kingashinnen__image(src="@/assets/happy-new-year/2020/kingashinnen_kin.svg")
    div.kingashinnen
      img.kingashinnen__image(src="@/assets/happy-new-year/2020/kingashinnen_nen.svg")
      img.kingashinnen__image(src="@/assets/happy-new-year/2020/kingashinnen_ga.svg")
    div.fuka
      //- img(src="@/assets/happy-new-year/2020/fuka001.svg")
      img(src="@/assets/happy-new-year/2020/fuka002.svg")
      //- img(src="@/assets/happy-new-year/2020/fuka003.svg")
    div.info
      div.info__contents
        p.text あけましておめでとうございます！
        p.text 2020年は良いこと悪いこと色々有りましたが、新川家としては「楓華」が家族として加わりました。
        p.text 楓華ともども、2021年もよろしくお願いいたします。
        p.text__right 新川 雅起・祥子・楓華
</template>

<style lang="scss" scoped>
.container {
  background-image: url('~@/assets/happy-new-year/2020/newyear_bg-001.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.kingashinnen {
  height: 20vh;
  display: flex;
  justify-content: space-between;

  &__image {
    width: 30vw;
  }
}

.fuka {
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;

  & > img {
    width: 100%;
  }
}

.info {
  margin: 2em 0;
  position: fixed;
  padding: 0 0.6em;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
  bottom: 0;
  width: 100vw;
  height: 30vh;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: black;
  }
  &::before {
    left: 10px;
  }
  &::after {
    right: 10px;
  }
  & p {
    margin: 0;
    padding: 0;
  }

  &__contents {
    width: 100%;
    height: 100%;
    padding: 8px;
    background: radial-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 254, 218, 0.8)
      ),
      url('~@/assets/happy-new-year/2020/ushi.png'),
      linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
    background-size: cover;
  }

  p.text {
    font-family: Mutsuki, serif;
    margin-bottom: 8px;

    &__right {
      text-align: right;
    }
  }

  @font-face {
    font-family: Mutsuki;
    src: url(/font/Mutsuki.ttf);
  }
}
</style>
