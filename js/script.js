let app = new Vue({
    el: '#craft-weapon',
    data: {
        weapons: [
            {
                name: 'Пистолеты',
                img: 'pistol',
                active: true,
                items: [
                    { id: 0, name: 'Пистолет Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1'},
                    { id: 1, name: 'Пистолет Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 2, name: 'Пистолет Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 3, name: 'Пистолет Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 4, name: 'Пистолет Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 5, name: 'Пистолет Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                ],
            },
            {
                name: 'Дробовики',
                img: 'shotgun',
                active: false,
                items: [
                    { id: 0, name: 'Дробовик Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1'},
                    { id: 1, name: 'Дробовик Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 2, name: 'Дробовик Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 3, name: 'Дробовик Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 4, name: 'Дробовик Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 5, name: 'Дробовик Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                ],
            },
            {
                name: 'Автоматы',
                img: 'rifle',
                active: false,
                items: [
                    { id: 0, name: 'Автомат Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1'},
                    { id: 1, name: 'Автомат Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 2, name: 'Автомат Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 3, name: 'Автомат Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 4, name: 'Автомат Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 5, name: 'Автомат Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                ],
            },
            {
                name: 'Патроны',
                img: 'ammo',
                active: false,
                items: [
                    { id: 0, name: 'Патрон Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1'},
                    { id: 1, name: 'Патрон Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 2, name: 'Патрон Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 3, name: 'Патрон Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 4, name: 'Патрон Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                    { id: 5, name: 'Патрон Revolver 666', description: 'Весь арсенал доступен сразу, но дальше текст я не придумал, по этому будет этот.', resources: 250, img: 'revolver_666', hash: '0xC1B3C3D1' },
                ]
            }
        ],
    },
    methods: {
        activeSection(type) {
            for (let i = 0; i < this.weapons.length; i++) this.weapons[i].active = false

            switch (type) {
                case 'pistol': this.weapons[0].active = true; break;
                case 'shotgun': this.weapons[1].active = true; break;
                case 'rifle': this.weapons[2].active = true; break;
                case 'ammo': this.weapons[3].active = true; break;
            }
        },

        craft(hash) {
            mp.trigger('craft:weapon', hash)
        }
    },
    mounted() {
        mp.events.add('weapons:list', (weapons) => {
            weapon = JSON.parse(weapons)

            for (let i = 0; i < this.weapons.length; i++) {
                this.weapons[i].items = weapon[i]
            }
        })
    }
});