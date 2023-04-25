

countries = []
      const getCountries = async () => {
    try {
        const main = document.querySelector("#main");
      let response = await fetch("https://restcountries.com/v3.1/region/europe");
      let data = await response.json();
      countries = data

      console.log(data);
      

      countries.forEach((country) => {
        let countryContainer = document.createElement("div");
        countryContainer.id = "countryContainer";
        const countryImg = document.createElement("img");
        const countryInfo = document.createElement("div");
        countryInfo.id = "countryInfo";
        const countryName = document.createElement("p");
        countryName.id = "countryName";
        const countryRegion = document.createElement("p");
        countryRegion.id = "countryRegion";
        const countryCapital = document.createElement("p");
        countryCapital.id = "countryCapital";
  
  
        const buttonEurope = document.querySelector("#europe");
      const buttonAsia = document.querySelector("#asia");
      const buttonAmericas = document.querySelector("#americas");
      const buttonOceania = document.querySelector("#oceania");
      const buttonAfrica = document.querySelector("#africa");

      buttonEurope.onclick = () => {
        let europeCountries = countries.filter((el) => el.region == "Europe");

        location.href = `http://127.0.0.1:5500/js.practice/regions.html`;
      };
      buttonAsia.onclick = () => {
        let asiaCountries = countries.filter((el) => el.region == "Asia");

        location.href = `http://127.0.0.1:5500/js.practice/regionscopy.html`;
      };
      buttonAmericas.onclick = () => {
        let americaCountries = countries.filter((el) => el.region == "America");

        location.href = `http://127.0.0.1:5500/js.practice/regionscopy2.html`;
      };
      buttonOceania.onclick = () => {
        let oceaniaCountries = countries.filter((el) => el.region == "Oceania");

        location.href = `http://127.0.0.1:5500/js.practice/regionscopy3.html`;
      };
      buttonAfrica.onclick = () => {
        let africaCountries = countries.filter((el) => el.region == "Africa");

        location.href = `http://127.0.0.1:5500/js.practice/regionscopy4.html`;
      };
       
        countryCapital.textContent = country.capital;
        countryName.textContent = country.name.common;
        countryRegion.textContent = country.region;
        countryImg.id = "countryImg";
        countryImg.src = country.flags.png;
  
        main.appendChild(countryContainer);
  
        countryInfo.appendChild(countryName);
        countryInfo.appendChild(countryCapital);
        countryInfo.appendChild(countryRegion);
        countryContainer.appendChild(countryImg);
        countryContainer.appendChild(countryInfo);
  
        countryContainer.onclick = () => {
          main.style.flexWrap = "nowrap";
          main.style.flexDirection = "column";
          console.log(country.name.common);
          main.innerHTML = "";
          const renderCountryFacts = () => {
            countryName.style.fontSize = "40px";
            (countryName.style.fontFamily = "Franklin Gothic Medium"),
              "Arial Narrow";
  
            countryImg.style.width = "50%";
            countryImg.style.marginTop = "20px";
            const countryFactsContainer = document.createElement("div");
            countryFactsContainer.id = "countryFactsContainer";
            const countryLanguage = document.createElement("p");
            const countryLanguagesArray = Object.values(country.languages);
            const countryPopulation = document.createElement("p");
            const countrySubRegion = document.createElement("p");
            const countryCurrency = document.createElement("p");
            const refreshButton = document.createElement("button");
            refreshButton.id = "refreshButton";
            const countryCurrencyArray = Object.values(country.currencies);
  
            countrySubRegion.textContent = `Sub-Region : ${country.subregion}`;
            countryPopulation.textContent = `Population : ${country.population}`;
            countryLanguage.textContent = ` Languages : ${countryLanguagesArray[0]}`;
            countryCapital.textContent = `Capital: ${country.capital[0]}`;
            countryRegion.textContent = `Region: ${country.region}`;
            countryCurrency.textContent = `Currency : ${countryCurrencyArray[0].name}`;
            refreshButton.textContent = `Back to Main Page`;
            refreshButton.onclick = () => {
              window.location.reload();
            };
  
            main.appendChild(countryName);
            main.appendChild(countryImg);
            countryImg.style.width = "30%";
            main.appendChild(countryFactsContainer);
            countryFactsContainer.appendChild(countryName);
            countryFactsContainer.appendChild(countryLanguage);
            countryFactsContainer.appendChild(countryCapital);
            countryFactsContainer.appendChild(countryCurrency);
            countryFactsContainer.appendChild(countryRegion);
            countryFactsContainer.appendChild(countrySubRegion);
            countryFactsContainer.appendChild(countryPopulation);
            main.appendChild(refreshButton);
          };
          renderCountryFacts();
        };
      });
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log(`gotovo`);
    }
}
getCountries()