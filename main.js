const employees = [
  {
    title: "Dr",
    first_name: "Maxwell",
    last_name: "Webbe",
    avatar:
      "https://robohash.org/voluptatemdelenitisequi.png?size=50x50&set=set1",
    department: "Marketing",
    job: "Clinical Specialist",
  },
  {
    title: "Mr",
    first_name: "Elianore",
    last_name: "Gillman",
    avatar: "https://robohash.org/sitdelenitinihil.png?size=50x50&set=set1",
    department: "Accounting",
    job: "Web Designer III",
  },
  {
    title: "Rev",
    first_name: "Juliann",
    last_name: "McClaren",
    avatar: "https://robohash.org/molestiaedoloruma.png?size=50x50&set=set1",
    department: "Accounting",
    job: "Environmental Specialist",
  },
  {
    title: "Honorable",
    first_name: "Anne",
    last_name: "Thompson",
    avatar:
      "https://robohash.org/nobisperferendisvelit.png?size=50x50&set=set1",
    department: "Services",
    job: "Nurse",
  },
  {
    title: "Mr",
    first_name: "Veriee",
    last_name: "Verzey",
    avatar:
      "https://robohash.org/ullamteneturinventore.png?size=50x50&set=set1",
    department: "Marketing",
    job: "Actuary",
  },
  {
    title: "Mr",
    first_name: "Meredeth",
    last_name: "Emlin",
    avatar:
      "https://robohash.org/molestiaeillumeligendi.png?size=50x50&set=set1",
    department: "Product Management",
    job: "Chemical Engineer",
  },
  {
    title: "Rev",
    first_name: "Sammy",
    last_name: "Chritchlow",
    avatar: "https://robohash.org/ullamquaenon.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "Chief Design Engineer",
  },
  {
    title: "Mr",
    first_name: "Domingo",
    last_name: "Fatharly",
    avatar: "https://robohash.org/aofficiaet.png?size=50x50&set=set1",
    department: "Human Resources",
    job: "Librarian",
  },
  {
    title: "Ms",
    first_name: "Marna",
    last_name: "Renner",
    avatar: "https://robohash.org/adaliasimpedit.png?size=50x50&set=set1",
    department: "Accounting",
    job: "Professor",
  },
  {
    title: "Rev",
    first_name: "Rurik",
    last_name: "Vann",
    avatar:
      "https://robohash.org/molestiasenimadipisci.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "Junior Executive",
  },
  {
    title: "Dr",
    first_name: "Giralda",
    last_name: "Facher",
    avatar: "https://robohash.org/adcorruptiet.png?size=50x50&set=set1",
    department: "Training",
    job: "Systems Administrator III",
  },
  {
    title: "Dr",
    first_name: "Aristotle",
    last_name: "Bradnum",
    avatar: "https://robohash.org/nihilrerumdolorem.png?size=50x50&set=set1",
    department: "Human Resources",
    job: "Marketing Manager",
  },
  {
    title: "Honorable",
    first_name: "Findlay",
    last_name: "De Lacey",
    avatar: "https://robohash.org/laborumnonearum.png?size=50x50&set=set1",
    department: "Services",
    job: "Budget/Accounting Analyst III",
  },
  {
    title: "Mrs",
    first_name: "Sela",
    last_name: "Eade",
    avatar:
      "https://robohash.org/recusandaeetvoluptatum.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "Health Coach III",
  },
  {
    title: "Rev",
    first_name: "Piotr",
    last_name: "Munsey",
    avatar: "https://robohash.org/enimlaudantiumquos.png?size=50x50&set=set1",
    department: "Marketing",
    job: "Sales Representative",
  },
  {
    title: "Dr",
    first_name: "Keelia",
    last_name: "De Cleen",
    avatar:
      "https://robohash.org/laboriosamquoarchitecto.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "Director of Sales",
  },
  {
    title: "Mrs",
    first_name: "Ogdon",
    last_name: "Couling",
    avatar: "https://robohash.org/estdelenitiadipisci.png?size=50x50&set=set1",
    department: "Engineering",
    job: "Associate Professor",
  },
  {
    title: "Rev",
    first_name: "Ginger",
    last_name: "Orrice",
    avatar:
      "https://robohash.org/aspernaturvoluptatemmolestias.png?size=50x50&set=set1",
    department: "Legal",
    job: "Help Desk Operator",
  },
  {
    title: "Dr",
    first_name: "Twyla",
    last_name: "Harkness",
    avatar: "https://robohash.org/voluptateutvel.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "Programmer Analyst III",
  },
  {
    title: "Mr",
    first_name: "Janean",
    last_name: "Bezarra",
    avatar: "https://robohash.org/nobisquiexcepturi.png?size=50x50&set=set1",
    department: "Sales",
    job: "Help Desk Technician",
  },
  {
    title: "Honorable",
    first_name: "Daven",
    last_name: "Filtness",
    avatar:
      "https://robohash.org/asperioresconsequuntursequi.png?size=50x50&set=set1",
    department: "Accounting",
    job: "Speech Pathologist",
  },
  {
    title: "Ms",
    first_name: "Theobald",
    last_name: "Warr",
    avatar: "https://robohash.org/estnisiaut.png?size=50x50&set=set1",
    department: "Accounting",
    job: "Technical Writer",
  },
  {
    title: "Ms",
    first_name: "Shaun",
    last_name: "Maylin",
    avatar: "https://robohash.org/idetomnis.png?size=50x50&set=set1",
    department: "Legal",
    job: "Systems Administrator I",
  },
  {
    title: "Mrs",
    first_name: "Malanie",
    last_name: "Achrameev",
    avatar: "https://robohash.org/voluptasnamtenetur.png?size=50x50&set=set1",
    department: "Sales",
    job: "Food Chemist",
  },
  {
    title: "Ms",
    first_name: "Keenan",
    last_name: "Rennock",
    avatar: "https://robohash.org/aditaqueeos.png?size=50x50&set=set1",
    department: "Human Resources",
    job: "Payment Adjustment Coordinator",
  },
  {
    title: "Dr",
    first_name: "Benyamin",
    last_name: "McVity",
    avatar:
      "https://robohash.org/modiadipisciperspiciatis.png?size=50x50&set=set1",
    department: "Engineering",
    job: "Sales Associate",
  },
  {
    title: "Rev",
    first_name: "Dennie",
    last_name: "Esland",
    avatar: "https://robohash.org/quosetvoluptatum.png?size=50x50&set=set1",
    department: "Training",
    job: "Engineer II",
  },
  {
    title: "Mr",
    first_name: "Hart",
    last_name: "Calder",
    avatar: "https://robohash.org/possimussitvel.png?size=50x50&set=set1",
    department: "Accounting",
    job: "Nurse Practicioner",
  },
  {
    title: "Ms",
    first_name: "Kristan",
    last_name: "Matityahu",
    avatar: "https://robohash.org/accusantiumsintquia.png?size=50x50&set=set1",
    department: "Accounting",
    job: "Occupational Therapist",
  },
  {
    title: "Dr",
    first_name: "Katheryn",
    last_name: "Huntingford",
    avatar:
      "https://robohash.org/temporibusvoluptasquasi.png?size=50x50&set=set1",
    department: "Sales",
    job: "Desktop Support Technician",
  },
  {
    title: "Dr",
    first_name: "Virge",
    last_name: "Gorke",
    avatar: "https://robohash.org/doloremquequiiusto.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "Administrative Officer",
  },
  {
    title: "Dr",
    first_name: "Nanny",
    last_name: "Wilbor",
    avatar: "https://robohash.org/voluptatemutesse.png?size=50x50&set=set1",
    department: "Business Development",
    job: "Executive Secretary",
  },
  {
    title: "Rev",
    first_name: "Susie",
    last_name: "Fulford",
    avatar: "https://robohash.org/tenetursolutasequi.png?size=50x50&set=set1",
    department: "Training",
    job: "Financial Advisor",
  },
  {
    title: "Honorable",
    first_name: "Bob",
    last_name: "Sabie",
    avatar:
      "https://robohash.org/perspiciatisconsequaturvoluptates.png?size=50x50&set=set1",
    department: "Human Resources",
    job: "VP Accounting",
  },
  {
    title: "Rev",
    first_name: "Corrine",
    last_name: "Skipping",
    avatar: "https://robohash.org/earumteneturvel.png?size=50x50&set=set1",
    department: "Engineering",
    job: "Analog Circuit Design manager",
  },
  {
    title: "Ms",
    first_name: "Marla",
    last_name: "Ramiro",
    avatar:
      "https://robohash.org/aliquamofficiaconsequatur.png?size=50x50&set=set1",
    department: "Services",
    job: "Environmental Tech",
  },
  {
    title: "Ms",
    first_name: "Claybourne",
    last_name: "Vinck",
    avatar: "https://robohash.org/nequequialiquam.png?size=50x50&set=set1",
    department: "Product Management",
    job: "Director of Sales",
  },
  {
    title: "Dr",
    first_name: "Oralia",
    last_name: "Gregory",
    avatar: "https://robohash.org/nobisquisnisi.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "Social Worker",
  },
  {
    title: "Mr",
    first_name: "Cristen",
    last_name: "Laffan",
    avatar: "https://robohash.org/etisteconsequatur.png?size=50x50&set=set1",
    department: "Business Development",
    job: "Chemical Engineer",
  },
  {
    title: "Rev",
    first_name: "Ronnie",
    last_name: "Brookton",
    avatar:
      "https://robohash.org/sitconsequaturdeserunt.png?size=50x50&set=set1",
    department: "Product Management",
    job: "Dental Hygienist",
  },
  {
    title: "Honorable",
    first_name: "Zia",
    last_name: "Whitmore",
    avatar: "https://robohash.org/aliasquasialiquid.png?size=50x50&set=set1",
    department: "Product Management",
    job: "Graphic Designer",
  },
  {
    title: "Mr",
    first_name: "Charil",
    last_name: "Farmiloe",
    avatar: "https://robohash.org/eaquoincidunt.png?size=50x50&set=set1",
    department: "Legal",
    job: "Legal Assistant",
  },
  {
    title: "Dr",
    first_name: "Reina",
    last_name: "Lankester",
    avatar: "https://robohash.org/eteossed.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "GIS Technical Architect",
  },
  {
    title: "Mrs",
    first_name: "Matelda",
    last_name: "Renzini",
    avatar: "https://robohash.org/dolorealiasvoluptas.png?size=50x50&set=set1",
    department: "Services",
    job: "VP Quality Control",
  },
  {
    title: "Ms",
    first_name: "Aprilette",
    last_name: "Hove",
    avatar: "https://robohash.org/rerumnesciuntid.png?size=50x50&set=set1",
    department: "Research and Development",
    job: "Biostatistician I",
  },
  {
    title: "Mr",
    first_name: "Maxie",
    last_name: "Asmus",
    avatar:
      "https://robohash.org/consequaturexercitationemeaque.png?size=50x50&set=set1",
    department: "Training",
    job: "Chief Design Engineer",
  },
  {
    title: "Mr",
    first_name: "Casper",
    last_name: "Hartwell",
    avatar:
      "https://robohash.org/deseruntomnisvoluptatem.png?size=50x50&set=set1",
    department: "Product Management",
    job: "Librarian",
  },
  {
    title: "Mr",
    first_name: "Augusto",
    last_name: "Dibben",
    avatar:
      "https://robohash.org/dignissimosdoloribusomnis.png?size=50x50&set=set1",
    department: "Business Development",
    job: "Automation Specialist III",
  },
  {
    title: "Ms",
    first_name: "Cherye",
    last_name: "Pascho",
    avatar: "https://robohash.org/veritatisnemoaut.png?size=50x50&set=set1",
    department: "Product Management",
    job: "Structural Analysis Engineer",
  },
  {
    title: "Honorable",
    first_name: "Fidel",
    last_name: "Fullerton",
    avatar: "https://robohash.org/porroeatempore.png?size=50x50&set=set1",
    department: "Services",
    job: "Senior Sales Associate",
  },
];

(function () {
  employees.forEach((employee) => {
    const template = `
    <div class="column is-half">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="${employee.avatar}" alt="avatar image">
                        </figure>
                    </div>
                    <div class="media-content">
                    <h2 class="title is-5 job">${employee.job}</h2>
                    <h3 class="subtitle is-6 department">
                        ${employee.department}
                    </h3>
                    </div>
                </div>
                <div class="content">
                    <p class="full-name">
                        ${employee.title}. ${employee.first_name}, ${employee.last_name}
                    </p>
                </div>
            </div>
        </div>
    </div>`;
    const currentHTML = document.getElementById("results").innerHTML;
    const newHTML = currentHTML + template;
    document.getElementById("results").innerHTML = newHTML;
  });
})();
