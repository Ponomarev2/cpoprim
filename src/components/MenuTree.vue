<script setup>
import { ref, reactive, onMounted } from 'vue'

const menuTree = [
  { name: 'Главная', subMenu: [] },
  { name: 'Новости', subMenu: [] },
  {
    name: 'Сведения об организации',
    subMenu: [
      { name: 'Охрана труда', subMenu: [] },
      { name: 'Основные сведения', subMenu: [] },
      { name: 'Противодействие коррупции', subMenu: [] },
      { name: 'Структура', subMenu: [] },
      { name: 'Профсоюз', subMenu: [] },
      { name: 'Состав сотрудников и контактные данные', subMenu: [] }
    ]
  },
  {
    name: 'Направления работы',
    subMenu: [
      { name: 'Мероприятия', subMenu: [] },
      { name: 'Профориентация', subMenu: [] },
      { name: 'Олимпиада учителей', subMenu: [] },
      { name: 'Казачье образование', subMenu: [] },
      { name: 'Организация перевозок', subMenu: [] }
    ]
  },
  { name: 'Деятельность', subMenu: [] },
  { name: 'Планы', subMenu: [] },
  { name: 'Горячиe линии', subMenu: [] },
  { name: 'Контакты', subMenu: [] }
]

function onMouseOver({ target }) {
  // console.log('over', target);
  if (
    target.parentNode.childNodes.length > 1 &&
    target.parentNode.childNodes[1].className === 'sub-menu'
  ) {
    target.parentNode.childNodes[1].style.visibility = 'visible'
  }
}

function onMouseLeave({ target }) {
  // console.log('leave', target);
  if (target.childNodes.length > 1 && target.className === 'tab') {
    target.childNodes[1].style.visibility = 'hidden'
  }
}

function DFS(node) {
  const tree = node.childNodes
  if (node.className === 'sub-menu') {
    node.style.top = -node.parentNode.childNodes[0].offsetHeight + 'px'
  }
  if (tree.length === 0 && node.data !== '') {
    return
  } else {
    for (let index = 0; index < tree.length; index++) {
      const elem = tree[index]
      DFS(elem)
    }
  }
}

onMounted(() => {
  const menu = document.getElementById('menu')
  DFS(menu)
  const tree = menu.childNodes
  let accHeight = 0
  let menuHeight = 0
  console.log(tree)
  for (let index = 0; index < tree.length; index++) {
    const element = tree[index]
    // console.log(element)
    // console.log(accHeight)
    if (element.className === 'tab') {
      element.style.top = -accHeight + 'px'
    }
    if (element.childNodes.length > 1) {
      if (element.childNodes[1].className === 'sub-menu') {
        menuHeight += element.childNodes[0].offsetHeight
        accHeight += element.childNodes[1].offsetHeight
      }
    }
  }
  console.log(menu, menuHeight)
  menu.style.height = menuHeight + 'px'
})
</script>

<template>
  <div class="menu" id="menu">
    <div
      v-for="(item, i) in menuTree"
      class="tab"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <div class="menu-elem">
        {{ item.name }}
        <div v-if="item.subMenu.length > 0" class="sub-menu-icon">▶️</div>
      </div>
      <div v-if="item.subMenu.length > 0" class="sub-menu">
        <div v-for="(item2, j) in item.subMenu" class="tab" @mouseleave="onMouseLeave">
          <div class="menu-elem">
            {{ item2.name }}
            <div v-if="item2.subMenu.length > 0" class="sub-menu-icon">▶️</div>
          </div>
          <div v-if="item2.subMenu.length > 0" class="sub-menu">
            <div v-for="(item3, k) in item2.subMenu" class="tab">
              <div class="menu-elem">{{ item3.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: absolute;
  display: block;
  z-index: 3;
  width: 100%;
  background-color: white;
  font-weight: 600;
}

.menu > div {
  left: 1px;
}

.sub-menu {
  left: calc(100% - 1px);
  visibility: hidden;
}

.tab {
  position: relative;
}

.menu-elem {
  display: flex;
  width: calc(100% - 2px);
  height: min-content;
  color: rgb(9, 2, 40);
  font-size: normal;
  line-height: 18px;
  outline: 1px solid gray;
  cursor: pointer;
  padding: 5px;
  padding-left: 7px;
  background-color: white;
  align-items: center;
  justify-content: space-between;
}

.menu-elem:hover {
  background-color: lightgrey;
  transition: background-color 200ms;
}

.sub-menu-icon {
}
</style>
