// Data structure for our facts with eras, categories, and parts
const factsData = {
    pioneer: {
        facts: [
            {
                year: 1837,
                location: "England",
                text: "Charles Babbage's Analytical Engine introduced the concept of a CPU with its 'Mill' component.",
                category: "invention",
                part: "cpu",
                impact: "Established the fundamental concept of central processing unit",
                related: ["First mechanical calculator", "Development of ALU concept"]
            },
            {
                year: 1890,
                location: "United States",
                text: "Herman Hollerith invented the punched card tabulator for data storage and processing.",
                category: "invention",
                part: "storage",
                impact: "First successful mechanical data storage system",
                related: ["Birth of IBM", "Early data processing"]
            },
            {
                year: 1947,
                location: "United States",
                text: "The Williams-Kilburn Tube, the first random-access computer memory, was invented.",
                category: "invention",
                part: "memory",
                impact: "First practical implementation of random-access memory",
                related: ["Development of RAM", "Computer memory evolution"]
            },
            {
                year: 1951,
                location: "United States",
                text: "The first commercial computer, UNIVAC I, featured a mercury delay line memory system.",
                category: "invention",
                part: "memory",
                impact: "Pioneered commercial computer memory systems",
                related: ["Early computer memory", "Commercial computing"]
            },
            {
                year: 1942,
                location: "Germany",
                text: "Konrad Zuse developed the first graphics system for the Z4 computer.",
                category: "invention",
                part: "gpu",
                impact: "Laid the groundwork for computer graphics processing",
                related: ["Early computer graphics", "Visual computing history"]
            },
            {
                year: 1946,
                location: "United States",
                text: "ENIAC used vacuum tubes as a processing unit, processing 5000 operations per second.",
                category: "invention",
                part: "cpu",
                impact: "First general-purpose electronic computer",
                related: ["Early computing", "Electronic processing"]
            },
            {
                year: 1953,
                location: "United States",
                text: "The first magnetic core memory was used in the Whirlwind I computer.",
                category: "invention",
                part: "memory",
                impact: "Introduced reliable and faster memory access",
                related: ["Memory technology", "Computer reliability"]
            },
            {
                year: 1956,
                location: "United States",
                text: "IBM introduced the first commercial hard disk drive, the IBM 350 RAMAC.",
                category: "invention",
                part: "storage",
                impact: "Beginning of magnetic disk storage era",
                related: ["Data storage", "Business computing"]
            }
        ]
    },
    revolution: {
        facts: [
            {
                year: 1971,
                location: "United States",
                text: "Intel released the 4004, the first commercial microprocessor.",
                category: "invention",
                part: "cpu",
                impact: "Started the microprocessor revolution",
                related: ["Modern CPU architecture", "Personal computing"]
            },
            {
                year: 1981,
                location: "United States",
                text: "IBM introduced the first hard disk drive for personal computers.",
                category: "invention",
                part: "storage",
                impact: "Revolutionized personal computer storage",
                related: ["Evolution of HDDs", "Data storage advancement"]
            },
            {
                year: 1976,
                location: "United States",
                text: "The first graphics processing unit concepts emerged with the Atari 2600.",
                category: "invention",
                part: "gpu",
                impact: "Laid foundation for modern graphics processing",
                related: ["Gaming graphics", "GPU evolution"]
            },
            {
                year: 1980,
                location: "Japan",
                text: "The first 16K DRAM chip was mass-produced by NEC.",
                category: "invention",
                part: "memory",
                impact: "Made high-capacity memory chips commercially viable",
                related: ["Memory density increase", "Computer performance"]
            },
            {
                year: 1979,
                location: "United States",
                text: "The first 3D graphics accelerator chip was developed by Silicon Graphics.",
                category: "invention",
                part: "gpu",
                impact: "Revolutionized 3D graphics processing",
                related: ["3D modeling", "Computer animation"]
            },
            {
                year: 1978,
                location: "United States",
                text: "Intel introduced the 8086 processor, beginning the x86 architecture.",
                category: "invention",
                part: "cpu",
                impact: "Defined the future of PC processors",
                related: ["x86 architecture", "Modern computing"]
            },
            {
                year: 1984,
                location: "United States",
                text: "The first RAID (Redundant Array of Independent Disks) system was developed.",
                category: "invention",
                part: "storage",
                impact: "Enhanced data reliability and performance",
                related: ["Data protection", "Enterprise storage"]
            }
        ]
    },
    modern: {
        facts: [
            {
                year: 1995,
                location: "United States",
                text: "The first USB (Universal Serial Bus) specification was released.",
                category: "invention",
                part: "storage",
                impact: "Standardized peripheral connectivity",
                related: ["Device connectivity", "Port standardization"]
            },
            {
                year: 1999,
                location: "United States",
                text: "NVIDIA introduced the GeForce 256, marketed as the world's first GPU.",
                category: "invention",
                part: "gpu",
                impact: "Defined modern graphics processing",
                related: ["3D acceleration", "Gaming graphics"]
            },
            {
                year: 1997,
                location: "Global",
                text: "DDR SDRAM was introduced, doubling data transfer rates.",
                category: "invention",
                part: "memory",
                impact: "Significantly improved memory performance",
                related: ["RAM evolution", "Memory speeds"]
            },
            {
                year: 2000,
                location: "United States",
                text: "AMD introduced the first 1GHz processor, the Athlon.",
                category: "invention",
                part: "cpu",
                impact: "Broke the gigahertz barrier in consumer computing",
                related: ["CPU speed race", "Processor evolution"]
            },
            {
                year: 2003,
                location: "United States",
                text: "The first consumer SSDs were introduced, revolutionizing storage speed.",
                category: "invention",
                part: "storage",
                impact: "Transformed data access speeds in computers",
                related: ["Storage evolution", "Computer performance"]
            },
            {
                year: 2001,
                location: "United States",
                text: "Intel introduced the first CPU with hyper-threading technology.",
                category: "invention",
                part: "cpu",
                impact: "Improved multi-tasking capabilities",
                related: ["Parallel processing", "CPU efficiency"]
            },
            {
                year: 2004,
                location: "United States",
                text: "ATI (now AMD) introduced the first GPU with unified shaders.",
                category: "invention",
                part: "gpu",
                impact: "Revolutionized graphics programming",
                related: ["Shader technology", "GPU architecture"]
            }
        ]
    },
    future: {
        facts: [
            {
                year: 2011,
                location: "United States",
                text: "Intel introduced 3D Tri-Gate transistors in CPUs.",
                category: "invention",
                part: "cpu",
                impact: "Revolutionary CPU architecture advancement",
                related: ["Processor efficiency", "Moore's Law"]
            },
            {
                year: 2015,
                location: "United States",
                text: "3D XPoint memory technology was announced by Intel and Micron.",
                category: "invention",
                part: "memory",
                impact: "New class of non-volatile memory",
                related: ["Future of storage", "Memory-driven computing"]
            },
            {
                year: 2020,
                location: "Global",
                text: "PCIe 4.0 becomes mainstream, doubling bandwidth for storage and graphics.",
                category: "invention",
                part: "storage",
                impact: "Enhanced data transfer speeds",
                related: ["Storage speeds", "GPU performance"]
            },
            {
                year: 2018,
                location: "United States",
                text: "NVIDIA RTX series introduced real-time ray tracing for consumer GPUs.",
                category: "invention",
                part: "gpu",
                impact: "Revolutionized real-time graphics rendering",
                related: ["Gaming graphics", "Visual computing"]
            },
            {
                year: 2021,
                location: "United States",
                text: "Apple M1 chip introduced unified memory architecture.",
                category: "invention",
                part: "memory",
                impact: "Redefined computer memory architecture",
                related: ["Chip design", "System performance"]
            },
            {
                year: 2022,
                location: "Taiwan",
                text: "TSMC began mass production of 3nm process CPUs.",
                category: "invention",
                part: "cpu",
                impact: "Pushed the boundaries of transistor miniaturization",
                related: ["Semiconductor advancement", "Processor efficiency"]
            },
            {
                year: 2023,
                location: "United States",
                text: "NVIDIA introduced the Blackwell architecture for AI and graphics.",
                category: "invention",
                part: "gpu",
                impact: "Advanced AI and graphics processing capabilities",
                related: ["AI acceleration", "Next-gen computing"]
            },
            {
                year: 2023,
                location: "South Korea",
                text: "Samsung announced 1000+ layer NAND flash memory.",
                category: "invention",
                part: "storage",
                impact: "Breakthrough in storage density",
                related: ["Storage capacity", "Memory technology"]
            },
            {
                year: 2022,
                location: "Global",
                text: "DDR5 RAM becomes mainstream with speeds up to 6400 MT/s.",
                category: "invention",
                part: "memory",
                impact: "New era in memory performance",
                related: ["Memory bandwidth", "System speed"]
            },
            {
                year: 2024,
                location: "United States",
                text: "Intel introduced quantum-inspired neuromorphic processors.",
                category: "invention",
                part: "cpu",
                impact: "Bridge between classical and quantum computing",
                related: ["Future computing", "Neural processing"]
            }
        ]
    }
};

