const url = document.querySelector('.generator__url');
const utmSource = document.querySelector('.generator__utm-source');
const utmMedium = document.querySelector('.generator__utm-medium');
const utmCampaign = document.querySelector('.generator__utm-campaign');
const generateResult = document.querySelector('.generator__result--button');
const generatorResult = document.querySelector('.generator__result--input');

generateResult.addEventListener ('click', function () {
    generatorResult.value = url.value + `/?utm_source=` + utmSource.value + `&utm_medium=` + utmMedium.value + `&utm_campaign=` + utmCampaign.value;
});