
const handleOpenFact = (entryFact) => {

    entryFact.classList.toggle("right");
    entryFact.classList.toggle("bottom");
}

const handleOpenDescription = (entryDescription) => {
    entryDescription.classList.toggle("description-hidden")
}

const handleHideOtherFacts = (currentDescription) => {
    const descriptions = document.querySelectorAll("#fad .fact-container")

    descriptions.forEach((factContainer) => {
        const fact = factContainer.querySelector(".fact");
        const description = factContainer.querySelector(".description");

        if (currentDescription === description) {
            return;
        }
        fact.classList.remove("bottom");
        fact.classList.add("right");
        description.classList.add("description-hidden");
    });
}

// fadContainer.appendChild(button);

const getDescriptionContainer = (entryFact, entryDescription) => {

    const entryContainer = document.createElement("div");
    entryContainer.className = "fact-container";
    entryContainer.append(entryFact);
    entryContainer.append(entryDescription);

    return entryContainer;
}

const getFadListContainer = () => {

    return document.createElement("div")

}



const getEntryDescription = (description) => {


    const descriptionElement = document.createElement("div")
    descriptionElement.className = "description description-hidden";
    descriptionElement.innerHTML = description;
    return descriptionElement;
}

const getEntryFact = (fact) => {

    const factElement = document.createElement("div")
    factElement.className = "fact chevron right fact-interactive";
    factElement.innerHTML = fact;
    return factElement;
}

const fadList = () => {


    const fadData = [
        {
            fact: `FOOD CRISIS`,
            description: ` In 20 years, 40% less food is expected to be produced for 9.3 billion
        people. Poor soil leads to poor nutritional value. Today's fruits and
        vegetables already contain 90% fewer nutrients. 2 billion people suffer
        from nutritional deficiencies leading to multitude of diseases.`,
        },
        {
            fact: `WATER SCARCITY`,
            description: `Depleted soils cannot absorb and regulate water flows. Lack of water
        retention leads to water scarcity, droughts & floods. Organic matter can
        hold up to 90% of its weight in water and release it slowly over time.
        This is a big help in drought-prone areas.`,
        },
        {
            fact: `LOSS OF BIO-DIVERSITY`,
            description: `Scientists say that around 27000 species of life forms are becoming
        extinct every year due to loss of habitat. The crisis has reached a
        point where 80% of the insect biomass has gone. Loss of biodiversity
        further disrupts the soil habitat and prevents soil regeneration.`,
        },
        {
            fact: `CLIMATE CHANGE`,
            description: `Carbon stored in soil is 3x that in living plants, and 2x that in the
        atmosphere, which means soil is crucial for carbon sequestration. If the
        world's soils are not revitalized, they could release 850 billion tonnes
        of carbon dioxide into the atmosphere contributing to climate change.
        This is more than all of humanity's emissions in the last 30 years
        combined.`,
        },
        {
            fact: `LOSS OF LIVELIHOOD`,
            description: `Thousands of farmers are committing suicide due to depletion in soil.
        74% of the poor are directly affected by land degradation globally. It
        is estimated that soil extinction is costing the world up to US$ 10.6
        trillion every year.`,
        },
        {
            fact: `CONFLICT AND MIGRATION`,
            description: `Population growth, and food and water scarcity could cause over 1
        billion to migrate to other regions and countries by 2050. Land issues
        have played a significant role in over 90% of major wars and conflicts
        in Africa since 1990. From the French Revolution to the Arab Spring,
        high food prices have been cited as a factor behind mass protest
        movements.`,
        },
        {
            fact: `HOW CAN I SUPPORT?`,
            description: `You can do this right here 👉
        <a
          class="button"
          href="https://europe.consciousplanet.org/earth-buddies/"
          target="_blank"
          >I want to save soil</a
        >`
        }
    ]

    const fadContainer = getFadListContainer();


    const handleFactClick = (entryFact, entryDescription) => {

        handleHideOtherFacts(entryDescription);
        handleOpenFact(entryFact);
        handleOpenDescription(entryDescription);
    }




    fadData.forEach((fadEntry) => {


        const { fact, description } = fadEntry;
        const entryDescription = getEntryDescription(description);
        const entryFact = getEntryFact(fact);

        entryFact.onclick = () => {
            handleFactClick(entryFact, entryDescription)
        }

        const entryContainer = getDescriptionContainer(entryFact, entryDescription);
        fadContainer.append(entryContainer);


    })

    const fadElement = document.getElementById("fad");
    fadElement.innerHTML = "";

    fadElement.append(fadContainer);

    const getAllDescriptions = () => {
        return document.querySelectorAll("#fad .fact-container .description")
    }

    const openAll = () => {
        const descript = getAllDescriptions();
        descript.forEach((description) => {
            // description.style.maxHeight = "initial";
            description.classList.toggle("description-hidden")
        });
    }
    const closeAll = () => {
        const descript = getAllDescriptions();
        descript.forEach((description) => {
            // description.style.maxHeight = 0;
            description.classList.add("description-hidden");
        });
    }
    const buttonToggleAll = document.getElementById("toggle-all");

    let stateOfToggle = "closed";

    buttonToggleAll.onclick = function () {

        if (stateOfToggle === "closed") {
            openAll();
            stateOfToggle = "opened";
            buttonToggleAll.innerHTML = "CLOSE ALL";


        } else if (stateOfToggle === "opened") {
            closeAll();
            stateOfToggle = "closed";
            buttonToggleAll.innerHTML = "OPEN ALL";
        }

    }



};

fadList();