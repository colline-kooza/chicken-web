import Image from "next/image";

export default function MainHatches() {
  return (
    <div className="main-hatches">
      <h1>Flako's Premium Organic Eggs</h1>
      <div className="hatches">
        <div className="hatches-text">
          <h5>Flako's Unmatched Quality!</h5>
          <p>
            Unleash culinary brilliance with Flako's extraordinary eggs!
            Meticulously handpicked for impeccable quality, unrivaled freshness,
            and exquisite taste, these eggs elevate your dishes to new heights.
            Order now and experience eggcellence like never before, inspiring
            your culinary journey to exceptional delights!
          </p>
        </div>
        <div className="hatches-image">
          <div className="button">
            <button>Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
