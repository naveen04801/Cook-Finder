
// ---------- recipe data (all stored locally, no outside API) ----------
// r(id, name, cuisine, category, emoji, minutes, servings, level, method, ingredients, steps, tip)
function r(id, name, cuisine, cat, emoji, time, serves, level, method, ing, steps, tip) {
  return {id:id, name:name, cuisine:cuisine, cat:cat, emoji:emoji, time:time, serves:serves, level:level, method:method, ing:ing, steps:steps, tip:tip};
}

var recipes = [
  // ----- Indian -----
  r(1,"Butter Chicken","Indian","chicken curry","🍛",50,4,"Medium","Simmer",
    [[500,"g","boneless chicken, cut into pieces"],[150,"g","curd"],[1,"tbsp","ginger garlic paste"],[1,"tsp","red chilli powder"],[3,"","tomatoes, pureed"],[3,"tbsp","butter"],[1,"tsp","garam masala"],[1,"tsp","kasuri methi"],[100,"ml","cream"],[1,"tsp","salt"]],
    ["Mix the chicken with curd, half the ginger garlic paste, chilli powder and salt. Marinate for at least 30 minutes.",
     "Heat 1 tbsp butter in a pan and sear the chicken for 6 to 8 minutes until lightly browned. Set aside.",
     "In the same pan melt the remaining butter. Add the rest of the ginger garlic paste and cook for 1 minute until the raw smell goes.",
     "Add the tomato puree and cook on medium heat for 10 minutes until the oil separates from the sauce.",
     "Add the chicken, garam masala and half a cup of water. Cover and simmer for 10 minutes.",
     "Stir in the cream and crushed kasuri methi. Cook for 2 more minutes and serve hot with naan or rice."],
    "For a smoother gravy, blend the cooked tomato sauce before adding the chicken."),
  r(2,"Paneer Butter Masala","Indian","paneer curry","🧈",35,3,"Easy","Simmer",
    [[250,"g","paneer cubes"],[3,"","tomatoes"],[1,"","onion"],[10,"","cashews"],[2,"tbsp","butter"],[1,"tsp","ginger garlic paste"],[1,"tsp","kashmiri chilli powder"],[1,"tsp","garam masala"],[3,"tbsp","cream"],[1,"tsp","salt"]],
    ["Boil the tomatoes, onion and cashews in water for 8 minutes. Cool and blend into a smooth paste.",
     "Melt butter in a pan and add the ginger garlic paste. Cook for 30 seconds.",
     "Pour in the paste, add chilli powder and salt. Cook on low heat for 10 minutes, stirring often.",
     "Add half a cup of water and garam masala. Simmer for 5 minutes.",
     "Add the paneer cubes and cream. Cook for 3 minutes and turn off the heat.",
     "Serve with butter naan, roti or jeera rice."],
    "Soak the paneer in warm water for 10 minutes first to keep it soft."),
  r(3,"Dal Tadka","Indian","lentils","🍲",35,4,"Easy","Boil",
    [[1,"cup","toor dal"],[3,"cups","water"],[0.5,"tsp","turmeric"],[1,"tsp","salt"],[2,"tbsp","ghee"],[1,"tsp","cumin seeds"],[4,"","garlic cloves, chopped"],[2,"","dried red chillies"],[1,"","tomato, chopped"],[1,"tbsp","chopped coriander"]],
    ["Wash the dal and pressure cook with water, turmeric and salt for 4 whistles. Mash lightly.",
     "Heat ghee in a small pan. Add cumin seeds and let them crackle.",
     "Add the garlic and red chillies. Fry until the garlic turns golden.",
     "Add the tomato and cook for 3 minutes until soft.",
     "Pour this tadka over the cooked dal and mix well.",
     "Simmer for 5 minutes, top with coriander and serve with rice."],
    "Add a pinch of asafoetida (hing) in the tadka for a restaurant-style aroma."),
  r(4,"Chole (Chana Masala)","Indian","chickpea curry","🫘",50,4,"Medium","Simmer",
    [[1.5,"cups","chickpeas, soaked overnight"],[2,"","onions, chopped"],[2,"","tomatoes, pureed"],[1,"tbsp","ginger garlic paste"],[2,"tsp","chole masala"],[1,"tsp","coriander powder"],[0.5,"tsp","turmeric"],[3,"tbsp","oil"],[1,"tsp","salt"]],
    ["Pressure cook the soaked chickpeas with salt and 3 cups water for 6 to 7 whistles until soft.",
     "Heat oil and fry the onions until deep golden brown, about 8 minutes.",
     "Add the ginger garlic paste and cook for 1 minute.",
     "Add the tomato puree with turmeric, coriander powder and chole masala. Cook until oil leaves the sides.",
     "Add the chickpeas with their water. Mash a few chickpeas to thicken the gravy.",
     "Simmer for 12 minutes. Serve with bhature, kulcha or rice."],
    "A tea bag boiled with the chickpeas gives chole its classic dark colour."),
  r(5,"Veg Biryani","Indian","rice","🍚",60,4,"Medium","Steam",
    [[2,"cups","basmati rice"],[2,"cups","mixed vegetables"],[150,"g","curd"],[2,"","onions, sliced"],[2,"tbsp","biryani masala"],[1,"tbsp","ginger garlic paste"],[3,"tbsp","ghee"],[1,"handful","mint and coriander"],[1,"tsp","salt"]],
    ["Wash the rice and soak for 20 minutes.",
     "Fry the sliced onions in ghee until golden and crisp. Keep half aside for garnish.",
     "Add ginger garlic paste, vegetables, curd, biryani masala and salt. Cook for 8 minutes into a thick masala.",
     "Boil the rice in salted water until 70 percent cooked and drain.",
     "Layer rice over the masala. Top with fried onions, mint and coriander.",
     "Cover with a tight lid and cook on the lowest heat (dum) for 20 minutes. Rest for 5 minutes before serving."],
    "Seal the lid with dough or a wet cloth so the steam stays inside."),
  r(6,"Chicken Biryani","Indian","rice","🍗",80,4,"Hard","Steam",
    [[2,"cups","basmati rice"],[600,"g","chicken pieces"],[200,"g","curd"],[3,"","onions, sliced"],[2,"tbsp","ginger garlic paste"],[2,"tbsp","biryani masala"],[1,"tsp","red chilli powder"],[4,"tbsp","ghee"],[1,"handful","mint leaves"],[2,"tsp","salt"]],
    ["Marinate the chicken with curd, ginger garlic paste, masala, chilli powder and salt for 1 hour.",
     "Soak the rice for 30 minutes. Boil it with whole spices in salted water until 70 percent done, then drain.",
     "Fry the onions in ghee until dark golden. Reserve half for layering.",
     "Spread the marinated chicken in a heavy pot. Add the remaining fried onions and mint.",
     "Layer the rice on top and drizzle with a little ghee and saffron milk.",
     "Seal the pot and cook on high for 5 minutes, then on the lowest heat for 30 minutes. Rest for 10 minutes before opening."],
    "Do not stir while serving. Lift from the edge so the layers stay separate."),
  r(7,"Masala Dosa","Indian","breakfast","🥞",45,4,"Medium","Fry",
    [[2,"cups","dosa batter"],[4,"","potatoes, boiled"],[1,"","onion, sliced"],[1,"tsp","mustard seeds"],[1,"tsp","chana dal"],[0.5,"tsp","turmeric"],[1,"sprig","curry leaves"],[2,"tbsp","oil"],[1,"tsp","salt"]],
    ["Heat oil, add mustard seeds, chana dal and curry leaves. Let the seeds pop.",
     "Add onion and turmeric and cook for 3 minutes.",
     "Add the mashed potatoes and salt. Mix well and cook for 3 minutes. The filling is ready.",
     "Heat a flat tawa and wipe it with an oiled onion half.",
     "Pour a ladle of batter in the centre and spread it thin in circles. Drizzle oil around the edges.",
     "Cook until crisp and golden. Add the filling, fold and serve with coconut chutney and sambar."],
    "The tawa must be hot but not smoking, or the batter will not spread."),
  r(8,"Aloo Paratha","Indian","breakfast","🫓",40,3,"Medium","Fry",
    [[2,"cups","wheat flour"],[3,"","potatoes, boiled and mashed"],[1,"tsp","cumin powder"],[1,"tsp","red chilli powder"],[1,"tsp","amchur"],[2,"tbsp","chopped coriander"],[3,"tbsp","ghee"],[1,"tsp","salt"]],
    ["Knead the flour with water and a pinch of salt into a soft dough. Rest for 15 minutes.",
     "Mix the mashed potatoes with cumin, chilli, amchur, coriander and salt.",
     "Roll a small ball of dough, flatten it and place a spoonful of filling in the middle.",
     "Seal the edges, dust with flour and roll gently into a round paratha.",
     "Cook on a hot tawa for 1 minute, flip, apply ghee and cook both sides until golden spots appear.",
     "Serve hot with curd, butter or pickle."],
    "Cool the potato filling fully first so the paratha does not tear while rolling."),
  r(9,"Palak Paneer","Indian","paneer curry","🥬",35,3,"Easy","Boil",
    [[300,"g","spinach"],[200,"g","paneer cubes"],[1,"","onion, chopped"],[2,"","tomatoes, chopped"],[1,"tbsp","ginger garlic paste"],[2,"","green chillies"],[1,"tsp","garam masala"],[2,"tbsp","oil"],[2,"tbsp","cream"],[1,"tsp","salt"]],
    ["Blanch the spinach in boiling water for 2 minutes. Move it to ice water, then blend with green chillies into a puree.",
     "Heat oil and fry the onion until soft and golden.",
     "Add ginger garlic paste and tomatoes. Cook for 6 minutes until mushy.",
     "Pour in the spinach puree, add salt and garam masala. Simmer for 5 minutes.",
     "Add the paneer and cream. Cook for 2 minutes and serve with roti."],
    "Do not overcook the spinach or the gravy will turn dull brown."),
  r(10,"Rajma Chawal","Indian","kidney beans","🍛",60,4,"Easy","Simmer",
    [[1,"cup","rajma, soaked overnight"],[2,"","onions, chopped"],[3,"","tomatoes, pureed"],[1,"tbsp","ginger garlic paste"],[2,"tsp","rajma masala"],[0.5,"tsp","turmeric"],[3,"tbsp","oil"],[1,"tsp","salt"],[2,"cups","cooked rice"]],
    ["Pressure cook the soaked rajma with salt and 3 cups water for 7 whistles until very soft.",
     "Heat oil and fry the onions until golden brown.",
     "Add ginger garlic paste and cook for 1 minute.",
     "Add tomato puree, turmeric and rajma masala. Cook until the oil separates.",
     "Add the rajma with its water. Simmer for 15 minutes, mashing a few beans to thicken.",
     "Serve hot over steamed rice."],
    "Rajma tastes even better the next day, so cook extra."),

  // ----- Italian -----
  r(11,"Margherita Pizza","Italian","pizza","🍕",30,4,"Easy","Bake",
    [[300,"g","pizza dough"],[200,"g","tomato sauce"],[200,"g","mozzarella"],[1,"handful","fresh basil"],[2,"tbsp","olive oil"]],
    ["Heat the oven to 240°C with a baking tray inside.",
     "Stretch the dough into a thin 30 cm circle on floured parchment.",
     "Spread the sauce, leaving a border. Add torn mozzarella.",
     "Slide onto the hot tray and bake for 10 to 12 minutes until the crust is golden and the cheese bubbles.",
     "Top with basil and a drizzle of olive oil."],
    "A very hot oven is the secret to a crisp crust."),
  r(12,"Spaghetti Carbonara","Italian","pasta","🍝",25,2,"Medium","Boil",
    [[200,"g","spaghetti"],[100,"g","bacon or pancetta"],[2,"","egg yolks plus 1 whole egg"],[50,"g","grated parmesan"],[1,"tsp","black pepper"]],
    ["Boil the spaghetti in well-salted water. Save a cup of the pasta water.",
     "Fry the bacon until crisp.",
     "Whisk eggs, parmesan and pepper in a bowl.",
     "Drain the pasta and toss it with the bacon off the heat.",
     "Add the egg mixture and a splash of pasta water. Toss quickly until creamy. Do not return to the heat or the eggs will scramble."],
    "Stir fast and add pasta water little by little to control the sauce."),
  r(13,"Tomato Basil Pasta","Italian","pasta","🍅",20,3,"Easy","Boil",
    [[250,"g","penne"],[400,"g","chopped tomatoes"],[3,"","garlic cloves"],[1,"handful","fresh basil"],[3,"tbsp","olive oil"]],
    ["Cook the penne in salted water until just tender.",
     "Fry the sliced garlic in olive oil for 1 minute without browning.",
     "Add the tomatoes and a pinch of salt. Simmer for 10 minutes.",
     "Toss the pasta in the sauce with a spoon of pasta water.",
     "Finish with torn basil."],
    "Add a pinch of sugar if the tomatoes taste sour."),

  // ----- World -----
  r(14,"Lemon Herb Chicken","World","chicken","🍗",40,4,"Easy","Bake",
    [[4,"","chicken breasts"],[2,"","lemons"],[3,"","garlic cloves"],[2,"tbsp","olive oil"],[1,"tbsp","mixed herbs"]],
    ["Mix lemon juice, oil, garlic and herbs.",
     "Coat the chicken and marinate for 15 minutes.",
     "Bake at 200°C for 25 minutes until the juices run clear.",
     "Rest for 5 minutes before slicing."],
    "Resting keeps the chicken juicy."),
  r(15,"Chicken Fried Rice","World","rice","🍚",20,3,"Easy","Fry",
    [[300,"g","cooked rice, cold"],[200,"g","cooked chicken"],[2,"","eggs"],[100,"g","peas and carrots"],[2,"tbsp","soy sauce"],[2,"tbsp","oil"]],
    ["Heat oil in a wok on high and scramble the eggs. Set aside.",
     "Stir-fry the vegetables and chicken for 3 minutes.",
     "Add the cold rice and soy sauce. Toss for 3 minutes.",
     "Fold the eggs back in and serve hot."],
    "Day-old rice fries better because it is drier."),
  r(16,"Classic Beef Burger","World","burger","🍔",25,2,"Easy","Grill",
    [[300,"g","minced beef"],[2,"","burger buns"],[2,"slices","cheese"],[1,"","tomato"],[4,"leaves","lettuce"]],
    ["Shape the beef into two patties and season with salt and pepper.",
     "Grill or pan-fry for 4 minutes per side.",
     "Add the cheese in the last minute so it melts.",
     "Toast the buns and build the burger with lettuce and tomato."],
    "Press a small dip in the centre so patties stay flat as they cook."),
  r(17,"Greek Salad","World","salad","🥗",10,2,"Easy","Mix",
    [[2,"","tomatoes"],[1,"","cucumber"],[100,"g","feta"],[1,"handful","olives"],[2,"tbsp","olive oil"]],
    ["Chop the tomatoes and cucumber into chunks.",
     "Add olives and crumbled feta.",
     "Drizzle with olive oil and add a pinch of salt and oregano."],
    "Serve right away so the vegetables stay crunchy."),
  r(18,"Chocolate Pancakes","World","dessert","🥞",20,3,"Easy","Fry",
    [[150,"g","flour"],[2,"tbsp","cocoa powder"],[1,"","egg"],[250,"ml","milk"],[2,"tbsp","sugar"]],
    ["Whisk all the ingredients into a smooth batter. Rest for 5 minutes.",
     "Heat a lightly oiled pan on medium heat.",
     "Pour a ladle of batter and cook until bubbles form on top.",
     "Flip and cook for another minute.",
     "Serve with fruit or syrup."],
    "Do not press the pancake while cooking or it turns dense."),
  r(19,"Banana Smoothie","World","drink","🍌",5,2,"Easy","Blend",
    [[2,"","ripe bananas"],[300,"ml","milk"],[2,"tbsp","honey"],[4,"","ice cubes"]],
    ["Put everything in a blender.","Blend for 40 seconds until smooth.","Pour into glasses and serve cold."],
    "Freeze the bananas first for a thicker, ice-cream style smoothie.")
];





