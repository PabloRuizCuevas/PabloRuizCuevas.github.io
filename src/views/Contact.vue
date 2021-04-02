
<template>

<!--
    <div id="card">
        <img alt="Vue logo" src="../images/profile5.png">
        <div> <b> Pablo Ruiz </b>
        </div>
        <div>Research at FRMII
        </div>
    </div>
-->

    <div class="columns">
        <div id="pixelLeft"><Side class="side "/></div>
        <div id="bannerCenter" >

            <div class="front-side">
                <div class="color-grid">
                    <div class="black"></div>
                    <div class="red1"></div>
                    <div class="red2"></div>
                    <div class="green"></div>
                </div>
                <div class="info-grid">
                    <div class="name">
                        <h2>Pablo Ruiz</h2>
                        <h5>Physicist & data analyst</h5>
                    </div>
                    <div class="addr">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="30px" height="30px">
                            <g>
                                <g>
                                    <path d="M455.139,498.052l-99.132-99.132c-1.532-1.532-3.61-2.392-5.777-2.392h-18.927c-4.512,0-8.17,3.657-8.17,8.17    s3.658,8.17,8.17,8.17h15.542l82.792,82.791H82.362l82.791-82.791h15.542c4.512,0,8.17-3.657,8.17-8.17s-3.658-8.17-8.17-8.17    H161.77c-2.167,0-4.245,0.861-5.777,2.392l-99.132,99.132c-2.337,2.338-3.036,5.851-1.771,8.904    c1.265,3.053,4.244,5.044,7.548,5.044h386.723c3.304,0,6.283-1.99,7.548-5.044C458.175,503.903,457.475,500.39,455.139,498.052z"
                                        fill="#FFFFFF" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M256,0C161.393,0,84.426,76.968,84.426,171.574c0,35.596,10.808,69.742,31.263,98.756l133.641,188.964    c1.532,2.165,4.019,3.452,6.671,3.452c2.653,0,5.14-1.288,6.671-3.452L396.32,270.32c20.448-29.004,31.256-63.15,31.256-98.746    C427.574,76.968,350.607,0,256,0z M382.971,260.895L256,440.427L129.037,260.905c-18.495-26.234-28.271-57.125-28.271-89.331    C100.766,85.978,170.403,16.34,256,16.34s155.234,69.637,155.234,155.234C411.234,203.78,401.458,234.671,382.971,260.895z"
                                        fill="#FFFFFF" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M256,92.596c-43.549,0-78.979,35.429-78.979,78.979c0,14.657,4.073,28.988,11.779,41.442    c2.375,3.836,7.41,5.022,11.247,2.649c3.837-2.375,5.023-7.41,2.649-11.247c-6.107-9.87-9.335-21.225-9.335-32.843    c0-34.539,28.099-62.638,62.638-62.638s62.638,28.099,62.638,62.638S290.539,234.213,256,234.213    c-11.617,0-22.974-3.228-32.843-9.335c-3.839-2.376-8.873-1.187-11.247,2.649s-1.189,8.873,2.649,11.247    c12.454,7.706,26.784,11.779,41.44,11.779c43.549,0,78.979-35.429,78.979-78.979C334.979,128.025,299.549,92.596,256,92.596z"
                                        fill="#FFFFFF" />
                                </g>
                            </g>
                        </svg>
                        <p> <!--  -->
                            <strong> München, </strong>
                            <strong> Germany</strong>
                        </p>
                    </div>
                    <div class="phoneNo">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 472.811 472.811"
                            enable-background="new 0 0 472.811 472.811" width="30px" height="30px">
                            <g>
                                <path d="M358.75,0H114.061C97.555,0,84.128,13.428,84.128,29.934v412.944c0,16.505,13.428,29.934,29.934,29.934H358.75   c16.506,0,29.934-13.428,29.934-29.934V29.934C388.683,13.428,375.256,0,358.75,0z M99.128,75.236h274.556v312.687H99.128V75.236z    M114.061,15H358.75c8.234,0,14.934,6.699,14.934,14.934v35.302H99.128V29.934C99.128,21.699,105.827,15,114.061,15z    M358.75,457.811H114.061c-8.234,0-14.934-6.699-14.934-14.934v-44.955h274.556v44.955   C373.683,451.112,366.984,457.811,358.75,457.811z"
                                    fill="#FFFFFF" />
                                <path d="m236.406,404.552c-13.545,0-24.564,11.02-24.564,24.565s11.02,24.564 24.564,24.564 24.564-11.02 24.564-24.564-11.019-24.565-24.564-24.565zm0,39.129c-8.031,0-14.564-6.534-14.564-14.564 0-8.031 6.533-14.565 14.564-14.565s14.564,6.534 14.564,14.565c0,8.03-6.533,14.564-14.564,14.564z"
                                    fill="#FFFFFF" />
                                <path d="m202.406,47.645h68c2.762,0 5-2.239 5-5s-2.238-5-5-5h-68c-2.762,0-5,2.239-5,5s2.238,5 5,5z" fill="#FFFFFF" />
                                <path d="m184.409,47.645c1.31,0 2.6-0.53 3.53-1.46 0.93-0.94 1.47-2.22 1.47-3.54s-0.54-2.6-1.47-3.54c-0.931-0.93-2.221-1.46-3.53-1.46-1.32,0-2.601,0.53-3.54,1.46-0.93,0.93-1.46,2.22-1.46,3.54s0.53,2.6 1.46,3.54c0.93,0.93 2.22,1.46 3.54,1.46z"
                                    fill="#FFFFFF" />
                            </g>
                        </svg>
                        <p style="text-align: end;">+34
                            <strong>644353005</strong></p>
                    </div>
                    <div class="emailId">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 467.211 467.211"
                            enable-background="new 0 0 467.211 467.211" width="30px" height="30px">
                            <g>
                                <path d="m413.917,96.775h-360.622c-6.369,0-11.551,5.181-11.551,11.55v213.182c0,6.369 5.182,11.55 11.551,11.55h360.622c6.368,0 11.55-5.181 11.55-11.55v-213.181c-5.68434e-14-6.369-5.182-11.551-11.55-11.551zm1.55,224.732c0,0.855-0.695,1.55-1.55,1.55h-360.622c-0.855,0-1.551-0.696-1.551-1.55v-213.181c0-0.855 0.695-1.55 1.551-1.55h360.622c0.854,0 1.55,0.696 1.55,1.55v213.181z"
                                    fill="#FFFFFF" />
                                <path d="m459.711,340.558h-11.744v-237.715c0-15.752-12.815-28.568-28.568-28.568h-371.586c-15.753,0-28.568,12.815-28.568,28.568v237.714h-11.745c-4.143,0-7.5,3.358-7.5,7.5v20.605c0,13.384 10.889,24.272 24.272,24.272h418.666c13.384,0 24.272-10.889 24.272-24.272v-20.605c0.001-4.141-3.356-7.499-7.499-7.499zm-425.467-237.715c-2.84217e-14-7.481 6.087-13.568 13.568-13.568h371.586c7.481,0 13.568,6.086 13.568,13.568v237.714h-398.722v-237.714zm177.361,252.715h44v3.922c0,1.755-1.428,3.184-3.184,3.184h-37.633c-1.756,0-3.184-1.428-3.184-3.184v-3.922zm240.607,13.105c0,5.113-4.159,9.272-9.272,9.272h-418.667c-5.113,0-9.272-4.16-9.272-9.272v-13.105h11.744 174.861v3.922c0,7.27 5.914,13.184 13.184,13.184h37.633c7.27,0 13.184-5.914 13.184-13.184v-3.922h174.861 11.744v13.105z"
                                    fill="#FFFFFF" />
                            </g>
                        </svg>
                        <p class="email">pablo.r.c@live.com
                            <!-- <strong>email</strong>.com  --> </p>
                        <p class="web">
                            <strong>www</strong>.pablo_frmii.
                            <strong>com</strong>
                        </p>
                    </div>
                </div>
            </div>

        <!--  
            <div class="back-side">
                <div class="color-grid">
                    <div class="black"></div>
                    <div class="red1"></div>
                    <div class="red2"></div>
                    <div class="green"></div>
                </div>
                <div class="name-tag">
                    <h1>
                        <strong>PABLO RUIZ</strong>
                    </h1>
                    <h3>Physicist & data analyst</h3>
                </div>
            </div>
            
            <div class="credits">
                <div>Design Inspiration:
                    <a href="https://www.behance.net/gallery/27133319/Material-Business-Card-Template-(Freebie)">Material-Business-Card By Jongli Sojal</a>
                </div>
            <div>Icons made by
                    <a href="http://www.freepik.com" title="Freepik" target="_blank">Freepik</a> from
                    <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" >www.flaticon.com</a> is licensed by
                    <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                </div>
            </div> 
            -->

            <div>
                <p  class="text" >Check my profile at:</p>
            </div>
            
            <div class="soc">
                
                <!--
                <a href="#" class="icon codepen" title="CodePen">
                    <svg viewBox="0 0 512 512">
                    <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"/>
                    </svg> 
                </a>
                -->
    <!--
                <a href="#" class="icon facebook" title="Facebook">
                    <svg viewBox="0 0 512 512">
                    <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/>
                    </svg>
                </a>
                -->

                <a href="https://github.com/PabloRuizCuevas" class="icon github" title="GitHub">
                    <svg viewBox="71 71 370 370">
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
                    </svg><!--[if lt IE 9]><em>GitHub</em><![endif]-->
                </a>

                <a href="https://www.linkedin.com/in/pablo-ruiz-cuevas-66656a190/" class="icon linkedin" title="LinkedIn">
                    <svg viewBox="0 0 512 512">
                    <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
                    </svg><!--[if lt IE 9]><em>LinkedIn</em><![endif]-->
                </a>

                <a href="https://stackoverflow.com/users/10416012/pablo-ruiz-cuevas" class="icon stackoverflow" title="StackOverflow">
                    <svg viewBox="0 0 512 512">
                    <path d="M294.8 361.2l-122 0.1 0-26 122-0.1L294.8 361.2zM377.2 213.7L356.4 93.5l-25.7 4.5 20.9 120.2L377.2 213.7zM297.8 301.8l-121.4-11.2 -2.4 25.9 121.4 11.2L297.8 301.8zM305.8 267.8l-117.8-31.7 -6.8 25.2 117.8 31.7L305.8 267.8zM321.2 238l-105-62 -13.2 22.4 105 62L321.2 238zM346.9 219.7l-68.7-100.8 -21.5 14.7 68.7 100.8L346.9 219.7zM315.5 275.5v106.5H155.6V275.5h-20.8v126.9h201.5V275.5H315.5z"/>
                    </svg><!--[if lt IE 9]><em>StackOverflow</em><![endif]-->
                </a>
                
                <!--
                <a href="#" class="icon upwork" title="UpWork">
                    <svg viewBox="-110 -225 920 920">
                    <path d="m 592.59529,300.59631 c 36.58625,-9.5295 63.77264,-44.46832 63.77264,-81.95796 0,-37.16876 -25.95291,-71.42332 -62.23178,-82.13813 -12.86527,-3.79967 -36.71324,-3.46066 -48.20411,0.68531 -12.7566,4.60259 -20.16438,9.40747 -30.45339,19.75281 -16.84634,16.93855 -26.37051,38.59397 -34.73118,78.96915 -6.14865,29.69307 -6.31507,28.4118 4.74402,36.53192 17.57043,12.90113 41.45142,24.07645 60.3235,28.22895 12.26043,2.69768 36.28861,2.66069 46.7803,-0.072 z M 335.20314,527.3568 c -0.53691,-0.53688 -0.97619,-2.42776 -0.97619,-4.20191 0,-2.7372 12.82562,-65.15293 19.6974,-95.85702 2.78096,-12.42578 6.1354,-28.2672 16.89837,-79.8031 4.87761,-23.35522 9.474,-45.09973 10.21423,-48.32116 3.07781,-13.39399 3.15166,-12.90397 -3.20773,-21.27942 -9.9285,-13.07598 -27.65809,-40.76716 -36.84307,-57.54379 -4.71829,-8.61819 -9.05853,-15.96593 -9.64499,-16.32836 -0.58643,-0.36246 -1.48056,9.03773 -1.98688,20.88931 -1.20806,28.27493 -4.61392,43.11617 -15.69795,68.40516 -9.32235,21.26963 -33.27305,49.74573 -54.30807,64.56953 -14.97462,10.55291 -35.0557,19.95066 -53.24556,24.91841 -13.36321,3.64955 -16.94593,4.00411 -40.99976,4.05746 -24.25133,0.0539 -27.52678,-0.2606 -40.99976,-3.93665 C 107.6679,378.44106 87.034439,369.04648 73.263208,359.77748 59.598531,350.58021 39.237828,330.12263 29.690914,315.99785 18.686531,299.71679 13.242607,288.74623 8.5764047,273.44823 l -3.8118048,-12.49696 0,-127.50332 C 4.7645999,27.179921 5.0992306,5.666904 6.7737556,4.2771657 8.1947128,3.0978866 20.519428,2.7238983 48.871734,2.9996749 L 88.960523,3.389609 89.692691,120.53179 c 0.726874,116.30316 0.755246,117.20334 3.958352,125.68248 4.74177,12.5522 10.004307,20.8034 18.890877,29.61922 9.09297,9.02058 17.15733,14.09507 28.72451,18.07476 26.13408,8.99141 56.35321,2.03421 75.84996,-17.46254 9.71246,-9.71246 14.44695,-17.26362 19.25994,-30.71821 l 3.40475,-9.5178 0.73215,-116.41004 0.73213,-116.410051 42.46402,-0.3561353 c 23.35522,-0.1959552 43.19717,0.1336457 44.09324,0.7321331 0.89602,0.5985495 3.99674,8.4489332 6.8904,17.4452642 12.04981,37.462226 27.59502,75.031005 44.42941,107.374459 11.61921,22.32359 26.94615,48.30063 28.50591,48.31353 0.50583,0.003 2.4287,-4.11067 4.27306,-9.14413 23.53349,-64.22555 73.90301,-107.982679 134.49995,-116.843116 18.66913,-2.729767 50.32064,-1.068372 66.77038,3.504843 30.9835,8.613735 55.24149,22.522971 77.08894,44.201832 25.65744,25.459441 41.09707,54.790651 48.14708,91.466681 2.37537,12.35741 1.95235,47.24335 -0.72798,60.03537 -7.62646,36.39738 -22.00126,62.675 -48.90937,89.40795 -37.39797,37.15453 -86.38779,53.33212 -141.94428,46.87331 -25.32941,-2.94471 -53.89908,-12.137 -75.82996,-24.39837 -4.90952,-2.74488 -9.30266,-4.99068 -9.76253,-4.99068 -0.832,0 -1.66887,3.42268 -6.98169,28.55342 -1.5323,7.24818 -4.47416,21.08559 -6.53749,30.74982 -4.76672,22.32667 -21.29337,99.84748 -22.32007,104.6958 -1.57371,7.43114 -0.87754,7.3214 -46.44221,7.3214 -23.52507,0 -43.21215,-0.43927 -43.74903,-0.97619 z"/>
                    </svg>   [if lt IE 9]><em>StackOverflow</em><![endif]
                </a>
                -->

            </div>
        
        </div>
        <div id="pixelRight">&nbsp;</div>
    </div>

