let menu = [
  {
    menuId: '1',
    superId: '0',
    menuName: '一级标题1'
  },
  {
    menuId: '2',
    superId: '0',
    menuName: '一级标题2'
  },
  {
    menuId: '3',
    superId: '1',
    menuName: '二级标题1'
  },
  {
    menuId: '43',
    superId: '2',
    menuName: '二级标题2'
  },
  {
    menuId: '45',
    superId: '3',
    menuName: '三级标题1'
  },
  {
    menuId: '46',
    superId: '43',
    menuName: '三级标题2'
  },
  {
    menuId: '100',
    superId: '46',
    menuName: '四级标题2'
  }
]

let name = '四级标题2'

let findTree = function (name) {
  let res = [] // 结果

  const findFather = (arr, child) => {
    if (child.superId === '0') return;
    let father = arr.find(e => e.menuId === child.superId) || null
    if (father) {
      res.push(father.menuName)
      findFather(arr, father)
    }
  }
  let lastChild = menu.find(e => e.menuName === name)
  if (!lastChild) return res;
  findFather(menu, lastChild)
  return res
}
console.log(name)
console.log(findTree(name))

