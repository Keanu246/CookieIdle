// classes
// functions
// commands and global variables

// classes

class Clicker
{
	constructor()
	{
		this.level = 1
		this.price = 10;

		this.level_display = document.getElementById("clicker_level");
		this.price_display = document.getElementById("clicker_price");
		this.productivity_display = document.getElementById("clicker_productivity");

		this.renew_display();
	}

	click()
	{
		cookies += this.get_production_value();
		cookies_produced += this.get_production_value();
		renew_cookies();
	}

	get_production_value()
	{
		return Math.floor(1 + (0.1 * altogether_productivity * (this.level - 1)) + (this.level - 1));
	}

	improve()
	{
		if(cookies >= this.price)
		{
			cookies -= this.price;
			this.level += 1;
			this.price *= 1.5;
			this.renew_display();
		}
		else
		{
			alert("Not enough cookies!");
		}
	}

	renew_display()
	{
		this.level_display.innerHTML = this.level;
		this.price_display.innerHTML = this.price;
		this.productivity_display.innerHTML = this.get_production_value();
	}
}

class Building
{
	constructor(name, productivity, price)
	{
		this.name = name;
		this.level = 0;
		this.price = price;
		this.productivity = productivity;

		// variables for displaying
		// definition of areas
		this.area = document.createElement("span");
		this.area.id = name;

		this.level_display = document.createElement("span");
		this.level_display.id = this.name + "_level";

		this.productivity_display = document.createElement("span");
		this.productivity_display.id = this.name + "_productivity";

		this.price_display = document.createElement("span");
		this.price_display.id = this.name + "_price";

		this.button = document.createElement("button");
		this.button.innerHTML = "Improve";
	        this.button.onclick = this.improve.bind(this);

		// put together
		this.area.append(document.createTextNode(name + " Level: "));
		this.area.append(this.level_display);
		this.area.append(document.createElement("br"));

		this.area.append(document.createTextNode("Cookies per Second: "));
		this.area.append(this.productivity_display);
		this.area.append(document.createElement("br"));

		this.area.append(document.createTextNode("Improvement Price: "));
		this.area.append(this.price_display);
		this.area.append(document.createElement("br"));

		this.area.append(this.button);
		this.area.append(document.createElement("br"));
		this.area.append(document.createElement("br"));
        
        	setInterval(this.produce.bind(this), 1000);
	}
	
	get_price() 
	{
		return (this.price / 2) * (this.level * this.level + 1) + (this.price / 2) * (this.level + 1)
	}
	
	improve()
	{
        	if(cookies >= this.get_price())
        	{
        		cookies -= this.get_price();
        		this.level += 1;
        		altogether_productivity += this.productivity;
        		this.renew_display();
        		clicker.renew_display();
        	}
        	else
        	{
			alert("Not enough cookies!");
		}
	}

	renew_display()
	{
		this.level_display.innerHTML = this.level;
		this.productivity_display.innerHTML = this.get_production_value();
		this.price_display.innerHTML = this.get_price();
	}


	set_visible()
	{
		buildings.append(this.area);
		this.renew_display();
	}

	produce()
	{
		cookies += this.get_production_value();
		cookies_produced += this.get_production_value();
	}
	
	get_production_value()
	{
		return this.level * this.productivity;
	}
}

// functions

function renew_cookies()
{
	cookies_display.innerHTML = cookies;
	cookies_produced_display.innerHTML = cookies_produced;
    
	if(this.cookies_produced >= 10 && grandma_enabled == 0) 
	{
	        grandma.set_visible();
		grandma_enabled = 1;
        
	}
	if(this.cookies_produced >= 80 && farm_enabled == 0)
	{
		farm.set_visible(); 
		farm_enabled = 1;
	}
	if(this.cookies_produced >= 600 && factory_enabled == 0)
	{
		factory.set_visible();
		factory_enabled = 1;
	}

	if(this.cookies_produced >= 5000 && mine_enabled == 0) 
	{
		mine.set_visible(); 
		mine_enabled = 1;
	}
	
	if(this.cookies_produced >= 40000 && shipment_enabled == 0) 
	{
		shipment.set_visible(); 
		shipment_enabled = 1;
	}
	
	if(this.cookies_produced >= 800000 && alchemy_lab_enabled == 0) 
	{
		alchemy_lab.set_visible(); 
		alchemy_lab_enabled = 1;
	}
	
	if(this.cookies_produced >= 16000000 && portal_enabled == 0) 
	{
		portal.set_visible(); 
		portal_enabled = 1;
	}
	
	if(this.cookies_produced >= 480000000 && time_machine_enabled == 0) 
	{
		time_machine.set_visible(); 
		time_machine_enabled = 1;
	}
	
	if(this.cookies_produced >= 7200000000 && antimatter_condenser_enabled == 0) 
	{
		antimatter_condenser.set_visible(); 
		antimatter_condenser_enabled = 1;
	}
	
	if(this.cookies_produced >= 1200000000 && prism_enabled == 0) 
	{
		prism.set_visible(); 
		prism_enabled = 1;
	}
	
	if(this.cookies_produced >= 450000000000 && cookie_god_enabled == 0) 
	{
		cookie_god.set_visible(); 
		cookie_god_enabled = 1;
	}
}

// commands and (global) variables

var cookies = 0;
var cookies_produced = 0;
var altogether_productivity = 0; // counts productivity of buildings except clicker

var cookies_display = document.getElementById("cookies");
var cookies_produced_display = document.getElementById("cookies_produced");

var buildings = document.getElementById("buildings");

grandma_enabled = 0;
farm_enabled = 0;
factory_enabled = 0;
mine_enabled = 0;
shipment_enabled = 0;
alchemy_lab_enabled = 0;
portal_enabled = 0;
time_machine_enabled = 0;
antimatter_condenser_enabled = 0;
prism_enabled = 0;
cookie_god_enabled = 0;

clicker = new Clicker();
cursor = new Building("Cursor", 1, 15);
cursor.set_visible();
grandma = new Building("Grandma", 10, 100);
farm = new Building("Farm", 80, 1500);
factory = new Building("Factory", 600, 25000);
mine = new Building("Mine", 5000, 400000);
shipment = new Building("Shipment", 40000, 5000000);
alchemy_lab = new Building("Alchemy Lab", 800000, 75000000);
portal = new Building("Portal", 16000000, 1000000000);
time_machine = new Building("Time Machine", 480000000, 30000000000);
antimatter_condenser = new Building("Antimatter Condenser", 7200000000, 500000000000);
prism = new Building("Prism", 1200000000, 9000000000000);
cookie_god = new Building("Cookie God", 450000000000, 250000000000000);

setInterval(renew_cookies, 500);

var upgrades = [

]

function upgrades(){

}
