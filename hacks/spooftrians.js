let color = {
    "Uncommon": "#4bc22e",
    "Rare": "#0a14fa",
    "Epic": "#be0000",
    "Legendary": "#ff910f",
    "Chroma": "#00ccff",
    "Mystical": "#a335ee"
}

        if (window.location.pathname.split('/')[1] == 'trians') {
            capsules = await fetch('/data/trians', {credentials: 'include', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }}).then(x => {return x.json()})
            capsulesReached = -1
            capsules['ValuesnCapsules'].forEach(capsule => {
                capsulesReached = capsulesReached + 1
                let triansAdded = []
                capsule.trians.forEach(trian => {
                    triansAdded.push(`<div class="styles__blookContainer___3JrKb-camelCase" role="button" tabindex="0" onclick="viewTrian('${trian.name}', '${trian.rarity}', '${capsule.name}')"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase" id="${trian.name}"><img draggable="false" src="/media/capsules/${capsule.name}/trians/${trian.name}.png" class="styles__blook___1R6So-camelCase"></div><div class="styles__blookText___3AMdK-camelCase" id="triannumcircle${trian.name}" style="background-color: ${color[trian['rarity']]}">1</div></div>`)
                })
                document.querySelectorAll('.styles__left___9beun-camelCase > #trianscontainer > .styles__setHolder___rVq3Z-camelCase > .styles__setBlooks___3xamH-camelCase')[capsulesReached].innerHTML = triansAdded.join('')
            })
            alert(`Spoofed all trians!`)
        } else {
            alert('You need to be on the trians page. The script will automatically run on the other tab.')
            const trianguletClient = window.open('/trians')
            capsules = await fetch('/data/trians', {credentials: 'include', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }}).then(x => {return x.json()})
            setTimeout(async () => {
                capsulesReached = -1
                capsules['ValuesnCapsules'].forEach(capsule => {
                    capsulesReached = capsulesReached + 1
                    let triansAdded = []
                    capsule.trians.forEach(trian => {
                        triansAdded.push(`<div class="styles__blookContainer___3JrKb-camelCase" role="button" tabindex="0" onclick="viewTrian('${trian.name}', '${trian.rarity}', '${capsule.name}')"><div class="styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase" id="${trian.name}"><img draggable="false" src="/media/capsules/${capsule.name}/trians/${trian.name}.png" class="styles__blook___1R6So-camelCase"></div><div class="styles__blookText___3AMdK-camelCase" id="triannumcircle${trian.name}" style="background-color: ${color[trian['rarity']]}">1</div></div>`)
                    })
                    trianguletClient.document.querySelectorAll('.styles__left___9beun-camelCase > #trianscontainer > .styles__setHolder___rVq3Z-camelCase > .styles__setBlooks___3xamH-camelCase')[capsulesReached].innerHTML = triansAdded.join('')
                })
                trianguletClient.alert(`Spoofed all trians!`)
            }, 1000)
        }

function viewTrian(trian, rarity, capsule) {
    document.querySelector('#trianbackground').src = `/media/capsules/${capsule}/background.png`
    document.querySelector('#trianname').innerHTML = trian
    document.querySelector('#trianrarity').innerHTML = rarity
    document.querySelector('#trianrarity').style.color = color[rarity]
    document.querySelector('#trianquantity').innerHTML = '1 Owned'
    document.querySelector('#trianimg').src = `/media/capsules/${capsule}/trians/${trian}.png`
}

// Thanks for supporting me and my hacks: https://discord.gg/SvEhNNJWB2
console.log('%cThank you for using my hacks! 👍', 'font-size: 25px')
console.log('%cYou can find more hacks by Piotr using the link below:', 'font-size: 15px')
console.log('%chttps://github.com/Piotr1178/Triangulet/tree/main/hacks', 'font-size: 18px')
console.log('%chttps://discord.gg/SvEhNNJWB2', 'font-size: 13px')
