<template>
  <div class="wizard-step-rebrand css-w1msfr">
    <div class="wizard-title css-82i8eo" data-testid="step-title-neighborhood">
      Any neighborhoods in particular?
    </div>
    <div class="wizard-container css-1g3o699">
      <div class="css-bnuvr3">
        <div class="css-1ig2stp">
          <div class="css-1jskt9m">
            <div class="css-1el6gb5">
              <i class="al al-map-marker" />
            </div>
            <input
              placeholder="Search for a Neighborhood"
              type="text"
              class="css-bsl7s3"
            >
          </div>
          <div class="css-1spwe7s">
            <div class="css-151obd2">
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Kasarani" value="Kasarani" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Mwiki" value="Mwiki" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Milema" value="Milema" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Roysambu" value="Roysambu" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Zimmerman" value="Zimmerman" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Safari park" value="Safari park" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Carwash" value="Carwash" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="TRM" value="TRM" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Githurai" value="Githurai" />
              </div>
              <div class="css-163gdik e5e41dg0">
                <v-checkbox v-model="selected" label="Police" value="Police" />
              </div>
            </div>
          </div>
        </div>
        <div class="css-yr8rxf">
          <div class="css-cbyzwr e13p1sz90" style="margin-top: 30px;">
            <v-btn
              to="/tenant/search"
              data-spinner-color="#8434d6"
              data-style="zoom-in"
              class="ladda-button css-d1vs6y"
            >
              <span
                class="ladda-label"
              >Next</span><span class="ladda-spinner" />
            </v-btn>
            <div class="css-1ga5jos e13p1sz91">
              <a data-testid="skipLink"> Skip this question </a>
            </div>
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
/*! CSS Used from: Embedded */

div,
span,
a,
i {
    margin: 0px;
    padding: 0px;
    border: 0px;
    font: inherit;
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

a,
a:focus,
a:active,
button {
    outline: none;
}

/*! CSS Used from: Embedded */

.al {
    display: inline-block;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
}

/*! CSS Used from: Embedded */

.al-map-marker:before,
.al-square-o:before {
    display: inline-block;
    font-family: 'apartmentlist';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: 1;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
    text-rendering: optimizeLegibility;
    text-transform: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    /* font-smoothing: antialiased; */
}

.al-map-marker:before {
    content: '\f1b7';
}

.al-square-o:before {
    content: '\f1ca';
}

/*! CSS Used from: Embedded */

.wizard-container {
    overflow: hidden visible;
}

/*! CSS Used from: Embedded */

.css-w1msfr {
    font-size: 15px;
    font-weight: 400;
    overflow: visible;
    position: absolute;
    text-align: center;
    -webkit-transition: -webkit-transform 400ms;
    -webkit-transition: transform 400ms;
    transition: transform 400ms;
    width: 100%;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
}

@media (min-width:980px) {
    .css-w1msfr {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.08);
        left: 50%;
        height: auto;
        margin-left: -320px;
        position: absolute;
        top: 82px;
        width: 640px;
    }
}

/*! CSS Used from: Embedded */

.css-82i8eo {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: transparent;
    color: #210d36;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 13px;
    height: 70px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    line-height: 16px;
    padding: 16px 16px 0;
    text-align: center;
    text-transform: uppercase;
}

@media (min-width:980px) {
    .css-82i8eo {
        background: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-size: 17px;
        line-height: 25px;
        padding: 48px 16px 24px;
    }
}

/*! CSS Used from: Embedded */

.css-bnuvr3 {
    padding-bottom: 48px;
}

/*! CSS Used from: Embedded */

.css-cbyzwr {
    width: 100%;
}

@media (min-width:980px) {
    .css-cbyzwr {
        width: auto;
    }
}

/*! CSS Used from: Embedded */

