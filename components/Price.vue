<template>
  <div id="cityLandingApp">
    <div>
      <div class="css-10ji2n">
        <div id="quiz" data-testid="quiz" class="css-1uizukx">
          <div name="quizScrollPoint" />
          <div color="#fff" data-testid="wizard-container" class="css-16pk4vs e3a69na0">
            <div>
              <div class="wizard-step-rebrand css-w1msfr">
                <div class="wizard-title css-82i8eo" data-testid="step-title-budget">
                  How much are you willing to pay for rent?
                </div>
                <div class="wizard-container css-1ao6d1n">
                  <div class="css-bnuvr3">
                    <div class="css-19rv83e">
                      <form>
                        <div data-testid="sliderLabel" class="css-devnpn">
                          KSH &nbsp;
                          <input
                            type="number"
                            name="amountInput"
                            min="3000"
                            max="100000"
                            value="3000"
                            oninput="this.form.rentAmount.value=this.value"
                          > per month
                        </div>
                        <div>
                          <input
                            id="rent"
                            type="range"
                            name="rentAmount"
                            min="3000"
                            max="100000"
                            step="1000"
                            value="1000"
                            oninput="this.form.amountInput.value=this.value"
                          >
                        </div>
                        <div class="css-cbyzwr e13p1sz90" style="margin-top: 30px;">
                          <v-btn
                            to="/tenant/search/bedrooms"
                            data-spinner-color="#8434d6"
                            data-style="zoom-in"
                            class="ladda-button css-d1vs6y"
                          >
                            <span
                              class="ladda-label"
                            >Next</span><span
                              class="ladda-spinner"
                            />
                          </v-btn>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal-root" />
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
input[type=range] {
  width: 100%;
  margin: 13.8px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 1.3px;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-webkit-slider-thumb {
  margin-top: -14px;
  width: 16px;
  height: 36px;
  background: rgba(0, 146, 173, 0.9);
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
input[type=range]::-moz-range-track {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 1.3px;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-moz-range-thumb {
  width: 16px;
  height: 36px;
  background: rgba(0, 146, 173, 0.9);
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
}
input[type=range]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 14.8px 0;
  color: transparent;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-thumb {
  width: 16px;
  height: 36px;
  background: rgba(0, 146, 173, 0.9);
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range] {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}
input[type=range] {
  width: 100%;
  margin: 13.8px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  background: #0091ac;
  border: 0.2px solid #010101;
  border-radius: 1.3px;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-webkit-slider-thumb {
  margin-top: -14px;
  width: 16px;
  height: 36px;
  background: #0092ad;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #00a6c6;
}
input[type=range]::-moz-range-track {
  background: #0091ac;
  border: 0.2px solid #010101;
  border-radius: 1.3px;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-moz-range-thumb {
  width: 16px;
  height: 36px;
  background: #0092ad;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
}
input[type=range]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 14.8px 0;
  color: transparent;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range]::-ms-fill-lower {
  background: #007c93;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-fill-upper {
  background: #0091ac;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-thumb {
  width: 16px;
  height: 36px;
  background: #0092ad;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range]:focus::-ms-fill-lower {
  background: #0091ac;
}
input[type=range]:focus::-ms-fill-upper {
  background: #00a6c6;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range] {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}

/*! CSS Used from: Embedded */

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
    background: linear-gradient(to bottom, #0091bf 0%, #0091bf 100%);
}

@media (min-width:980px) {
    .css-d1vs6y {
        width: 225px;
    }
}

/*! CSS Used from: Embedded */

.noUi-target,
.noUi-target * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    touch-action: none;
    user-select: none;
    box-sizing: border-box;
}

.noUi-target {
    position: relative;
    direction: ltr;
}

.noUi-base,
.noUi-connects {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}

.noUi-connects {
    overflow: hidden;
    z-index: 0;
}

.noUi-connect,
.noUi-origin {
    will-change: transform;
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    transform-origin: 0px 0px;
}

html:not([dir="rtl"]) .noUi-horizontal .noUi-origin {
    left: auto;
    right: 0px;
}

.noUi-horizontal .noUi-origin {
    height: 0px;
}

.noUi-handle {
    position: absolute;
}

.noUi-horizontal {
    height: 18px;
}

.noUi-horizontal .noUi-handle {
    width: 34px;
    height: 28px;
    left: -17px;
    top: -6px;
}

html:not([dir="rtl"]) .noUi-horizontal .noUi-handle {
    right: -17px;
    left: auto;
}

.noUi-target {
    background: rgb(250, 250, 250);
    border-radius: 4px;
    border: 1px solid rgb(211, 211, 211);
    box-shadow: rgb(240, 240, 240) 0px 1px 1px inset, rgb(187, 187, 187) 0px 3px 6px -5px;
}

.noUi-connects {
    border-radius: 3px;
}

.noUi-connect {
    background: rgb(63, 184, 175);
}

.noUi-handle {
    border: 1px solid rgb(217, 217, 217);
    border-radius: 3px;
    background: rgb(255, 255, 255);
    cursor: default;
    box-shadow: rgb(255, 255, 255) 0px 0px 1px inset, rgb(235, 235, 235) 0px 1px 7px inset, rgb(187, 187, 187) 0px 3px 6px -3px;
}

.noUi-handle::before,
.noUi-handle::after {
    content: "";
    display: block;
    position: absolute;
    height: 14px;
    width: 1px;
    background: rgb(232, 231, 230);
    left: 14px;
    top: 6px;
}

.noUi-handle::after {
    left: 17px;
}

/*! CSS Used from: Embedded */

.noUi-connects {
    border-radius: 3px;
}

.noUi-horizontal .noUi-handle {
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    border-width: 3px;
    box-shadow: none;
    cursor: pointer;
    height: 30px;
    top: -12px;
    width: 30px;
}

.noUi-horizontal .noUi-handle::before,
.noUi-horizontal .noUi-handle::after {
    display: none;
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

.css-19rv83e {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    width: 86%;
}

@media (min-width: 980px) {
    .css-19rv83e {
        max-width: 455px;
    }
}

.css-devnpn {
    -webkit-box-align: center;
    align-items: center;
    border-radius: 15px;
    display: flex;
    font-size: 15px;
    height: 30px;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 30px;
    margin: 0px auto 32px;
    padding: 8px;
    background-color: rgba(132, 52, 214, 0.1);
    color: #0091ad;
    width: 14em;
}

@media (min-width: 980px) {
    .css-devnpn {
        border-radius: 20px;
        font-size: 17px;
        height: 40px;
        letter-spacing: 1px;
        line-height: 40px;
    }
}

@media (min-width: 980px) {
    .css-devnpn {
        width: 16em;
    }
}

.css-w8mxhb {
    border: 1px solid rgb(203, 220, 227);
    border-radius: 4px;
    height: 8px;
    margin: 52px auto;
    max-width: 400px;
}
</style>
