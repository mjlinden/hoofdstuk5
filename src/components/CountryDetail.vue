<template>
    <div>
        <h2>{{country.name}}</h2>
        <ul class="list-group">
            <li class="list-group-item">{{ country.id}}
                <span class="float-right">
                    <button @click="setRating(1)" class="btn btn-success">+1</button>
                    <button @click="setRating(-1)" class="btn btn-danger">-1</button>
                </span>
            </li>
            <li class="list-group-item">{{ country.name}}</li>
            <li class="list-group-item">{{ country.capital}}</li>
            <li class="list-group-item">{{ country.details}}</li>
            <li class="list-group-item"><img class="img-fluid" :src="getImgUrl(country.img)" :alt="country.img"></li>
            <li class="list-group-item" v-if="isOnSale">
                <span class="badge badge-danger badge-pill">On Sale!</span>
            </li>
            <li class="list-group-item" v-if="isExpensive">
                <span class="badge badge-danger badge-pill">Expensive!</span>
            </li>

        </ul>
    </div>
</template>

<script>
    import mixins from '../mixins/mixins';

    export default {
        name: "CountryDetail",
        mixins:[mixins],
        props:['country'],
        computed:{
            isOnSale() {
                return this.country.cost < 1000;
            },
            isExpensive(){
                return this.country.cost > 4000;
            }
        },
        methods:{
            setRating(value) {
                this.$emit('rating',value);
            }

        }

    }
</script>

<style scoped>

</style>