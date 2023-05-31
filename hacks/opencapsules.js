let unlocks = {
    "Uncommon": {},
    "Rare": {},
    "Epic": {},
    "Legendary": {},
    "Chroma": {},
    "Mystical": {}
}

let unique = 'NONE'
let stop = false
let opened = 0
let packs = await fetch('/data/trians', { headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' } }).then(x => {return x.json()})
packOptions = await packs.ValuesnCapsules.map(x => x.name)
let trianguletClient

let marketOpened = true
if (window.location.pathname.split('/')[1] != 'market') marketOpened = false

let pack = prompt(`What pack do you want to open? These are the following options: ${packOptions.join(', ')}`)
if (!packOptions.includes(pack)) {
    alert('This is not a valid capsule. Currently, this is case sensitive (Will change in the future)')
} else {
    if (!marketOpened) {
        alert('You need to be on the market page. The script will automatically run on the other tab. DO NOT CLOSE THIS TAB!')
        trianguletClient = window.open('/market')
    }
    setTimeout(() => {
        if (marketOpened) {
            el = document.createElement('div')
            el.style.position = 'absolute'
            el.style.bottom = '10px'
            el.style.right = '10px'
            el.style.height = 'fit-content'
            el.style.width = '250px'
            el.style.padding = '18px'
            el.style.background = '#6de332'
            el.style.border = '2px solid rgba(0,0,0,0.3)'
            el.style.borderRadius = '15px'
            el.style.zIndex = '1000'
            el.classList.add('triangulet-hack-box')
            el.style.display = 'flex'
            el.style.flexDirection = 'column'
            el.style.textAlign = 'center'
            el.style.boxShadow = '0px 0px 15px 0px rgba(0,0,0,0.8)'
            el.style.overflow = 'hidden'
            document.querySelector('body').appendChild(el)
            dragElement(document.querySelector('.triangulet-hack-box'));
        } else {
            el = trianguletClient.document.createElement('div')
            el.style.position = 'absolute'
            el.style.bottom = '10px'
            el.style.right = '10px'
            el.style.height = 'fit-content'
            el.style.width = '250px'
            el.style.padding = '18px'
            el.style.background = '#6de332'
            el.style.border = '2px solid rgba(0,0,0,0.3)'
            el.style.borderRadius = '15px'
            el.style.zIndex = '1000'
            el.classList.add('triangulet-hack-box')
            el.style.display = 'flex'
            el.style.flexDirection = 'column'
            el.style.textAlign = 'center'
            el.style.boxShadow = '0px 0px 15px 0px rgba(0,0,0,0.8)'
            el.style.overflow = 'hidden'
            trianguletClient.document.querySelector('body').appendChild(el)
            dragElement(trianguletClient.document.querySelector('.triangulet-hack-box'));
        }

        setInterval(() => {
    if (!stop) {
                fetch('/api/open', { method: 'POST', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }, body: JSON.stringify({ "capsule": pack })}).then(x => x.json()).then(response => {
                        if (unlocks[response.rarity][response.trian]) unlocks[response.rarity][response.trian] ++
                        else unlocks[response.rarity][response.trian] = 1
                        opened ++
                        if (marketOpened) {
                            document.querySelector('.triangulet-hack-box').innerHTML = ''
                            document.querySelector('.triangulet-hack-box').innerHTML += `<h3 style="margin: 10px">${response.rarity} ${response.trian} (${unlocks[response.rarity][response.trian].toLocaleString()}x)</h3>`
                            document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0px">Coded by <a href="https://github.com/Piotr1178/Triangulet">Piotr</a>`
                            document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0px">CAPSULES OPENED: <b>${opened.toLocaleString()}</b></p>`
                            document.querySelector('.triangulet-hack-box').innerHTML += '<h2 style="margin: 3px; text-decoration: underline">Logs</h2>'
                        } else {
                            trianguletClient.document.querySelector('.triangulet-hack-box').innerHTML = ''
                            trianguletClient.document.querySelector('.triangulet-hack-box').innerHTML += `<h3 style="margin: 10px">${response.rarity} ${response.trian} (${unlocks[response.rarity][response.trian].toLocaleString()}x)</h3>`
                            trianguletClient.document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0px">Coded by <a href="https://github.com/Piotr1178/Triangulet">Piotr</a>`
                            trianguletClient.document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0px">CAPSULES OPENED: <b>${opened.toLocaleString()}</b></p>`
                            trianguletClient.document.querySelector('.triangulet-hack-box').innerHTML += '<h2 style="margin: 3px; text-decoration: underline">Logs</h2>'
                        }
                        Object.keys(unlocks).forEach(rarity => {
                            let percentageUnlocks = 0
                            Object.keys(unlocks[rarity]).forEach(trian => {
                                percentageUnlocks = percentageUnlocks + unlocks[rarity][trian]
                            })
                            percentageUnlocks = ((percentageUnlocks/opened)*100).toFixed(3);
                            if (marketOpened) document.querySelector('.triangulet-hack-box').innerHTML += `<h3 style="margin: 3px">${rarity} (${percentageUnlocks}%)</h3>`
                            else trianguletClient.document.querySelector('.triangulet-hack-box').innerHTML += `<h3 style="margin: 3px">${rarity} (${percentageUnlocks}%)</h3>`
                            Object.keys(unlocks[rarity]).forEach(ul => {
                                if (marketOpened) document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0">${ul}: <b>${unlocks[rarity][ul].toLocaleString()}x</b></p>`
                                else trianguletClient.document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0">${ul}: <b>${unlocks[rarity][ul].toLocaleString()}x</b></p>`
                            })
                        })
                    })
                }
            fetch('/data/user', { headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' } }).then(x => {return x.json()}).then(user => {
                if (marketOpened) document.querySelector('#tokenbalance').innerHTML = user.tokens.toLocaleString()
                else trianguletClient.document.querySelector('#tokenbalance').innerHTML = user.tokens.toLocaleString()
            })
            }, 1150)
        }, 1000)
}

// was lazy to write it lol https://www.w3schools.com/howto/howto_js_draggable.asp

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.querySelector('.triangulet-hack-box')) {
    document.querySelector('.triangulet-hack-box').onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Thanks for supporting me and my hacks: https://discord.gg/SvEhNNJWB2
console.log('%cThank you for using my hacks! 👍', 'font-size: 25px')
console.log('%cYou can find more hacks by Piotr using the link below:', 'font-size: 15px')
console.log('%chttps://github.com/Piotr1178/Triangulet/tree/main/hacks', 'font-size: 18px')
console.log('%chttps://discord.gg/SvEhNNJWB2', 'font-size: 13px')
