<template>
    
        <div class="card">
            <img  :src="image" class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{author}}</p>
                <p class="card-text">{{year}}</p>
            </div>
        </div> 
    
</template>

<script>
export default {
    name: 'Songcard',
    props: ['image', 'title', 'author', 'year'],
    data() {
        return {
            
        }
    },
}
</script>