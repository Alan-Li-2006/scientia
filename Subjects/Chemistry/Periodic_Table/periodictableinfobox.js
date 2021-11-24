class PeriodicTableInfoBox
{
	constructor(periodictable, infoboxbackgroundid, infoboxid)
	{
		this._periodictable = periodictable;
        this._infoboxid = infoboxid;
        this._infoboxbackgroundid = infoboxbackgroundid;

		document.onkeyup = (event) =>
		{
			if(event.key === "Escape" && document.getElementById(this._infoboxid).style.visibility === "visible")
			{
				this.Hide();
			}
		}

		document.getElementById("btnCloseInfoBox").onclick = () => this.Hide();
    }


	Hide()
	{
		document.getElementById(this._infoboxid).style.visibility = "hidden";
		document.getElementById(this._infoboxbackgroundid).style.visibility = "hidden";
	}


	Show(atomicnumber)
	{
		const element = this._periodictable.GetElement(atomicnumber);

		document.getElementById("infoName").innerHTML = element.name;
		document.getElementById("infoAtomicNumber").innerHTML = element.atomicnumber;
		document.getElementById("infoChemicalSymbol").innerHTML = element.symbol;
		document.getElementById("infoCategory").innerHTML = element.category;
		document.getElementById("infoAtomicWeightConventional").innerHTML = element.atomicweight;
		document.getElementById("infoAtomicWeightStandard").innerHTML = element.atomicweightfull;
		document.getElementById("infoOccurrence").innerHTML = element.occurrence;
		document.getElementById("infoStateOfMatter").innerHTML = element.stateofmatter;
		document.getElementById("infoGroup").innerHTML = element.group;
		document.getElementById("infoPeriod").innerHTML = element.period;
		document.getElementById("infoBlock").innerHTML = element.block;

		document.getElementById("infoElectronConfig").innerHTML = element.electronconfig;
		document.getElementById("infoRadioactivity").innerHTML = element.radioactivity;
		document.getElementById("infoOxidation").innerHTML = element.oxidation;
		document.getElementById("infoAtomicRadius").innerHTML = element.atomicradius;
		document.getElementById("infoElectronegativity").innerHTML = element.electronnegativity;
		document.getElementById("infoIonization").innerHTML = element.ionization;
		document.getElementById("infoDensity").innerHTML = element.density;
		document.getElementById("infoMelting").innerHTML = element.melting;
		document.getElementById("infoBoiling").innerHTML = element.boiling;
		document.getElementById("infoYearDiscovered").innerHTML = element.yeardiscovered;


		document.getElementById(this._infoboxbackgroundid).style.visibility = "visible";
		document.getElementById(this._infoboxid).style.visibility = "visible";
	}
}
