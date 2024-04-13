import { getMain, getAdmin, getAppl, editFun, addFun } from "./api.js";

let navbarLeftDiv1 = document.querySelector(".navbarLeftDiv1");
let navbarLeftDiv2 = document.querySelector(".navbarLeftDiv2");
let navbarLeftDiv3 = document.querySelector(".navbarLeftDiv3");
let navbarLeftDiv4 = document.querySelector(".navbarLeftDiv4");
let mainCards = document.querySelector(".mainCards");
let seeMoreDiv = document.querySelector(".seeMoreDiv");
let seeMoreGlav = document.querySelector(".seeMoreGlav");
let mainFilter = document.querySelector(".mainFilter");
let h1 = document.querySelector(".h1");
let search = document.querySelector(".search");

let nameGlav = "Main",
  textGlav = "Latest job";

navbarLeftDiv1.onclick = () => {
  mainCards.innerHTML = "";
  nameGlav = "Main";
  textGlav = "Latest job";
  navbarLeftDiv1.style.color = "rgba(33, 150, 243, 1)";
  navbarLeftDiv1.style.backgroundColor = "rgba(33, 150, 243, 0.08)";
  navbarLeftDiv1.style.borderRight = "2px solid rgba(33, 150, 243, 1)";
  h1.innerHTML = "Latest job";

  search.style.display = "none";
  mainFilter.style.display = "none";
  navbarLeftDiv2.style.color = "black";
  navbarLeftDiv2.style.backgroundColor = "transparent";
  navbarLeftDiv2.style.borderRight = "none";
  navbarLeftDiv3.style.color = "black";
  navbarLeftDiv3.style.backgroundColor = "transparent";
  navbarLeftDiv3.style.borderRight = "none";
  navbarLeftDiv4.style.color = "black";
  navbarLeftDiv4.style.backgroundColor = "transparent";
  navbarLeftDiv4.style.borderRight = "none";
  getMain();
};
navbarLeftDiv2.onclick = () => {
  mainCards.innerHTML = "";
  nameGlav = "Job search";
  textGlav = "Job ads";
  navbarLeftDiv2.style.color = "rgba(33, 150, 243, 1)";
  navbarLeftDiv2.style.backgroundColor = "rgba(33, 150, 243, 0.08)";
  navbarLeftDiv2.style.borderRight = "2px solid rgba(33, 150, 243, 1)";
  mainFilter.style.display = "flex";
  h1.innerHTML = "Job ads";

  search.style.display = "none";
  navbarLeftDiv1.style.color = "black";
  navbarLeftDiv1.style.backgroundColor = "transparent";
  navbarLeftDiv1.style.borderRight = "none";
  navbarLeftDiv3.style.color = "black";
  navbarLeftDiv3.style.backgroundColor = "transparent";
  navbarLeftDiv3.style.borderRight = "none";
  navbarLeftDiv4.style.color = "black";
  navbarLeftDiv4.style.backgroundColor = "transparent";
  navbarLeftDiv4.style.borderRight = "none";
  getMain();
};
navbarLeftDiv3.onclick = () => {
  mainCards.innerHTML = "";
  nameGlav = "Admin";
  textGlav = "Job ad admin";
  navbarLeftDiv3.style.color = "rgba(33, 150, 243, 1)";
  navbarLeftDiv3.style.backgroundColor = "rgba(33, 150, 243, 0.08)";
  navbarLeftDiv3.style.borderRight = "2px solid rgba(33, 150, 243, 1)";
  h1.innerHTML = "Job ad admin";
  search.style.display = "inline";

  mainFilter.style.display = "none";
  navbarLeftDiv1.style.color = "black";
  navbarLeftDiv1.style.backgroundColor = "transparent";
  navbarLeftDiv1.style.borderRight = "none";
  navbarLeftDiv2.style.color = "black";
  navbarLeftDiv2.style.backgroundColor = "transparent";
  navbarLeftDiv2.style.borderRight = "none";
  navbarLeftDiv4.style.color = "black";
  navbarLeftDiv4.style.backgroundColor = "transparent";
  navbarLeftDiv4.style.borderRight = "none";
  getAdmin();
};
navbarLeftDiv4.onclick = () => {
  mainCards.innerHTML = "";
  nameGlav = "Manage applicants";
  textGlav = "Applications";
  navbarLeftDiv4.style.color = "rgba(33, 150, 243, 1)";
  navbarLeftDiv4.style.backgroundColor = "rgba(33, 150, 243, 0.08)";
  navbarLeftDiv4.style.borderRight = "2px solid rgba(33, 150, 243, 1)";

  search.style.display = "none";
  navbarLeftDiv1.style.color = "black";
  navbarLeftDiv1.style.backgroundColor = "transparent";
  navbarLeftDiv1.style.borderRight = "none";
  navbarLeftDiv2.style.color = "black";
  navbarLeftDiv2.style.backgroundColor = "transparent";
  navbarLeftDiv2.style.borderRight = "none";
  navbarLeftDiv3.style.color = "black";
  navbarLeftDiv3.style.backgroundColor = "transparent";
  navbarLeftDiv3.style.borderRight = "none";
  getAppl();
};

