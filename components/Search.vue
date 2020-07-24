<template>
  <div class="css-dclut2">
    <div class="css-exuau9 ej1vo281">
      <div class="css-1y4t5j6">
        <h1 class="css-eyyemc">
          Find me an Apartment<br>
          <span class="css-tqhdb0">
            Move in to your perfect house
          </span>
        </h1>
        <div class="css-d6frxp">
          <div class="css-19mgyq7">
            <div class="css-6alp5a">
              <i class="fas fa-map-marker-alt" />
            </div>
            <div>
              <pre class="css-1v651ua" />
              <input
                id="searchlocation"
                type="text"
                aria-autocomplete="list"
                aria-label="Search Input"
                class="css-6pevki form-control"
                placeholder="Location"
              >
            </div>
            <button
              aria-label="Submit Search"
              type="button"
            >
              <v-btn
                to="/tenant"
              >
                <i class="fas fa-search" />
              </v-btn>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location:
      'area'
    }
  }
}
</script>
<style scoped>
div,
span,
h1,
pre,
i {
  margin: 0px;
  padding: 0px;
  border: 0px;
  vertical-align: baseline;
}

/*! CSS Used from: Embedded */

* {
  box-sizing: border-box;
}

::before,
::after {
  box-sizing: border-box;
}

h1 {
  font-family: "Helvetica Neue", Roboto, Helvetica, Arial, sans-serif;
}

v-btn {
  outline: none;
}
.css-eyyemc {
  font-family: 'Helvetica Neue', 'Roboto', Helvetica, Arial, sans-serif;
}
/*! Map icon */

.css-6alp5a {
  font-size: 20px;
  padding: 0 16px;
  width: 40px;
  border-radius: 4px;
  color: #0091ad;
}
/*! Search icon */

.css-hcc2se {
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 50px;
  padding: 0;
  vertical-align: middle;
  width: 56px;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  background-color: #0091ad;
    color: #fff;
}

/* Search icon */

.css-1y4t5j6 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 40px;
  width: 100%;
}

.css-1y4t5j6 h1 {
  width: 100%;
}

@media screen and (min-width:700px) {
  .css-1y4t5j6 {
    display: initial;
    text-align: left;
    top: 90px;
    width: auto;
    z-index: 1;
  }
  .css-1y4t5j6 h1 {
    font-size: 1.1em;
  }
}

@media (min-width:1200px) {
  .css-1y4t5j6 {
    top: 140px;
  }
}
.css-1v651ua {
  font-family: 'Helvetica Neue', 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 16px 0;
  height: 48px;
  line-height: 48px;
  position: absolute;
  visibility: hidden;
  white-space: pre;
}

.css-d6frxp {
  position: relative;
  text-align: left;
}

.css-d6frxp input[type='text']:focus {
  border: 0!important;
  box-shadow: none;
}
.css-exuau9 {
  margin: 0 auto;
  max-width: 1016px;
  position: relative;
  width: 100%;
}

.css-tqhdb0 {
  color: #666666;
  font-family: 'Helvetica Neue', 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: normal;
}

@media (min-width:600px) {
  .css-tqhdb0 {
    font-size: 1.1em;
  }
}

.css-19mgyq7 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: transparent;
  border-radius: 4px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  height: 50px;
  line-height: 50px;
  position: relative;
  background-color: #fff;
  width: 310px;
}

@media (min-width:600px) {
  .css-19mgyq7 {
    max-width: none;
  }
}

.css-dclut2 {
  font-family: 'Helvetica Neue', 'Roboto', Helvetica, Arial, sans-serif;
  height: 180px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width:600px) {
  .css-dclut2 {
  padding: 0 28px;
  height: 200px;
  }
}

@media screen and (min-width:700px) {
  .css-dclut2 {
  height: 450px;
  padding: 0 28px;
  }
}

@media screen and (min-width:800px) {
  .css-dclut2 {
    height: 500px;
  }
}

@media screen and (min-width:979px) {
  .css-dclut2 {
    height: 600px;
  }
}

@media screen and (min-width:980px) {
  .css-dclut2 {
    height: 700px;
    padding: 0 36px;
  }
}

@media (min-width:1200px) {
  .css-dclut2 {
    height: 700px;
  }
}

@media screen and (min-width:1440px) {
  .css-dclut2 {
    height: 650px;
  }
}

.css-1y4t5j6 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 40px;
  width: 100%;
}

.css-1y4t5j6 h1 {
  width: 100%;
}

@media screen and (min-width:700px) {
  .css-1y4t5j6 {
    display: initial;
    text-align: left;
    top: 90px;
    width: auto;
    z-index: 1;
  }
  .css-1y4t5j6 h1 {
    font-size: 36px;
  }
}

@media (min-width:1200px) {
  .css-1y4t5j6 {
    top: 140px;
  }
}

</style>
