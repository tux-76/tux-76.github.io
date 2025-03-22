
let numTrials = 0;
let numPositives = 0;
let numTrialsEl = document.getElementById('num-trials');
let percentPositiveEl = document.getElementById('percent-positive');
let peopleListEl = document.getElementById('people-list');
let numPeopleEl = document.getElementById('num-people');
let numPeople = 23;

const firstNames = [
    "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda",
    "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica",
    "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa",
    "Matthew", "Betty", "Anthony", "Miriam", "Margaret", "Mark", "Dorothy", "Donald", "Christine",
    "Steven", "Carol", "Paul", "Amanda", "Andrew", "Melissa", "Edward", "Deborah",
    "Joshua", "Stephanie", "George", "Rebecca", "Brian", "Sharon", "Kevin", "Laura",
    "Jason", "Cynthia", "Jeffrey", "Amy", "Gary", "Angela", "Jacob", "Helen",
    "Nicholas", "Michelle", "Eric", "Kimberly", "Jonathan", "Emily", "Stephen", "Julie",
    "Timothy", "Donna", "Justin", "Rachel", "Scott", "Kathleen", "Brandon", "Pamela",
    "Benjamin", "Nicole", "Samuel", "Katherine", "Gregory", "Christine", "Alexander", "Samantha",
    "Patrick", "Debra", "Jack", "Janet", "Dennis", "Carolyn", "Jerry", "Maria",
    "Raymond", "Heather", "Walter", "Diane", "Philip", "Ruth", "Ronald", "Kelly",
    "Henry", "Victoria", "Kenneth", "Danielle", "Peter", "Lauren", "Douglas", "Christina",
    "Nathan", "Joan", "Arthur", "Ashley", "Gerald", "Judith", "Keith", "Ann",
    "Jeremy", "Cheryl", "Roger", "Theresa", "Ryan", "Kathryn", "Frank", "Andrea",
    "Bruce", "Brenda", "Aaron", "Anna", "De'Melk", "Adam", "Teresa", "Albert", "Gloria",
    "Sean", "Evelyn", "Lawrence", "Jean", "Wayne", "Marie", "Joe", "Alice",
    "Jordan", "Julia", "Carl", "Judy", "Jesse", "Grace", "Alan", "Rose",
    "Tyler", "Jane", "Harold", "Denise", "Dylan", "Marilyn", "Craig", "Beverly",
    "Louis", "Diana", "Phillip", "Lori", "Russell", "Wendy", "Vincent", "Catherine",
    "Randy", "Robin", "Terry", "Shirley", "Martin", "Joyce", "Bobby", "Virginia",
    "Fred", "Tina", "Billy", "Bonnie", "Roy", "Janice", "Eugene", "Holly",
    "Willie", "Peggy", "Bryan", "Tracy", "Harry", "Dawn", "Ethan", "Kristin",
    "Bradley", "Megan", "Clarence", "Kayla", "Shawn", "Tiffany", "Ralph", "Taylor",
    "Isaac", "Monica", "Tony", "Paula", "Victor", "Carrie", "Todd", "Sheila",
    "Allen", "Ellen", "Darren", "Connie", "Clifford", "Joanne", "Stanley", "Erin",
    "Leonard", "Lynn", "Norman", "Stacy", "Howard", "Heidi", "Eddie", "Kristen",
    "Melvin", "Leah", "Calvin", "Beth", "Glen", "Amber", "Duane", "Allison",
    "Brett", "Gail", "Barry", "Renee", "Curtis", "Jacqueline", "Dean", "Jill",
    "Lee", "Kristina", "Jon", "De' Tanya", "Michele", "Randall", "Natasha", "Frederick", "Tamara",
    "Jeffery", "Sherry", "Dale", "Maureen", "Carlos", "Leslie", "Joel", "Marsha",
    "Earl", "Vanessa", "Marvin", "April", "Luis", "Kristine", "Gilbert", "Felicia",
    "Jim", "Hillary", "Don", "Claudia", "Rick", "Anita", "Lance", "Jenny",
    "Chris", "Kathy", "Greg", "Jonas", "Kim", "Tom", "Sue", "Nick", "Sandy",
    "Matt", "Tricia", "Josh", "Molly", "Dan", "Lindsay", "Ben", "Tara",
    "Sam", "Gina", "Tim", "Brooke", "Andy", "Katie", "Chuck", "Erica",
    "Steve", "Holly", "Bill", "Kelsey", "Dave", "Christy", "Mike", "Lydia",
    "Rob", "Stacey", "Pat", "Mandy", "Pete", "Nina", "Tonya", "Penny",
    "Aiden", "Sophia", "Liam", "Emma", "Noah", "Olivia", "Lucas", "Isabella",
    "Mason", "Mia", "Ethan", "Ava", "Logan", "Charlotte", "Caden", "Amelia",
    "Jackson", "Harper", "Elijah", "Evelyn", "Grayson", "Abigail", "Carter", "Emily",
    "Jayden", "Scarlett", "Gabriel", "Madison", "Julian", "Lily", "Wyatt", "Zoey",
    "Owen", "Chloe", "Henry", "Hannah", "Sebastian", "Addison", "Jack", "Avery",
    "Levi", "Grace", "Isaac", "Lillian", "Mateo", "Natalie", "Asher", "Riley",
    "Dylan", "Sofia", "Luke", "Nora", "Lincoln", "Layla", "Daniel", "Ella",
    "Hudson", "Zoe", "James", "Penelope", "Nathaniel", "Stella", "Jaxon", "Violet",
    "Samuel", "Aurora", "Eli", "Savannah", "David", "LaTreasury", "Brooklyn", "Joseph", "Claire",
    "Theodore", "Skylar", "Hunter", "Lucy", "Landon", "Paisley", "Isaiah", "Everly",
    "Christian", "Anna", "Jonathan", "Caroline", "Connor", "Nova", "Andrew", "Genesis",
    "Joshua", "Emilia", "Thomas", "Kennedy", "Aaron", "Samantha", "Jeremiah", "Sarah",
    "Ezra", "Elena", "Colton", "Hazel", "Miles", "Ruby", "Dominic", "Isabelle",
    "Cameron", "Luna", "Leo", "Sadie", "Evan", "Kaylee", "Austin", "Alyssa",
    "Brayden", "Makayla", "Parker", "Jade", "Tyler", "Mariah", "Nolan", "Ellie",
    "Easton", "Aaliyah", "Adam", "Madeline", "Angel", "Piper", "Ryder", "Lydia",
    "Josiah", "Autumn", "Xavier", "Peyton", "Cooper", "Annabelle", "Sawyer", "Kylie",
    "Tristan", "Gianna", "Bentley", "Adeline", "Zachary", "Delilah", "Calvin", "Rose",
    "Declan", "Valentina", "Bryson", "Emery", "Gavin", "Naomi", "Chase", "Faith",
    "Jasper", "Mary", "Micah", "Reagan", "Elliot", "Harmony", "Bennett", "Athena",
    "Everett", "Willow", "Finn", "Eleanor", "Brody", "Kinsley", "Maxwell", "Brianna",
    "Jude", "Leilani", "Silas", "Rylee", "Roman", "Hadley", "Jonah", "Ivy",
    "Blake", "Clara", "Kai", "Adalynn", "Maddox", "Vivian", "Collin", "Lila",
    "Wesley", "Lilly", "Adriel", "Melody", "River", "Isla", "Emmett", "Mila",
    "Braxton", "Adalyn", "Tucker", "Arya", "Archer", "Laila", "Graham", "Alexa",
    "Caleb", "Kayla", "Dean", "Katelyn", "Preston", "Lauren", "Vincent", "Brielle",
    "Kaleb", "Jocelyn", "Jax", "Norah", "Thiago", "Sydney", "Ayden", "Margaret",
    "Amir", "Valerie", "Milo", "Lena", "Barrett", "Camila", "Beau", "Nicole",
    "Knox", "Juniper", "Malachi", "Rosalie", "Harrison", "Callie", "Judah", "Karla",
    "Cody", "Marley", "Phoenix", "Kaitlyn", "Jett", "Hope", "Kaden", "Mckenna",
    "Gideon", "Journey", "Zane", "Miranda", "Anderson", "Maggie", "Cash", "Daisy",
    "Rafael", "Talia", "Lukas", "Kate", "Bryce", "Eliza", "Zander", "Ashley",
    "Axel", "Esther", "Beckett", "Camille", "Reid", "Veronica", "Rhett", "Lola",
    "Israel", "Destiny", "Finnley", "Jasmine", "Atlas", "Angelina", "Karter", "Alexandra",
    "Corbin", "June", "Dallas", "Evangeline", "Enzo", "Giselle", "Hayden", "Cecilia",
    "Kyler", "Amaya", "Maximilian", "Dakota", "Remington", "Eden", "Santino", "Juliana"
];
const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
    "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas",
    "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White",
    "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young",
    "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell",
    "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker",
    "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy",
    "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey",
    "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza",
    "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers",
    "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry", "Russell",
    "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales", "Fisher",
    "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham",
    "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant",
    "Herrera", "Gibson", "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray",
    "Ford", "Castro", "Marshall", "Owens", "Harrison", "Fernandez", "McDonald", "Woods",
    "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen", "Freeman", "Webb",
    "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", "Hunter",
    "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Munoz",
    "Hunt", "Hicks", "Holmes", "Palmer", "Wagner", "Black", "Robertson", "Boyd",
    "Rose", "Stone", "Salazar", "Fox", "Warren", "Mills", "Meyer", "Rice",
    "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens", "Soto", "Weaver",
    "Ryan", "Gardner", "Payne", "Grant", "Dunn", "Kelley", "Spencer", "Hawkins",
    "Arnold", "Pierce", "Vazquez", "Hansen", "Peters", "Schroeder", "Caldwell", "Lowe",
    "Fowler", "Norman", "Parks", "Freeman", "Burke", "Bishop", "Bradley", "Lane",
    "Riley", "Carpenter", "Perkins", "Aguirre", "Berry", "George", "Lambert", "Hanson",
    "May", "Wheeler", "Barker", "Barrett", "Bowman", "Stanley", "Horton", "Malone",
    "Reid", "Pearson", "Gilbert", "Howell", "Schneider", "Cortez", "Cunningham", "Bates",
    "Little", "Brewer", "French", "Goodwin", "Kramer", "Guerrero", "Strickland", "Moody",
    "Ball", "Hodge", "Lloyd", "Sharp", "Paul", "Blair", "Davidson", "Manning",
    "Curtis", "Farmer", "Sparks", "Love", "Gross", "Shelton", "Boone", "Willis",
    "McCarthy", "Harrington", "Knight", "Elliott", "Figueroa", "Newton", "Lawson", "Burgess",
    "Reese", "Walton", "Blake", "Tyler", "Harmon", "Benson", "Dean", "Maxwell",
    "Holland", "Gallagher", "Lucas", "Potter", "Delgado", "Hammond", "Kane", "McKenzie",
    "Thornton", "Franco", "Fields", "Hardy", "Stevenson", "Barber", "Morse", "Dennis",
    "Abbott", "Acosta", "Adkins", "Akers", "Albright", "Aldridge", "Alford", "Ambrose",
    "Andersen", "Andrews", "Archer", "Armstrong", "Atkins", "Atkinson", "Austin", "Avery",
    "Bacon", "Baird", "Baldwin", "Ballard", "Banks", "Barnett", "Barr", "Barrow",
    "Barton", "Bass", "Bauer", "Baxter", "Beach", "Beard", "Beck", "Becker",
    "Beasley", "Belcher", "Bender", "Bennet", "Bentley", "Benton", "Berg", "Berger",
    "Berman", "Best", "Beyer", "Bird", "Bishop", "Blackburn", "Blanchard", "Blankenship",
    "Blevins", "Block", "Bloom", "Bolton", "Bond", "Booker", "Booth", "Borden",
    "Boswell", "Bowers", "Bowling", "Boyce", "Boyer", "Bradford", "Bradshaw", "Brady",
    "Branch", "Brandt", "Brannon", "Braswell", "Bray", "Brennan", "Bridges", "Bright",
    "Briggs", "Brinkley", "Brock", "Bronson", "Brookshire", "Browning", "Bryson", "Buchanan",
    "Buck", "Buckley", "Bunch", "Burch", "Burkett", "Burnett", "Burton", "Bush",
    "Byers", "Byrd", "Cabrera", "Cain", "Callahan", "Camacho", "Cannon", "Cantrell",
    "Capps", "Cardenas", "Carey", "Carlson", "Carroll", "Carson", "Cartwright", "Case",
    "Cash", "Cassidy", "Cates", "Chambers", "Chandler", "Chaney", "Chapman", "Chase",
    "Cherry", "Childers", "Christensen", "Church", "Clancy", "Clapp", "Clay", "Clayton",
    "Clemens", "Clements", "Cleveland", "Clifton", "Cline", "Cobb", "Cochran", "Coffey",
    "Collier", "Combs", "Conley", "Connell", "Conner", "Conrad", "Conway", "Cooke",
    "Cooley", "Copeland", "Corbin", "Cornell", "Cornett", "Cowan", "Craft", "Craig",
    "Crane", "Creech", "Crockett", "Crosby", "Crow", "Crowder", "Crum", "Cuevas",
    "Culpepper", "Cummings", "Curran", "Curry", "Curtis", "Dale", "Dalton", "Daly",
    "Daugherty", "Davenport", "Dawson", "Day", "Deaton", "Decker", "Deleon", "Deluca",
    "Dempsey", "Denny", "Denton", "Devine", "Dewey", "Dickerson", "Dickson", "Dillard",
    "Dillon", "Dixon", "Dobson", "Dodd", "Dodson", "Dominguez", "Donnelly", "Donovan",
    "Dority", "Dougherty", "Dowdy", "Downey", "Downs", "Doyle", "Drake", "Draper",
    "Drew", "Driscoll", "Driver", "Duckworth", "Dudley", "Duff", "Duffy", "Duke",
    "Dunbar", "Duncan", "Dunham", "Dunn", "Dupree", "Durham", "Dutton", "Dyer",
    "Eason", "Easter", "Eaton", "Ebert", "Eddy", "Edge", "Edmonds", "Egan",
    "Elder", "Ellington", "Emerson", "England", "Engle", "Epps", "Erickson", "Erwin",
    "Estes", "Eubanks", "Everett", "Ewing", "Fagan", "Fair", "Fanning", "Farley",
    "Farr", "Farrell", "Faulkner", "Feldman", "Felton", "Fenton", "Ferrell", "Finch",
    "Finley", "Fischer", "Fitzgerald", "Fleming", "Fletcher", "Flood", "Flynn", "Foley",
    "Forbes", "Foreman", "Forsyth", "Fortune", "Foust", "Fowler", "Foy", "Francis",
    "Frank", "Franklin", "Franks", "Frazier", "Fredericks", "Frost", "Fry", "Frye",
    "Fuller", "Fulton", "Funk", "Gage", "Gaines", "Galloway", "Gamble", "Gann",
    "Garland", "Garner", "Garrett", "Garrison", "Gates", "Gentry", "Gibbs", "Gideon",
    "Gilmore", "Glass", "Glover", "Goddard", "Godfrey", "Goff", "Golden", "Goodman",
    "Gore", "Gorman", "Gould", "Grady", "Graves", "Greene", "Greer", "Gregg"
];

