<template>
    <div>
        <h1>{{ header }}</h1>
        <div class="row">
            <div class="col-sm-6">

                <ul class="list-group">
                    <li @click="selectCountry(country)"
                        class="list-group-item"
                        v-for="country in data.countries"
                        :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{country.name}}
                </span>
                        <span class="float-right badge badge-secondary badge-pill"
                              v-if="country.rating !==0">{{country.rating}}</span>
                    </li>
                </ul>
                <button @click="decrement()"  class="btn btn-success">vorige</button>
                <button @click="increment()"  class="btn btn-success">volgende</button>
                <button @click="toggleDetails()"  class="btn btn-success">details</button>
                <br>
            </div>
            <div class="col-sm-6" v-if="details">
                <CountryDetail v-if="selectedCountry"  @rating="onRating($event)"  :country="selectedCountry"/>
            </div>
        </div>
        <hr>

    </div>


</template>

<script>
    import countryData from '../data/countryData';
    import mixins from '../mixins/mixins';
    import CountryDetail from "./CountryDetail";

    export default {
        name: "Countries",
        components: {CountryDetail},
        mixins:[mixins],
        data() {
            return {
                data:countryData,
                header: "Countries",
                selectedCountryIndex: 0,
                details:true,

            }
        },
        methods: {
            selectCountry(country) {
                this.selectedCountryIndex = this.data.countries.indexOf(country);
            },
            getImgUrl(img) {
                return require('../assets/countries/'+img);
            },
            increment() {
                if (this.selectedCountryIndex < this.data.countries.length-1 ) {
                    this.selectedCountryIndex++;
                }
            },
            decrement(){
                if (this.selectedCountryIndex>0)
                    this.selectedCountryIndex--;
            },
            toggleDetails() {
                if (this.details === true)
                    this.details = false;
                else
                    this.details = true;
            },
            onRating(rating){
                this.data.countries[this.selectedCountryIndex].rating+=rating;
            }
        },
        computed: {
            selectedCountry() {
                console.log('selectedCountry aangeroepen');
                return {
                    // longhand notation: annotate every property
                    // id: this.data.countries[this.selectedCountryIndex].id,
                    // name: this.data.countries[this.selectedCountryIndex].name,
                    // capital: this.data.countries[this.selectedCountryIndex].capital,
                    // cost: this.data.countries[this.selectedCountryIndex].cost,
                    // details: this.data.countries[this.selectedCountryIndex].details,
                    // img: this.data.countries[this.selectedCountryIndex].img

                    // shorthand notation: use the spread operator
                    // (=more elegant & scalable)

                    ...this.data.countries[this.selectedCountryIndex]
                }
            },

        },
        created(){
            console.log('start');

        }
    }
</script>

<style scoped>

</style>