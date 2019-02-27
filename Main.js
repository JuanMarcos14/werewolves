var app = new Vue({
    el: '#app',
    data: {
        title: 'Werewolves',
        players: 3,
        wolves: 0,
        showLanding: true,
        showMatchSettings: false
    },
    computed: {
        currentYear(){
            return new Date().getFullYear();
        },

        suggestedWolves() {
            return Math.round(this.players / 10) + 1;
        },

        villagers() {
            return this.players - this.wolves - 2;
        }
    },

    methods: {
        startMatch(){
            document.getElementById('landingPage').classList.add('hide');
            this.showLanding = false;
            document.getElementById('matchSettings').classList.remove('hide');
            document.getElementById('matchSettings').classList.add('show');
            
        },
    }
});