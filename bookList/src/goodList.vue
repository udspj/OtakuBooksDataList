<template lang="html">
  <div class="container" style="width: 100%;">
		<div class="row">

			<div class="col-sm-6 col-md-4" v-for="good in goods" style="margin-top: 30px; margin-bottom: 20px;">
			<div v-on:click="getImgUrl(good.id)" style="width: 182px; height: 182px; background-color: #fff; margin:0 auto; position: relative; border-color: #cfcfcf; border-style: solid; border-width: 1px;">
				<img v-bind:src="'./static/thumbnails/'+good.id+'.jpg'" style="position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0;"></img>
			</div>
				<br />
				<a>{{ good.title }}</a>
				<br />
				<h3 style="color: orange;">¥ {{ good.price }}</h3>
			</div >
			
			<Detail v-bind:imgs="imgs"></Detail>

		</div>
	</div>

</template>

<script>
import Detail from './detail.vue'

export default {
	name:'goodList',
  data () {
    return {
    	goods:[],
    	imgs:[]
    }
  },
  components: {
    Detail
  },
  mounted: function() {
    this.$http.get('./static/res.json').then(function(response) {
        	this.goods = response.body.datas;
    });
  },

	methods: {
        getImgUrl(goodid) {
        	var i;
        	for (i in this.goods) {
        		if (this.goods[i]["id"] == goodid) {
        			this.imgs = this.goods[i]["detail_imgs"];
        		}
        	}
		  }
	},
  watch: {
    $route: function () {
	    this.$http.get('./static/res.json').then(function(response) {
	        
	        console.log("$route.params.type:"+this.$route.params.type)
	        var type = this.$route.params.type;
	        if (type == "all") {
	        	this.goods = response.body.datas;
	        } else {
	        	this.goods = response.body.datas.filter(function(elem) {
				    // return elem.type == type;
				    return elem.type.indexOf(type) !== -1;
				});
	        }
	    }, function(response) {
	        console.log(response)
	    });
    }
  }
}

</script>






