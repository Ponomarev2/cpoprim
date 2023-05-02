<script setup>
import MenuElem from './MenuElem.vue'
import Menu from './Menu.vue'

import { ref, reactive, onMounted } from 'vue'


function DFS(node, acc){
  let accHeight = acc;
  const tree = node.childNodes;
  // console.log(tree);
  if(tree.length === 0){
    // console.log('000', accHeight);
    return (accHeight + 28);
  }else{
    for (let index = 0; index < tree.length; index++) {
      const elem = tree[index];
      accHeight += DFS(elem, accHeight);
    }
  }
  return accHeight;
}


onMounted(() => {
  const tree = document.getElementById('menu').childNodes;
  console.log(tree);
  let accHeight = 0;
  for (let index = 0; index < tree.length; index++) {
    const elem = tree[index];
    elem.style.top = -accHeight + 'px';
    console.log(elem);
    accHeight += DFS(elem, accHeight);
    console.log(accHeight);
  }
})

</script>


<template>
  <div>
    <div class="menu" id="menu">
      <div class="menu-elem">
        <MenuElem :label="'tab 1 level 1'"/>
        <div class="sub-menu">
          <Menu/>
        </div>
      </div>

      <div class="menu-elem">
        <MenuElem :label="'tab 2 level 1'"/>
        <div class="sub-menu">
          <Menu/>
        </div>
      </div>
      
    </div>
  </div>
  
</template>


<style scoped>

.menu{
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 3;
}

.sub-menu{
  left: 230px;
  top: calc(-1.8em - 2px);
}

.menu-elem{
  position: relative;
}

</style>
