Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                // modify themes (light or dark) on the fly
                light: {
                    primary: '#ffcc00'
                },
                dark: {

                }
            }
        }
    }),


    data () {
        return {
            tab: null,
            itemsNav: [
                'Stuffed Animals',
                'shopping',
                'Latin Text',
            ],
            //Stuff animal component
            newStuffAnimal:{
                name: '',
                manufacturer: '',
                size: '',
                isFav: false,
            },
            stuffAnimal: [
                {name:'eevee', manufacturer: 'Build a baer', size: 'med', isFav: true},
                {name:'flareon', manufacturer: 'Build a baer', size: 'med', isFav: false}
            ],

            sizes: ['Sml','Med','Lag','Xl'],

            itemsList: [
                {
                    title: 'Default Poem',
                    latin: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                },
                {
                    title: 'Prayer to Saint Michael',
                    latin: 'Sancte Michael Archangele,\n' +
                        'defende nos in proelio;\n' +
                        'contra nequitiam et insidias diaboli esto praesidium.\n' +
                        'Imperet illi Deus, supplices deprecamur:\n' +
                        'tuque, Princeps militiae caelestis, in virtute Dei,\n' +
                        'in infernum detrude Satanam aliosque spiritus malignos,\n' +
                        'qui ad perditionem animarum pervagantur in mundo,\n' +
                        'Amen.',
                },
            ],



        }
    },

    methods: {
        addStuffy: function(e){
            this.stuffAnimal.push(this.newStuffAnimal);

            this.newStuffAnimal = {
                name: '',
                manufacturer: ''
            }


        },

        addToFav: function (e){
            this.stuffAnimal.isFav = true;
        },

        removeStuffie(item){
            this.stuffAnimal.splice(this.stuffAnimal.indexof(item), 1)
        }
    },

    computed: {
        stuffAnimalList(){
            return this.stuffAnimalList()
        }
    }

})