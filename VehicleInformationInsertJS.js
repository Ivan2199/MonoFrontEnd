const vehicleForm = document.querySelector("#vehicleForm");

vehicleForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const VehicleType = vehicleForm.querySelector("#VehicleType").value;
  const VehicleBrand = vehicleForm.querySelector("#VehicleBrand").value;
  const YearOfProduction = parseInt(
    vehicleForm.querySelector("#YearOfProduction").value
  );
  const TopSpeed = parseInt(vehicleForm.querySelector("#TopSpeed").value);
  const VehicleMileage = parseInt(
    vehicleForm.querySelector("#VehicleMileage").value
  );
  const VehicleOwner = vehicleForm.querySelector("#VehicleOwner").value;

  const vehicleData = {
    VehicleType,
    VehicleBrand,
    YearOfProduction,
    TopSpeed,
    VehicleMileage,
    VehicleOwner,
  };

  if (typeof Storage !== "undefined") {
    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    vehicles.push(vehicleData);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));

    vehicleForm.reset();

    alert("Vehicle information has been saved to local storage.");
  } else {
    alert("Local storage is not supported in this browser.");
  }
});
