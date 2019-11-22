
import Vue from "vue"
import App from "./app.vue"
import "../assets/css/index.css"

Vue.directive("tuozhuai",(el,{value,moder})=>{
    // console.log(el)
    el.onmousedown=function(e){
        let x = e.offsetX;
        let y = e.offsetY;
        console.log(x)
        console.log(y)
        console.log(e.clientX)
        console.log(e.clientY)

        document.onmousemove = function(e){
            // console.log(e)
            el.style.left=e.clientX-x+"px";
            el.style.top=e.clientY-y+"px";
        }
    },
    el.onmouseup = function(e){
        document.onmousemove = null
    }
})

new Vue({
    el:"#app",
    render:h => h(App)
})