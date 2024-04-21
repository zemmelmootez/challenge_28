import React from "react";
import "./App.css"; // Import your CSS file for styling

const CropInfo = ({ cropName }) => {
  const mockCropInfo = {
    name: "Tomato",
    description: "Tomato is a juicy fruit commonly used in cooking.",
    watering: "Regular watering, keep soil consistently moist.",
    sunlight: "Full sunlight, at least 6-8 hours per day.",
    plantingSeason: "Spring to early summer",
  };

  return (
    <div className="crop-card">
      <h2>{mockCropInfo.name}</h2>
      <p className="description">{mockCropInfo.description}</p>
      <div className="details">
        <div className="detail">
          <img
            src="https://woodlandswater.org/wp-content/uploads/2022/09/All-plants-need-water-But-how-much-and-how-often-varies-from-plant-to-plant.jpg"
            alt="Watering needs"
          />
          <p>{mockCropInfo.watering}</p>
        </div>
        <div className="detail">
          <img
            src="https://i0.wp.com/ponicslife.com/wp-content/uploads/2023/12/Vegetables-and-Hours-Needed.png?resize=930%2C698"
            alt="Sunlight requirements"
          />
          <p>{mockCropInfo.sunlight}</p>
        </div>
      </div>
      <p className="season">Planting Season: {mockCropInfo.plantingSeason}</p>
    </div>
  );
};

export default CropInfo;
