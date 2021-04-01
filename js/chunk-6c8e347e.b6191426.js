(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c8e347e"],{"0415":function(e,t,a){e.exports=a.p+"img/figure.c4a04ba8.svg"},"44a7":function(e,t,a){"use strict";a("fd50")},"67d1":function(e,t,a){e.exports=a.p+"img/three_axis.263572df.jpg"},"75b6":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),i=a("67d1"),o=a.n(i),r=a("0415"),c=a.n(r),s=Object(n["E"])("data-v-98de7164");Object(n["t"])("data-v-98de7164");var l={class:"page"},h=Object(n["g"])("p",{class:"author"},[Object(n["f"])("Lukas Beddrich & Pablo Ruiz "),Object(n["g"])("br"),Object(n["f"])(" Feb 7, 2021")],-1),d=Object(n["g"])("div",{class:"abstract"},[Object(n["g"])("h2",null,"Abstract"),Object(n["g"])("p",null," Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ")],-1),u=Object(n["g"])("main",null,[Object(n["g"])("div",{class:"article"},[Object(n["g"])("h2",null," Introduction"),Object(n["g"])("p",null,[Object(n["f"])(" The "),Object(n["g"])("b",null,"M"),Object(n["f"])("odulation of "),Object(n["g"])("b",null,"I"),Object(n["f"])("nt"),Object(n["g"])("b",null,"E"),Object(n["f"])("nsity with "),Object(n["g"])("b",null,"Z"),Object(n["f"])("ero "),Object(n["g"])("b",null,"E"),Object(n["f"])("ffort ("),Object(n["g"])("b",null,"MIEZE"),Object(n["f"])(") techinque is a neutron scattering method dedicated to inelastic measurements with low energy transfers that require a correspondingly high energy resolution. The MIEZE technique is closely related to time-of-flight methods based on the concept of Lamor-precession labeling in neutron resonance spin echo (NRSE) ")]),Object(n["g"])("p",null," As a time-of-flight like measurement technique, the quality of the MIEZE signal is sensitive to flight path differences of the neutrons scattered in the experimental setup. There are a few possible geometries for neutrom beam, the sample and the detector, but use the three axis geometry at MIRAII, depicted in the figure bellow, using three axis we have enough degrees of freedom to minimize the destructive interferences of the neutron beam. "),Object(n["g"])("h3",null," Instrument geometry "),Object(n["g"])("p",null,[Object(n["f"])(" The destruction/damping of the MIEZE signal, caused by the neutrons flight path differences, compared to the undisturbed, only elastically scattered neutron beam is expressed by the reduction factor \\(R\\), which unintuitively is supposed to be as high, close to 1, as possible. "),Object(n["g"])("label",{for:"sn-1",class:"sidenote-toggle sidenote-number"}),Object(n["g"])("input",{type:"checkbox",id:"sn-1",class:"sidenote-toggle"}),Object(n["g"])("span",{class:"sidenote"}," Tipically between 0 and 1 if we don't consider negative interferences, that can push it til -1. "),Object(n["f"])(" In this work we aim to calculate the reduction factor of a three-axis spectrometer (TAS) with enhanced energy resolution by means of an integrated MIEZE setup (MIEZETOP). For now, we will consider solely the influence of instrument layout and sample geometry, which are the major contributions to the geometric reduction factor. ")]),Object(n["g"])("p",null," The components of interest in a MIEZE-TAS instrument are the sample behind the precession devices, the analyzer crystal of the TAS and the CASCADE detector, a time resolved PSD. In particular this means, their shape, geometric configuration and rotation with respect to each other. "),Object(n["g"])("p",null," Fundamentally, the instruments consist of a neutron beam preparation stage, behind which the neutrons hit a sample get scattered with an angle of \\(2\\theta\\) (for powders and single crystals given by the Bragg's law) then hit the analyzer (tilted \\(\\gamma \\) ), are reflected again and finally are absorbed in the CASCADE detector that is tilted with an angle of \\( \\theta_I \\). "),Object(n["g"])("div",{class:"image_container"},[Object(n["g"])("img",{alt:"Figure",src:o.a}),Object(n["g"])("figcaption",null," Three axis geometry at MIRAII ")]),Object(n["g"])("p",null," To calculate the reduction factor we will take into account the difference of path length given by the geometry and the one given due to the path length difference arising from the depth profile of the neutrons penetrating the analyzer before being scattered according to Bragg's law. "),Object(n["g"])("p",null," We will multiply these two independent contributions to obtain the total reduction factor. "),Object(n["f"])(" $$ R_{tot}=R_{Geo} \\cdot R_{Ana} $$ "),Object(n["g"])("h3",null," Geometric Reduction Factor, three axis geometry"),Object(n["g"])("p",null," In order to calculate the geometric reduction factor we will reduce our problem to the one that was already presented in the literature [REFERENCE-quotation]. "),Object(n["g"])("p",null," This approach is justified since the analyzer reflects the beam keeping the rays parallel to each other, so it is easy to simplify the problem using the virtual image of it and we obtain a geometry that is already solved by the literature [see figure 1]. "),Object(n["g"])("div",{class:"image_container"},[Object(n["g"])("img",{alt:"Figure",src:c.a}),Object(n["g"])("figcaption",null," Three axis geometry and degrees of fredoom of the setup \\(\\theta_2\\) ,\\(\\theta_D\\) and \\(\\gamma\\). ")]),Object(n["g"])("p",null," Note that with this notation \\(\\theta_2\\) ,\\(\\theta_D\\) and \\(\\gamma\\) is given by: $$ 2\\theta =\\arcsin{\\frac{ \\lambda}{2d_S}}$$ $$\\gamma=\\arccos{\\frac{ \\lambda}{2d_A} } $$ $$\\theta_D= 2\\theta -\\theta_D' $$ "),Object(n["g"])("p",null," where \\(\\gamma\\) is the angle of incidence of the neutron beam with the analyzer, so arccos is used instead of arcsin (that would be for the complementary angle). And \\(\\theta_D\\) who belong to the virtual plane is expressed in terms of the angles \\(2\\theta\\) and \\(\\theta_D'\\) of the real plane. "),Object(n["g"])("h3",null," Geometric Reduction Factor of a cuboid "),Object(n["g"])("p",null," The reduction factor for a cuboin can be calculated analyticaly and the solugion is given by the literature [quote]. The following equation describes the reduction factor for a not tilted cuboid: "),Object(n["g"])("div",{class:"equation"}," \\(R= sinc \\left (\\frac{\\pi\\omega}{\\Lambda} \\cdot \\frac{\\sin{\\theta_D}}{\\cos(2 \\theta - \\theta_D)}\\right ) sinc \\left (\\frac{\\pi t}{\\Lambda} \\cdot \\left [ \\frac{\\sin{\\theta_D}}{\\cos(2 \\theta - \\theta_D)} -1 \\right ] \\right )\\) "),Object(n["g"])("p",null," We can minimize this function obtaining the best $\\theta_D$ for each $2\\theta$. that means, that we can tilt the detector in order to obtain the best Reduction possible factor. "),Object(n["g"])("p",null," But in the most general case we can have the sample rotated by an angle of $\\theta_S$, in that case the reduction factor is given by: "),Object(n["g"])("div",{class:"equation"}," \\( R=sinc \\left (\\frac{\\pi t}{\\Lambda} \\cdot \\left [ \\cos \\theta_S-\\frac{\\cos{(\\theta_D-\\theta_S)}}{\\cos(2 \\theta - \\theta_D)} \\right ] \\right )\\) \\(sinc \\left (\\frac{\\pi \\omega}{\\Lambda} \\cdot \\left [\\sin \\theta_S + \\frac{\\sin{(\\theta_D-\\theta_S)}}{\\cos(2 \\theta - \\theta_D)} \\right ] \\right )\\) "),Object(n["g"])("p",null," To find the best reduction factor for this configuration we have developed an numerical optimizer, first we find the best possible \\(\\theta_S\\) for each \\(\\theta_D\\), \\(2\\theta\\) tuple and then we have find the best \\(\\theta_D\\) for each \\(2\\theta\\) conditioned to the previously calculated \\(\\theta_S\\). "),Object(n["g"])("p",null," For performing an accurate optimization without falling in a local minimum we have used n different equally spaced origins of each optimization problem and then we keep the best optimum. ")])],-1);Object(n["r"])();var g=s((function(e,t,a,i,o,r){return Object(n["q"])(),Object(n["d"])("div",l,[h,d,u])})),f={name:"Latexpage1",methods:{reRender:function(){window.MathJax&&(console.log("rendering mathjax"),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub],(function(){return console.log("done")})))}},mounted:function(){this.reRender()}};a("44a7");f.render=g,f.__scopeId="data-v-98de7164";t["default"]=f},fd50:function(e,t,a){}}]);
//# sourceMappingURL=chunk-6c8e347e.b6191426.js.map