
document.addEventListener("DOMContentLoaded", function() {

const wepName = document.querySelector('.wepName');
const baseImg = document.getElementById("baseImg");
  // Array of image paths to be preloaded
  baseImg.src = 'img/karui.png';
  const imgPaths = [
    'img/karui.png',
    'img/vaal.png',
    'img/fleshripper.png',
    'img/despot.png',
    'img/void.png',
    'img/talon.png',
    'img/ezomyte.png',
    'img/abyssal.png',
    'img/apex.png',
    'img/sundering.png',
    'img/labrys.png',
    'img/noble.png',
    'img/headsman.png',
    'img/honed.png',
    'img/jasper.png',
    'img/dagger.png',
    'img/timber.png',
    'img/shadow.png',
    'img/gilded.png', 
    'img/prime.png', 
    'img/double.png', 
    'img/pole.png', 
    'img/woodsplitter.png', 
    'img/jade.png', 
    'img/stone.png', 


  // Add more image paths as needed
];

// Function to preload images
function preloadImages(imgPaths) {
  imgPaths.forEach(path => {
      const img = new Image();
      img.src = path;
  });
}

// Call the preload function
preloadImages(imgPaths);



          const selBase = document.getElementById("selBase");
            const inpBaseMin = document.getElementById("inpBaseMin");
            const inpBaseMax = document.getElementById("inpBaseMax");

            //Flat Phys: Select and Input vars
            const selFlat = document.getElementById("selFlat");
            const inpFlatMin = document.getElementById("inpFlatMin");
            const inpFlatMax = document.getElementById("inpFlatMax");

            const displayTierValues = document.getElementById("displayTierValues");

            //Inc Phys: Select and Input vars
            const selPhys = document.getElementById("selPhys");
            const inpPhys = document.getElementById("inpPhys");
    
            //Inc Hybrid: Select and Input vars
            const selHyb = document.getElementById("selHyb");
            const inpHyb = document.getElementById("inpHyb");
            
            //Inc Speed: Select and Input vars
            const selSpeed = document.getElementById("selSpeed");
            const inpSpeed = document.getElementById("inpSpeed");
    
            const totalMin = document.getElementById("totalMin");
            const totalMax = document.getElementById("totalMax");
                        const wepAps = document.getElementById("wepAps");
                
            //Quality Input vars
              const inpQual = document.getElementById("inpQual");
              const wepQual = document.getElementById("wepQual");

              const basePdps = document.getElementById("basePdps");

            
            

            //ARRAYS

            //Array Data for Axes
            const axeBases = {
              basewep:{min:0, max:0, baseAps:0, critc:0, wrange:0},
              karui:{min:"121",max:"189",baseAps:"1.05",critc:"5",wrange:"1.3"},
              baal:{min:"104",max:"174",baseAps:"1.15",critc:"5",wrange:"1.3"},
              fleshripper:{min:"97",max:"152",baseAps:"1.2",critc:"5",wrange:"13"},
              despot:{min:"90",max:"122",baseAps:"1.4",critc:"5",wrange:"1.3"},
              void:{min:"96",max:"144",baseAps:"1.25",critc:"6",wrange:"1.3"},
              talon:{min:"88",max:"138",baseAps:"1.2",critc:"5",wrange:"1.3"},
              ezomyte:{min:"87",max:"131",baseAps:"1.35",critc:"5.7",wrange:"1.3"},
              abyssal:{min:"81",max:"121",baseAps:"1.25",critc:"5",wrange:"1.3"},
              apex:{min:"78",max:"121",baseAps:"1.35",critc:"5",wrange:"1.3"},
              sundering:{min:"74",max:"155",baseAps:"1.3",critc:"5",wrange:"1.3"},
              labrys:{min:"74",max:"123",baseAps:"1.2",critc:"5",wrange:"1.3"},
              noble:{min:"76",max:"103",baseAps:"1.3",critc:"5",wrange:"1.3"},
              headsman:{min:"61",max:"92",baseAps:"1.3",critc:"5",wrange:"1.3"},
              honed:{min:"60",max:"95",baseAps:"1.35",critc:"5",wrange:"1.3"},
              jasper:{min:"58",max:"91",baseAps:"1.15",critc:"5",wrange:"1.3"},
              dagger:{min:"53",max:"83",baseAps:"1.2",critc:"5",wrange:"1.3"},
              timber:{min:"48",max:"99",baseAps:"1.25",critc:"5",wrange:"1.3"},
              shadow:{min:"49",max:"73",baseAps:"1.25",critc:"5",wrange:"1.3"},
              gilded:{min:"43",max:"58",baseAps:"1.3",critc:"5",wrange:"1.3"},
              prime:{min:"39",max:"61",baseAps:"1.35",critc:"5",wrange:"1.3"},
              double:{min:"36",max:"60",baseAps:"1.25",critc:"5",wrange:"1.3"},
              pole:{min:"29",max:"43",baseAps:"1.3",critc:"5",wrange:"1.3"},
              woodsplitter:{min:"19",max:"39",baseAps:"1.3",critc:"5",wrange:"1.3"},
              jade:{min:"19",max:"30",baseAps:"1.25",critc:"5",wrange:"1.3"},
              stone:{min:"12",max:"20",baseAps:"1.3",critc:"5",wrange:"1.3"},
              };
            
            const tiersFlat = {
                0: { min1: "0", max1: "0", min2: "0", max2: "0" },
                1: { min1: 34, max1: 47, min2: 72, max2: 84 },
                2: { min1: 30, max1: 40, min2: 63, max2: 73 },
                3: { min1: 25, max1: 33, min2: 52, max2: 61 },
                4: { min1: 20, max1: 28, min2: 43, max2: 51 },
                5: { min1: 16, max1: 22, min2: 35, max2: 40 },
                6: { min1: 13, max1: 17, min2: 28, max2: 32 },
                7: { min1: 10, max1: 13, min2: 21, max2: 25 },
                8: { min1: 6, max1: 8, min2: 12, max2: 15 },
                9: { min1: 2, max1: 2, min2: 4, max2: 5 }
            };

     
   
            const tiersPhys = {
                10: { min: 139, max: 139 },
                9: { min: 129, max: 129 },
                8: { min: 40, max: 49 },
                7: { min: 50, max: 64 },
                6: { min: 65, max: 84 },
                5: { min: 85, max: 109 },
                4: { min: 110, max: 134 },
                3: { min: 135, max: 154 },
                2: { min: 155, max: 169 },
                1: { min: 170, max: 179 },
                0: { min: "", max: ""}
            };
    
            const tiersHyb = {
                8: { min: 15, max: 19 },
                7: { min: 20, max: 24 },
                6: { min: 25, max: 34 },
                5: { min: 35, max: 44 },
                4: { min: 45, max: 54 },
                3: { min: 55, max: 64 },
                2: { min: 65, max: 74 },
                1: { min: 75, max: 79 },
                0: { min: "", max: ""}
            };
    
            const tiersSpeed = {
                           
                8: { min: 5, max: 7 },
                7: { min: 8, max: 10 },
                6: { min: 11, max: 13 },
                5: { min: 14, max: 16 },
                4: { min: 17, max: 19 },
                3: { min: 20, max: 22 },
                2: { min: 23, max: 25 },
                1: { min: 26, max: 27 },
                0: { min: 28, max: 30 } 
            };
    

            
           // EventListeners for Changes in Select elements
  
           selBase.addEventListener("change", () => {
    const selectedBase = parseInt(selBase.value);
    updateInpBase(selectedBase);
    updateTotalValues(); // Call updateTotalValues here as well
    updatePdps();
  });

selFlat.addEventListener("change", () => {
  const selectedTier = parseInt(selFlat.value);
  updateInpFlatTier(selectedTier);
  updateTotalValues();
  updatePdps();
});

selPhys.addEventListener("change", () => {
  const selectedTier = parseInt(selPhys.value);
  updateInpPhysTier(selectedTier);
  updateTotalValues();
  updatePdps();
});

selHyb.addEventListener("change", () => {
  const selectedTier = parseInt(selHyb.value);
  updateInpHybTier(selectedTier);
  updateTotalValues();
  updatePdps();
});

selSpeed.addEventListener("change", () => {
  const selectedTier = parseInt(selSpeed.value);
  updateInpSpeedTier(selectedTier);
});

inpSpeed.addEventListener("change", () => {
  updateTotalValues();
  updatePdps();
});

inpSpeed.addEventListener("input", () => {
  updateTotalValues();
  updatePdps();
});


// Initialize input elements with numerical values (optional)

// Functions for EventListeners from above, for changes in Tiers in Select elements

function updateInpBase(tier) {
    const tierData = axeBases[tier];

    if (tierData) {
      inpBaseMin.value = tierData.min; // Update value using .value
      inpBaseMax.value = tierData.max; // Update value using .value
    } else {
      // Handle invalid tier selection (optional)
      console.error("Invalid base tier selected:", tier);
    }
  }

// Update span elements when base tier changes
selBase.addEventListener("change", () => {
  const selectedBase = selBase.value;
  updateInpBase(selectedBase);
  updateTotalValues();
});

function updateInpFlatTier(tier) {
  const tierData = tiersFlat[tier];

  if (tierData) {
    // Set min and max for reference
    inpFlatMin.min = tierData.min1;
    inpFlatMin.max = tierData.max1;
    inpFlatMin.value = tierData.max1; // Set initial value to max

    inpFlatMax.min = tierData.min2;
    inpFlatMax.max = tierData.max2;
    inpFlatMax.value = tierData.max2; // Set initial value to max

    // Update span elements for reference (optional)
    minFlatValue.textContent = tierData.max1;
    maxFlatValue.textContent = tierData.max2;

    displayTierValues.style.display = "none"; // Show the display div
  } else {
    // Handle invalid tier selection (optional)
    console.error("Invalid flat tier selected:", tier);
    displayTierValues.style.display = "none"; // Hide the display div
  }
}

function updateInpPhysTier(tier) {
  const tierData = tiersPhys[tier];

  if (tierData) {
    inpPhys.min = tierData.min; // Set minimum value based on tier
    inpPhys.max = tierData.max; // Set maximum value based on tier
    inpPhys.value = tierData.max; // Set initial value to max(optional)
    // Update display elements (optional)
    displayTierValues.style.display = "none";
  } else {
    // Handle invalid tier selection (optional)
    console.error("Invalid Phys tier selected:", tier);
    displayTierValues.style.display = "none";
  }
}


function updateInpHybTier(tier) {
  const tierData = tiersHyb[tier];

  if (tierData) {
    inpHyb.min = tierData.min; // Set minimum value based on tier
    inpHyb.max = tierData.max; // Set maximum value based on tier
    inpHyb.value = tierData.max; // Set initial value to max (optional)
    // Update display elements (optional)
    displayTierValues.style.display = "none";
  } else {
    // Handle invalid tier selection (optional)
    console.error("Invalid Hyb tier selected:", tier);
    displayTierValues.style.display = "none";
  }
}

// Update the Attack Speed when Tier is Selected

function updateInpSpeedTier(tier) {
  const tierData = tiersSpeed[tier];

  if (tierData) {
    inpSpeed.min = tierData.min; // Set minimum value based on tier
    inpSpeed.max = tierData.max; // Set maximum value based on tier
    // (Optional) Set initial value for inpSpeed (e.g., inpSpeed.value = tierData.max)
    inpSpeed.value = tierData.max;
  } else {
    // Handle invalid tier selection (optional)
    console.error("Invalid Speed tier selected:", tier);
  }
}


// Add event listeners to update total values when input values change
inpFlatMin.addEventListener("input", () => {
  updateTotalValues();
  updatePdps();
});

inpFlatMax.addEventListener("input", () => {
  updateTotalValues();
  updatePdps();
});

inpBaseMin.addEventListener("input", () => {
  updateTotalValues();
  updatePdps();
});

inpBaseMax.addEventListener("input", () => {
  updateTotalValues();
  updatePdps();
});

inpPhys.addEventListener("input", () => {
  updateTotalValues();
  updatePdps();
});

inpHyb.addEventListener("input", () => {
  updateTotalValues();
  updatePdps();
});


inpQual.addEventListener("input", () => {
  updateTotalValues();
  updatePdps();
});


function updatePdps() {
  const minPdps = parseFloat(totalMin.innerText); // Assuming wepMin exists
  const maxPdps = parseFloat(totalMax.innerText); // Assuming wepMax exists
  const aps = parseFloat(wepAps.innerText);

  const finalDPS = ((minPdps + maxPdps) / 2) * aps;

  basePdps.innerText = finalDPS.toFixed(0);
}


function updateTotalValues() {
  const minFlatValue = inpFlatMin.value ? parseInt(inpFlatMin.value) : 0;
  const maxFlatValue = inpFlatMax.value ? parseInt(inpFlatMax.value) : 0;
  const minBaseValue = parseInt(inpBaseMin.value);
  const maxBaseValue = parseInt(inpBaseMax.value);
  const incQual = parseInt(inpQual.value);
  const qualityMultiplier = isNaN(incQual) ? 1 : (1 + incQual / 100);

  let inpPhysValue = parseInt(inpPhys.value);
  let inpHybValue = parseInt(inpHyb.value);

  // Handle empty string input
  if (isNaN(inpPhysValue)) {
    inpPhysValue = 0;
  }
  if (isNaN(inpHybValue)) {
    inpHybValue = 0;
  }


  // Calculate total values based on tier selection
  let minTotal = minBaseValue + minFlatValue;
  let maxTotal = maxBaseValue + maxFlatValue;

  if (minFlatValue > 0 || maxFlatValue > 0) {
    // If flat tiers are selected, calculate using totalFlats
    const totalFlats = minFlatValue + maxFlatValue;

    // Determine multiplier based on tier selection
    let multiplier = 1;
    if (inpPhysValue > 0 || inpHybValue > 0) {
      const totalTierValue = inpPhysValue + inpHybValue;
      multiplier = 1 + totalTierValue / 100;
    }

    // Apply multiplier without rounding first
    minTotal *= multiplier;
    maxTotal *= multiplier;


    
  } else {
    // If flat tiers are not selected, use base values directly
    if (inpPhysValue > 0 || inpHybValue > 0) {
      const totalTierValue = inpPhysValue + inpHybValue;
      multiplier = 1 + totalTierValue / 100;

      minTotal = Math.round(minBaseValue * multiplier);
      maxTotal = Math.round(maxBaseValue * multiplier);
    }
  }

  // Apply quality multiplier at the end
  minTotal = minTotal * qualityMultiplier;
  maxTotal = maxTotal * qualityMultiplier;

  totalMin.innerText = Math.round(minTotal);
  totalMax.innerText = Math.round(maxTotal);
  wepQual.innerText = isNaN(incQual) ? 0 : incQual;

  // Update `wepAps` based on base APS and speed modifier
const selectedBase = selBase.value;


const baseData = axeBases[selectedBase];


if (baseData) {
    const baseAps = parseFloat(baseData.baseAps);
    wepAps.innerText = baseAps.toFixed(2);
    inpBaseAps.value = baseAps.toFixed(2);





    const speedModifier = parseFloat(inpSpeed.value) / 100;
    if (!isNaN(speedModifier)) {
        const totalAps = baseAps * (1 + speedModifier);
        wepAps.innerText = totalAps.toFixed(2);
    } else {
        wepAps.innerText = baseAps.toFixed(2);
    }
} else {
    wepAps.innerText = "Base not selected";
    inpBaseAps.value = 0;
}

selSpeed.addEventListener('change', () => {
  // Update inpSpeed value based on selSpeed selection
  // ... (code to update inpSpeed based on selSpeed)

  // Trigger updateTotalValues to recalculate and display
  updateTotalValues();
  updatePdps();
});
}


selBase.addEventListener('change', () => {
  const selectedBase = selBase.value;
  baseImg.src = `img/${selectedBase}.png`;
  wepName.textContent = selBase.options[selBase.selectedIndex].text;
  updateTotalValues();

// Functions for updating tiers of Phys, Hyb, Speed (similar to updateInpFlatTier)
// Implement similar logic for updateInpPhysTier, updateInpHybTier, and updateInpSpeedTier functions
updatePdps();

});






});