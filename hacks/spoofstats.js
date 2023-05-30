let spoofed = [0, 0, 0]
let prompts = [['tokens', 'tokens'], ['capsules opened', 'opened'], ['trians unlocked', 'trians']]
let trianAmount = 0
let capsules = await fetch('/data/trians', {credentials: 'include', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }}).then(x => {return x.json()})
capsules['ValuesnCapsules'].forEach(capsule => {
    trianAmount = trianAmount + capsule.trians.length
})
for (i = 0; i < spoofed.length; i++) spoofed[i] = parseInt(prompt(`How many ${prompts[i][0]} do you want to spoof?`))
if (spoofed[2] > trianAmount) {
    alert(`Only ${trianAmount.toLocaleString()} trians exist in the game. Defaulting to ${trianAmount.toLocaleString()}`)
    spoofed[2] = trianAmount
}
if (window.location.pathname.split('/')[1] == 'stats') {
   for (i = 0; i < prompts.length; i++) document.querySelector(`#${prompts[i][1]}`).innerHTML = spoofed[i].toLocaleString()
    alert('Stats spoofed!')
} else {
    alert('You need to be on the stats page. The script will automatically run on the other tab. DO NOT CLOSE THIS TAB!')
    const trianguletClient = window.open('/stats')
    setTimeout(() => {
        for (i = 0; i < prompts.length; i++) trianguletClient.document.querySelector(`#${prompts[i][1]}`).innerHTML = spoofed[i].toLocaleString()

        trianguletClient.alert('Stats spoofed!')
    }, 750)
}

// Thanks for supporting me and my hacks: https://discord.gg/SvEhNNJWB2
console.log('%cThank you for using my hacks! 👍', 'font-size: 25px')
console.log('%cYou can find more hacks by Piotr using the link below:', 'font-size: 15px')
console.log('%chttps://github.com/Piotr1178/Triangulet/tree/main/hacks', 'font-size: 18px')
console.log('%chttps://discord.gg/SvEhNNJWB2', 'font-size: 13px')
console.log('TrianguletGrinder is the one who thought of the idea for this hack.')
