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
                id: null,
            },
            //list of stuff animals
            stuffAnimal: [
                {name:'eevee', manufacturer: 'Build a bear', size: 'med', isFav: true, id: 0},
                {name:'flareon', manufacturer: 'Build a bear', size: 'med', isFav: false, id: 1},
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
                {
                    title: "Default Poem two",
                    latin: 'Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.',
                }
            ],



        }
    },

    methods: {
        addStuffy: function(e){
            for( var h = 0; h < this.stuffAnimal.length; h++){
                console.log(h)
                if ( this.stuffAnimal[h].id !== h ){
                    this.newStuffAnimal.id = h + 1;
                    console.log(h);
                    break;
                }
            }

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
            console.log(item);

            for( var j = 0; j < this.stuffAnimal.length; j++){

                //console.log(j);
                //console.log(this.stuffAnimal.id);
                if ( this.stuffAnimal[j].id == item ){
                    this.stuffAnimal.splice(j, 1);
                }
            }

        }
    },

    computed: {
        stuffAnimalList(){
            return this.stuffAnimalList()
        }
    }



})

// Vue.component('MainToolbar',{
//     template:
// })