// ---------- settings ----------
var PER_PAGE = 10;            // recipes shown per page
var PHOTO_FOLDER = "images/"; // put your own photos here, e.g. images/butter-chicken.jpg

// ---------- elements ----------
var resultsBox = document.getElementById("results");
var recipeBox = document.getElementById("recipe");
var searchInput = document.getElementById("searchInput");
var bmPanel = document.getElementById("bmPanel");
var bmBtn = document.getElementById("bmBtn");
var overlay = document.getElementById("overlay");

// ---------- state ----------
var mine = [];
var bookmarks = [];
var results = [];
var searched = false;
var query = "";
var page = 1;
var current = null;
var servings = 0;
var doneSteps = [];
var savedOnline = [];     // worldwide recipes the user bookmarked
var onlineById = {};      // worldwide recipes found in searches
var onlineStatus = "";    // "", "loading", "done" or "failed"
var searchToken = 0;
var API = "https://www.themealdb.com/api/json/v1/1/";

// ---------- helpers ----------
function esc(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function allRecipes() { return recipes.concat(mine, savedOnline); }
function findRecipe(id) {
  if (onlineById[id]) return onlineById[id];
  return allRecipes().filter(function (x) { return String(x.id) === String(id); })[0];
}
function isBookmarked(id) { return bookmarks.indexOf(String(id)) !== -1; }
function niceNumber(n) { return String(Math.round(n * 10) / 10); }
function slug(name) { return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
function readStorage(key) {
  try { var v = JSON.parse(localStorage.getItem(key)); return Array.isArray(v) ? v : []; } catch (err) { return []; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (err) {}
}

// ---------- photos (colour tile shows if the file is missing) ----------
// Real food photos come from each dish's Wikipedia article (works when this file is opened on your computer)
var WIKI = {
  "Butter Chicken":"Butter chicken", "Paneer Butter Masala":"Shahi paneer", "Dal Tadka":"Dal",
  "Chole (Chana Masala)":"Chana masala", "Veg Biryani":"Biryani", "Chicken Biryani":"Hyderabadi biryani",
  "Masala Dosa":"Masala dosa", "Aloo Paratha":"Paratha", "Palak Paneer":"Palak paneer", "Rajma Chawal":"Rajma",
  "Margherita Pizza":"Pizza Margherita", "Spaghetti Carbonara":"Carbonara", "Tomato Basil Pasta":"Penne",
  "Lemon Herb Chicken":"Roast chicken", "Chicken Fried Rice":"Fried rice", "Classic Beef Burger":"Hamburger",
  "Greek Salad":"Greek salad", "Chocolate Pancakes":"Pancake", "Banana Smoothie":"Smoothie"
};
var PHOTO_CACHE = {};   // dish name -> photo link, remembered between visits
var photoTried = {};
try { PHOTO_CACHE = JSON.parse(localStorage.getItem("tastyPhotos") || "{}") || {}; } catch (err) { PHOTO_CACHE = {}; }

function photoUrl(rec) {
  if (rec.photo) return rec.photo;
  if (PHOTO_CACHE[rec.name]) return PHOTO_CACHE[rec.name];
  return typeof rec.id === "number" ? PHOTO_FOLDER + slug(rec.name) + ".jpg" : "";
}
function photoHtml(rec, cls) {
  var url = photoUrl(rec);
  var tone = ["Indian", "Italian", "World"].indexOf(rec.cuisine) !== -1 ? rec.cuisine : "Other";
  var img = url ? '<img src="' + esc(url) + '" alt="" loading="lazy">' : "";
  return '<div class="photo ' + cls + ' g-' + tone + '" data-pid="' + esc(rec.id) + '"><span class="ph-emoji">' + esc(rec.emoji) + '</span>' + img + '</div>';
}

// ask Wikipedia for the dish photo, then put it on every tile of that dish
function fetchPhoto(rec) {
  var title = WIKI[rec.name];
  if (!title || rec.photo || PHOTO_CACHE[rec.name] || photoTried[rec.id] || typeof fetch !== "function") return;
  photoTried[rec.id] = true;
  fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title))
    .then(function (res) { return res.json(); })
    .then(function (data) {
      var src = data && data.thumbnail && data.thumbnail.source;
      if (!src) return;
      src = src.replace(/\/\d+px-/, "/640px-");
      PHOTO_CACHE[rec.name] = src;
      try { localStorage.setItem("tastyPhotos", JSON.stringify(PHOTO_CACHE)); } catch (err) {}
      var tiles = document.querySelectorAll('.photo[data-pid="' + rec.id + '"]');
      for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].querySelector("img")) continue;
        var img = document.createElement("img");
        img.alt = ""; img.src = src;
        tiles[i].appendChild(img);
      }
    })
    .catch(function () {});
}
document.addEventListener("error", function (e) {
  if (e.target.tagName === "IMG" && e.target.parentNode.classList.contains("photo")) e.target.remove();
}, true);