// Current state
let currentEra = 'pioneer';
let currentCategory = 'all';
let currentPart = 'all';
let currentFact = null;

// DOM Elements
const eraElements = document.querySelectorAll('.era');
const factText = document.querySelector('.fact-text');
const yearSpan = document.querySelector('.year');
const locationSpan = document.querySelector('.location');
const timeTravelBtn = document.querySelector('.time-travel-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const partBtns = document.querySelectorAll('.part-btn');
const impactBtn = document.querySelector('.impact-btn');
const relatedBtn = document.querySelector('.related-btn');
const modal = document.getElementById('impactModal');
const closeBtn = document.querySelector('.close-btn');

// Initialize
function init() {
    attachEventListeners();
    showRandomFact();
}

// Event Listeners
function attachEventListeners() {
    eraElements.forEach(era => {
        era.addEventListener('click', () => {
            currentEra = era.dataset.era;
            updateActiveEra();
            showRandomFact();
        });
    });

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            updateActiveCategory();
            showRandomFact();
        });
    });

    partBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentPart = btn.dataset.part;
            updateActivePart();
            showRandomFact();
        });
    });

    timeTravelBtn.addEventListener('click', () => {
        timeTravelEffect();
        setTimeout(showRandomFact, 1000);
    });

    impactBtn.addEventListener('click', showImpact);
    relatedBtn.addEventListener('click', showRelated);
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
}

