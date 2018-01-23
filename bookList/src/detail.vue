<template lang="html">
   <div class="modal-mask" v-show="show" transition='modal'>
   	    <div class="modal-container">

          <div v-bind:style="{width:'100%', height:'100%', backgroundImage:'url(' + bk + ')', backgroundSize: 'contain',backgroundRepeat: 'no-repeat', backgroundPosition:'center'}">
          </div>

          <div style="position:relative; left:0px;bottom:10vw; width:100%;height:100%;">
              <div v-for="img in imgs">
                <div v-on:click="showBigImage(img)" style="width: 10vw; height: 10vw; float: left; background-color: #fff; margin: 0px 10px 0px 0px; position: relative; border-color: #cfcfcf; border-style: solid; border-width: 5px;">
                  <img v-bind:src="'http://ovwff8rq7.bkt.clouddn.com/'+img" style="width:100%; height:100%;"></img>
                </div>
              </div>
          </div>
                   
           <div >
               <button style="position:absolute; right:100px;top:30px; width:80px;height:30px;"v-on:click="openImage()">查看大图</button>
               <button style="position:absolute; right:30px;top:30px; width:50px;height:30px;"v-on:click="closeImage()">关闭</button>
           </div>

        </div>
   </div>
</template>	

<script>

export default {
  props:["imgs"],
  name:'detail',
  data () {
    return {
      show:false,
      bk:""
    }
  },

  methods: {
        openImage() {
          var w = window.open('about:blank');
          var url = this.bk;
          w.location.href = url;
      },
      showBigImage(img) {
        this.bk = 'http://ovwff8rq7.bkt.clouddn.com/'+img;
      },
      closeImage() {
        this.imgs = [];
        this.bk = "";
        this.show = false;
      }
  },
  
  watch: {
    imgs: function (val) {
      if(this.imgs.length > 0) {
        this.show = true;
        this.bk = 'http://ovwff8rq7.bkt.clouddn.com/'+this.imgs[0];
      }
    }
  }

}

</script>

<style>

.modal-mask
{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-container
{
  margin : 20px 20px 20px 20px;
  height: calc(100vh - 40px);
  /*padding: 5px;*/
  background-color: #fff;
  transition: all .3s ease;
}

</style>