// ---------- search ----------
function matches(rec, text) {
  var words = text.toLowerCase().split(" ").filter(function (w) { return w; });
  var haystack = (rec.name + " " + rec.cat + " " + rec.cuisine + " " + rec.method + " " +
    rec.ing.map(function (i) { return i[2]; }).join(" ")).toLowerCase();
  return words.every(function (w) { return haystack.indexOf(w) !== -1; });
}
// ---------- worldwide recipes (TheMealDB, free public recipe API) ----------
function getJson(path) {
  return fetch(API + path).then(function (res) { return res.json(); }).catch(function () { return null; });
}

function splitSteps(text) {
  var lines = text.split(/\r?\n/).map(function (t) { return t.trim(); })
    .filter(function (t) { return t && !/^(step\s*\d+[:.)]?|\d+[.)]?)$/i.test(t); });
  if (lines.length < 3) {
    lines = lines.join(" ").split(/(?<=[.!?])\s+(?=[A-Z])/).map(function (t) { return t.trim(); }).filter(Boolean);
  }
  return lines.map(function (l) { return l.replace(/^step\s*\d+[:.)]?\s*/i, ""); });
}

// turns the API's meal object into the same shape as our own recipes
function mealToRec(m) {
  var ings = [];
  for (var i = 1; i <= 20; i++) {
    var name = m["strIngredient" + i];
    if (name && name.trim()) {
      var measure = (m["strMeasure" + i] || "").trim();
      ings.push([0, "", (measure ? measure + " " : "") + name.trim()]);
    }
  }
  var src = /^https?:\/\//i.test(m.strSource || "") ? m.strSource : "";
  var yt = /^https?:\/\//i.test(m.strYoutube || "") ? m.strYoutube : "";
  return {id: "m" + m.idMeal, mealId: m.idMeal, name: m.strMeal, cuisine: m.strArea || "World", cat: m.strCategory || "",
    emoji: "🍽️", time: 0, serves: 0, level: "", method: m.strCategory || "", ing: ings, steps: splitSteps(m.strInstructions || ""),
    tip: "", photo: m.strMealThumb || "", url: yt || src, source: src, fixed: true, online: true};
}

