function generatePlan() {

    let destination = document.getElementById("destination").value;
    let days = document.getElementById("days").value;
    let budget = document.getElementById("budget").value;
    let interests = document.getElementById("interests").value;

    if (destination === "" || days === "" || budget === "" || interests === "") {
        alert("Please fill all the fields.");
        return;
    }

    let plan = `
 AI Travel Plan

 Destination: ${destination}

 Duration: ${days} Days

 Budget: ₹${budget}

 Interests: ${interests}

----------------------------

Day 1
* Explore the city's famous attractions.
* Try local street food.

Day 2
* Visit popular tourist places.
* Enjoy activities related to your interests.

Day 3
* Shopping and local sightseeing.
* Return journey.

Estimated Budget:
* Hotel: 40%
* Food: 20%
* Transport: 20%
* Activities: 20%

Travel Tips:
*Carry ID proof.
*Keep some cash.
*Check weather before travelling.
*Book hotels in advance.

Thank you for using AI Travel Planner!
`;

    document.getElementById("output").innerText = plan;
}