</template>


<script>

import Side from '../components/Side.vue'
    export default {
        name: 'Contact_card',  
        components: {
            Side,
        },
    }

</script>


<style scoped>

h2{
    margin-top: 0px;
    margin-bottom: 0px;
}

h5{
    margin-top: 0px;
    margin-bottom: 0px;
}

.email{margin-top: 0px;text-align: end;}
.web{margin-top: 15px;text-align: end;}

p{
    margin: 10 px;
}

.columns{
    min-height: calc(100vh - 290px);
    margin-top: 50px;
}

.text{
    margin-top: 0px;
    text-align: center;
}

#card {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 130px;
    margin-left: 80px;
    margin-top: 60px;
}

img {
  width: 100%;
  padding-bottom: 20px ;
}

html {
  font-size: 17px;
  color: rgb(255, 255, 255);
  font-family: 'Heebo', sans-serif;
  /* font-family: "Source Sans Pro", sans-serif; */
  background-color: #ffffff;
}
.front-side,
.back-side {
  width: 390px;
  height: 220px;
  display: grid;
  grid-template-columns: 2% 96% 2%;
  grid-template-rows: 4% 92% 4%;
  position: relative;
  margin: 60px auto;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px #17161694;
  background-color: #122529;
}
.color-grid {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(8, 50px);
  grid-gap: 8px;
  width: 150px;
  height: 400px;
  transform: rotate(-45deg);
}
.black {
  background-color: #343536;
  grid-column: 2 / span 2;
  grid-row: 1 / span 3;
}
.red1 {
  background-color: #e45e4f;
  grid-row: 2 / span 5;
}
.red2 {
  background-color: #e45e4f;
  grid-column: 2 / span 2;
  grid-row: 4/7;
}
.green {
  background-color: #007e67;
  grid-column: 2/4;
  grid-row: 7/9;
}