// list entries from ingredient / country / category searches only have a name and photo
function partialRec(m) {
  return {id: "m" + m.idMeal, mealId: m.idMeal, name: m.strMeal, cuisine: "World", cat: "", emoji: "🍽️", time: 0, serves: 0,
    level: "", method: "", ing: [], steps: [], tip: "", photo: m.strMealThumb || "", url: "", fixed: true, online: true, partial: true};
}

function searchOnline(text) {
  var one = encodeURIComponent(text);
  var ingredient = encodeURIComponent(text.replace(/\s+/g, "_"));
  return Promise.all([
    getJson("search.php?s=" + one),
    getJson("filter.php?i=" + ingredient),
    getJson("filter.php?a=" + one),
    getJson("filter.php?c=" + one)
  ]).then(function (answers) {
    if (answers.every(function (a) { return a === null; })) throw new Error("offline");
    var found = [], seen = {};
    answers.forEach(function (a, n) {
      if (!a || !Array.isArray(a.meals)) return;
      a.meals.forEach(function (m) {
        if (seen[m.idMeal]) return;
        seen[m.idMeal] = true;
        found.push(n === 0 ? mealToRec(m) : partialRec(m));
      });
    });
    return found.slice(0, 80);
  });
}

function runSearch(text) {
  query = text.trim();
  searched = true;
  page = 1;
  results = allRecipes().filter(function (rec) { return matches(rec, query); });
  var token = ++searchToken;
  if (!query || typeof fetch !== "function") { onlineStatus = ""; drawResults(); return; }
  onlineStatus = "loading";
  drawResults();
  searchOnline(query).then(function (list) {
    if (token !== searchToken) return;
    var have = {};
    results.forEach(function (rec) { have[rec.id] = true; });
    list.forEach(function (rec) {
      if (have[rec.id]) return;
      if (!rec.partial || !onlineById[rec.id]) onlineById[rec.id] = rec;
      results.push(onlineById[rec.id]);
    });
    onlineStatus = "done";
    drawResults();
  }).catch(function () {
    if (token !== searchToken) return;
    onlineStatus = "failed";
    drawResults();
  });
}

