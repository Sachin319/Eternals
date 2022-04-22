const backAnimation1 = () => {
  document.getElementById("step4_back").classList.remove("progress-bar");
  document.getElementById("step4_back").classList.add("progress-bar5_back");
};

const backToStep4 = () => {
  document.getElementById("step3_back").classList.remove("progress-bar4");
  document.getElementById("step3_back").classList.add("progress-bar4-back");
};

const back_step2 = () => {
  document.getElementById("back_step2").classList.remove("progress-bar2");
  document.getElementById("back_step2").classList.add("progress-bar2_back");
};
const back_step1 = () => {
  document.getElementById("back_step1").classList.remove("progress-bar1");
  document.getElementById("back_step1").classList.add("progress-bar1_back");
};

const selectShape = (shapeName) => {
  console.log(shapeName);
  let shape = document.getElementById(shapeName).getAttribute("src");
  document.getElementById("img_shape").setAttribute("src", shape);
  let card_count = document.getElementsByClassName("cards_diamond").length;
  for (let i = 0; i < card_count; i++) {
    document
      .getElementsByClassName("cards_diamond")
      [i].setAttribute("src", shape);
  }
};

const selectCarat = (carat) => {
  document.getElementById("caret_size").innerHTML = carat + " Carat";
  let carat_count = document.getElementsByClassName("recommended_carat").length;
  for (let i = 0; i < carat_count; i++) {
    document.getElementsByClassName("recommended_carat")[i].innerHTML =
      carat + " Carat";
  }
  let ct_count = document.getElementsByClassName("ct_change").length;
  for (let i = 0; i < ct_count; i++) {
    document.getElementsByClassName("ct_change")[i].innerHTML =
      carat * 1.25 + " ct";
  }
  let price1 = document.getElementsByClassName("price")[0].innerHTML;
  let price2 = document.getElementsByClassName("price")[1].innerHTML;
  let price3 = document.getElementsByClassName("price")[2].innerHTML;
  let price4 = document.getElementsByClassName("price")[3].innerHTML;
  let price5 = document.getElementsByClassName("price")[4].innerHTML;
  let price6 = document.getElementsByClassName("price")[5].innerHTML;
  let price7 = document.getElementsByClassName("price")[6].innerHTML;
  let price8 = document.getElementsByClassName("price")[7].innerHTML;
  let price9 = document.getElementsByClassName("price")[8].innerHTML;
  let price10 = document.getElementsByClassName("price")[9].innerHTML;
  let price11 = document.getElementsByClassName("price")[10].innerHTML;
  let price12 = document.getElementsByClassName("price")[11].innerHTML;
  let price13 = document.getElementsByClassName("price")[12].innerHTML;
  price1 = parseInt(price1) * carat;
  price2 = parseInt(price2) * carat;
  price3 = parseInt(price3) * carat;
  price4 = parseInt(price4) * carat;
  price5 = parseInt(price5) * carat;
  price6 = parseInt(price6) * carat;
  price7 = parseInt(price7) * carat;
  price8 = parseInt(price8) * carat;
  price9 = parseInt(price9) * carat;
  price10 = parseInt(price10) * carat;
  price11 = parseInt(price11) * carat;
  price12 = parseInt(price12) * carat;
  price13 = parseInt(price13) * carat;

  document.getElementsByClassName("price")[0].innerHTML = price1;
  document.getElementsByClassName("price")[1].innerHTML = price2;
  document.getElementsByClassName("price")[2].innerHTML = price3;
  document.getElementsByClassName("price")[3].innerHTML = price4;
  document.getElementsByClassName("price")[4].innerHTML = price5;
  document.getElementsByClassName("price")[5].innerHTML = price6;
  document.getElementsByClassName("price")[6].innerHTML = price7;
  document.getElementsByClassName("price")[7].innerHTML = price8;
  document.getElementsByClassName("price")[8].innerHTML = price9;
  document.getElementsByClassName("price")[9].innerHTML = price10;
  document.getElementsByClassName("price")[10].innerHTML = price11;
  document.getElementsByClassName("price")[11].innerHTML = price12;
  document.getElementsByClassName("price")[12].innerHTML = price13;
};

const select_value = (id) => {
  if (document.getElementById("white_box_3").classList.contains("active")) {
    document.getElementById("white_box_3").classList.remove("active");
    document.getElementById(id).classList.add("active");
  } else if (
    document.getElementById("white_box_2").classList.contains("active")
  ) {
    document.getElementById("white_box_2").classList.remove("active");
    document.getElementById(id).classList.add("active");
  } else if (
    document.getElementById("white_box_1").classList.contains("active")
  ) {
    document.getElementById("white_box_1").classList.remove("active");
    document.getElementById(id).classList.add("active");
  } else if (
    document.getElementById("white_box_4").classList.contains("active")
  ) {
    document.getElementById("white_box_4").classList.remove("active");
    document.getElementById(id).classList.add("active");
  }
};

const rotation = () => {
  document.getElementById("3dimage").classList.add("roation3d");
};

$(".owl-carousel").owlCarousel({
  items: 2,
  center: true,
  loop: true,
  nav: true,
});

let prev_count = document.getElementsByClassName("owl-prev").length;
let next_count = document.getElementsByClassName("owl-next").length;
for (let i = 0; i < prev_count; i++) {
  document.getElementsByClassName("owl-prev")[i].innerHTML = "";
  document.getElementsByClassName("owl-next")[i].innerHTML = "";
}

const selectDiamond = (id) => {
  if (
    document
      .getElementsByClassName("recommended_box")[1]
      .classList.contains("active")
  ) {
    document
      .getElementsByClassName("recommended_box")[1]
      .classList.remove("active");
    document.getElementById(id).classList.add("active");
  } else if (
    document
      .getElementsByClassName("recommended_box")[2]
      .classList.contains("active")
  ) {
    document
      .getElementsByClassName("recommended_box")[2]
      .classList.remove("active");
    document.getElementById(id).classList.add("active");
  } else if (
    document
      .getElementsByClassName("recommended_box")[3]
      .classList.contains("active")
  ) {
    document
      .getElementsByClassName("recommended_box")[3]
      .classList.remove("active");
    document.getElementById(id).classList.add("active");
  } else if (
    document
      .getElementsByClassName("recommended_box")[4]
      .classList.contains("active")
  ) {
    document
      .getElementsByClassName("recommended_box")[4]
      .classList.remove("active");
    document.getElementById(id).classList.add("active");
  }
};
