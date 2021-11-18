<template>
    <div class="card p-4">
        <img  :src="image" class="card-img-top" alt="#">
        <div class="card-body">
            <h5 class="card-title text-center text-uppercase">{{title}}</h5>
            <p class="card-text mb-0 text-center">{{author}}</p>
            <p class="card-text text-center">{{year}}</p>
        </div>
    </div> 
</template>

<script>

export default {
    name: "Songcard",
    props:["image","title","author","genre","year" ] 
}
</script>