// ---------- left side: results list ----------
function itemHtml(rec) {
  var active = current && String(current.id) === String(rec.id) ? " active" : "";
  return '<button class="item' + active + '" data-open="' + esc(rec.id) + '">' + photoHtml(rec, "thumb") +
    '<span class="meta"><h4>' + esc(rec.name) + '</h4><p>' + esc([rec.cuisine, rec.time ? rec.time + " min" : ""].filter(Boolean).join(" · ")) + '</p></span></button>';
}

function drawResults() {
  var html = "";
  var note = onlineStatus === "loading" ? "Searching recipes from all over the world..."
    : onlineStatus === "failed" ? "Worldwide search needs an internet connection, so only saved recipes are shown." : "";
  if (!searched) {
    html = '<div class="tryline">Search for any dish, ingredient or country. This looks through our saved recipes and recipes from all over the world.' +
      '<div class="try">' + ["indian", "italian", "mexican", "japanese", "chicken", "seafood", "dessert", "biryani"].map(function (w) {
        return '<button data-chip="' + w + '">' + w + '</button>';
      }).join("") + '</div></div>';
  } else if (!results.length) {
    html = '<div class="tryline">' + (onlineStatus === "loading" ? note
      : 'No recipes found for "' + esc(query) + '". Please try another word!' + (note ? '<br>' + note : '')) + '</div>';
  } else {
    var pages = Math.ceil(results.length / PER_PAGE);
    if (page > pages) page = pages;
    var start = (page - 1) * PER_PAGE;
    html = '<div class="top">' + results.length + ' recipes found</div>' + (note ? '<div class="top">' + note + '</div>' : '') +
      results.slice(start, start + PER_PAGE).map(itemHtml).join("");
    if (pages > 1) {
      html += '<div class="pager">' +
        (page > 1 ? '<button data-page="' + (page - 1) + '">‹ Page ' + (page - 1) + '</button>' : '') +
        '<span class="pg">Page ' + page + ' of ' + pages + '</span>' +
        (page < pages ? '<button class="next" data-page="' + (page + 1) + '">Page ' + (page + 1) + ' ›</button>' : '') +
        '</div>';
    }
  }
  html += '<div class="credit">Saved recipes plus worldwide recipes from TheMealDB. Photos from TheMealDB and Wikipedia.</div>';
  resultsBox.innerHTML = html;
  if (searched) results.slice((page - 1) * PER_PAGE, page * PER_PAGE).forEach(fetchPhoto);
}

