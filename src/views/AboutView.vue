<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import instance from "@/api/api"
export default{
  name:"AboutView",
 created() {
    // /api/aa  ===>  127.0.0.1:2222/aa
    // instance.get("/aa").then(res => console.log(res))
    instance.get("/asa", { name: "zz" }).then(res => console.log(res))
  }
}
</script>