const data = [
  {
    name: "Apple",
    id: "Ap",
    emoji: "🍎",
  },
  {
    name: "Green Apple",
    id: "GAp",
    emoji: "🍏",
  },
  {
    name: "Orange",
    id: "Or",
    emoji: "🍊",
  },
  {
    name: "Peach",
    id: "Pch",
    emoji: "🍑",
  },
  {
    name: "waterMelon",
    id: "Wm",
    emoji: "🍉",
  },
  {
    name: "Grapes",
    id: "Gp",
    emoji: "🍇",
  },
  {
    name: "Cherry",
    id: "Ch",
    emoji: "🍒",
  },
  {
    name: "Pear",
    id: "Pr",
    emoji: "🍐",
  },
  {
    name: "Mango",
    id: "Mg",
    emoji: "🥭",
  },
  {
    name: "StrawBerry",
    id: "Sw",
    emoji: "🍓",
  },
  {
    name: "Pea pod",
    id: "Pp",
    emoji: "🫛",
  },
  {
    name: "Onion",
    id: "On",
    emoji: "🧅",
  },
  {
    name: "Garlic",
    id: "Gr",
    emoji: "🧄",
  },
  {
    name: "Potato",
    id: "Pt",
    emoji: "🥔",
  },
  {
    name: "Broccoli",
    id: "Bc",
    emoji: "🥦",
  },
  {
    name: "Spinach",
    id: "Sp",
    emoji: "🥬",
  },
  {
    name: "Mushroom",
    id: "Ms",
    emoji: "🍄",
  },
  {
    name: "Bell Pepper",
    id: "BP",
    emoji: "🫑",
  },
  {
    name: "Hot Pepper",
    id: "HP",
    emoji: "🌶️",
  },
  {
    name: "Brinjal",
    id: "Bj",
    emoji: "🍆",
  },
  {
    name: "SandWhich",
    id: "SW",
    emoji: "🥪",
  },
  {
    name: "Cheese Wedge",
    id: "ChW",
    emoji: "🧀",
  },
  {
    name: "Bagel",
    id: "Bg",
    emoji: "🥯",
  },
  {
    name: "Pretzel",
    id: "Pz",
    emoji: "🥨",
  },
  {
    name: "Waffel",
    id: "Wf",
    emoji: "🧇",
  },
  {
    name: "Popcorn",
    id: "Pc",
    emoji: "🍿",
  },
  {
    name: "Hot Dog",
    id: "HD",
    emoji: "🌭",
  },
  {
    name: "French Fries",
    id: "FF",
    emoji: "🍟",
  },
  {
    name: "Burger",
    id: "Bu",
    emoji: "🍔",
  },
  {
    name: "Pizza",
    id: "Pi",
    emoji: "🍕",
  },
];

const loadBtn = document.querySelector(".btn");
const container = document.querySelector(".container");

const totalPages = data.length / 5;

let p = 1;

function paginate(data, items, page) {
  const startIndex = (page - 1) * items;
  const endIndex = startIndex + items;

  return data.slice(startIndex, endIndex);
}

function loadMoreData(paginatedData, html) {
  paginatedData.map((item) => {
    html += `
      <li>
        <h2>Name : ${item.name}</h2>
        <h2>Id : ${item.id}</h2>
        <h2>Emoji : ${item.emoji}</h2>
      </li>`;
  });

  container.insertAdjacentHTML("beforeend", html);
}

function display(page) {
  let html = "";
  const itemsPerPage = 5;

  const paginatedData = paginate(data, itemsPerPage, page);

  loadMoreData(paginatedData, html);
}

display(p);

loadBtn.addEventListener("click", function () {
  if (p !== totalPages) {
    p++;
    display(p);
  }

  if (p === totalPages) {
    loadBtn.classList.add("hidden");
  }
});
