function generatorRubbish (target) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常', '應該沒問題', '很輕鬆']

  let collection = []

  if (target === undefined) {
    return '咦？你沒有選擇對象喔！'
  }

  collection = collection.concat(target)

  // 判斷使用者選擇的對象
  if (target === '工程師') {
    collection = collection.concat(task.engineer[Math.floor(Math.random() * task.engineer.length)])
  } else if (target === '設計師') {
    collection = collection.concat(task.designer[Math.floor(Math.random() * task.designer.length)])
  } else if (target === '創業家') {
    collection = collection.concat(task.entrepreneur[Math.floor(Math.random() * task.entrepreneur.length)])
  }

  collection = collection.concat(phrase[Math.floor(Math.random() * phrase.length)])

  let rubbish = '身為一個'
  for (let i = 0; i < collection.length; i++) {
    rubbish += collection[i]
  }
  rubbish += '吧！'

  return rubbish
}

module.exports = generatorRubbish
