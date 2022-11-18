async function fetchAsText(url) {
    return await (await fetch(url)).text();
}

async function importNav(targetDiv) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText("/html/common/nav.html");
}

importNav('nav');