
var publications=[6,5,4,3,2,1];

//var dict = new Object();

var dict = {
    1: {
        datakey:1,
        title: "MIEZE and three axis geometry",
        date: "Feb 18 2021",
        summary: "The <b>M</b>odulation of <b>I</b>nt<b>E</b>nsity with <b>Z</b>ero <b>E</b>ffort (<b>MIEZE</b>) techinque is a neutron scattering method dedicated to inelastic measurements with low energy transfers that require a correspondingly high energy resolution. The MIEZE technique is closely related to time-of-flight methods based on the concept of Lamor-precession labeling in neutron resonance spin echo (NRSE)...",
        picture: "../../images/geometry.png",
        code: "../../Download/Minimize_path.ipynb",
        read_time: "7 min",
        path:'Latexpage1.vue'

    },
    2: {
        datakey:2,
        title: "Reduction factor of a Cuboid",
        date: "Jan 18 2021",
        summary: "To calculate the reduction factor from a image (matrix) we have developed a algorithm inspired in the Boostrap statistical method. The method consist in calculating the reduction factor using a random shaped region inside our region of interest, then we will calculate the reduction factor of this region, and choose a new random shaped region...",
        picture: "../../images/espiralweb2.png",
        code: "../../Download/Minimize_path.ipynb",
        read_time: "8 min",
        path:'Latexpage2.vue'
    },
    3: {
        datakey:3,
        title: "Reduction factor of a Cylinder ",
        date: "Jan 19 2021",
        summary: "The reduction factor of a cylinder can be calculated analyticaly for specific cases ...",
        picture: "./../images/cylinder.png",
        code: "../../Download/Minimize_path.ipynb",
        read_time: "3 min",
        path:'Latexpage2b.vue'
    },
    4: {
        datakey:4,
        title: " Reduction factor Monte Carlo",
        date: "Jan 24 2021",
        summary: "Monte Carlo can gives us a general approach to calculate the reduction factor whenever no analytical solution is possible. In this chapter we developed a code to calculate the reduction factor in a efficient way using python...",
        picture: "../../images/plot0.00256.png",
        code: "../../Download/Minimize_path.ipynb",
        read_time: "6 min",
        path:'Latexpage3.vue'
    },
    5: {
        datakey:5,
        title: " Image analysis ",
        date: "Jan 18 2021",
        summary: "We can calculate the reduction factor of the real images we get in the detector by analyzing them.  First we need to take the image from the mira detector and convert it to a matrix, we crop the image in the place we observe most of the neutrons collide, in the case we analize here we can observe clearly the footprint of the cilinder of nikel we used as a sample...",
        picture: "../../images/transmision.png",
        code: "../../Download/Minimize_path.ipynb",
        read_time: "7 min",
        path:'Latexpage4.vue'
    },
    7: {
        datakey:7,
        title: "Dynamics of ferromagnets ",
        date: "Mar 27 2021",
        summary: "The dynamic scaling functions for ferromagnets near the critical temperature are determined using the mode couplig theory...",
        picture: "/images/ferromagnets.png",
        read_time: "4 min",
        path:'Latexpage5.vue'
    },
    6: {
        datakey:6,
        title: "Dynamics of ferromagnets ",
        date: "Mar 23 2021",
        summary: "The dynamic scaling functions for ferromagnets near the critical temperature are determined using the mode couplig theory...",
        picture: "/images/iron.jpg",
        read_time: "4 min",
        path:'Latexpage5.vue'
    },
  };
  



  module.exports = { dict ,publications};