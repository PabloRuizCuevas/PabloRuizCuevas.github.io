(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e739440"],{"7d89":function(t,e,a){},"9a6f":function(t,e,a){"use strict";a.r(e);var i=a("7a23"),n=Object(i["P"])("data-v-9950a428");Object(i["w"])("data-v-9950a428");var c={class:"page"},h={class:"article"},s=Object(i["i"])("h2",null," Geometric Reduction Factor of a cuboid ",-1),o=Object(i["i"])("p",null," The reduction factor for a cuboid can be calculated analyticaly and the solugion is given by the literature . The following equation describes the reduction factor for a not tilted cuboid: ",-1),l={class:"equation"},r={class:"image_container",style:{"margin-top":"20px"}},d=Object(i["i"])("img",{alt:"Figure",src:"/images/Heat.png"},null,-1),m={class:"equation"},u=Object(i["i"])("p",null," For performing an accurate optimization without falling in a local minimum we have used n different equally spaced origins of each optimization problem and then we keep the best optimum. ",-1);Object(i["u"])();var b=n((function(t,e,a,n,b,f){var y=Object(i["B"])("D3component");return Object(i["t"])(),Object(i["e"])("div",c,[Object(i["i"])("main",null,[Object(i["i"])("div",h,[s,o,Object(i["i"])("div",l,Object(i["E"])(b.equation1),1),Object(i["i"])("p",null," We can minimize this function obtaining the best "+Object(i["E"])(b.theta_Ds)+" for each "+Object(i["E"])(b.theta2s)+". that means, that we can tilt the detector in order to obtain the best Reduction possible factor. ",1),Object(i["i"])("div",r,[d,Object(i["i"])("figcaption",null," Reduction factor heat map for a "+Object(i["E"])(b.theta_sa)+" = 0 ",1)]),Object(i["i"])("p",null," But in the most general case we can have the sample rotated by an angle of "+Object(i["E"])(b.theta2s)+", in that case the reduction factor is given by: ",1),Object(i["i"])("div",m,Object(i["E"])(b.equation2),1),Object(i["i"])("p",null," To find the best reduction factor for this configuration we have developed an numerical optimizer, first we find the best possible "+Object(i["E"])(b.theta_sa)+" for each "+Object(i["E"])(b.theta_Ds)+", "+Object(i["E"])(b.theta2s)+" tuple and then we have find the best "+Object(i["E"])(b.theta_Ds)+" for each \\(2\\theta\\) conditioned to the previously calculated "+Object(i["E"])(b.theta_sa)+". ",1),u,Object(i["i"])(y,{theta_sa:b.theta_sa,theta2s:b.theta2s,gammas:b.gammas,theta_Ds:b.theta_Ds},null,8,["theta_sa","theta2s","gammas","theta_Ds"])])])])})),f=(a("99af"),Object(i["P"])("data-v-0b264857"));Object(i["w"])("data-v-0b264857");var y={class:"slidercontainer"},p={class:"Slider"},x={style:{"text-align":"center"}},g={class:"Slider"},j={style:{"text-align":"center"}},O={class:"chart"},w={viewBox:"0 0 400 200",xmlns:"http://www.w3.org/2000/svg",class:"shadow"},M={class:"slidercontainer"},v={class:"Slider"},_={style:{"text-align":"center"}},D={class:"Slider"},I={style:{"text-align":"center"}},P={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},S={class:"shadow",style:{"font-size":"1.1rem","text-align":"center",padding:"2px 20px 2px 20px"}};Object(i["u"])();var z=f((function(t,e,a,n,c,h){var s=Object(i["B"])("Slider");return Object(i["t"])(),Object(i["e"])(i["a"],null,[Object(i["i"])("div",y,[Object(i["i"])("div",p,[Object(i["i"])(s,{modelValue:c.thetaS,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.thetaS=t}),min:0,max:90},null,8,["modelValue"]),Object(i["i"])("div",x,Object(i["E"])(a.theta_sa),1)]),Object(i["i"])("div",g,[Object(i["i"])(s,{modelValue:c.theta2,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.theta2=t}),min:0,max:90},null,8,["modelValue"]),Object(i["i"])("div",j,Object(i["E"])(a.theta2s),1)])]),Object(i["i"])("div",O,[(Object(i["t"])(),Object(i["e"])("svg",w,[Object(i["i"])("rect",{class:"monochromator",width:c.monocromator.width,height:c.monocromator.height,"fill-opacity":"0.4",x:c.monocromator.xc,y:c.monocromator.yc},null,8,["width","height","x","y"]),Object(i["i"])("rect",{class:"sample",width:h.sample.width,height:h.sample.height,"fill-opacity":"0.8",x:h.sample.xc,y:h.sample.yc,transform:h.sample.transform},null,8,["width","height","x","y","transform"]),Object(i["i"])("rect",{class:"sample analyzer",width:h.analyzer.width,height:h.analyzer.height,x:h.analyzer.x,y:h.analyzer.y,transform:h.analyzer.transform},null,8,["width","height","x","y","transform"]),Object(i["i"])("rect",{class:"detector",width:h.detector.width,height:h.detector.height,x:h.detector.x,y:h.detector.y,transform:h.detector.transform},null,8,["width","height","x","y","transform"]),Object(i["i"])("line",{class:"dashline x",x1:h.sample.x,y1:h.sample.y,x2:c.width,y2:h.sample.y},null,8,["x1","y1","x2","y2"]),Object(i["i"])("line",{class:"dashline y",x1:h.sample.x,y1:h.sample.y,x2:h.sample.x,y2:0},null,8,["x1","y1","x2"]),Object(i["i"])("text",{x:h.sample.x-10,y:"15",fill:"black"}," y ",8,["x"]),Object(i["i"])("text",{x:c.width-10,y:h.sample.y+10,fill:"black"}," x ",8,["x","y"]),Object(i["i"])("polyline",{class:"line 0",points:"".concat(h.line1.x0,",").concat(h.line1.y0,"  ").concat(h.line1.x1,",").concat(h.line1.y1,"  ").concat(h.line1.x2,",").concat(h.line1.y2,"   ").concat(h.line1.x3,",").concat(h.line1.y3),fill:"none"},null,8,["points"]),Object(i["i"])("polyline",{class:"line up",points:"".concat(h.line2.x0,",").concat(h.line2.y0,"  ").concat(h.line2.x1,",").concat(h.line2.y1,"  ").concat(h.line2.x2,",").concat(h.line2.y2,"   ").concat(h.line2.x3,",").concat(h.line2.y3),fill:"none"},null,8,["points"]),Object(i["i"])("polyline",{class:"line down",points:"".concat(h.line3.x0,",").concat(h.line3.y0,"  ").concat(h.line3.x1,",").concat(h.line3.y1,"  ").concat(h.line3.x2,",").concat(h.line3.y2,"   ").concat(h.line3.x3,",").concat(h.line3.y3),fill:"none"},null,8,["points"])]))]),Object(i["i"])("div",M,[Object(i["i"])("div",v,[Object(i["i"])(s,{modelValue:c.gamma,"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.gamma=t}),min:18,max:70},null,8,["modelValue"]),Object(i["i"])("div",_,Object(i["E"])(a.gammas),1)]),Object(i["i"])("div",D,[Object(i["i"])(s,{modelValue:c.thetaD,"onUpdate:modelValue":e[4]||(e[4]=function(t){return c.thetaD=t}),min:-70,max:70},null,8,["modelValue"]),Object(i["i"])("div",I,Object(i["E"])(a.theta_Ds),1)])]),Object(i["i"])("div",P,[Object(i["i"])("div",S,"R: "+Object(i["E"])(h.Reduction),1)])],64)})),E=(a("2af1"),a("a6f0")),V={name:"D3component",props:{theta2s:String,gammas:String,theta_Ds:String,theta_sa:String},data:function(){return{theta2:30,gamma:50,thetaD:20,thetaS:5,height:200,width:400,radius:20,center_line:120,r0:180,r1:100,r2:100,monocromator:{height:60,width:6,x:0,y:120,get xc(){return this.x},get yc(){return this.y-this.height/2}},sample0:{height:60,width:30},analyzer0:{height:60,width:6},detector0:{height:60,width:6},line10:{x0:0}}},components:{Slider:E["a"]},methods:{line_data:function(t,e){var a={x0:0};a.y0=this.center_line-e,a.x1=this.r0-t,a.y1=a.y0;var i=Math.sqrt(Math.pow(t,2)+Math.pow(e,2)),n=(90-this.theta2)*Math.PI/180-Math.atan(e/t?e/t:0),c=this.r1+Math.sign(t)*i*(Math.sin(n)-Math.cos(n)*Math.tan(this.gamma*Math.PI/180));a.x2=a.x1+c*Math.cos(this.theta2*Math.PI/180),a.y2=a.y1-c*Math.sin(this.theta2*Math.PI/180);var h=180-2*this.gamma-this.theta2,s=-90+h-this.thetaD,o=(e*Math.cos(this.theta2*Math.PI/180)+t*Math.sin(this.theta2*Math.PI/180))/Math.cos(this.thetaD*Math.PI/180);return a.x3=this.detector.xcent-o*Math.cos(s*Math.PI/180),a.y3=this.detector.ycent-o*Math.sin(s*Math.PI/180),a.tot_distance=o+c+a.x1,a}},created:function(){return{}},computed:{sample:function(){var t=this.sample0;return t.x=this.r0,t.y=this.center_line,t.xc=t.x-t.width/2,t.yc=t.y-t.height/2,t.transform="rotate(".concat(-this.thetaS," ").concat(t.x," ").concat(t.y,")"),t},analyzer:function(){var t=this.analyzer0;return t.xcent=this.sample.x+this.r1*Math.cos(this.theta2*Math.PI/180),t.ycent=this.sample.y-this.r1*Math.sin(this.theta2*Math.PI/180),t.x=t.xcent-t.width/2,t.y=t.ycent-t.height/2,t.transform="rotate(".concat(-this.gamma-this.theta2," ").concat(t.xcent," ").concat(t.ycent,")"),t},detector:function(){var t=this.detector0;return t.xcent=this.analyzer.xcent-this.r2*Math.cos((-this.theta2-2*this.gamma)*Math.PI/180),t.ycent=this.analyzer.ycent-this.r2*Math.sin((-this.theta2-2*this.gamma)*Math.PI/180),t.x=t.xcent-t.width/2,t.y=t.ycent-t.height/2,t.transform="rotate(".concat(-this.thetaD-2*this.gamma-this.theta2," ").concat(t.xcent," ").concat(t.ycent,")"),t},line1:function(){return this.line_data(4,10)},line2:function(){return this.line_data(-2,-10)},line3:function(){return this.line_data(0,0)},ref_distance:function(){return this.r0+this.r1+this.r2},Reduction:function(){var t=51.2,e=1e-7,a=Math.PI*this.sample.width/t*(Math.cos(this.thetaS*Math.PI/180)-Math.cos((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((this.theta2-this.thetaD)*Math.PI/180)),i=Math.PI*this.sample.height/t*(Math.sin(this.thetaS*Math.PI/180)+Math.sin((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((this.theta2-this.thetaD)*Math.PI/180));return Math.round(Math.sin(a+e)/(a+e)*Math.sin(i+e)/(i+e)*1e3)/1e3}}};a("525e"),a("dde9");V.render=z,V.__scopeId="data-v-0b264857";var $=V,R={name:"Latexpage2",data:function(){return{theta2s:"$2\\theta$",gammas:"$\\gamma$",theta_Ds:"$\\theta_D - 2\\theta$",theta_sa:"$\\theta_S$",equation1:"$R= sinc \\left (\\frac{\\pi\\omega}{\\Lambda} \\cdot \\frac{\\sin{\\theta_D}}{\\cos(2 \\theta - \\theta_D)}\\right )  sinc \\left (\\frac{\\pi t}{\\Lambda} \\cdot \\left [ \\frac{\\sin{\\theta_D}}{\\cos(2 \\theta - \\theta_D)} -1 \\right ] \\right ) $",equation2:"$ R=sinc \\left (\\frac{\\pi t}{\\Lambda} \\cdot \\left [ \\cos \\theta_S-\\frac{\\cos{(\\theta_D-\\theta_S)}}{\\cos(2 \\theta - \\theta_D)} \\right ] \\right ) sinc \\left (\\frac{\\pi \\omega}{\\Lambda} \\cdot \\left [\\sin \\theta_S +  \\frac{\\sin{(\\theta_D-\\theta_S)}}{\\cos(2 \\theta - \\theta_D)}  \\right ] \\right ) $"}},components:{D3component:$},methods:{reRender:function(){window.MathJax&&(console.log("rendering mathjax"),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub],(function(){return console.log("done")})))}},mounted:function(){this.reRender()}};a("c5b2");R.render=b,R.__scopeId="data-v-9950a428";e["default"]=R},c5b2:function(t,e,a){"use strict";a("7d89")},dde9:function(t,e,a){"use strict";a("e0ed")},e0ed:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6e739440.9af28deb.js.map