function mainData(data) {
  mainCards.innerHTML = "";
  data.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("card");
    mainCards.appendChild(card);

    let cardTop = document.createElement("div");
    cardTop.classList.add("cardTop");
    card.appendChild(cardTop);
    cardTop.style.display = "flex";
    cardTop.style.marginLeft = "24px";
    cardTop.style.marginTop = "24px";
    cardTop.style.marginRight = "24px";
    cardTop.style.justifyContent = "space-between";

    let cardTopLeft = document.createElement("div");
    cardTopLeft.classList.add("cardTopLeft");
    cardTop.appendChild(cardTopLeft);
    let title = document.createElement("h2");
    title.innerText = element.title;
    cardTopLeft.appendChild(title);
    let category = document.createElement("p");
    category.innerText = element.Category;
    category.style.marginTop = "5px";
    cardTopLeft.appendChild(category);

    let cardTopRight = document.createElement("div");
    cardTopRight.classList.add("cardTopRight");
    cardTop.appendChild(cardTopRight);
    let level = document.createElement("div");
    level.style.marginTop = "7px";
    level.innerHTML = element.Level;
    cardTopRight.appendChild(level);

    let cardDown = document.createElement("div");
    cardDown.classList.add("cardDown");
    card.appendChild(cardDown);
    cardDown.style.display = "flex";
    cardDown.style.marginLeft = "24px";
    cardDown.style.marginTop = "20px";
    cardDown.style.marginRight = "24px";
    cardDown.style.justifyContent = "space-between";
    cardDown.style.alignItems = "end";
    let cardDownButton = document.createElement("button");
    cardDownButton.classList.add("cardDownButton");
    cardDown.appendChild(cardDownButton);
    cardDownButton.innerText = "SEE MORE";
    cardDownButton.onclick = () => {
      seeMoreGlav.innerHTML = "";
      seeMoreDiv.style.display = "block";
      let seeMoreTop = document.createElement("div");
      seeMoreGlav.appendChild(seeMoreTop);
      seeMoreTop.style.height = "127px";
      seeMoreTop.style.borderBottom = "2px solid lightgray";

      let seeMoreTopTop = document.createElement("div");
      seeMoreTop.appendChild(seeMoreTopTop);
      seeMoreTopTop.style.display = "flex";
      let glavName = document.createElement("p");
      glavName.innerHTML = nameGlav;
      glavName.style.color = "darkgray";
      glavName.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavNameTire = document.createElement("p");
      glavNameTire.innerHTML = ">";
      glavNameTire.style.marginLeft = "10px";
      glavNameTire.style.marginRight = "10px";
      glavNameTire.style.color = "darkgray";
      let glavText = document.createElement("p");
      glavText.innerHTML = textGlav;
      glavText.style.color = "darkgray";
      glavText.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavTextTire = document.createElement("p");
      glavTextTire.innerHTML = ">";
      glavTextTire.style.marginLeft = "10px";
      glavTextTire.style.marginRight = "10px";
      glavTextTire.style.color = "darkgray";
      let glavWork = document.createElement("p");
      glavWork.innerHTML = element.title;
      seeMoreTopTop.append(
        glavName,
        glavNameTire,
        glavText,
        glavTextTire,
        glavWork
      );

      let seeMoreTopDown = document.createElement("div");
      seeMoreTop.appendChild(seeMoreTopDown);
      seeMoreTopDown.style.height = "63px";
      seeMoreTopDown.style.display = "flex";
      seeMoreTopDown.style.justifyContent = "space-between";
      seeMoreTopDown.style.alignItems = "top";
      seeMoreTopDown.style.marginTop = "40px";

      let seeMoreTopDownName = document.createElement("h1");
      seeMoreTopDownName.innerHTML = element.title;
      seeMoreTopDownName.style.fontSize = "34px";
      seeMoreTopDown.appendChild(seeMoreTopDownName);

      let seeMoreTopDownButton = document.createElement("button");
      seeMoreTopDownButton.innerHTML = "APPLY";
      seeMoreTopDown.appendChild(seeMoreTopDownButton);
      seeMoreTopDownButton.style.width = "91px";
      seeMoreTopDownButton.style.height = "42px";
      seeMoreTopDownButton.style.borderRadius = "4px";
      seeMoreTopDownButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
      seeMoreTopDownButton.style.border = "none";
      seeMoreTopDownButton.style.color = "white";
      seeMoreTopDownButton.style.fontSize = "15px";

      let seeMoreCenter = document.createElement("div");
      seeMoreGlav.appendChild(seeMoreCenter);
      seeMoreCenter.style.height = "68px";
      seeMoreCenter.style.display = "flex";
      seeMoreCenter.style.justifyContent = "space-between";
      seeMoreCenter.style.marginTop = "60px";

      let seeMoreCenterDate = document.createElement("div");
      seeMoreCenter.appendChild(seeMoreCenterDate);
      seeMoreCenterDate.style.width = "170px";
      seeMoreCenterDate.style.height = "68px";
      seeMoreCenterDate.style.borderRadius = "4px";
      seeMoreCenterDate.style.background = "rgba(226, 232, 240, 1)";
      seeMoreCenterDate.style.border = "1px solid rgba(148, 163, 184, 1)";
      seeMoreCenterDate.style.textAlign = "center";
      let seeMoreCenterDateTop = document.createElement("p");
      seeMoreCenterDateTop.innerHTML = "Closing date";
      seeMoreCenterDate.appendChild(seeMoreCenterDateTop);
      seeMoreCenterDateTop.style.color = "rgba(0, 0, 0, 0.87)";
      seeMoreCenterDateTop.style.fontSize = "16px";
      seeMoreCenterDateTop.style.marginTop = "15px";
      let seeMoreCenterDateDown = document.createElement("p");
      seeMoreCenterDateDown.innerHTML = element.Closing;
      seeMoreCenterDate.appendChild(seeMoreCenterDateDown);
      seeMoreCenterDateDown.style.fontSize = "14px";
      seeMoreCenterDateDown.style.color = "rgba(0, 0, 0, 0.6)";
      seeMoreCenterDateDown.style.marginTop = "3px";

      let seeMoreCenterCategory = document.createElement("div");
      seeMoreCenter.appendChild(seeMoreCenterCategory);
      seeMoreCenterCategory.style.width = "170px";
      seeMoreCenterCategory.style.height = "68px";
      seeMoreCenterCategory.style.borderRadius = "4px";
      seeMoreCenterCategory.style.background = "rgba(226, 232, 240, 1)";
      seeMoreCenterCategory.style.border = "1px solid rgba(148, 163, 184, 1)";
      seeMoreCenterCategory.style.textAlign = "center";
      let seeMoreCenterCategoryTop = document.createElement("p");
      seeMoreCenterCategoryTop.innerHTML = "Category";
      seeMoreCenterCategory.appendChild(seeMoreCenterCategoryTop);
      seeMoreCenterCategoryTop.style.color = "rgba(0, 0, 0, 0.87)";
      seeMoreCenterCategoryTop.style.fontSize = "16px";
      seeMoreCenterCategoryTop.style.marginTop = "15px";
      let seeMoreCenterCategoryDown = document.createElement("p");
      seeMoreCenterCategoryDown.innerHTML = element.Category;
      seeMoreCenterCategory.appendChild(seeMoreCenterCategoryDown);
      seeMoreCenterCategoryDown.style.fontSize = "14px";
      seeMoreCenterCategoryDown.style.color = "rgba(0, 0, 0, 0.6)";
      seeMoreCenterCategoryDown.style.marginTop = "3px";

      let seeMoreCenterSeniority = document.createElement("div");
      seeMoreCenter.appendChild(seeMoreCenterSeniority);
      seeMoreCenterSeniority.style.width = "170px";
      seeMoreCenterSeniority.style.height = "68px";
      seeMoreCenterSeniority.style.borderRadius = "4px";
      seeMoreCenterSeniority.style.background = "rgba(226, 232, 240, 1)";
      seeMoreCenterSeniority.style.border = "1px solid rgba(148, 163, 184, 1)";
      seeMoreCenterSeniority.style.textAlign = "center";
      let seeMoreCenterSeniorityTop = document.createElement("p");
      seeMoreCenterSeniorityTop.innerHTML = "Seniority";
      seeMoreCenterSeniority.appendChild(seeMoreCenterSeniorityTop);
      seeMoreCenterSeniorityTop.style.color = "rgba(0, 0, 0, 0.87)";
      seeMoreCenterSeniorityTop.style.fontSize = "16px";
      seeMoreCenterSeniorityTop.style.marginTop = "15px";
      let seeMoreCenterSeniorityDown = document.createElement("p");
      seeMoreCenterSeniorityDown.innerHTML = "Associate";
      seeMoreCenterSeniority.appendChild(seeMoreCenterSeniorityDown);
      seeMoreCenterSeniorityDown.style.fontSize = "14px";
      seeMoreCenterSeniorityDown.style.color = "rgba(0, 0, 0, 0.6)";
      seeMoreCenterSeniorityDown.style.marginTop = "3px";

      let seeMoreCenterLocation = document.createElement("div");
      seeMoreCenter.appendChild(seeMoreCenterLocation);
      seeMoreCenterLocation.style.width = "170px";
      seeMoreCenterLocation.style.height = "68px";
      seeMoreCenterLocation.style.borderRadius = "4px";
      seeMoreCenterLocation.style.background = "rgba(226, 232, 240, 1)";
      seeMoreCenterLocation.style.border = "1px solid rgba(148, 163, 184, 1)";
      seeMoreCenterLocation.style.textAlign = "center";
      let seeMoreCenterLocationTop = document.createElement("p");
      seeMoreCenterLocationTop.innerHTML = "Location";
      seeMoreCenterLocation.appendChild(seeMoreCenterLocationTop);
      seeMoreCenterLocationTop.style.color = "rgba(0, 0, 0, 0.87)";
      seeMoreCenterLocationTop.style.fontSize = "16px";
      seeMoreCenterLocationTop.style.marginTop = "15px";
      let seeMoreCenterLocationDown = document.createElement("p");
      seeMoreCenterLocationDown.innerHTML = element.Location;
      seeMoreCenterLocation.appendChild(seeMoreCenterLocationDown);
      seeMoreCenterLocationDown.style.fontSize = "14px";
      seeMoreCenterLocationDown.style.color = "rgba(0, 0, 0, 0.6)";
      seeMoreCenterLocationDown.style.marginTop = "3px";

      let seeMoreDown = document.createElement("div");
      seeMoreGlav.appendChild(seeMoreDown);
      seeMoreDown.style.height = "616px";
      seeMoreDown.style.width = "740px";
      seeMoreDown.style.marginTop = "60px";

      let seeMoreDownFirst = document.createElement("div");
      seeMoreDown.appendChild(seeMoreDownFirst);
      let seeMoreDownFirstName = document.createElement("p");
      seeMoreDownFirstName.innerHTML = "Job Description";
      seeMoreDownFirst.appendChild(seeMoreDownFirstName);
      seeMoreDownFirstName.style.fontSize = "16px";
      seeMoreDownFirstName.style.fontWeight = "600";
      seeMoreDownFirstName.style.color = "rgba(0, 0, 0, 0.87)";
      let seeMoreDownFirstText = document.createElement("p");
      seeMoreDownFirstText.innerHTML = element.Description;
      seeMoreDownFirstText.style.fontSize = "14px";
      seeMoreDownFirstText.style.color = "rgba(0, 0, 0, 0.87)";
      seeMoreDownFirstText.style.marginTop = "8px";
      seeMoreDownFirstText.style.lineHeight = "22px";
      seeMoreDownFirst.appendChild(seeMoreDownFirstText);

      let seeMoreDownSecond = document.createElement("div");
      seeMoreDown.appendChild(seeMoreDownSecond);
      seeMoreDownSecond.style.marginTop = "40px";
      let seeMoreDownSecondName = document.createElement("p");
      seeMoreDownSecondName.innerHTML = "Essential criteria";
      seeMoreDownSecond.appendChild(seeMoreDownSecondName);
      seeMoreDownSecondName.style.fontSize = "16px";
      seeMoreDownSecondName.style.fontWeight = "600";
      seeMoreDownSecondName.style.color = "rgba(0, 0, 0, 0.87)";
      let seeMoreDownSecondText = document.createElement("p");
      seeMoreDownSecondText.innerHTML = element["Essential criteria"];
      seeMoreDownSecondText.style.fontSize = "14px";
      seeMoreDownSecondText.style.color = "rgba(0, 0, 0, 0.87)";
      seeMoreDownSecondText.style.marginTop = "8px";
      seeMoreDownSecondText.style.lineHeight = "22px";
      seeMoreDownSecond.appendChild(seeMoreDownSecondText);

      let seeMoreDownThird = document.createElement("div");
      seeMoreDown.appendChild(seeMoreDownThird);
      seeMoreDownThird.style.marginTop = "40px";
      let seeMoreDownThirdName = document.createElement("p");
      seeMoreDownThirdName.innerHTML = "Desirable criteria";
      seeMoreDownThird.appendChild(seeMoreDownThirdName);
      seeMoreDownThirdName.style.fontSize = "16px";
      seeMoreDownThirdName.style.fontWeight = "600";
      seeMoreDownThirdName.style.color = "rgba(0, 0, 0, 0.87)";
      let seeMoreDownThirdText = document.createElement("p");
      seeMoreDownThirdText.innerHTML = element["Desirable criteria"];
      seeMoreDownThirdText.style.fontSize = "14px";
      seeMoreDownThirdText.style.color = "rgba(0, 0, 0, 0.87)";
      seeMoreDownThirdText.style.marginTop = "8px";
      seeMoreDownThirdText.style.lineHeight = "22px";
      seeMoreDownThird.appendChild(seeMoreDownThirdText);
    };

    let cardDownLocation = document.createElement("p");
    cardDownLocation.innerHTML = element.Location;
    cardDown.appendChild(cardDownLocation);
  });
}