// ---------- bookmarks dropdown ----------
function drawBookmarks() {
  var list = allRecipes().filter(function (rec) { return isBookmarked(rec.id); });
  bmPanel.innerHTML = list.length
    ? list.map(itemHtml).join("")
    : '<div class="bm-empty">No bookmarks yet. Find a nice recipe and bookmark it :)</div>';
}

// ---------- right side: recipe ----------
function openRecipe(rec) {
  if (!rec) return;
  if (rec.partial) {
    recipeBox.innerHTML = '<div class="welcome"><div><div class="big">🍳</div><p>Loading the recipe...</p></div></div>';
    getJson("lookup.php?i=" + encodeURIComponent(rec.mealId)).then(function (d) {
      if (d && Array.isArray(d.meals) && d.meals[0]) {
        var full = mealToRec(d.meals[0]);
        onlineById[full.id] = full;
        results = results.map(function (x) { return x.id === full.id ? full : x; });
        openRecipe(full);
      } else {
        recipeBox.innerHTML = '<div class="welcome"><div><div class="big">😕</div><p>Sorry, this recipe could not be loaded. Please try another one.</p></div></div>';
      }
    });
    return;
  }
  current = rec;
  servings = rec.serves;
  doneSteps = [];
  drawResults();
  drawRecipe();
  bmPanel.classList.remove("open");
  if (window.innerWidth <= 860) recipeBox.scrollIntoView();
}

function linkFor(base, text) { return base + encodeURIComponent(text); }

