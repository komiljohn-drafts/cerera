/* Catalog Current Item Click */
let catalogCurrentList = document.querySelector(".catalog-list"),
    selectedLI;
catalogCurrentList.addEventListener("click", function (e) {
    target = e.target;
    if (target.tagName != "A") return;
    linkMove(target);
});
function linkMove(li) {
    if (selectedLI) {
        selectedLI.classList.remove("li-clicked");
    }
    selectedLI = li;
    if (document.querySelectorAll(".catalog-list a").classList)
        document
            .querySelector(".catalog-list a")
            .classList.remove("li-clicked");
    selectedLI.classList.add("li-clicked");
}
/* ********* ********** */

document.querySelector(".up").addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});