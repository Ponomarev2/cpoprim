<script setup>
import MenuElem from './MenuElem.vue'
import Menu from './Menu.vue'

import { ref, reactive, onMounted } from 'vue'

function koo(){
  console.log(document.getElementById('menu'));
  console.log(document.getElementById('menu').offsetHeight);
}

function DFS(node, acc){
  const tree = node.childNodes;
  console.log(node);
  console.log(tree);
  if(tree.length === 0 && node.data !== ""){
    console.log('000', acc);
    console.log('000', node.parentNode);
    acc += node.parentNode.offsetHeight;
    console.log('001', acc);
    return acc;
  }else{
    for (let index = 0; index < tree.length; index++) {
      const elem = tree[index];
      acc = DFS(elem, acc);
    }
  }
  return acc;
}


onMounted(() => {
  const tree = document.getElementById('menu').childNodes;
  let accHeight = 0;
  for (let index = 0; index < tree.length; index++) {
    const elem = tree[index];
    elem.style.top = -accHeight + 'px';
    console.log(elem);
    accHeight = DFS(elem, accHeight);
    console.log(accHeight);
    break;
  }
})

</script>


<template>
  <div>
    <button @click="koo">hjk</button>
    <div class="menu" id="menu">
      <div class="menu-tab">
        <MenuElem :label="'tab 1 level 1'"/>
        <div class="sub-menu">
          <Menu/>
        </div>
      </div>

      <div class="menu-tab">
        <MenuElem :label="'tab 2 level 1'"/>
        <!-- <div class="sub-menu">
          <Menu/>
        </div> -->
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
  width: 100%;
  height: 1000px;
}

.sub-menu{
  left: 230px;
  top: calc(-1.8em - 2px);
}

.menu-tab{
  position: relative;
}

</style>
