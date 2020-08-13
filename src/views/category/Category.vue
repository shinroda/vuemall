<template>
  <div class="content">
    <ul>
      <li>leibiao1</li>
      <li>leibiao2</li>
      <li>leibiao3</li>
      <li>leibiao4</li>
      <li>leibiao5</li>
      <li>leibiao6</li>
      <li>leibiao7</li>
      <li>leibiao8</li>
      <li>leibiao9</li>
      <li>leibiao10</li>
      <li>leibiao11</li>
      <li>leibiao12</li>
      <li>leibiao13</li>
      <li>leibiao14</li>
      <li>leibiao15</li>
      <li>leibiao16</li>
      <li>leibiao17</li>
      <li>leibiao18</li>
      <li>leibiao19</li>
      <li>leibiao20</li>
      <li>leibiao21</li>
      <li>leibiao22</li>
      <li>leibiao23</li>
      <li>leibiao24</li>
      <li>leibiao25</li>
      <li>leibiao26</li>
      <li>leibiao27</li>
      <li>leibiao28</li>
      <li>leibiao29</li>
      <li>leibiao30</li>
      <li>leibiao31</li>
      <li>leibiao32</li>
      <li>leibiao33</li>
      <li>leibiao34</li>
      <li>leibiao35</li>
      <li>leibiao36</li>
      <li>leibiao37</li>
      <li>leibiao38</li>
      <li>leibiao39</li>
      <li>leibiao40</li>
      <li>leibiao41</li>
      <li>leibiao42</li>
      <li>leibiao43</li>
      <li>leibiao44</li>
      <li>leibiao45</li>
      <li>leibiao46</li>
      <li>leibiao47</li>
      <li>leibiao48</li>
      <li>leibiao49</li>
      <li>leibiao50</li>
      <li>leibiao51</li>
      <li>leibiao52</li>
      <li>leibiao53</li>
      <li>leibiao54</li>
      <li>leibiao55</li>
      <li>leibiao56</li>
      <li>leibiao57</li>
      <li>leibiao58</li>
      <li>leibiao59</li>
      <li>leibiao60</li>
      <li>leibiao61</li>
      <li>leibiao62</li>
      <li>leibiao63</li>
      <li>leibiao64</li>
      <li>leibiao65</li>
      <li>leibiao66</li>
      <li>leibiao67</li>
      <li>leibiao68</li>
      <li>leibiao69</li>
      <li>leibiao70</li>
      <li>leibiao71</li>
      <li>leibiao72</li>
      <li>leibiao73</li>
      <li>leibiao74</li>
      <li>leibiao75</li>
      <li>leibiao76</li>
      <li>leibiao77</li>
      <li>leibiao78</li>
      <li>leibiao79</li>
      <li>leibiao80</li>
      <li>leibiao81</li> 
      <li>leibiao82</li>
      <li>leibiao83</li>
      <li>leibiao84</li>
      <li>leibiao85</li>
      <li>leibiao86</li>
      <li>leibiao87</li>
      <li>leibiao88</li>
      <li>leibiao89</li>
      <li>leibiao90</li>
      <li>leibiao91</li>
      <li>leibiao92</li>
      <li>leibiao93</li>
      <li>leibiao94</li>
      <li>leibiao95</li>
      <li>leibiao96</li>
      <li>leibiao97</li>
      <li>leibiao98</li>
      <li>leibiao99</li>
      <li>leibiao100</li>
    </ul>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
      this.scroll =  new BScroll('.content',{
        probeType:1,
        pullUpLoad:true
      })
      this.scroll.on('scroll',(position) =>{
        // console.log(position);
      })
       this.scroll.on('pulingup',() =>{
        console.log('position');
      })
    }
  }

</script>

<style scoped>
  .content{
    height: 200px;
    width: 100%;
    background: violet;
    /* overflow-y: scroll; */
  }
</style>