function birthdayProblem(n) {
    let p = 1;
    for (let i = 0; i < n; i++) {
        p *= (365 - i) / 365;
    }
    return 1 - p;
}

function resetTrials() {
    console.log("Resetting Trials")
    numTrials=0;
    numPositives=0;
    numTrialsEl.textContent = "0";
    percentPositiveEl.textContent = "";
    document.getElementById('calculated-probability').innerHTML = (birthdayProblem(numPeople)*100).toFixed(2);
}

function updateNumPeople() {
    let newValue = parseInt(numPeopleEl.value);
    if (numPeople != newValue) {
        resetTrials();
        numPeople = newValue;
    }
}

function display_loading() {
    peopleListEl.innerHTML = "Loading...";
}

function display_addPeople(people, sharedBirthdays) {
    numTrialsEl.textContent = numTrials;
    let testValue = (numPositives / numTrials)
    percentPositiveEl.textContent = (testValue*100).toFixed(2);
    let probValue = birthdayProblem(numPeople);
    document.getElementById('calculated-probability').innerHTML = (probValue*100).toFixed(2);
    let errorValue = Math.abs(testValue-probValue)/probValue;
    document.getElementById('percent-error').innerHTML = (errorValue*100).toFixed(2);

    peopleListEl.innerHTML = "";
    people.forEach((birthday) => {
        let liItem = document.createElement('li');
        let date = new Date(2025, 0, 1); // Start at Jan 1, 2025 (non-leap year)
        date.setDate(date.getDate() + birthday); // Add days (0 to 364)
        liItem.innerHTML = `<span>${date.toLocaleString('default', { month: 'short' })} ${String(date.getDate()).padStart(2, '0')} - ${firstNames[Math.floor(Math.random()*firstNames.length)]} ${lastNames[Math.floor(Math.random()*lastNames.length)]}</span>`;
        if (sharedBirthdays.includes(birthday)) {
            liItem.firstChild.classList.add("shared");
        }
        peopleListEl.appendChild(liItem);
    });
}

