<template>
  <div>
      hello test1
      <el-table :data="tableData" id="table">
        <el-table-column prop="test"></el-table-column>
      </el-table>
      <el-button @click="handleClick">
        截图
      </el-button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  data() {
    return {
      tableData: [
        {
          test: 666
        }
      ]
    }
  },
  methods: {
    handleClick() {
      html2canvas(document.getElementById('table')).then((canvas) => {
        console.log(canvas.toDataURL())
        window.aaa = canvas
      })
    }
  }
}
</script>

<style>

</style>