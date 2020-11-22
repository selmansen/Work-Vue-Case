<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.table{
  box-shadow: 0 0 15px 0px rgba(#000, .1);
}
.table-striped tbody tr:nth-of-type(odd){
  background: #f8f8f8;
}
.table td, .table th{
  border:0;
}
</style>