function adminData(data) {
  mainCards.innerHTML = "";
  let add = document.createElement("button");
  add.innerHTML = "CREATE NEW";
  add.classList.add("add");
  mainCards.appendChild(add);
  let table = document.createElement("table");
  mainCards.appendChild(table);
  table.classList.add("tableAdmin");
  let header = document.createElement("tr");
  table.appendChild(header);
  header.style.height = "56px";
  let headerTitle = document.createElement("th");
  headerTitle.innerHTML = "Title";
  header.appendChild(headerTitle);
  headerTitle.classList.add("headerTitle");
  headerTitle.style.width = "134px";
  headerTitle.style.textAlign = "left";
  headerTitle.style.paddingLeft = "16px";
  let headerCategory = document.createElement("th");
  headerCategory.innerHTML = "Category";
  headerCategory.style.width = "74px";
  headerCategory.style.textAlign = "left";
  headerCategory.style.paddingLeft = "16px";
  header.appendChild(headerCategory);
  let headerLevel = document.createElement("th");
  headerLevel.innerHTML = "Level";
  headerLevel.style.width = "64px";
  headerLevel.style.textAlign = "left";
  headerLevel.style.paddingLeft = "16px";
  header.appendChild(headerLevel);
  let headerLocation = document.createElement("th");
  headerLocation.innerHTML = "Location";
  headerLocation.style.width = "104px";
  headerLocation.style.textAlign = "left";
  headerLocation.style.paddingLeft = "16px";
  header.appendChild(headerLocation);
  let headerNumber = document.createElement("th");
  headerNumber.innerHTML = "Phone number";
  header.appendChild(headerNumber);
  headerLocation.style.width = "102px";
  headerLocation.style.textAlign = "left";
  headerLocation.style.paddingLeft = "16px";
  let headerApplication = document.createElement("th");
  headerApplication.innerHTML = "Application";
  header.appendChild(headerApplication);
  headerApplication.style.width = "108px";
  headerApplication.style.textAlign = "left";
  headerApplication.style.paddingLeft = "16px";
  let headerClosing = document.createElement("th");
  headerClosing.innerHTML = "Closing";
  header.appendChild(headerClosing);
  headerClosing.style.width = "104px";
  headerClosing.style.textAlign = "left";
  headerClosing.style.paddingLeft = "16px";
  let headerAction = document.createElement("th");
  headerAction.innerHTML = "Action";
  header.appendChild(headerAction);
  headerLocation.style.width = "104px";
  headerLocation.style.textAlign = "left";
  headerLocation.style.paddingLeft = "16px";
  data.forEach((element) => {
    add.onclick = () => {
      seeMoreGlav.innerHTML = "";
      seeMoreDiv.style.display = "block";
      let addTop = document.createElement("div");
      seeMoreGlav.appendChild(addTop);
      addTop.style.height = "127px";
      addTop.style.borderBottom = "2px solid lightgray";

      let addTopTop = document.createElement("div");
      addTop.appendChild(addTopTop);
      addTopTop.style.display = "flex";
      let glavName = document.createElement("p");
      glavName.innerHTML = nameGlav;
      glavName.style.color = "darkgray";
      glavName.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavNameTire = document.createElement("p");
      glavNameTire.innerHTML = ">";
      glavNameTire.style.marginLeft = "10px";
      glavNameTire.style.marginRight = "10px";
      glavNameTire.style.color = "darkgray";
      let glavText = document.createElement("p");
      glavText.innerHTML = textGlav;
      glavText.style.color = "darkgray";
      glavText.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavTextTire = document.createElement("p");
      glavTextTire.innerHTML = ">";
      glavTextTire.style.marginLeft = "10px";
      glavTextTire.style.marginRight = "10px";
      glavTextTire.style.color = "darkgray";
      let glavWork = document.createElement("p");
      glavWork.innerHTML = "New job";
      addTopTop.append(
        glavName,
        glavNameTire,
        glavText,
        glavTextTire,
        glavWork
      );

      let addTopDown = document.createElement("div");
      addTop.appendChild(addTopDown);
      addTopDown.style.height = "63px";
      addTopDown.style.display = "flex";
      addTopDown.style.justifyContent = "space-between";
      addTopDown.style.alignItems = "top";
      addTopDown.style.marginTop = "40px";

      let addTopDownName = document.createElement("h1");
      addTopDownName.innerHTML = "Details";
      addTopDownName.style.fontSize = "34px";
      addTopDown.appendChild(addTopDownName);

      let divAdd = document.createElement("div");
      addTopDown.appendChild(divAdd);

      let addTopDownButton1 = document.createElement("button");
      addTopDownButton1.innerHTML = "CANCEL";
      divAdd.appendChild(addTopDownButton1);
      addTopDownButton1.style.width = "91px";
      addTopDownButton1.style.height = "42px";
      addTopDownButton1.style.borderRadius = "4px";
      addTopDownButton1.style.backgroundColor = "transparent";
      addTopDownButton1.style.border = "1px solid rgba(33, 150, 243, 0.5)";
      addTopDownButton1.style.color = "rgba(33, 150, 243, 1)";
      addTopDownButton1.style.fontSize = "15px";
      addTopDownButton1.style.marginRight = "28px";
      addTopDownButton1.onclick = () => {
        seeMoreDiv.style.display = "none";
      };

      let addDown = document.createElement("div");
      seeMoreGlav.appendChild(addDown);
      addDown.classList.add("addDown");
      addDown.style.marginTop = "40px";

      let addDownInfo = document.createElement("div");
      addDown.appendChild(addDownInfo);
      addDownInfo.classList.add("addDownFirst");
      let inputName = document.createElement("input");
      addDownInfo.appendChild(inputName);
      inputName.placeholder = " Name";
      inputName.style.width = "356px";
      let inputEmail = document.createElement("input");
      addDownInfo.appendChild(inputEmail);
      inputEmail.placeholder = " Email";
      inputEmail.style.width = "356px";

      let addDownFirst = document.createElement("div");
      addDown.appendChild(addDownFirst);
      addDownFirst.style.marginTop = "28px";
      addDownFirst.classList.add("addDownFirst");
      let inputTitle = document.createElement("input");
      addDownFirst.appendChild(inputTitle);
      inputTitle.placeholder = " Title";
      inputTitle.style.width = "356px";
      let inputClothing = document.createElement("input");
      addDownFirst.appendChild(inputClothing);
      inputClothing.placeholder = " Closing date";
      inputClothing.style.width = "356px";

      let addDownSecond = document.createElement("div");
      addDown.appendChild(addDownSecond);
      addDownSecond.style.marginTop = "28px";
      addDownSecond.classList.add("addDownFirst");
      let inputLevel = document.createElement("input");
      addDownSecond.appendChild(inputLevel);
      inputLevel.placeholder = " Level";
      inputLevel.style.width = "356px";
      let inputNumber = document.createElement("input");
      addDownSecond.appendChild(inputNumber);
      inputNumber.placeholder = " Phone number";
      inputNumber.style.width = "356px";

      let inputLocation = document.createElement("input");
      addDown.appendChild(inputLocation);
      inputLocation.placeholder = " Location";
      inputLocation.style.width = "100%";
      inputLocation.style.marginTop = "28px";

      let inputCategory = document.createElement("input");
      addDown.appendChild(inputCategory);
      inputCategory.placeholder = " Category";
      inputCategory.style.width = "100%";
      inputCategory.style.marginTop = "28px";
      inputCategory.style.height = "56px";
      inputCategory.style.borderRadius = "4px";
      inputCategory.style.fontSize = "16px";

      let inputDescription = document.createElement("textarea");
      addDown.appendChild(inputDescription);
      inputDescription.placeholder = " Description";
      inputDescription.style.width = "100%";
      inputDescription.style.marginTop = "28px";
      inputDescription.style.height = "136px";
      inputDescription.style.borderRadius = "4px";
      inputDescription.style.fontSize = "16px";
      inputDescription.style.paddingTop = "16px";

      let inputEssentialCriteria = document.createElement("textarea");
      addDown.appendChild(inputEssentialCriteria);
      inputEssentialCriteria.placeholder = " Essential criteria";
      inputEssentialCriteria.style.width = "100%";
      inputEssentialCriteria.style.marginTop = "28px";
      inputEssentialCriteria.style.height = "136px";
      inputEssentialCriteria.style.borderRadius = "4px";
      inputEssentialCriteria.style.fontSize = "16px";
      inputEssentialCriteria.style.paddingTop = "16px";

      let inputDesirableCriteria = document.createElement("textarea");
      addDown.appendChild(inputDesirableCriteria);
      inputDesirableCriteria.placeholder = " Desirable criteria";
      inputDesirableCriteria.style.width = "100%";
      inputDesirableCriteria.style.marginTop = "28px";
      inputDesirableCriteria.style.height = "136px";
      inputDesirableCriteria.style.borderRadius = "4px";
      inputDesirableCriteria.style.fontSize = "16px";
      inputDesirableCriteria.style.paddingTop = "16px";

      let addTopDownButton2 = document.createElement("button");
      addTopDownButton2.innerHTML = "SAVE";
      divAdd.appendChild(addTopDownButton2);
      addTopDownButton2.style.width = "91px";
      addTopDownButton2.style.height = "42px";
      addTopDownButton2.style.borderRadius = "4px";
      addTopDownButton2.style.backgroundColor = "rgba(33, 150, 243, 1)";
      addTopDownButton2.style.border = "none";
      addTopDownButton2.style.color = "white";
      addTopDownButton2.style.fontSize = "15px";
      addTopDownButton2.onclick = () => {
        let user = {
          title: inputTitle.value,
          Category: inputCategory.value,
          Level: inputLevel.value,
          Location: inputLocation.value,
          "Phone number": inputNumber.value,
          name: inputName.value,
          Closing: inputClothing.value,
          Email: inputEmail.value,
          Description: inputDescription.value,
          "Essential criteria": inputEssentialCriteria.value,
          "Desirable criteria": inputDesirableCriteria.value,
          img: "",
          id: Date.now(),
        };
        addFun(user);
      };
    };
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let title = document.createElement("td");
    title.innerHTML = element.title;
    tr.appendChild(title);
    let Category = document.createElement("td");
    Category.innerHTML = element.Category;
    tr.appendChild(Category);
    let Level = document.createElement("td");
    Level.innerHTML = element.Level;
    tr.appendChild(Level);
    let Location = document.createElement("td");
    Location.innerHTML = element.Location;
    tr.appendChild(Location);
    let number = document.createElement("td");
    number.innerHTML = element["Phone number"];
    tr.appendChild(number);
    let Application = document.createElement("td");
    tr.appendChild(Application);
    let ApplicationDiv = document.createElement("div");
    Application.appendChild(ApplicationDiv);
    ApplicationDiv.style.backgroundColor = "rgba(0, 0, 0, 0.08)";
    ApplicationDiv.style.borderRadius = "50px";
    ApplicationDiv.style.height = "32px";
    ApplicationDiv.style.display = "flex";
    ApplicationDiv.style.alignItems = "center";
    ApplicationDiv.style.paddingLeft = "10px";
    let s = element.name;
    s = s.split(" ");
    if (s[0].length <= 5) {
      ApplicationDiv.innerHTML = element.name;
    } else if (s[0].length < 10) {
      ApplicationDiv.innerHTML = s[0] + " " + s[1][0];
    } else {
      ApplicationDiv.innerHTML = s[0];
    }
    if (
      ApplicationDiv.innerHTML.length > 3 &&
      ApplicationDiv.innerHTML.length < 8
    ) {
      ApplicationDiv.style.width = "65px";
    } else if (
      ApplicationDiv.innerHTML.length > 7 &&
      ApplicationDiv.innerHTML.length < 9
    ) {
      ApplicationDiv.style.width = "80px";
    }
    let Closing = document.createElement("td");
    Closing.innerHTML = element.Closing;
    tr.appendChild(Closing);
    let Action = document.createElement("td");
    tr.appendChild(Action);
    Action.style.paddingLeft = "10px";
    let editBut = document.createElement("button");
    Action.appendChild(editBut);
    editBut.innerHTML = "EDIT";
    editBut.style.width = "87px";
    editBut.style.height = "36px";
    editBut.style.borderRadius = "4px";
    editBut.style.background = "transparent";
    editBut.style.color = "rgba(33, 150, 243, 1)";
    editBut.style.fontSize = "14px";
    editBut.style.fontWeight = "500";
    editBut.style.border = "1px solid rgba(33, 150, 243, 0.5)";
    editBut.onclick = () => {
      seeMoreGlav.innerHTML = "";
      seeMoreDiv.style.display = "block";
      let addTop = document.createElement("div");
      seeMoreGlav.appendChild(addTop);
      addTop.style.height = "127px";
      addTop.style.borderBottom = "2px solid lightgray";

      let addTopTop = document.createElement("div");
      addTop.appendChild(addTopTop);
      addTopTop.style.display = "flex";
      let glavName = document.createElement("p");
      glavName.innerHTML = nameGlav;
      glavName.style.color = "darkgray";
      glavName.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavNameTire = document.createElement("p");
      glavNameTire.innerHTML = ">";
      glavNameTire.style.marginLeft = "10px";
      glavNameTire.style.marginRight = "10px";
      glavNameTire.style.color = "darkgray";
      let glavText = document.createElement("p");
      glavText.innerHTML = textGlav;
      glavText.style.color = "darkgray";
      glavText.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavTextTire = document.createElement("p");
      glavTextTire.innerHTML = ">";
      glavTextTire.style.marginLeft = "10px";
      glavTextTire.style.marginRight = "10px";
      glavTextTire.style.color = "darkgray";
      let glavWork = document.createElement("p");
      glavWork.innerHTML = "New job";
      addTopTop.append(
        glavName,
        glavNameTire,
        glavText,
        glavTextTire,
        glavWork
      );

      let addTopDown = document.createElement("div");
      addTop.appendChild(addTopDown);
      addTopDown.style.height = "63px";
      addTopDown.style.display = "flex";
      addTopDown.style.justifyContent = "space-between";
      addTopDown.style.alignItems = "top";
      addTopDown.style.marginTop = "40px";

      let addTopDownName = document.createElement("h1");
      addTopDownName.innerHTML = "Details";
      addTopDownName.style.fontSize = "34px";
      addTopDown.appendChild(addTopDownName);

      let divAdd = document.createElement("div");
      addTopDown.appendChild(divAdd);

      let addTopDownButton1 = document.createElement("button");
      addTopDownButton1.innerHTML = "CANCEL";
      divAdd.appendChild(addTopDownButton1);
      addTopDownButton1.style.width = "91px";
      addTopDownButton1.style.height = "42px";
      addTopDownButton1.style.borderRadius = "4px";
      addTopDownButton1.style.backgroundColor = "transparent";
      addTopDownButton1.style.border = "1px solid rgba(33, 150, 243, 0.5)";
      addTopDownButton1.style.color = "rgba(33, 150, 243, 1)";
      addTopDownButton1.style.fontSize = "15px";
      addTopDownButton1.style.marginRight = "28px";
      addTopDownButton1.onclick = () => {
        seeMoreDiv.style.display = "none";
      };

      let addDown = document.createElement("div");
      seeMoreGlav.appendChild(addDown);
      addDown.classList.add("addDown");
      addDown.style.marginTop = "40px";

      let addDownInfo = document.createElement("div");
      addDown.appendChild(addDownInfo);
      addDownInfo.classList.add("addDownInfo");
      let inputName = document.createElement("input");
      addDownInfo.appendChild(inputName);
      inputName.placeholder = " Name";
      inputName.style.width = "356px";
      inputName.value = element.name;
      let inputEmail = document.createElement("input");
      addDownInfo.appendChild(inputEmail);
      inputEmail.placeholder = " Email";
      inputEmail.style.width = "356px";
      inputEmail.value = element.Email;

      let addDownFirst = document.createElement("div");
      addDown.appendChild(addDownFirst);
      addDownFirst.classList.add("addDownFirst");
      addDownFirst.style.marginTop = '28px'
      let inputTitle = document.createElement("input");
      addDownFirst.appendChild(inputTitle);
      inputTitle.placeholder = " Title";
      inputTitle.style.width = "356px";
      inputTitle.value = element.title;
      let inputClothing = document.createElement("input");
      addDownFirst.appendChild(inputClothing);
      inputClothing.placeholder = " Closing date";
      inputClothing.style.width = "356px";
      inputClothing.value = element.Closing;

      let addDownSecond = document.createElement("div");
      addDown.appendChild(addDownSecond);
      addDownSecond.style.marginTop = "28px";
      addDownSecond.classList.add("addDownFirst");
      let inputLevel = document.createElement("input");
      addDownSecond.appendChild(inputLevel);
      inputLevel.placeholder = " Level";
      inputLevel.style.width = "356px";
      inputLevel.value = element.Level;
      let inputNumber = document.createElement("input");
      addDownSecond.appendChild(inputNumber);
      inputNumber.placeholder = " Phone number";
      inputNumber.style.width = "356px";
      inputNumber.value = element["Phone number"];

      let inputLocation = document.createElement("input");
      addDown.appendChild(inputLocation);
      inputLocation.placeholder = " Location";
      inputLocation.style.width = "100%";
      inputLocation.style.marginTop = "28px";
      inputLocation.value = element.Location;

      let inputCategory = document.createElement("input");
      addDown.appendChild(inputCategory);
      inputCategory.placeholder = " Category";
      inputCategory.style.width = "100%";
      inputCategory.style.marginTop = "28px";
      inputCategory.style.height = "56px";
      inputCategory.style.borderRadius = "4px";
      inputCategory.style.fontSize = "16px";
      inputCategory.value = element["Category"];

      let inputDescription = document.createElement("textarea");
      addDown.appendChild(inputDescription);
      inputDescription.placeholder = " Description";
      inputDescription.style.width = "100%";
      inputDescription.style.marginTop = "28px";
      inputDescription.style.height = "136px";
      inputDescription.style.borderRadius = "4px";
      inputDescription.style.fontSize = "16px";
      inputDescription.style.paddingTop = "16px";
      inputDescription.value = element.Description;

      let inputEssentialCriteria = document.createElement("textarea");
      addDown.appendChild(inputEssentialCriteria);
      inputEssentialCriteria.placeholder = " Essential criteria";
      inputEssentialCriteria.style.width = "100%";
      inputEssentialCriteria.style.marginTop = "28px";
      inputEssentialCriteria.style.height = "136px";
      inputEssentialCriteria.style.borderRadius = "4px";
      inputEssentialCriteria.style.fontSize = "16px";
      inputEssentialCriteria.style.paddingTop = "16px";
      inputEssentialCriteria.value = element["Essential criteria"];

      let inputDesirableCriteria = document.createElement("textarea");
      addDown.appendChild(inputDesirableCriteria);
      inputDesirableCriteria.placeholder = " Desirable criteria";
      inputDesirableCriteria.style.width = "100%";
      inputDesirableCriteria.style.marginTop = "28px";
      inputDesirableCriteria.style.height = "136px";
      inputDesirableCriteria.style.borderRadius = "4px";
      inputDesirableCriteria.style.fontSize = "16px";
      inputDesirableCriteria.style.paddingTop = "16px";
      inputDesirableCriteria.value = element["Desirable criteria"];

      let addTopDownButton2 = document.createElement("button");
      addTopDownButton2.innerHTML = "SAVE";
      divAdd.appendChild(addTopDownButton2);
      addTopDownButton2.style.width = "91px";
      addTopDownButton2.style.height = "42px";
      addTopDownButton2.style.borderRadius = "4px";
      addTopDownButton2.style.backgroundColor = "rgba(33, 150, 243, 1)";
      addTopDownButton2.style.border = "none";
      addTopDownButton2.style.color = "white";
      addTopDownButton2.style.fontSize = "15px";
      addTopDownButton2.onclick = () => {
        let user = {
          title: inputTitle.value,
          Category: inputCategory.value,
          Level: inputLevel.value,
          Location: inputLocation.value,
          "Phone number": inputNumber.value,
          name: inputName.value,
          Closing: inputClothing.value,
          Email: inputEmail.value,
          Description: inputDescription.value,
          "Essential criteria": inputEssentialCriteria.value,
          "Desirable criteria": inputDesirableCriteria.value,
          img: "",
          id: Date.now(),
        };
        editFun(element.id, user);
      };
    };
  });
}

