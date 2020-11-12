export default {
    data() {
        return {
            text: 'tekst uit de mixin'
        }
    },
    methods:{
        getImgUrl(img) {
            return require('../assets/countries/'+img);
        },
    }
}