function drawRecipe() {
  if (!current) {
    recipeBox.innerHTML = '<div class="welcome"><div><div class="big">😋</div><p>Start by searching for a recipe or an ingredient. Have fun!</p></div></div>';
    return;
  }
  var rec = current;
  var factor = rec.serves ? servings / rec.serves : 1;
  var ingHtml = rec.ing.map(function (i) {
    var amount = i[0] ? niceNumber(i[0] * factor) + " " : "";
    return "<li><span>" + amount + (i[1] ? esc(i[1]) + " " : "") + esc(i[2]) + "</span></li>";
  }).join("");
  var stepHtml = rec.steps.map(function (s, n) {
    var checked = doneSteps.indexOf(n) !== -1 ? " checked" : "";
    return '<li><label><input type="checkbox" data-step="' + n + '"' + checked + '><span>' + esc(s) + '</span></label></li>';
  }).join("");
  var saved = isBookmarked(rec.id);
  var isMine = mine.some(function (m) { return m.id === rec.id; });
  var q = rec.name + " recipe";
  var dirUrl = rec.url || linkFor("https://www.youtube.com/results?search_query=", q);

  recipeBox.innerHTML =
    '<div class="hero">' + photoHtml(rec, "hero") + '<h1 class="hero-title"><span>' + esc(rec.name) + '</span></h1></div>' +
    '<div class="details">' +
      (rec.time ? '<div class="info"><span class="ic">⏱</span><b>' + rec.time + '</b> minutes</div>' : '') +
      (rec.serves ? '<div class="info"><span class="ic">👥</span><b>' + servings + '</b> servings' +
        '<span class="adj"><button id="minus" aria-label="Fewer servings">−</button><button id="plus" aria-label="More servings">+</button></span></div>' : '') +
      (!rec.time && !rec.serves ? '<div class="info"><span class="ic">🌍</span>' + esc(rec.cuisine) + ' recipe</div>' : '') +
      '<button class="round' + (saved ? " on" : "") + '" id="markBtn" aria-label="' + (saved ? "Remove bookmark" : "Bookmark this recipe") + '">' + (saved ? "★" : "☆") + '</button>' +
    '</div>' +
    '<div class="tags">' + [rec.cuisine, rec.method, rec.level].filter(Boolean).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div>' +
    '<div class="sec ingredients"><h2>Recipe ingredients</h2><ul class="ings">' + ingHtml + '</ul></div>' +
    '<div class="sec"><h2>How to cook it</h2>' +
      (rec.steps.length ? '<div class="pt" id="progressText"></div><div class="progress"><i id="progressBar"></i></div><ol class="steps">' + stepHtml + '</ol>' : '<p class="pt">No cooking steps were added for this recipe. Use the Directions button below.</p>') +
      (rec.tip ? '<div class="tip"><b>Chef tip:</b> ' + esc(rec.tip) + '</div>' : '') +
    '</div>' +
    '<div class="sec directions"><h2>Want to see it cooked?</h2>' +
      '<p>Watch a video or read another cook\'s version of <b>' + esc(rec.name) + '</b> on other websites.</p>' +
      '<a class="btn-dir" href="' + esc(dirUrl) + '" target="_blank" rel="noopener noreferrer">Directions ›</a>' +
      '<div class="more">' +
        (rec.source && rec.source !== rec.url ? '<a href="' + esc(rec.source) + '" target="_blank" rel="noopener noreferrer">Original recipe page</a>' : '') +
        '<a href="' + linkFor("https://www.google.com/search?q=", q + " step by step") + '" target="_blank" rel="noopener noreferrer">More on Google</a>' +
        '<a href="' + linkFor("https://en.wikipedia.org/w/index.php?search=", rec.name) + '" target="_blank" rel="noopener noreferrer">History on Wikipedia</a>' +
      '</div>' +
      (isMine ? '<button class="del" id="delBtn">Delete this recipe</button>' : '') +
    '</div>';

  updateProgress();
  fetchPhoto(rec);
  if (rec.serves) {
    document.getElementById("minus").onclick = function () { if (servings > 1) { servings--; drawRecipe(); } };
    document.getElementById("plus").onclick = function () { if (servings < 20) { servings++; drawRecipe(); } };
  }
  document.getElementById("markBtn").onclick = function () { toggleBookmark(rec.id); };
  if (isMine) document.getElementById("delBtn").onclick = function () { deleteMine(rec.id); };

  var boxes = recipeBox.querySelectorAll("input[data-step]");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].onchange = function () {
      var n = Number(this.dataset.step);
      if (this.checked) { if (doneSteps.indexOf(n) === -1) doneSteps.push(n); }
      else doneSteps = doneSteps.filter(function (x) { return x !== n; });
      updateProgress();
    };
  }
}

function updateProgress() {
  var total = current.steps.length;
  if (!total) return;
  var done = doneSteps.length;
  document.getElementById("progressBar").style.width = (done / total * 100) + "%";
  document.getElementById("progressText").textContent = done === total
    ? "All steps done. Enjoy your meal!" : done + " of " + total + " steps done";
}

// ---------- bookmarks storage ----------
function toggleBookmark(id) {
  id = String(id);
  var rec = findRecipe(id);
  if (isBookmarked(id)) {
    bookmarks = bookmarks.filter(function (b) { return b !== id; });
    if (rec && rec.online) savedOnline = savedOnline.filter(function (x) { return x.id !== id; });
  } else {
    bookmarks.push(id);
    if (rec && rec.online && !savedOnline.some(function (x) { return x.id === id; })) savedOnline.push(rec);
  }
  writeStorage("tastyBookmarks3", bookmarks);
  writeStorage("tastyOnline1", savedOnline);
  drawBookmarks();
  drawResults();
  drawRecipe();
}