function applicData(data) {
  mainCards.innerHTML = "";
  let add = document.createElement("button");
  add.innerHTML = "CREATE NEW";
  add.classList.add("add");
  mainCards.appendChild(add);

  let table = document.createElement("table");
  mainCards.appendChild(table);
  table.classList.add("tableAdmin");
  let header = document.createElement("tr");
  table.appendChild(header);
  header.style.height = "56px";

  let headerUser = document.createElement("th");
  header.appendChild(headerUser);
  headerUser.innerHTML = "User";
  headerUser.style.width = "210px";
  headerUser.style.textAlign = "left";
  headerUser.style.paddingLeft = "16px";

  let headerEmail = document.createElement("th");
  header.appendChild(headerEmail);
  headerEmail.innerHTML = "Email";
  headerEmail.style.width = "178.5px";
  headerEmail.style.textAlign = "left";
  headerEmail.style.paddingLeft = "16px";

  let headerLocation = document.createElement("th");
  header.appendChild(headerLocation);
  headerLocation.innerHTML = "Location";
  headerLocation.style.width = "138.5px";
  headerLocation.style.textAlign = "left";
  headerLocation.style.paddingLeft = "16px";

  let headerNumber = document.createElement("th");
  header.appendChild(headerNumber);
  headerNumber.innerHTML = "Phone number";
  headerNumber.style.width = "138.5px";
  headerNumber.style.textAlign = "left";
  headerNumber.style.paddingLeft = "16px";

  let headerResponse = document.createElement("th");
  header.appendChild(headerResponse);
  headerResponse.innerHTML = "Response";
  headerResponse.style.width = "138.5px";
  headerResponse.style.textAlign = "left";
  headerResponse.style.paddingLeft = "16px";
  data.forEach((element) => {
    add.onclick = () => {
      seeMoreGlav.innerHTML = "";
      seeMoreDiv.style.display = "block";
      let addTop = document.createElement("div");
      seeMoreGlav.appendChild(addTop);
      addTop.style.height = "127px";
      addTop.style.borderBottom = "2px solid lightgray";

      let addTopTop = document.createElement("div");
      addTop.appendChild(addTopTop);
      addTopTop.style.display = "flex";
      let glavName = document.createElement("p");
      glavName.innerHTML = nameGlav;
      glavName.style.color = "darkgray";
      glavName.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavNameTire = document.createElement("p");
      glavNameTire.innerHTML = ">";
      glavNameTire.style.marginLeft = "10px";
      glavNameTire.style.marginRight = "10px";
      glavNameTire.style.color = "darkgray";
      let glavText = document.createElement("p");
      glavText.innerHTML = textGlav;
      glavText.style.color = "darkgray";
      glavText.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavTextTire = document.createElement("p");
      glavTextTire.innerHTML = ">";
      glavTextTire.style.marginLeft = "10px";
      glavTextTire.style.marginRight = "10px";
      glavTextTire.style.color = "darkgray";
      let glavWork = document.createElement("p");
      glavWork.innerHTML = "New job";
      addTopTop.append(
        glavName,
        glavNameTire,
        glavText,
        glavTextTire,
        glavWork
      );

      let addTopDown = document.createElement("div");
      addTop.appendChild(addTopDown);
      addTopDown.style.height = "63px";
      addTopDown.style.display = "flex";
      addTopDown.style.justifyContent = "space-between";
      addTopDown.style.alignItems = "top";
      addTopDown.style.marginTop = "40px";

      let addTopDownName = document.createElement("h1");
      addTopDownName.innerHTML = "Details";
      addTopDownName.style.fontSize = "34px";
      addTopDown.appendChild(addTopDownName);

      let divAdd = document.createElement("div");
      addTopDown.appendChild(divAdd);

      let addTopDownButton1 = document.createElement("button");
      addTopDownButton1.innerHTML = "CANCEL";
      divAdd.appendChild(addTopDownButton1);
      addTopDownButton1.style.width = "91px";
      addTopDownButton1.style.height = "42px";
      addTopDownButton1.style.borderRadius = "4px";
      addTopDownButton1.style.backgroundColor = "transparent";
      addTopDownButton1.style.border = "1px solid rgba(33, 150, 243, 0.5)";
      addTopDownButton1.style.color = "rgba(33, 150, 243, 1)";
      addTopDownButton1.style.fontSize = "15px";
      addTopDownButton1.style.marginRight = "28px";
      addTopDownButton1.onclick = () => {
        seeMoreDiv.style.display = "none";
      };

      let addDown = document.createElement("div");
      seeMoreGlav.appendChild(addDown);
      addDown.classList.add("addDown");
      addDown.style.marginTop = "40px";

      let addDownInfo = document.createElement("div");
      addDown.appendChild(addDownInfo);
      addDownInfo.classList.add("addDownFirst");
      let inputName = document.createElement("input");
      addDownInfo.appendChild(inputName);
      inputName.placeholder = " Name";
      inputName.style.width = "356px";
      let inputEmail = document.createElement("input");
      addDownInfo.appendChild(inputEmail);
      inputEmail.placeholder = " Email";
      inputEmail.style.width = "356px";

      let addDownFirst = document.createElement("div");
      addDown.appendChild(addDownFirst);
      addDownFirst.style.marginTop = '28px'
      addDownFirst.classList.add("addDownFirst");
      let inputTitle = document.createElement("input");
      addDownFirst.appendChild(inputTitle);
      inputTitle.placeholder = " Title";
      inputTitle.style.width = "356px";
      let inputClothing = document.createElement("input");
      addDownFirst.appendChild(inputClothing);
      inputClothing.placeholder = " Closing date";
      inputClothing.style.width = "356px";

      let addDownSecond = document.createElement("div");
      addDown.appendChild(addDownSecond);
      addDownSecond.style.marginTop = "28px";
      addDownSecond.classList.add("addDownFirst");
      let inputLevel = document.createElement("input");
      addDownSecond.appendChild(inputLevel);
      inputLevel.placeholder = " Level";
      inputLevel.style.width = "356px";
      let inputNumber = document.createElement("input");
      addDownSecond.appendChild(inputNumber);
      inputNumber.placeholder = " Phone number";
      inputNumber.style.width = "356px";

      let inputLocation = document.createElement("input");
      addDown.appendChild(inputLocation);
      inputLocation.placeholder = " Location";
      inputLocation.style.width = "100%";
      inputLocation.style.marginTop = "28px";

      let inputCategory = document.createElement("input");
      addDown.appendChild(inputCategory);
      inputCategory.placeholder = " Category";
      inputCategory.style.width = "100%";
      inputCategory.style.marginTop = "28px";
      inputCategory.style.height = "56px";
      inputCategory.style.borderRadius = "4px";
      inputCategory.style.fontSize = "16px";

      let inputDescription = document.createElement("textarea");
      addDown.appendChild(inputDescription);
      inputDescription.placeholder = " Description";
      inputDescription.style.width = "100%";
      inputDescription.style.marginTop = "28px";
      inputDescription.style.height = "136px";
      inputDescription.style.borderRadius = "4px";
      inputDescription.style.fontSize = "16px";
      inputDescription.style.paddingTop = "16px";

      let inputEssentialCriteria = document.createElement("textarea");
      addDown.appendChild(inputEssentialCriteria);
      inputEssentialCriteria.placeholder = " Essential criteria";
      inputEssentialCriteria.style.width = "100%";
      inputEssentialCriteria.style.marginTop = "28px";
      inputEssentialCriteria.style.height = "136px";
      inputEssentialCriteria.style.borderRadius = "4px";
      inputEssentialCriteria.style.fontSize = "16px";
      inputEssentialCriteria.style.paddingTop = "16px";

      let inputDesirableCriteria = document.createElement("textarea");
      addDown.appendChild(inputDesirableCriteria);
      inputDesirableCriteria.placeholder = " Desirable criteria";
      inputDesirableCriteria.style.width = "100%";
      inputDesirableCriteria.style.marginTop = "28px";
      inputDesirableCriteria.style.height = "136px";
      inputDesirableCriteria.style.borderRadius = "4px";
      inputDesirableCriteria.style.fontSize = "16px";
      inputDesirableCriteria.style.paddingTop = "16px";

      let addTopDownButton2 = document.createElement("button");
      addTopDownButton2.innerHTML = "SAVE";
      divAdd.appendChild(addTopDownButton2);
      addTopDownButton2.style.width = "91px";
      addTopDownButton2.style.height = "42px";
      addTopDownButton2.style.borderRadius = "4px";
      addTopDownButton2.style.backgroundColor = "rgba(33, 150, 243, 1)";
      addTopDownButton2.style.border = "none";
      addTopDownButton2.style.color = "white";
      addTopDownButton2.style.fontSize = "15px";
      addTopDownButton2.onclick = () => {
        let user = {
            title: inputTitle.value,
            Category: inputCategory.value,
            Level: inputLevel.value,
            Location: inputLocation.value,
            "Phone number": inputNumber.value,
            name: inputName.value,
            Closing: inputClothing.value,
            Email: inputEmail.value,
            Description: inputDescription.value,
            'Essential criteria': inputEssentialCriteria.value,
            'Desirable criteria': inputDesirableCriteria.value,
            img: '',
            id: Date.now(),
          };
          addFun(user)
      }
    };
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let user = document.createElement("td");
    tr.appendChild(user);
    user.style.display = "flex";
    user.style.alignItems = "center";
    user.onclick = () => {
      seeMoreGlav.innerHTML = "";
      seeMoreDiv.style.display = "block";
      
      let infoTop = document.createElement("div");
      seeMoreGlav.appendChild(infoTop);

      let infoTopTop = document.createElement("div");
      infoTop.appendChild(infoTopTop);
      infoTopTop.style.display = "flex";
      let glavName = document.createElement("p");
      glavName.innerHTML = nameGlav;
      glavName.style.color = "darkgray";
      glavName.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavNameTire = document.createElement("p");
      glavNameTire.innerHTML = ">";
      glavNameTire.style.marginLeft = "10px";
      glavNameTire.style.marginRight = "10px";
      glavNameTire.style.color = "darkgray";
      let glavText = document.createElement("p");
      glavText.innerHTML = textGlav;
      glavText.style.color = "darkgray";
      glavText.onclick = () => {
        seeMoreDiv.style.display = "none";
      };
      let glavTextTire = document.createElement("p");
      glavTextTire.innerHTML = ">";
      glavTextTire.style.marginLeft = "10px";
      glavTextTire.style.marginRight = "10px";
      glavTextTire.style.color = "darkgray";
      let glavWork = document.createElement("p");
      glavWork.innerHTML = element.name;
      infoTopTop.append(
        glavName,
        glavNameTire,
        glavText,
        glavTextTire,
        glavWork
      );

      let infoTopDown = document.createElement("div");
      infoTop.appendChild(infoTopDown);
      infoTopDown.style.height = "121px";
      infoTopDown.style.marginTop = '56px'
      infoTopDown.style.marginBottom = '56px'
      infoTopDown.style.borderBottom = '2px solid lightgray'
      let infoTopDownDiv = document.createElement("div");
      infoTopDown.appendChild(infoTopDownDiv);
      infoTopDownDiv.style.display = "flex"; 
      infoTopDownDiv.style.width = '740px'
      infoTopDownDiv.style.height = '100px'
      infoTopDownDiv.style.alignItems = 'center'
      infoTopDownDiv.style.justifyContent = 'space-between'
      let infoTopDownDivLeft = document.createElement("div");
      infoTopDownDiv.appendChild(infoTopDownDivLeft);
      infoTopDownDivLeft.style.display = 'flex'
      infoTopDownDivLeft.style.alignItems = 'center'
      let infoTopDownDivLeftImg = document.createElement("img");
      infoTopDownDivLeft.appendChild(infoTopDownDivLeftImg);
      infoTopDownDivLeftImg.src = element.img;
      infoTopDownDivLeftImg.style.borderRadius = '50%'
      infoTopDownDivLeftImg.style.height = '100px'
      let infoTopDownDivLeftText = document.createElement('div')
      infoTopDownDivLeft.appendChild(infoTopDownDivLeftText)
      infoTopDownDivLeftText.style.marginLeft = '20px'
      let infoTopDownDivLeftTextName = document.createElement('h2')
      infoTopDownDivLeftText.appendChild(infoTopDownDivLeftTextName)
      infoTopDownDivLeftTextName.innerHTML = element.name
      let infoTopDownDivLeftTextText = document.createElement('div')
      infoTopDownDivLeftText.appendChild(infoTopDownDivLeftTextText)
      infoTopDownDivLeftTextText.style.marginTop = '8px'
      infoTopDownDivLeftTextText.style.height = '32px'
      infoTopDownDivLeftTextText.style.padding = '0px 10px'
      infoTopDownDivLeftTextText.style.borderRadius = '100px'
      infoTopDownDivLeftTextText.style.display = 'flex'
      infoTopDownDivLeftTextText.style.alignItems = 'center'
      infoTopDownDivLeftTextText.style.justifyContent = 'center'
      infoTopDownDivLeftTextText.style.backgroundColor = 'rgba(0, 0, 0, 0.08)'
      let infoTopDownDivLeftTextTextName = document.createElement('p')
      infoTopDownDivLeftTextText.appendChild(infoTopDownDivLeftTextTextName)
      infoTopDownDivLeftTextTextName.innerHTML = element.title
      infoTopDownDivLeftTextTextName.style.fontSize = '13px'

      let infoTopDownDivRight = document.createElement('div')
      infoTopDownDiv.appendChild(infoTopDownDivRight)
      let back = document.createElement('button')
      back.innerHTML = 'Back'
      back.style.width = '84px'
      back.style.height = '42px'
      back.style.borderRadius = '4px'
      back.style.color = 'rgba(33, 150, 243, 0.5)'
      back.style.backgroundColor = 'transparent'
      back.style.border = '1px solid rgba(33, 150, 243, 0.5)'
      back.style.fontSize = '16px'
      back.style.marginRight = '20px'
      back.onclick = () => {
        seeMoreDiv.style.display = 'none'
      }
      infoTopDownDivRight.appendChild(back)
      
      let Respond = document.createElement('button')
      Respond.innerHTML = 'Respond'
      Respond.style.width = '115px'
      Respond.style.height = '42px'
      Respond.style.borderRadius = '4px'
      Respond.style.color = 'white'
      Respond.style.backgroundColor = 'rgba(33, 150, 243, 1)'
      Respond.style.border = 'none'
      Respond.style.fontSize = '16px'
      infoTopDownDivRight.appendChild(Respond)

      let infoCenter = document.createElement('div')
      infoTop.appendChild(infoCenter)

      let infoCenterFirst = document.createElement('div')
      infoCenter.appendChild(infoCenterFirst)
      infoCenterFirst.style.display = 'flex'
      infoCenterFirst.style.justifyContent = 'space-between'
      let infoName = document.createElement('form')
      infoCenterFirst.appendChild(infoName)
      infoName.classList.add('formInfo')
      let infoNameFieldset = document.createElement('fieldset')
      infoName.appendChild(infoNameFieldset)
      let infoNameLegend = document.createElement('legend')
      infoNameFieldset.appendChild(infoNameLegend)
      infoNameLegend.innerHTML = 'First name'
      let infoNameP = document.createElement('p')
      infoNameFieldset.appendChild(infoNameP)
      let s = element.name
      s = s.split(" "); 
      infoNameP.innerHTML = s[0]

      let infoSurname = document.createElement('form')
      infoCenterFirst.appendChild(infoSurname)
      infoSurname.classList.add('formInfo')
      let infoSurnameFieldset = document.createElement('fieldset')
      infoSurname.appendChild(infoSurnameFieldset)
      let infoSurnameLegend = document.createElement('legend')
      infoSurnameFieldset.appendChild(infoSurnameLegend)
      infoSurnameLegend.innerHTML = 'Surname'
      let infoSurnameP = document.createElement('p')
      infoSurnameFieldset.appendChild(infoSurnameP)
      infoSurnameP.innerHTML = s[1]

      let infoCenterSecond = document.createElement('div')
      infoCenter.appendChild(infoCenterSecond)
      infoCenterSecond.style.marginTop = '28px'
      infoCenterSecond.style.display = 'flex'
      infoCenterSecond.style.justifyContent = 'space-between'
      let infoEmail = document.createElement('form')
      infoCenterSecond.appendChild(infoEmail)
      infoEmail.classList.add('formInfo')
      let infoEmailFieldset = document.createElement('fieldset')
      infoEmail.appendChild(infoEmailFieldset)
      let infoEmailLegend = document.createElement('legend')
      infoEmailFieldset.appendChild(infoEmailLegend)
      infoEmailLegend.innerHTML = 'Email'
      let infoEmailP = document.createElement('p')
      infoEmailFieldset.appendChild(infoEmailP)
      infoEmailP.innerHTML = element.Email
      
      let infoNumber = document.createElement('form')
      infoCenterSecond.appendChild(infoNumber)
      infoNumber.classList.add('formInfo')
      let infoNumberFieldset = document.createElement('fieldset')
      infoNumber.appendChild(infoNumberFieldset)
      let infoNumberLegend = document.createElement('legend')
      infoNumberFieldset.appendChild(infoNumberLegend)
      infoNumberLegend.innerHTML = 'Phone number'
      let infoNumberP = document.createElement('p')
      infoNumberFieldset.appendChild(infoNumberP)
      infoNumberP.innerHTML = element['Phone number']

      let infoLocation = document.createElement('form')
      infoCenter.appendChild(infoLocation)
      infoLocation.style.marginTop = '28px'
      infoLocation.classList.add('formLocation')
      let infoLocationFieldset = document.createElement('fieldset')
      infoLocation.appendChild(infoLocationFieldset)
      let infoLocationLegend = document.createElement('legend')
      infoLocationFieldset.appendChild(infoLocationLegend)
      infoLocationLegend.innerHTML = 'Location'
      let infoLocationP = document.createElement('p')
      infoLocationFieldset.appendChild(infoLocationP)
      infoLocationP.innerHTML = element['Location']

      let infoAddress = document.createElement('form')
      infoCenter.appendChild(infoAddress)
      infoAddress.style.marginTop = '28px'
      infoAddress.classList.add('formLocation')
      let infoAddressFieldset = document.createElement('fieldset')
      infoAddress.appendChild(infoAddressFieldset)
      let infoAddressLegend = document.createElement('legend')
      infoAddressFieldset.appendChild(infoAddressLegend)
      infoAddressLegend.innerHTML = 'Address'
      let infoAddressP = document.createElement('p')
      infoAddressFieldset.appendChild(infoAddressP)
      infoAddressP.innerHTML = 'Bahamas'

      let infoDown = document.createElement('div')
      infoTop.appendChild(infoDown)
      infoDown.style.marginTop = '40px'
      let infoDownFirst = document.createElement('div')
      infoDown.appendChild(infoDownFirst)
      let infoDownFirstName = document.createElement('p')
      infoDownFirst.appendChild(infoDownFirstName)
      infoDownFirstName.innerHTML = 'Description'
      infoDownFirstName.style.marginBottom = '8px'
      infoDownFirstName.style.fontWeight = '600'
      let infoDownFirstP = document.createElement('p')
      infoDownFirst.appendChild(infoDownFirstP)
      infoDownFirstP.innerHTML = element.Description
      let infoDownSecond = document.createElement('div')
      infoDown.appendChild(infoDownSecond)
      infoDownSecond.style.marginTop = '20px'
      let infoDownSecondName = document.createElement('p')
      infoDownSecond.appendChild(infoDownSecondName)
      infoDownSecondName.innerHTML = 'Essential criteria'
      infoDownSecondName.style.marginBottom = '8px'
      infoDownSecondName.style.fontWeight = '600'
      let infoDownSecondP = document.createElement('p')
      infoDownSecond.appendChild(infoDownSecondP)
      infoDownSecondP.innerHTML = element['Essential criteria']
      
      let infoDownThird = document.createElement('div')
      infoDown.appendChild(infoDownThird)
      infoDownThird.style.marginTop = '20px'
      let infoDownThirdName = document.createElement('p')
      infoDownThird.appendChild(infoDownThirdName)
      infoDownThirdName.innerHTML = 'Desirable criteria'
      infoDownThirdName.style.marginBottom = '8px'
      infoDownThirdName.style.fontWeight = '600'
      let infoDownThirdP = document.createElement('p')
      infoDownThird.appendChild(infoDownThirdP)
      infoDownThirdP.innerHTML = element['Desirable criteria']
    }
    let userImg = document.createElement("img");
    user.appendChild(userImg);
    userImg.src = element.img;
    userImg.style.borderRadius = "50%";
    userImg.style.width = "40px";
    let userName = document.createElement("p");
    user.appendChild(userName);
    userName.innerHTML = element.name;
    userName.style.marginLeft = "10px";
    let email = document.createElement("td");
    tr.appendChild(email);
    email.innerHTML = element.Email;
    let location = document.createElement("td");
    tr.appendChild(location);
    location.innerHTML = element.Location;
    let number = document.createElement("td");
    tr.appendChild(number);
    number.innerHTML = element["Phone number"];
    let response = document.createElement("td");
    tr.appendChild(response);
    let responseDiv = document.createElement("div");
    response.appendChild(responseDiv);
    responseDiv.style.backgroundColor = "rgba(0, 0, 0, 0.08)";
    responseDiv.style.borderRadius = "50px";
    responseDiv.style.height = "32px";
    responseDiv.style.display = "flex";
    responseDiv.style.alignItems = "center";
    responseDiv.style.paddingLeft = "10px";
    let s = element.title;
    s = s.split(" ");
    if (s[0].length > 8) {
      responseDiv.innerHTML = s[0];
      responseDiv.style.width = "100px";
    } else if (s[0].length > 6) {
      responseDiv.innerHTML = s[0];
      responseDiv.style.width = "70px";
    } else if (s[0].length > 4) {
      responseDiv.innerHTML = s[0];
      responseDiv.style.width = "60px";
    } else if (s[0].length >= 2) {
      responseDiv.innerHTML = s[0] + " " + s[1];
      responseDiv.style.width = "100px";
      if (s[1].length < 6) {
        responseDiv.innerHTML = s[0] + " " + s[1] + " " + s[2];
        responseDiv.style.width = "110px";
      }
    }
    responseDiv.style.overflow = "hidden";
  });
}
export { mainData, adminData, applicData };
