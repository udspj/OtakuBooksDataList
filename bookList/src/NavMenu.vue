<template lang="html">


  
<!-- <b-navbar type="inverse" variant="success"> -->
<b-navbar>

    <!-- <b-nav-toggle target="nav_collapse"></b-nav-toggle> -->

    <b-link class="navbar-brand" to="/list/all">
      全部宅书
    </b-link>


    <!-- <b-collapse is-nav id="nav_collapse"> -->

    <b-link class="navbar-brand" to="/list/book_jp">
      <span>日文版</span>
    </b-link>
      
      <b-nav is-nav-bar>
        <b-nav-item to="/list/comic_jp"><span>漫画</span></b-nav-item>
        <b-nav-item to="/list/light_jp"><span>轻小说</span></b-nav-item>
        <b-nav-item to="/list/fan_jp"><span>公式书</span></b-nav-item>
        <b-nav-item to="/list/ill_jp"><span>画集</span></b-nav-item>
        <b-nav-item to="/list/other_jp"><span>其他</span></b-nav-item>
      </b-nav>
      
      <!--  -->
    <!-- </b-collapse> -->


    <b-link class="navbar-brand" to="/list/book_en">
      <span>英文版</span>
    </b-link>
    <!-- <b-collapse is-nav id="aaaa"> -->
      <b-nav is-nav-bar>
        <b-nav-item to="/list/comic_en"><span>漫画</span></b-nav-item>
      </b-nav>
    <!-- </b-collapse> -->

    <b-link class="navbar-brand" to="/list/book_cn">
      <span>中文版</span>
    </b-link>
      <b-nav is-nav-bar>
        <b-nav-item to="/list/comic_cn"><span>漫画</span></b-nav-item>
        <b-nav-item to="/list/other_cn"><span>其他</span></b-nav-item>
      </b-nav>


  </b-navbar>



</template>