// Update active states
function updateActiveEra() {
    eraElements.forEach(era => {
        era.classList.toggle('active', era.dataset.era === currentEra);
    });
}

function updateActiveCategory() {
    categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });
}

function updateActivePart() {
    partBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.part === currentPart);
    });
}

// Show random fact
function showRandomFact() {
    console.log('Current Era:', currentEra);
    console.log('Current Category:', currentCategory);
    console.log('Current Part:', currentPart);

    if (!factsData[currentEra]) {
        console.error('Era not found:', currentEra);
        return;
    }

    const eraFacts = factsData[currentEra].facts;
    let filteredFacts = eraFacts;

    // Apply category filter if not 'all'
    if (currentCategory !== 'all') {
        filteredFacts = filteredFacts.filter(fact => fact.category === currentCategory);
    }

    // Apply part filter if not 'all'
    if (currentPart !== 'all') {
        filteredFacts = filteredFacts.filter(fact => fact.part === currentPart);
    }

    console.log('Filtered Facts:', filteredFacts);

    if (filteredFacts.length === 0) {
        factText.textContent = `No facts available for ${currentPart} parts in this era and category.`;
        yearSpan.textContent = '';
        locationSpan.textContent = '';
        return;
    }

    currentFact = filteredFacts[Math.floor(Math.random() * filteredFacts.length)];
    
    // Apply fade out effect
    factText.style.opacity = '0';
    yearSpan.style.opacity = '0';
    locationSpan.style.opacity = '0';

    setTimeout(() => {
        yearSpan.textContent = currentFact.year;
        locationSpan.textContent = currentFact.location;
        factText.textContent = currentFact.text;
        
        // Apply fade in effect
        factText.style.opacity = '1';
        yearSpan.style.opacity = '1';
        locationSpan.style.opacity = '1';
    }, 300);
}

// Time travel effect
function timeTravelEffect() {
    const portal = document.querySelector('.portal-effect');
    portal.style.opacity = '1';
    portal.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(180deg)';
    
    setTimeout(() => {
        portal.style.opacity = '0.5';
        portal.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
    }, 1000);
}

// Show impact
function showImpact() {
    if (!currentFact) return;
    
    const impactContent = document.querySelector('.impact-content');
    impactContent.innerHTML = `
        <h3>Historical Impact</h3>
        <p>${currentFact.impact}</p>
        <div class="impact-timeline">
            <div class="timeline-point"></div>
            <div class="timeline-content">${currentFact.text}</div>
        </div>
    `;
    
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

// Show related events
function showRelated() {
    if (!currentFact) return;
    
    const impactContent = document.querySelector('.impact-content');
    impactContent.innerHTML = `
        <h3>Related Events</h3>
        <ul class="related-list">
            ${currentFact.related.map(event => `<li>${event}</li>`).join('')}
        </ul>
    `;
    
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);
