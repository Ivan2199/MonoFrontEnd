document.addEventListener("DOMContentLoaded", function () {
  const vehicleGrid = document.getElementById("vehicleGrid");

  if (typeof Storage !== "undefined") {
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    if (vehicles.length > 0) {
      vehicles.forEach(function (vehicleData, index) {
        const vehicleDiv = document.createElement("div");
        vehicleDiv.classList.add("grid-item");

        const vehicleType = document.createElement("p");
        vehicleType.textContent = `Type: ${vehicleData.VehicleType}`;

        const vehicleBrand = document.createElement("p");
        vehicleBrand.textContent = `Brand: ${vehicleData.VehicleBrand}`;

        const vehicleYear = document.createElement("p");
        vehicleYear.textContent = `Year: ${vehicleData.YearOfProduction}`;

        const topSpeed = document.createElement("p");
        topSpeed.textContent = `Top Speed: ${vehicleData.TopSpeed}`;

        const vehicleMileage = document.createElement("p");
        vehicleMileage.textContent = `Mileage: ${vehicleData.VehicleMileage}`;

        const vehicleOwner = document.createElement("p");
        vehicleOwner.textContent = `Owner: ${vehicleData.VehicleOwner}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.dataset.index = index;
        editButton.addEventListener("click", function () {
          openEditPopup(index);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.index = index;
        deleteButton.addEventListener("click", function () {
          deleteVehicle(index);
        });

        vehicleDiv.appendChild(vehicleType);
        vehicleDiv.appendChild(vehicleBrand);
        vehicleDiv.appendChild(vehicleYear);
        vehicleDiv.appendChild(topSpeed);
        vehicleDiv.appendChild(vehicleMileage);
        vehicleDiv.appendChild(vehicleOwner);
        vehicleDiv.appendChild(editButton);
        vehicleDiv.appendChild(deleteButton);

        vehicleGrid.appendChild(vehicleDiv);
      });
    } else {
      const noDataMessage = document.createElement("p");
      noDataMessage.textContent = "No vehicle data in local storage.";
      vehicleGrid.appendChild(noDataMessage);
    }
  } else {
    const storageNotSupportedMessage = document.createElement("p");
    storageNotSupportedMessage.textContent =
      "Local storage is not supported in this browser.";
    vehicleGrid.appendChild(storageNotSupportedMessage);
  }
});

function openEditPopup(index) {
  const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
  const vehicleData = vehicles[index];

  const updatedType = prompt(
    "Enter updated vehicle type:",
    vehicleData.VehicleType
  );
  const updatedBrand = prompt(
    "Enter updated vehicle brand:",
    vehicleData.VehicleBrand
  );
  const updatedYear = prompt(
    "Enter updated production year:",
    vehicleData.YearOfProduction
  );
  const updatedTopSpeed = prompt(
    "Enter updated top speed:",
    vehicleData.TopSpeed
  );
  const updatedMileage = prompt(
    "Enter updated mileage:",
    vehicleData.VehicleMileage
  );
  const updatedOwner = prompt("Enter updated owner:", vehicleData.VehicleOwner);

  if (
    updatedType &&
    updatedBrand &&
    updatedYear &&
    updatedTopSpeed &&
    updatedMileage &&
    updatedOwner
  ) {
    vehicleData.VehicleType = updatedType;
    vehicleData.VehicleBrand = updatedBrand;
    vehicleData.YearOfProduction = updatedYear;
    vehicleData.TopSpeed = updatedTopSpeed;
    vehicleData.VehicleMileage = updatedMileage;
    vehicleData.VehicleOwner = updatedOwner;

    vehicles[index] = vehicleData;
    localStorage.setItem("vehicles", JSON.stringify(vehicles));

    location.reload();
  }
}

function deleteVehicle(index) {
  const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

  if (index >= 0 && index < vehicles.length) {
    vehicles.splice(index, 1);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));

    location.reload();
  }
}