// ---------- add your own recipe ----------
// one ingredient line looks like: Quantity,Unit,Description  (for example 0.5,kg,Rice)
function parseIngredient(text) {
  var parts = text.split(",").map(function (p) { return p.trim(); });
  if (parts.length < 3 || !parts[2]) return null;
  var qty = 0;
  if (parts[0] !== "") {
    if (parts[0].indexOf("/") !== -1) {
      var f = parts[0].split("/");
      qty = Number(f[0]) / Number(f[1]);
    } else {
      qty = Number(parts[0]);
    }
    if (isNaN(qty) || !isFinite(qty) || qty < 0) return null;
  }
  return [qty, parts[1], parts.slice(2).join(", ")];
}

function openAdd() { overlay.classList.add("open"); document.getElementById("fName").focus(); }
function closeAdd() { overlay.classList.remove("open"); }

function saveNewRecipe() {
  var error = document.getElementById("formError");
  var title = document.getElementById("fName").value.trim();
  var url = document.getElementById("fUrl").value.trim();
  var photo = document.getElementById("fPhoto").value.trim();
  var publisher = document.getElementById("fPub").value.trim();
  var time = Number(document.getElementById("fTime").value);
  var serves = Number(document.getElementById("fServes").value);
  var steps = document.getElementById("fSteps").value.split("\n").map(function (l) { return l.trim(); }).filter(function (l) { return l; });

  var inputs = document.querySelectorAll(".ing-input");
  var ings = [];
  var badFormat = false;
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("bad");
    var text = inputs[i].value.trim();
    if (!text) continue;
    var parsed = parseIngredient(text);
    if (parsed) ings.push(parsed);
    else { inputs[i].classList.add("bad"); badFormat = true; }
  }

  if (!title) { error.textContent = "Please enter a title."; return; }
  if (!(time > 0)) { error.textContent = "Please enter the prep time in minutes."; return; }
  if (!(serves > 0)) { error.textContent = "Please enter the number of servings."; return; }
  if (url && !/^https?:\/\//i.test(url)) { error.textContent = "The URL must start with http:// or https://"; return; }
  if (badFormat) { error.textContent = "Wrong ingredient format! Please use: Quantity,Unit,Description"; return; }
  if (!ings.length) { error.textContent = "Please add at least one ingredient."; return; }
  error.textContent = "";

  var rec = r("u" + Date.now(), title, publisher || "My recipes", "my recipe", "🍽️",
    Math.round(time), Math.max(1, Math.round(serves)), "", "", ings, steps, "");
  rec.photo = photo;
  rec.url = url;
  mine.push(rec);
  writeStorage("tastyMine2", mine);

  document.getElementById("newForm").reset();
  closeAdd();
  searchInput.value = title;
  runSearch(title);
  openRecipe(rec);
}

function deleteMine(id) {
  mine = mine.filter(function (m) { return m.id !== id; });
  bookmarks = bookmarks.filter(function (b) { return b !== String(id); });
  writeStorage("tastyMine2", mine);
  writeStorage("tastyBookmarks3", bookmarks);
  current = null;
  if (searched) runSearch(query);
  drawBookmarks();
  drawRecipe();
}

// ---------- events ----------
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  runSearch(searchInput.value);
});

resultsBox.addEventListener("click", function (e) {
  var t = e.target.closest("[data-chip]");
  if (t) { searchInput.value = t.dataset.chip; runSearch(t.dataset.chip); return; }
  t = e.target.closest("[data-page]");
  if (t) { page = Number(t.dataset.page); drawResults(); resultsBox.scrollIntoView(); return; }
  t = e.target.closest("[data-open]");
  if (t) openRecipe(findRecipe(t.dataset.open));
});

bmPanel.addEventListener("click", function (e) {
  var t = e.target.closest("[data-open]");
  if (t) openRecipe(findRecipe(t.dataset.open));
});

bmBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  drawBookmarks();
  var open = bmPanel.classList.toggle("open");
  bmBtn.setAttribute("aria-expanded", open);
});
document.addEventListener("click", function (e) {
  if (!bmPanel.contains(e.target)) { bmPanel.classList.remove("open"); bmBtn.setAttribute("aria-expanded", "false"); }
});

document.getElementById("addBtn").addEventListener("click", openAdd);
document.getElementById("closeAdd").addEventListener("click", closeAdd);
overlay.addEventListener("click", function (e) { if (e.target === overlay) closeAdd(); });
document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAdd(); });
document.getElementById("newForm").addEventListener("input", function (e) { e.target.classList.remove("bad"); });
document.getElementById("newForm").addEventListener("submit", function (e) { e.preventDefault(); saveNewRecipe(); });

document.getElementById("logo").addEventListener("click", function () {
  searched = false; query = ""; current = null; searchInput.value = "";
  drawResults(); drawRecipe();
});

// ---------- start ----------
mine = readStorage("tastyMine2");
bookmarks = readStorage("tastyBookmarks3").map(String);
savedOnline = readStorage("tastyOnline1");
drawResults();
drawRecipe();
drawBookmarks();
