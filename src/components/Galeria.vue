<template>
  <a-layout-content>
    <div class="gallery">
      <div class="item">
        <img src="../assets/galeria/1.jpg" alt="1" />
      </div>
      <div class="item">
        <img src="../assets/galeria/2.jpg" alt="2" />
      </div>
      <div class="item">
        <img src="../assets/galeria/3.jpg" alt="3" />
      </div>
      <div class="item">
        <img src="../assets/galeria/4.jpg" alt="4" />
      </div>
      <div class="item">
        <img src="../assets/galeria/5.jpg" alt="5" />
      </div>
      <div class="item">
        <img src="../assets/galeria/6.jpg" alt="6" />
      </div>
      <div class="item">
        <img src="../assets/galeria/7.jpg" alt="7" />
      </div>
      <div class="item">
        <img src="../assets/galeria/8.jpg" alt="8" />
      </div>
      <div class="item">
        <img src="../assets/galeria/9.jpg" alt="9" />
      </div>
      <div class="item">
        <img src="../assets/galeria/10.jpg" alt="10" />
      </div>
      <div class="item">
        <img src="../assets/galeria/11.jpg" alt="11" />
      </div>
      <div class="item">
        <img src="../assets/galeria/12.jpg" alt="12" />
      </div>
      <div class="item">
        <img src="../assets/galeria/13.jpg" alt="13" />
      </div>
      <div class="item">
        <img src="../assets/galeria/14.jpg" alt="14" />
      </div>
      <div class="item">
        <img src="../assets/galeria/15.jpg" alt="15" />
      </div>
      <div class="item">
        <img src="../assets/galeria/39.jpg" alt="39" />
      </div>
      <div class="item">
        <img src="../assets/galeria/16.jpg" alt="16" />
      </div>
      <div class="item">
        <img src="../assets/galeria/17.jpg" alt="17" />
      </div>
      <div class="item">
        <img src="../assets/galeria/18.jpg" alt="18" />
      </div>
      <div class="item">
        <img src="../assets/galeria/19.jpg" alt="19" />
      </div>
      <div class="item">
        <img src="../assets/galeria/20.jpg" alt="20" />
      </div>
      <div class="item">
        <img src="../assets/galeria/21.jpg" alt="21" />
      </div>
      <div class="item">
        <img src="../assets/galeria/22.jpg" alt="22" />
      </div>
      <div class="item">
        <img src="../assets/galeria/23.jpg" alt="23" />
      </div>
      <div class="item">
        <img src="../assets/galeria/24.jpg" alt="24" />
      </div>
      <div class="item">
        <img src="../assets/galeria/25.jpg" alt="25" />
      </div>
      <div class="item">
        <img src="../assets/galeria/26.jpg" alt="26" />
      </div>
      <div class="item">
        <img src="../assets/galeria/27.jpg" alt="27" />
      </div>
      <div class="item">
        <img src="../assets/galeria/28.jpg" alt="28" />
      </div>
      <div class="item">
        <img src="../assets/galeria/29.jpg" alt="29" />
      </div>
      
      <div class="item">
        <img src="../assets/galeria/40.jpg" alt="40" />
      </div>
      <div class="item">
        <img src="../assets/galeria/41.jpg" alt="41" />
      </div>
      <div class="item">
        <img src="../assets/galeria/42.jpg" alt="42" />
      </div>
      <div class="item">
        <img src="../assets/galeria/43.jpg" alt="43" />
      </div>
      <div class="item">
        <img src="../assets/galeria/31.jpg" alt="31" />
      </div>
      <div class="item">
        <img src="../assets/galeria/44.jpg" alt="44" />
      </div>
      
      <div class="item">
        <img src="../assets/galeria/45.jpg" alt="45" />
      </div>
      <div class="item">
        <img src="../assets/galeria/46.jpg" alt="46" />
      </div>
      <div class="item">
        <img src="../assets/galeria/47.jpg" alt="47" />
      </div>
      <div class="item">
        <img src="../assets/galeria/48.jpg" alt="48" />
      </div>
      <div class="item">
        <img src="../assets/galeria/49.jpg" alt="49" />
      </div>
      <div class="item">
        <img src="../assets/galeria/50.jpg" alt="50" />
      </div>
      <div class="item">
        <img src="../assets/galeria/30.jpg" alt="30" />
      </div>
      
      
      <div class="item">
        <img src="../assets/galeria/32.jpg" alt="32" />
      </div>
      <div class="item">
        <img src="../assets/galeria/33.jpg" alt="33" />
      </div>
      <div class="item">
        <img src="../assets/galeria/38.jpg" alt="38" />
      </div>
      <div class="item">
        <img src="../assets/galeria/34.jpg" alt="34" />
      </div>
      <div class="item">
        <img src="../assets/galeria/35.jpg" alt="35" />
      </div>
      <div class="item">
        <img src="../assets/galeria/36.jpg" alt="36" />
      </div>
      <div class="item">
        <img src="../assets/galeria/37.jpg" alt="37" />
      </div>
      
      
    </div>
  </a-layout-content>
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.gallery {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  height: 100%;
  background: rgba(49, 1, 1, 0.35);
  padding: .5rem;

}

.item {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
}
</style>

