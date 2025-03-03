// Task 1: Business Dashboard- DOM element selection 
const dashboardById = document.getElementById("dashboard");    // selecting by ID 
const dashboardByQuery = document.querySelector("#dashboard"); // selecting using the querySelector 
   // creating  a metric card
function createMetricCard(id, title) {
    const card = document.createElement("div");
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", id);
    card.innerHTML = `
        <h3>${title}</h3>
        <p>$0</p>
    `;
    return card;
}

// Added 3 metric cards and the basic starting values 
dashboardById.appendChild(createMetricCard("revenueCard", "Revenue"));
dashboardById.appendChild(createMetricCard("profitCard", "Profit"));
dashboardById.appendChild(createMetricCard("expensesCard", "Expenses"));
// value: 
document.getElementById("revenueCard").querySelector("p").innerText = "$160";
document.getElementById("profitCard").querySelector("p").innerText = "$100";
document.getElementById("expensesCard").querySelector("p").innerText = "$90";

// Task 2: Updating Dashboard Metrick 
const metricCards = document.querySelectorAll(".metric-card"); // selected all metric cards
const metricCardArray = [...metricCards];  // Convert List to an Array
 metricCardArray.forEach(card => {
        const title = card.querySelector("h3");
        title.innerText += " - Updated";
        card.style.backgroundColor = "mintcream";
  });