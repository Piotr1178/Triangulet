let packs = await fetch('/data/trians', {
    headers: {
        'Accept': 'application/json',
        'authorization': triangulet.tokenraw,
        'Content-Type': 'application/json'
    }
}).then(x => {return x.json()})
packOptions = await packs.ValuesnCapsules.map(x=>x.name)

let color = {
    "Uncommon": "#4bc22e",
    "Rare": "#0a14fa",
    "Epic": "#be0000",
    "Legendary": "#ff910f",
    "Chroma": "#00ccff",
    "Mystical": "#a335ee"
}

let rarity, trian
let trianCapsule = 0

function deleteOverlay() {
    document.querySelector('.capsuleContainer').remove()
}

function openAnimation() {
    document.querySelector('#overlay').onclick = ''
    document.querySelector('#capsuletop').style.animation = '0.8s ease 0s 1 normal forwards running opencapsule'
    setTimeout(()=>{
        document.querySelector('#capsule').style.animation = '0.2s ease 0s 1 normal forwards running fade-out'
        document.querySelector('.trianglecontainer').style.animation = '0.2s ease 0s 1 normal forwards running fade-out'
        el2 = document.createElement('div')
        let openanimation
        el2.classList.add('styles__openContainer___3paFG-camelCase')
        if (rarity === "Uncommon") openanimation = "styles__openingContainer___2OmG9-camelCase"
        else if (rarity === "Rare") openanimation = "styles__openingContainer___2OmG9-camelCase"
        else if (rarity === "Epic") openanimation = "styles__openingContainerEpic___3TzCR-camelCase"
        else if (rarity === "Legendary") openanimation = "styles__openingContainerLegendary___RbJZ_-camelCase"
        else if (rarity === "Chroma") openanimation = "styles__openingContainerChroma___3VBd5-camelCase"
        else if (rarity === "Mystical") openanimation = "styles__openingContainerChroma___3VBd5-camelCase"
        el2.classList.add(openanimation)
        let backgroundId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
        let background = document.getElementById("background")
        background.id = backgroundId
        setTimeout(function () {
                                        if (rarity === "Uncommon") {
                                            let config = {
                                                type: Phaser.WEBGL,
                                                width: window.innerWidth,
                                                height: window.innerHeight,
                                                parent: document.getElementById(backgroundId),
                                                render: {
                                                    transparent: true
                                                },
                                                scene: {
                                                    preload: preload,
                                                    create: create
                                                }
                                            };

                                            game = new Phaser.Game(config);

                                            function preload() {
                                                this.load.svg("1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                            }

                                            function create() {
                                                particle1 = this.add.particles('1');
                                                particle2 = this.add.particles('2');
                                                particle3 = this.add.particles('3');
                                                particle4 = this.add.particles('4');
                                                particle5 = this.add.particles('5');
                                                particle6 = this.add.particles('6');
                                                particle7 = this.add.particles('7');

                                                let emitter1 = particle1.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 800
                                                    },
                                                    angle: {
                                                        min: -115,
                                                        max: -65
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    velocityFromRotation: true,
                                                    gravityY: 700,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth / 2 - 25,
                                                        max: window.innerWidth / 2 + 25
                                                    },
                                                    y: window.innerHeight / 2 + 25,
                                                });

                                                let emitter2 = particle2.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 800
                                                    },
                                                    angle: {
                                                        min: -115,
                                                        max: -65
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    velocityFromRotation: true,
                                                    gravityY: 700,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth / 2 - 25,
                                                        max: window.innerWidth / 2 + 25
                                                    },
                                                    y: window.innerHeight / 2 + 25,
                                                });

                                                let emitter3 = particle3.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 800
                                                    },
                                                    angle: {
                                                        min: -115,
                                                        max: -65
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    velocityFromRotation: true,
                                                    gravityY: 700,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth / 2 - 25,
                                                        max: window.innerWidth / 2 + 25
                                                    },
                                                    y: window.innerHeight / 2 + 25,
                                                });

                                                let emitter4 = particle4.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 800
                                                    },
                                                    angle: {
                                                        min: -115,
                                                        max: -65
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },

                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    velocityFromRotation: true,
                                                    gravityY: 700,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth / 2 - 25,
                                                        max: window.innerWidth / 2 + 25
                                                    },
                                                    y: window.innerHeight / 2 + 25,
                                                });

                                                let emitter5 = particle5.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 800
                                                    },
                                                    angle: {
                                                        min: -115,
                                                        max: -65
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    velocityFromRotation: true,
                                                    gravityY: 700,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth / 2 - 25,
                                                        max: window.innerWidth / 2 + 25
                                                    },
                                                    y: window.innerHeight / 2 + 25,
                                                });

                                                let emitter6 = particle6.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 800
                                                    },
                                                    angle: {
                                                        min: -115,
                                                        max: -65
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    velocityFromRotation: true,
                                                    gravityY: 700,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth / 2 - 25,
                                                        max: window.innerWidth / 2 + 25
                                                    },
                                                    y: window.innerHeight / 2 + 25,
                                                });

                                                let emitter7 = particle7.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 800
                                                    },
                                                    angle: {
                                                        min: -115,
                                                        max: -65
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    velocityFromRotation: true,
                                                    gravityY: 700,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth / 2 - 25,
                                                        max: window.innerWidth / 2 + 25
                                                    },
                                                    y: window.innerHeight / 2 + 25,
                                                });

                                                setTimeout(() => {
                                                    emitter1.stop();
                                                    emitter2.stop();
                                                    emitter3.stop();
                                                    emitter4.stop();
                                                    emitter5.stop();
                                                    emitter6.stop();
                                                    emitter7.stop();
                                                }, 1500);
                                            }
                                        } else if (rarity === "Rare") {
                                            let config = {
                                                type: Phaser.WEBGL,
                                                width: window.innerWidth,
                                                height: window.innerHeight,
                                                parent: document.getElementById(backgroundId),
                                                render: {
                                                    transparent: true
                                                },
                                                scene: {
                                                    preload: preload,
                                                    create: create
                                                }
                                            };

                                            game = new Phaser.Game(config);

                                            function preload() {
                                                this.load.svg("1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                            }

                                            function create() {
                                                particle1 = this.add.particles('1');
                                                particle2 = this.add.particles('2');
                                                particle3 = this.add.particles('3');
                                                particle4 = this.add.particles('4');
                                                particle5 = this.add.particles('5');
                                                particle6 = this.add.particles('6');
                                                particle7 = this.add.particles('7');

                                                let emitter1 = particle1.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -70,
                                                        max: -20
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: -25,
                                                        max: 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter2 = particle2.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -70,
                                                        max: -20
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: -25,
                                                        max: 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter3 = particle3.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -70,
                                                        max: -20
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: -25,
                                                        max: 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter4 = particle4.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -70,
                                                        max: -20
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: -25,
                                                        max: 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter5 = particle5.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -70,
                                                        max: -20
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: -25,
                                                        max: 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter6 = particle6.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -70,
                                                        max: -20
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: -25,
                                                        max: 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter7 = particle7.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -70,
                                                        max: -20
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: -25,
                                                        max: 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter8 = particle1.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -160,
                                                        max: -110
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth - 25,
                                                        max: window.innerWidth + 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter9 = particle2.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -160,
                                                        max: -110
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth - 25,
                                                        max: window.innerWidth + 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter10 = particle3.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -160,
                                                        max: -110
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth - 25,
                                                        max: window.innerWidth + 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter11 = particle4.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -160,
                                                        max: -110
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth - 25,
                                                        max: window.innerWidth + 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter12 = particle5.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -160,
                                                        max: -110
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth - 25,
                                                        max: window.innerWidth + 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter13 = particle6.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -160,
                                                        max: -110
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth - 25,
                                                        max: window.innerWidth + 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                let emitter14 = particle7.createEmitter({

                                                    speed: {
                                                        min: 700,
                                                        max: 750
                                                    },
                                                    angle: {
                                                        min: -160,
                                                        max: -110
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    gravityY: 500,
                                                    frequency: 75,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: window.innerWidth - 25,
                                                        max: window.innerWidth + 25
                                                    },
                                                    y: window.innerHeight,
                                                });

                                                setTimeout(() => {
                                                    emitter1.stop();
                                                    emitter2.stop();
                                                    emitter3.stop();
                                                    emitter4.stop();
                                                    emitter5.stop();
                                                    emitter6.stop();
                                                    emitter7.stop();
                                                    emitter8.stop();
                                                    emitter9.stop();
                                                    emitter10.stop();
                                                    emitter11.stop();
                                                    emitter12.stop();
                                                    emitter13.stop();
                                                    emitter14.stop();
                                                }, 1500);
                                            }
                                        } else if (rarity === "Epic") {
                                            let config = {
                                                type: Phaser.WEBGL,
                                                width: window.innerWidth,
                                                height: window.innerHeight,
                                                parent: document.getElementById(backgroundId),
                                                render: {
                                                    transparent: true
                                                },
                                                scene: {
                                                    preload: preload,
                                                    create: create
                                                }
                                            };

                                            game = new Phaser.Game(config);

                                            function preload() {
                                                this.load.svg("1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                            }

                                            function create() {
                                                particle1 = this.add.particles('1');
                                                particle2 = this.add.particles('2');
                                                particle3 = this.add.particles('3');
                                                particle4 = this.add.particles('4');
                                                particle5 = this.add.particles('5');
                                                particle6 = this.add.particles('6');
                                                particle7 = this.add.particles('7');

                                                particle1.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -50,
                                                        max: 0
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: 0,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle2.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -50,
                                                        max: 0
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: 0,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle3.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -50,
                                                        max: 0
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: 0,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle4.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -50,
                                                        max: 0
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: 0,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle5.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -50,
                                                        max: 0
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: 0,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle6.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -50,
                                                        max: 0
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: 0,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle7.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -50,
                                                        max: 0
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: 0,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle1.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -180,
                                                        max: -130
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: game.config.width,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle2.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -180,
                                                        max: -130
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: game.config.width,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle3.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -180,
                                                        max: -130
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: game.config.width,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle4.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -180,
                                                        max: -130
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: game.config.width,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle5.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -180,
                                                        max: -130
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: game.config.width,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle6.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -180,
                                                        max: -130
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: game.config.width,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });

                                                particle7.createEmitter({

                                                    speed: 650,
                                                    angle: {
                                                        min: -180,
                                                        max: -130
                                                    },
                                                    velocity: {
                                                        min: 600,
                                                        max: 750
                                                    },
                                                    gravityY: 400,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: game.config.width,
                                                    y: {
                                                        min: 0,
                                                        max: game.config.width
                                                    }
                                                });
                                            }
                                        } else if (rarity === "Legendary") {
                                            let config = {
                                                type: Phaser.WEBGL,
                                                width: window.innerWidth,
                                                height: window.innerHeight,
                                                parent: document.getElementById(backgroundId),
                                                render: {
                                                    transparent: true
                                                },
                                                scene: {
                                                    preload: preload,
                                                    create: create
                                                }
                                            };

                                            game = new Phaser.Game(config);

                                            function preload() {
                                                this.load.svg("1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                            }

                                            function create() {
                                                particle1 = this.add.particles('1');
                                                particle2 = this.add.particles('2');
                                                particle3 = this.add.particles('3');
                                                particle4 = this.add.particles('4');
                                                particle5 = this.add.particles('5');
                                                particle6 = this.add.particles('6');
                                                particle7 = this.add.particles('7');

                                                particle1.createEmitter({

                                                    speed: 500,
                                                    angle: 90,
                                                    velocity: 180,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });

                                                particle2.createEmitter({

                                                    angle: 90,
                                                    speed: 500,
                                                    velocity: 180,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });

                                                particle3.createEmitter({

                                                    angle: 90,
                                                    speed: 500,
                                                    velocity: 180,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });

                                                particle4.createEmitter({

                                                    angle: 90,
                                                    speed: 500,
                                                    velocity: 180,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });

                                                particle5.createEmitter({

                                                    angle: 90,
                                                    speed: 500,
                                                    velocity: 180,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });

                                                particle6.createEmitter({

                                                    angle: 90,
                                                    speed: 500,
                                                    velocity: 180,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });

                                                particle7.createEmitter({

                                                    angle: 90,
                                                    speed: 500,
                                                    velocity: 180,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                            }
                                        } else if (rarity === "Chroma") {
                                            let config = {
                                                type: Phaser.WEBGL,
                                                width: window.innerWidth,
                                                height: window.innerHeight,
                                                parent: document.getElementById(backgroundId),
                                                render: {
                                                    transparent: true
                                                },
                                                scene: {
                                                    preload: preload,
                                                    create: create
                                                }
                                            };

                                            game = new Phaser.Game(config);

                                            function preload() {
                                                this.load.svg("1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                            }

                                            function create() {
                                                particle1 = this.add.particles('1');
                                                particle2 = this.add.particles('2');
                                                particle3 = this.add.particles('3');
                                                particle4 = this.add.particles('4');
                                                particle5 = this.add.particles('5');
                                                particle6 = this.add.particles('6');
                                                particle7 = this.add.particles('7');
                                                randomy1 = game.config.height - 651
                                                randomy2 = game.config.height - 652
                                                randomy3 = game.config.height - 653
                                                randomy4 = game.config.height - 654
                                                randomy5 = game.config.height - 655
                                                randomy6 = game.config.height - 656
                                                randomy7 = game.config.height - 657
                                                particle1.createEmitter({
                                                    speed: 700,
                                                    angle: -30,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 350,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy1,
                                                        max: game.config.height
                                                    },
                                                    x: 0
                                                });

                                                particle2.createEmitter({
                                                    speed: 700,
                                                    angle: -30,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 300,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy2,
                                                        max: game.config.height
                                                    },
                                                    x: 0
                                                });

                                                particle3.createEmitter({
                                                    speed: 700,
                                                    angle: -30,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 400,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy3,
                                                        max: game.config.height
                                                    },
                                                    x: 0
                                                });

                                                particle4.createEmitter({
                                                    speed: 700,
                                                    angle: -30,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 350,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy4,
                                                        max: game.config.height
                                                    },
                                                    x: 0
                                                });

                                                particle5.createEmitter({
                                                    speed: 700,
                                                    angle: -30,
                                                    velocity: 650,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 400,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy5,
                                                        max: game.config.height
                                                    },
                                                    x: 0
                                                });

                                                particle6.createEmitter({
                                                    speed: 700,
                                                    angle: -30,
                                                    velocity: 750,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 200,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy6,
                                                        max: game.config.height
                                                    },
                                                    x: 0
                                                });

                                                particle7.createEmitter({
                                                    speed: 700,
                                                    angle: -30,
                                                    velocity: 450,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 300,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy7,
                                                        max: game.config.height
                                                    },
                                                    x: 0
                                                });
                                                particle1.createEmitter({
                                                    speed: 700,
                                                    angle: -150,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 350,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy1,
                                                        max: game.config.height
                                                    },
                                                    x: game.config.width
                                                });

                                                particle2.createEmitter({
                                                    speed: 700,
                                                    angle: -150,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 300,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy2,
                                                        max: game.config.height
                                                    },
                                                    x: game.config.width
                                                });

                                                particle3.createEmitter({
                                                    speed: 700,
                                                    angle: -150,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 400,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy3,
                                                        max: game.config.height
                                                    },
                                                    x: game.config.width
                                                });

                                                particle4.createEmitter({
                                                    speed: 700,
                                                    angle: -150,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 350,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy4,
                                                        max: game.config.height
                                                    },
                                                    x: game.config.width
                                                });

                                                particle5.createEmitter({
                                                    speed: 700,
                                                    angle: -150,
                                                    velocity: 650,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 400,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy5,
                                                        max: game.config.height
                                                    },
                                                    x: game.config.width
                                                });

                                                particle6.createEmitter({
                                                    speed: 700,
                                                    angle: -150,
                                                    velocity: 750,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 200,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy6,
                                                        max: game.config.height
                                                    },
                                                    x: game.config.width
                                                });

                                                particle7.createEmitter({
                                                    speed: 700,
                                                    angle: -150,
                                                    velocity: 450,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 300,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: randomy7,
                                                        max: game.config.height
                                                    },
                                                    x: game.config.width
                                                });
                                                particle1.createEmitter({
                                                    speed: 700,
                                                    angle: 30,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 350,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 601
                                                    },
                                                    x: 0
                                                });

                                                particle2.createEmitter({
                                                    speed: 700,
                                                    angle: 30,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 300,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 602
                                                    },
                                                    x: 0
                                                });

                                                particle3.createEmitter({
                                                    speed: 700,
                                                    angle: 30,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 400,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 603
                                                    },
                                                    x: 0
                                                });

                                                particle4.createEmitter({
                                                    speed: 700,
                                                    angle: 30,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 350,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 604
                                                    },
                                                    x: 0
                                                });

                                                particle5.createEmitter({
                                                    speed: 700,
                                                    angle: 30,
                                                    velocity: 650,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 400,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 605
                                                    },
                                                    x: 0
                                                });

                                                particle6.createEmitter({
                                                    speed: 700,
                                                    angle: 30,
                                                    velocity: 750,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 200,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 606
                                                    },
                                                    x: 0
                                                });

                                                particle7.createEmitter({
                                                    speed: 700,
                                                    angle: 30,
                                                    velocity: 450,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 300,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 607
                                                    },
                                                    x: 0
                                                });
                                                particle1.createEmitter({
                                                    speed: 700,
                                                    angle: -210,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 350,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 601
                                                    },
                                                    x: game.config.width
                                                });

                                                particle2.createEmitter({
                                                    speed: 700,
                                                    angle: -210,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 300,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 602
                                                    },
                                                    x: game.config.width
                                                });

                                                particle3.createEmitter({
                                                    speed: 700,
                                                    angle: -210,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 400,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 603
                                                    },
                                                    x: game.config.width
                                                });

                                                particle4.createEmitter({
                                                    speed: 700,
                                                    angle: -210,
                                                    velocity: 700,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 350,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 604
                                                    },
                                                    x: game.config.width
                                                });

                                                particle5.createEmitter({
                                                    speed: 700,
                                                    angle: -210,
                                                    velocity: 650,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 400,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 605
                                                    },
                                                    x: game.config.width
                                                });

                                                particle6.createEmitter({
                                                    speed: 700,
                                                    angle: -210,
                                                    velocity: 750,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 200,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 606
                                                    },
                                                    x: game.config.width
                                                });

                                                particle7.createEmitter({
                                                    speed: 700,
                                                    angle: -210,
                                                    velocity: 450,
                                                    gravityY: 0,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 300,

                                                    lifespan: {
                                                        min: 3000,
                                                        max: 2500
                                                    },
                                                    y: {
                                                        min: 0,
                                                        max: 607
                                                    },
                                                    x: game.config.width
                                                });
                                            }

                                        } else if (rarity === "Mystical") {
                                            let config = {
                                                type: Phaser.WEBGL,
                                                width: window.innerWidth,
                                                height: window.innerHeight,
                                                parent: document.getElementById(backgroundId),
                                                render: {
                                                    transparent: true
                                                },
                                                scene: {
                                                    preload: preload,
                                                    create: create
                                                }
                                            };

                                            game = new Phaser.Game(config);

                                            function preload() {
                                                this.load.svg("1", "/media/capsules/other/1.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("2", "/media/capsules/other/2.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                this.load.svg("3", "/media/capsules/other/3.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("4", "/media/capsules/other/4.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("5", "/media/capsules/other/5.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("6", "/media/capsules/other/6.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                this.load.svg("7", "/media/capsules/other/7.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                            }

                                            function create() {
                                                particle1 = this.add.particles('1');
                                                particle2 = this.add.particles('2');
                                                particle3 = this.add.particles('3');
                                                particle4 = this.add.particles('4');
                                                particle5 = this.add.particles('5');
                                                particle6 = this.add.particles('6');
                                                particle7 = this.add.particles('7');

                                                particle1.createEmitter({

                                                    speed: 200,
                                                    angle: 180,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle2.createEmitter({

                                                    speed: 200,
                                                    angle: 180,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle3.createEmitter({

                                                    speed: 200,
                                                    angle: 180,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle4.createEmitter({

                                                    speed: 200,
                                                    angle: 180,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle5.createEmitter({

                                                    speed: 200,
                                                    angle: 180,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle6.createEmitter({

                                                    speed: 200,
                                                    angle: 180,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle7.createEmitter({

                                                    speed: 200,
                                                    angle: 180,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle1.createEmitter({

                                                    speed: 200,
                                                    angle: 360,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle2.createEmitter({

                                                    speed: 200,
                                                    angle: 360,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle3.createEmitter({

                                                    speed: 200,
                                                    angle: 360,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle4.createEmitter({

                                                    speed: 200,
                                                    angle: 360,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle5.createEmitter({

                                                    speed: 200,
                                                    angle: 360,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle6.createEmitter({

                                                    speed: 200,
                                                    angle: 360,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                                particle7.createEmitter({

                                                    speed: 200,
                                                    angle: 360,
                                                    velocity: 300,
                                                    gravityY: 300,
                                                    rotate: {
                                                        onEmit: (particle) => {
                                                            return 0
                                                        },
                                                        onUpdate: (particle) => {
                                                            return particle.angle + 1
                                                        },
                                                    },
                                                    frequency: 65,

                                                    lifespan: 5000,
                                                    x: {
                                                        min: 0,
                                                        max: game.config.width
                                                    },
                                                    y: -50
                                                });
                                            }
                                        }
                                    }, 320)
        el2.innerHTML = `<img src="/media/capsules/${capsule}/background.png" alt="Background" class="styles__blookBackground___3rt4N-camelCase" draggable="false"><div class="styles__blookContainer___36LK2-camelCase styles__unlockedBlookImage___wC4gr-camelCase"><img src="/media/capsules/${trianCapsule}/trians/${trian}.png" draggable="false" class="styles__blook___1R6So-camelCase"></div><div class="styles__unlockedText___1diat-camelCase"><div class="styles__unlockedBlook___2pr1Z-camelCase" style="font-size: 40px;"><div style="font-family: Titan One,sans-serif;display: block; white-space: nowrap;color:#fff">${trian}</div></div><div class="styles__rarityText___1PfSA-camelCase" style="font-family: Titan One,sans-serif;color:${color[rarity]}">${rarity}</div></div><div class="styles__bottomText___3_k10-camelCase">69,420%</div><div class="styles__bottomShadow___10ZLG-camelCase"></div>`
        document.querySelector('.capsuleContainer').appendChild(el2)
        setTimeout(() => {
            deleteOverlay()
        }, 5000)
    }
    , 600)
}

capsule = prompt(`What capsule do you want to spoof? ${packOptions.join(', ')}`)
if (packOptions.includes(capsule)) {
    if (window.location.pathname.split('/')[1] != 'market') {
        alert('You must be in the market!')
        window.open('market')
    } else {
        trian = prompt('What trian do you want to fake unlock? It can be from any capsule and it must be correctly capitalized')
        let trianGotten = false
        for (i = 0; i < packs['ValuesnCapsules'].length; i++) {
            packs['ValuesnCapsules'][i].trians.forEach(getTrian => {
                if (getTrian.name == trian) {
                    trianGotten = true
                    trianCapsule = packs['ValuesnCapsules'][i].name
                }
            })
        }
        if (!trianGotten) {
            alert('This trian does not exist. Make sure you spelt it correctly or the capitilization is correct.')
        } else {
            rarity = prompt(`What is the rarity of the trian? Colors are only supported for the following rarities: ${Object.keys(color).join(', ')}`)
            let capsuleNum
            for (i = 0; i < packs['ValuesnCapsules'].length; i++) {
                if (packs['ValuesnCapsules'][i].name == capsule)
                    capsuleNum = i
            }
            el = document.createElement('div')
            el.classList.add('capsuleContainer')
            console.log(packs['ValuesnCapsules'][capsuleNum]['colors'][1])
            el.innerHTML = `<div id="overlay" onclick="openAnimation()" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; opacity: 0; z-index: 10; cursor: pointer;"></div><div id="background" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background: radial-gradient(circle, #${packs['ValuesnCapsules'][capsuleNum]['colors'][0]}, #${packs['ValuesnCapsules'][capsuleNum]['colors'][1]}); z-index: 8;"></div><img src="/media/capsules/${capsule}/icon.png" class="styles__cornerIcon___24o3Z-camelCase"><div id="capsule" class="trianglecontainer"><img id="capsuletop" class="capsuletop" src="media/capsules/other/top.png"><img src="/media/capsules/${capsule}/bottom.png"></div>`
            document.querySelector('body').appendChild(el)
        }
    }
} else {
    alert('This is not a real capsule. Capsule names are case sensitive.')
}
