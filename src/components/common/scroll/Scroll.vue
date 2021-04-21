<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  //1、导入better-scroll
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //用document.querySelector拿东西可能不准确，因为另外有相同的属性的时候，需要进行分辨
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType, //这里最好不要写死，以确定要不要监听滚动位置
        pullUpLoad: this.pullUpLoad //确定是不是需要上拉
      })

      //1、创建better-scroll
      //2、监听滚动位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })

      //3、监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      //回到顶部
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time);
      },
      // 下拉再次加载内容
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>