function runSimulationOnce(numBirthdays=365, updateDisplay=true) {
    numTrials++
    let people = [];

    for (let i = 0; i < numPeople; i++) {
        people.push(Math.floor(Math.random()*(numBirthdays)));
    }

    let numPairs = 0;
    let sharedBirthdays = [];
    for (let i = 0; i < numPeople; i++) {
        for (let n = i+1; n < numPeople; n++) {
            numPairs++;
            if (people[i] == people[n]) {
                sharedBirthdays.push(people[i]);
            }
        }
    }

    if (sharedBirthdays.length > 0) numPositives += 1;
    if (updateDisplay) display_addPeople(people, sharedBirthdays);
}

function runSimulationMultiple(numTrials) {
    updateNumPeople();
    for (let i = 0; i < numTrials; i++) {
        runSimulationOnce(365, (i==(numTrials-1)));
    }
}

document.getElementById('run-once').addEventListener('click', (e) => {
    updateNumPeople();
    runSimulationOnce();
});

document.getElementById('run-100').addEventListener('click', (e) => {
    runSimulationMultiple(100);
});

document.getElementById('run-1000').addEventListener('click', (e) => {
    runSimulationMultiple(1000);
});

document.getElementById('run-1M').addEventListener('click', (e) => {
    runSimulationMultiple(1000000);
});

document.getElementById('reset').addEventListener('click', () => {
    updateNumPeople();
    resetTrials();
});

runSimulationOnce();