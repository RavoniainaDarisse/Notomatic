<template>
  <header v-if="shouldShowNavbar">
        <div class="Title">
          <router-link to="/home">
            <div class="title_logo">
                <div class="logo"><img src="./assets/logo.png" alt="logo"></div>
                <div class="title">
                    <h1>Notomatic</h1>
                </div>
            </div>
          </router-link>
            <div class="s_title">
                <h3>Manage your notes</h3>
            </div>
        </div>
        <div class="btn">
          <router-link to="/create">
            <input type="submit" class="btn_primary" value="Add notes ">
          </router-link>
          
          <router-link to="/">
            <input type="submit" class="btn_primary" value="Log out ">
          </router-link>
        </div>
  </header>

  <router-view></router-view>
</template>
 
<script>


export default {

  name: 'App',
  computed: {
    shouldShowNavbar() {
      const currentPath = this.$route.path;
      return !currentPath.includes('/registre') && !currentPath.includes('/login');
    },
  },
}

</script>

<style>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
body{
    background-color: rgba(240, 248, 255, 0.1);
}
header{
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 30px;
    box-shadow: 2px 1px 4px 1px rgba(0,0,0,0.4);
}
.Title{
    display: flex;
    flex-direction: column;
    color: rgb(100, 101, 102);
}
.title_logo{
    display: flex;
    line-height: 70px;
    margin-bottom: -20px;
}
.logo img{
    width: 50px;
}
.title{
    font-weight: 400;
    color: rgb(50, 137, 219);
}
.s_title h3{
    font-weight: 100;
    font-size: 17px;
}
.btn .btn_primary{
    background-color: rgb(50, 137, 219);
    border: none;
    width: 10rem;
    height: 3rem;
    border-radius: 20px;
    color: aliceblue;
    font-size: 15px;
    margin: 0 12px;
}


</style>
