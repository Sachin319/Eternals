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
    let card_count = document.getElementsByClassName("cards_dimond").length;
    for (let i = 0; i < card_count; i++) {
        document
            .getElementsByClassName("cards_dimond")
            [i].setAttribute("src", shape);
    }
};

const selectCarat = (carat) => {
    document.getElementById("caret_size").innerHTML = carat + " Carat";
    let carat_count =
        document.getElementsByClassName("recommended_carat").length;
    for (let i = 0; i < carat_count; i++) {
        document.getElementsByClassName("recommended_carat")[i].innerHTML =
            carat + " Carat";
    }
    let ct_count = document.getElementsByClassName("ct_change").length;
    for (let i = 0; i < ct_count; i++) {
        document.getElementsByClassName("ct_change")[i].innerHTML =
            carat * 1.25 + " ct";
    }
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

window.addEventListener("load", () => {
    let child = document.getElementById("ringSliderInner").children;
    console.log(child);
});

const rotation = () => {
    document.getElementById("3dimage").classList.add("roation3d");
};

console.log(document.getElementById("ringSlider").children[3]);
