document.addEventListener("DOMContentLoaded", () => {

    /* ---------------- VIEW SYSTEM ---------------- */
  
    const views = {
      title: document.getElementById("view-title"),
      grid: document.getElementById("view-grid"),
      detail: document.getElementById("view-detail"),
    };
  
    function showView(name){
      Object.values(views).forEach(v=>{
        v.classList.remove("visible");
        v.classList.remove("active");
      });
  
      views[name].classList.add("active");
  
      setTimeout(()=>{
        views[name].classList.add("visible");
        window.scrollTo(0, 0);
      },50);
    }
  
    views.title.classList.add("visible");
  
  
    /* ---------------- BUTTON WIRING ---------------- */
  
    const startBtn = document.getElementById("btnStart");
    if (startBtn) startBtn.onclick = () => showView("grid");
  
    const homeFromGrid = document.getElementById("btnHomeFromGrid");
    if (homeFromGrid) homeFromGrid.onclick = () => showView("title");
  
    const homeFromDetail = document.getElementById("btnHomeFromDetail");
    if (homeFromDetail) homeFromDetail.onclick = () => showView("title");
  
    const backToGrid = document.getElementById("btnBackToGrid");
    if (backToGrid) backToGrid.onclick = () => showView("grid");
  
  
    /* ---------------- COUNTRIES ---------------- */
  
    const countries = [
  
      { id:"brazil", name:"Brazil", population:"203 million", landmark:"Christ the Redeemer", food:"Feijoada",
        facts:"Brazil is home to the Amazon rainforest and Carnival culture.",
        welcomeSvg:"assets/covers/brazil.svg",
        detailImg:"assets/overview/landmark studyBrazil.svg"
      },
  
      { id:"canada", name:"Canada", population:"41 million", landmark:"CN Tower", food:"Poutine",
        facts:"Canada has vast forests, lakes, and two official languages.",
        welcomeSvg:"assets/covers/canada.svg",
        detailImg:"assets/overview/landmark studyCanada.svg"
      },
  
      { id:"chile", name:"Chile", population:"19 million", landmark:"Torres del Paine", food:"Empanadas",
        facts:"Chile stretches along the Pacific with deserts and Patagonia landscapes.",
        welcomeSvg:"assets/covers/chile.svg",
        detailImg:"assets/overview/landmark studyChile.svg"
      },
  
      { id:"china", name:"China", population:"1.4 billion", landmark:"Great Wall", food:"Dumplings",
        facts:"China has one of the world's oldest civilizations.",
        welcomeSvg:"assets/covers/china.svg",
        detailImg:"assets/overview/landmark studyChina.svg"
      },
  
      { id:"france", name:"France", population:"68 million", landmark:"Eiffel Tower", food:"Crêpes",
        facts:"France is famous for art, fashion, and cuisine.",
        welcomeSvg:"assets/covers/france.svg",
        detailImg:"assets/overview/landmark studyFrance.svg"
      },
  
      { id:"greece", name:"Greece", population:"10 million", landmark:"Acropolis", food:"Gyro",
        facts:"Greece is known for ancient ruins and Mediterranean cuisine.",
        welcomeSvg:"assets/covers/greece.svg",
        detailImg:"assets/overview/landmark studyGreece.svg"
      },
  
      { id:"india", name:"India", population:"1.4 billion", landmark:"Taj Mahal", food:"Biryani",
        facts:"India is rich in cultural heritage and festivals.",
        welcomeSvg:"assets/covers/india.svg",
        detailImg:"assets/overview/landmark studyIndia.svg"
      },
  
      { id:"italy", name:"Italy", population:"59 million", landmark:"Colosseum", food:"Pasta",
        facts:"Italy is home to Roman landmarks and world-famous cuisine.",
        welcomeSvg:"assets/covers/italy.svg",
        detailImg:"assets/overview/landmark studyItaly.svg"
      },
  
      { id:"japan", name:"Japan", population:"123 million", landmark:"Mount Fuji", food:"Sushi",
        facts:"Japan blends tradition with cutting-edge technology.",
        welcomeSvg:"assets/covers/japan.svg",
        detailImg:"assets/overview/landmark studyJapan.svg"
      },
  
      { id:"mexico", name:"Mexico", population:"129 million", landmark:"Chichén Itzá", food:"Tacos",
        facts:"Mexico is known for ancient civilizations and vibrant culture.",
        welcomeSvg:"assets/covers/mexico.svg",
        detailImg:"assets/overview/landmark studyMexico.svg"
      },
  
      { id:"nepal", name:"Nepal", population:"30 million", landmark:"Mount Everest", food:"Momos",
        facts:"Nepal is home to the Himalayas.",
        welcomeSvg:"assets/covers/nepal.svg",
        detailImg:"assets/overview/landmark studyNepal.svg"
      },
  
      { id:"turkey", name:"Turkey", population:"85 million", landmark:"Hagia Sophia", food:"Kebabs",
        facts:"Turkey sits between Europe and Asia.",
        welcomeSvg:"assets/covers/turkey.svg",
        detailImg:"assets/overview/landmark studyTurkey.svg"
      },
  
      { id:"uk", name:"United Kingdom", population:"67 million", landmark:"Big Ben", food:"Fish & Chips",
        facts:"The UK blends historic castles with modern cities.",
        welcomeSvg:"assets/covers/uk.svg",
        detailImg:"assets/overview/landmark studyUnited Kingdom.svg"
      },
  
      { id:"usa", name:"United States", population:"335 million", landmark:"Statue of Liberty", food:"Burgers",
        facts:"The U.S. spans many climates and cultures.",
        welcomeSvg:"assets/covers/usa.svg",
        detailImg:"assets/overview/landmark studyUnited States.svg"
      },
  
      { id:"vietnam", name:"Vietnam", population:"100 million", landmark:"Ha Long Bay", food:"Pho",
        facts:"Vietnam is known for dramatic landscapes and cuisine.",
        welcomeSvg:"assets/covers/vietnam.svg",
        detailImg:"assets/overview/landmark studyVietnam.svg"
      }
  
    ];
  
  
    /* ---------------- BUILD GRID ---------------- */
  
    const tilesEl = document.getElementById("tiles");
  
    countries.forEach(c=>{
      const tile = document.createElement("div");
      tile.className = "tile";
  
      tile.innerHTML = `
      <img src="${c.welcomeSvg}" alt="${c.name}" />
    `;
    
    tile.dataset.id = c.id;
    tile.style.cursor = "pointer";
  
      tilesEl.appendChild(tile);
    });
  
  
    /* ---------------- DETAIL CLICK ---------------- */
  
    tilesEl.addEventListener("click", e=>{
        const tile = e.target.closest(".tile");
        if(!tile) return;
        
        const c = countries.find(x=>x.id === tile.dataset.id);
      if(!c) return;
      const img = document.getElementById("dImg");
      img.src = "";
      img.src = encodeURI(c.detailImg);
  
      showView("detail");
    });

    const popup = document.getElementById("imgPopup");
const popupImg = document.getElementById("popupImg");
const mainImg = document.getElementById("dImg");

mainImg.addEventListener("click", () => {
  popupImg.src = mainImg.src;
  popup.classList.add("show");
});

popup.addEventListener("click", () => {
  popup.classList.remove("show");
});
  
  });