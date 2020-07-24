<template>
  <div class="wizard-step-rebrand css-w1msfr">
    <div class="wizard-title css-82i8eo" data-testid="step-title-amenities">
      How many bedrooms are you looking for?
    </div>
    <div class="wizard-container css-1ao6d1n">
      <div class="css-bnuvr3">
        <div>
          <div class="css-0">
            <div class="css-1jtllve">
              <button
                aria-label="Single room"
                aria-selected="false"
                class="css-1bllzsz e1sc7z4h0"
              >
                <v-btn class="css-jrxllm e1sc7z4h1">
                  0
                </v-btn>
                <div class="css-1cogzy1 e1sc7z4h2">
                  Single room
                </div>
              </button>
              <button
                aria-label="Bedsitter"
                aria-selected="false"
                class="css-1bllzsz e1sc7z4h0"
              >
                <v-btn class="css-jrxllm e1sc7z4h1">
                  0
                </v-btn>
                <div class="css-1cogzy1 e1sc7z4h2">
                  Bedsitter
                </div>
              </button>
              <button
                aria-label="One bedroom"
                aria-selected="false"
                class="css-1bllzsz e1sc7z4h0"
              >
                <v-btn class="css-jrxllm e1sc7z4h1">
                  1
                </v-btn>
                <div class="css-1cogzy1 e1sc7z4h2">
                  One bedroom
                </div>
              </button>
              <button
                aria-label="Two Bedroom"
                aria-selected="false"
                class="css-1bllzsz e1sc7z4h0"
              >
                <v-btn class="css-jrxllm e1sc7z4h1">
                  2
                </v-btn>
                <div class="css-1cogzy1 e1sc7z4h2">
                  Two Bedrooms
                </div>
              </button>
              <button
                aria-label="Three bedroom"
                aria-selected="false"
                class="css-1bllzsz e1sc7z4h0"
              >
                <v-btn class="css-jrxllm e1sc7z4h1">
                  3
                </v-btn>
                <div class="css-1cogzy1 e1sc7z4h2">
                  Three bedrooms
                </div>
              </button>
              <button
                aria-label="Four plus"
                aria-selected="false"
                class="css-1bllzsz e1sc7z4h0"
              >
                <v-btn class="css-jrxllm e1sc7z4h1">
                  4+
                </v-btn>
                <div class="css-1cogzy1 e1sc7z4h2">
                  More than 4 bedrooms
                </div>
              </button>
            </div>
          </div>
          <div class="css-0">
            <div class="css-cbyzwr e13p1sz90" style="margin-top: 30px;">
              <v-btn
                to="../advanced_results"
                data-spinner-color="#8434d6"
                data-style="zoom-in"
                class="ladda-button css-d1vs6y"
              >
                <span
                  class="ladda-label"
                >Next</span><span class="ladda-spinner" />
              </v-btn>
            </div>
          </div>
        </div>
        <div class="css-0" />
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
css-1bllzsz:focus {
    background-color: rgba(245, 20, 114, 0.979);
    color: #0091ad;
    font-weight: 700;
    border-radius: 20px;
    font-size: 17px;
    line-height: 40px;
    width: 40px;
}
div,
span {
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

button {
    outline: none;
}

/*! CSS Used from: Embedded */

.al-amenity-ac:before,
.al-amenity-dishwasher:before,
.al-amenity-hardwood:before,
.al-amenity-patio:before,
.al-amenity-pool:before,
.al-amenity-weight:before {
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

.al-amenity-ac:before {
    content: '\f107';
}

.al-amenity-dishwasher:before {
    content: '\f120';
}

.al-amenity-hardwood:before {
    content: '\f12e';
}

.al-amenity-patio:before {
    content: '\f13d';
}

.al-amenity-pool:before {
    content: '\f143';
}

.al-amenity-weight:before {
    content: '\f15a';
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

.css-1ao6d1n {
    max-height: 100vh;
    overflow: visible;
    padding: 0 16px;
    width: 100%;
}

@media (min-width:980px) {
    .css-1ao6d1n {
        max-height: 600px;
        width: auto;
        margin-left: auto;
    }
}

/*! CSS Used from: Embedded */

.css-bnuvr3 {
    padding-bottom: 48px;
}

/*! CSS Used from: Embedded */

.css-jrxllm {
    background-color: rgba(132, 52, 214, 0.1);
    color: #0091ad;
    font-weight: 700;
    border-radius: 20px;
    font-size: 17px;
    line-height: 40px;
    width: 40px;
}

@media (min-width:980px) {
    .css-jrxllm {
        font-size: 20px;
        line-height: 40px;
        width: 40px;
    }
}

/*! CSS Used from: Embedded */

.css-1cogzy1 {
    margin-top: 8px;
    white-space: nowrap;
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
    background: linear-gradient(to bottom, #0091ad 0%, #0091ad 100%);
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
    background: linear-gradient(to bottom, #0091aa 0%, #0091aa 100%);
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

.css-1bllzsz {
    border: none;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 400;
    height: 85px;
    margin: 7px 10px;
    padding: 15px;
    width: 40%;
}

@media (min-width: 600px) {
    .css-1bllzsz {
        width: 25%;
    }
}

.css-1jtllve {
    margin-left: auto;
    margin-right: auto;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    max-width: 550px;
    flex-flow: row wrap;
}

/*! CSS Used fontfaces */

@font-face {
    font-family: 'apartmentlist';
    src: url(https://www.apartmentlist.com/webpack/assets/apartmentliste2985a7b07db2cbbe01b4fabe656386f.woff2) format('woff2'), url(https://www.apartmentlist.com/webpack/assets/apartmentlist2512f461d73acff13dfd1f0e82dcfaa5.woff) format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