.info-grid {
  grid-column: 2/3;
  grid-row: 2/3;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.363);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.432);
  border-radius: 6px;
  font-size: 0.7rem; /*12px;*/
  display: grid;
  grid-template-columns: 15px repeat(3, 1fr) 15px;
  grid-template-rows: repeat(3, 1fr);
  line-height: 1px;
}
.info-grid .name {
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: .1rem;
  margin-top: 8px;
}
.info-grid .name h5{
  font-weight: unset;
}
.info-grid .addr {
  grid-column: 2 / span 2;
  grid-row: 3;
}

.info-grid .phoneNo {
  grid-column: 3 / span 2;
  grid-row: 2;
  text-align: end;
}
.info-grid .emailId {
  grid-column: 3 / span 2;
  grid-row: 3;
  text-align: end;
  font-size: 1.1em;
}

.back-side .name-tag {
  grid-column: 1 / span 4;
  grid-row: 2 / span 1;
  align-self: center;
  z-index: 2;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.363);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.288);
  font-size: 0.6rem; /*12px;*/
  letter-spacing: .1rem;
  text-align: center;
}
.name-tag h1,h3{
  margin: 2px;
  font-weight: unset;
}
.credits{
  margin-top:40px;
  text-align: center;
  color: #343536;
}

.soc{
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.icon {
    display: block;
    width: 50px;
}
  


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*
body { 
  min-width: 100%
}
*/
.columns{
  display: flex;
  flex-direction: row;
  /*align-content: center;*/
  max-width: 100%
}

#pixelLeft, #pixelRight{
  display: flex; 
  flex:1;                      /* 3 */
}
#bannerCenter{
    display: flex;
    flex-direction: column;
    background:rgb(255, 255, 255);
    min-width: 500px;
    display: flex;
    flex: 2;                       /* 3 */   
}
#pixelLeft{
    background:rgb(255, 255, 255);
}
#pixelRight{
    background:rgb(255, 255, 255);
    z-index: -1;
}
#bannerCenter,#pixelLeft,#pixelRight{
   
}

@media only screen and (max-width: 1000px) {
  .side{
    display: none;
    min-width: 400px;
  }
  

}

@media only screen and (max-width: 550px) {
  .side{
    display: none;
  }

  #pixelLeft, #pixelRight{
    display: none;
  }

  #bannerCenter{
    margin-left: 20px; 
    margin-right: 20px;
    min-width: 20px;
  }

}


</style>