.css-d1vs6y {
    border: transparent;
    border-radius: 6px;
    font: 500 14px / 1 'Helvetica Neue', 'Roboto', Helvetica, Arial, sans-serif;
    height: 48px;
    padding: 10px 25px;
    text-transform: capitalize;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-font-smoothing: subpixel-antialiased;
    background: linear-gradient(to bottom, #0091ad, #0091ad 100%);
    width: 202px;
    padding: 10px;
}

.css-d1vs6y:focus,
.css-d1vs6y:active,
.css-d1vs6y:active:focus {
    border: #b9d1d9;
    outline: 0;
}

.css-d1vs6y:focus {
    background: linear-gradient(to bottom, #0091ad 0%, #0091ad 100%);
}

.css-d1vs6y:hover {
    background: linear-gradient(to bottom, #0091bd 0%, #0091bd 100%);
}

@media (min-width:980px) {
    .css-d1vs6y {
        width: 225px;
    }
}

/*! CSS Used from: Embedded */

.ladda-button {
    color: rgb(255, 255, 255);
    cursor: pointer;
    position: relative;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.ladda-button:hover {
    background-color: rgb(136, 136, 136);
    border-color: rgba(0, 0, 0, 0.07);
}

.ladda-button .ladda-spinner {
    display: inline-block;
    margin-top: 0px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 50%;
    width: 32px;
    z-index: 2;
}

.ladda-button .ladda-label {
    position: relative;
    z-index: 3;
}

.ladda-button,
.ladda-button .ladda-spinner,
.ladda-button .ladda-label {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s!important;
}

.ladda-button[data-style="zoom-in"],
.ladda-button[data-style="zoom-in"] .ladda-spinner,
.ladda-button[data-style="zoom-in"] .ladda-label {
    transition: all 0.3s ease 0s, color 1ms ease 0s!important;
}

.ladda-button[data-style="zoom-in"] {
    overflow: hidden;
}

.ladda-button[data-style="zoom-in"] .ladda-spinner {
    left: 50%;
    transform: scale(0.2);
}

.ladda-button[data-style="zoom-in"] .ladda-label {
    display: inline-block;
    position: relative;
}

/*! CSS Used from: Embedded */

.css-1g3o699 {
    max-height: 100vh;
    overflow: visible;
    width: 100%;
    padding: 0px;
}

@media (min-width: 980px) {
    .css-1g3o699 {
        max-height: 600px;
        width: auto;
        margin-left: auto;
    }
}

.css-1ig2stp {
    margin: auto;
    max-width: 400px;
}

@media (min-width: 980px) {
    .css-1ig2stp {
        max-width: 550px;
        position: relative;
    }
}

.css-1jskt9m {
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px 1px;
    margin: 25px 16px 0px;
    position: relative;
}

@media (min-width: 980px) {
    .css-1jskt9m {
        height: 70px;
    }
}

.css-1el6gb5 {
    color: #0091ad;
    display: flex;
    font-size: 20px;
    flex-direction: column;
    height: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    left: 16px;
    position: absolute;
    z-index: 1;
}

.css-bsl7s3 {
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: rgb(25, 72, 93);
    font-family: "Helvetica Neue", Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin: 0px;
    outline: none;
    padding: 16px 16px 16px 44px;
    position: relative;
    width: 100%;
}

@media (min-width: 980px) {
    .css-bsl7s3 {
        padding-top: 25px;
    }
}

.css-1spwe7s {
    height: calc(100vh - 294px);
    overflow-y: scroll;
    position: relative;
}

@media (min-width: 980px) {
    .css-1spwe7s {
        max-height: 340px;
    }
}

.css-151obd2 {
    padding: 16px 16px 88px;
    position: relative;
    text-align: left;
}

@media (min-width: 980px) {
    .css-151obd2 {
        padding: 16px 16px 75px;
    }
}

.css-yr8rxf {
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 100%);
    bottom: 0px;
    height: 140px;
    left: 0px;
    margin: auto;
    position: absolute;
    right: 0px;
    width: 100%;
}

@media (min-width: 980px) {
    .css-yr8rxf {
        background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 80%);
    }
}

.css-1ga5jos {
    color: rgb(33, 13, 54);
    margin-top: 24px;
}

.css-1ga5jos a {
    color: #0091ad;
    cursor: pointer;
    font-size: 13px;
}

.css-1ga5jos a:hover {
    text-decoration: none;
}

.css-163gdik {
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 0px;
}

/*! CSS Used fontfaces */

@font-face {
    font-family: 'apartmentlist';
    src: url(https://www.apartmentlist.com/webpack/assets/apartmentliste2985a7b07db2cbbe01b4fabe656386f.woff2) format('woff2'), url(https://www.apartmentlist.com/webpack/assets/apartmentlist2512f461d73acff13dfd1f0e82dcfaa5.woff) format('woff');
    font-weight: normal;
    font-style: normal;
}

</style>
