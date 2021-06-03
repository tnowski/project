const introTarget = document.querySelector('#intro');
const backgroundTarget = document.querySelector('#background');
const litTarget = document.querySelector('#lit');
const octopusTarget = document.querySelector('#octopus')
const psychTarget = document.querySelector('#psych')
const aiTarget = document.querySelector('#ai')
const conclusionTarget = document.querySelector('#conclusion')

// const brainTarget = document.querySelector('#brainboi');
// const brainOptions = {
//   threshold: 1.0
// }

const options = {
  threshold: 0.4,
}

function handleIntersectionIntro(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("article").className = "beginning";
    }
  });
}

function handleIntersectionBackground(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("article").className = "library";
      console.log('why no move');
      document.querySelector("#brain-pic").style.animationName = "brain";
      document.querySelector("#brain-pic").style.animationDuration = "8s";
      document.querySelector("#brain-pic").style.animationFillMode = "forwards";
      document.querySelector('#brain-div').style.animationName = "come-in";
      document.querySelector("#brain-div").style.animationDuration = "12s";
      document.querySelector("#brain-div").style.animationTimingFunction = "ease-in"
      document.querySelector("#brain-div").style.animationFillMode = "forwards";
    }
  });
}

function handleIntersectionOctopus(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("article").className = "ocean";
      document.querySelector('#octopus-arm').style.animationName = "get-out";
      document.querySelector("#octopus-arm").style.animationDuration = "7s";
      document.querySelector("#octopus-arm").style.animationFillMode = "forwards";
    }
  });
}

function handleIntersectionPsych(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("article").className = "psychedelic";
      document.querySelector('#starburst').style.animationName = "get-out";
      document.querySelector("#starburst").style.animationDuration = "5s";
      document.querySelector("#starburst").style.animationFillMode = "forwards";
    }
  });
}

function handleIntersectionLit(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("article").className = "library";
    }
  });
}

function handleIntersectionAI(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("article").className = "robot";
    }
  });
}

function handleIntersectionConclusion(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("article").className = "final";
    }
  });
}

// const observerBrain = new IntersectionObserver(handleIntersectionBrain, options);

// function handleIntersectionBrain(entries) {
//   entries.map((entry) => {
//     if (entry.isIntersecting) {
//       document.querySelector("#smartboi").className = "brain";
//     }
//   });
// }

const observerBackground = new IntersectionObserver(handleIntersectionBackground, options);
const observerLit = new IntersectionObserver(handleIntersectionLit, options);
const observerIntro = new IntersectionObserver(handleIntersectionIntro, options);
const observerOctopus = new IntersectionObserver(handleIntersectionOctopus, options);
const observerPsych = new IntersectionObserver(handleIntersectionPsych, options);
const observerAI = new IntersectionObserver(handleIntersectionAI, options);
const observerConclusion = new IntersectionObserver(handleIntersectionConclusion, options);

observerBackground.observe(backgroundTarget);
observerLit.observe(litTarget);
observerIntro.observe(introTarget);
observerOctopus.observe(octopusTarget);
observerPsych.observe(psychTarget);
observerAI.observe(aiTarget);
observerConclusion.observe(conclusionTarget);
// observerBrain.observe(brainTarget);








