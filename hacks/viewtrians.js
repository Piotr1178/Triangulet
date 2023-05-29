let trians = {}
let color = {
    "Uncommon": "#4bc22e",
    "Rare": "#4b8bc2",
    "Epic": "#be0000",
    "Legendary": "##ff910f",
    "Chroma": "#00ccff",
    "Mystical": "#a335ee"
}

let username = prompt('What user\'s blooks are you looking up?')

fetch('/api/finduser', {method: 'POST', credentials: 'include', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }, body: JSON.stringify({ username: username })}).then(x => {return x.json()}).then(async (a) => {
    if (a.error) alert(a.error)
    else {
        if (window.location.pathname.split('/')[1] == 'trians') {
            capsules = await fetch('/data/trians', {credentials: 'include', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }}).then(x => {return x.json()})
            capsulesReached = -1
            for (i = 0; i < a.trians.length; i++) trians[a.trians[i].trian] = a.trians[i].quantity
            capsules['ValuesnCapsules'].forEach(capsule => {
                capsulesReached = capsulesReached + 1
                let triansAdded = []
                capsule.trians.forEach(trian => {
                    if (trians[trian.name]) triansAdded.push(`<div class="styles__blookContainer___3JrKb-camelCase" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase" id="${trian.name}"><img draggable="false" src="/media/capsules/${capsule.name}/trians/${trian.name}.png" class="styles__blook___1R6So-camelCase"></div><div class="styles__blookText___3AMdK-camelCase" id="triannumcircle${trian.name}" style="background-color: ${color[trian['rarity']]}">${trians[trian.name]}</div></div>`)
                    else triansAdded.push(`<div class="styles__blookContainer___3JrKb-camelCase" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase styles__lockedBlook___3oGaX-camelCase"><img draggable="false" src="/media/capsules/${capsule.name}/trians/${trian.name}.png" class="styles__blook___1R6So-camelCase"></div><i class="fas fa-lock styles__blookLock___3Kgua-camelCase"></i></div>`)
                })
                document.querySelectorAll('.styles__left___9beun-camelCase > #trianscontainer > .styles__setHolder___rVq3Z-camelCase > .styles__setBlooks___3xamH-camelCase')[capsulesReached].innerHTML = triansAdded.join('')
            })
            alert(`You are viewing ${username}'s trians`)
        } else {
            alert('You need to be on the trians page.')
            const trianguletClient = window.open('/trians')
            capsules = await fetch('/data/trians', {credentials: 'include', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }}).then(x => {return x.json()})
            setTimeout(async () => {
                capsulesReached = -1
                for (i = 0; i < a.trians.length; i++) trians[a.trians[i].trian] = a.trians[i].quantity
                capsules['ValuesnCapsules'].forEach(capsule => {
                    capsulesReached = capsulesReached + 1
                    let triansAdded = []
                    capsule.trians.forEach(trian => {
                        if (trians[trian.name]) triansAdded.push(`<div class="styles__blookContainer___3JrKb-camelCase" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase" id="${trian.name}"><img draggable="false" src="/media/capsules/${capsule.name}/trians/${trian.name}.png" class="styles__blook___1R6So-camelCase"></div><div class="styles__blookText___3AMdK-camelCase" id="triannumcircle${trian.name}" style="background-color: ${color[trian['rarity']]}">${trians[trian.name]}</div></div>`)
                        else triansAdded.push(`<div class="styles__blookContainer___3JrKb-camelCase" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase styles__lockedBlook___3oGaX-camelCase"><img draggable="false" src="/media/capsules/${capsule.name}/trians/${trian.name}.png" class="styles__blook___1R6So-camelCase"></div><i class="fas fa-lock styles__blookLock___3Kgua-camelCase"></i></div>`)
                    })
                    trianguletClient.document.querySelectorAll('.styles__left___9beun-camelCase > #trianscontainer > .styles__setHolder___rVq3Z-camelCase > .styles__setBlooks___3xamH-camelCase')[capsulesReached].innerHTML = triansAdded.join('')
                })
                trianguletClient.alert(`You are viewing ${username}'s trians`)
            }, 1000)
        }
    }
})

// Thanks for supporting me and my hacks: https://discord.gg/SvEhNNJWB2
console.log('%cThank you for using my hacks! 👍', 'font-size: 25px')
console.log('%cYou can find more hacks by Piotr using the link below:', 'font-size: 15px')
console.log('%chttps://github.com/Piotr1178/Triangulet/tree/main/hacks', 'font-size: 18px')
console.log('%chttps://discord.gg/SvEhNNJWB2', 'font-size: 13px')
