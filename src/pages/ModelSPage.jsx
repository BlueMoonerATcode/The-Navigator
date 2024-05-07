import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelSImage from '../assets/model-s.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import teslaChargerImage from '../assets/tesla-charger.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  { title: '1199 cc', description: 'Engine' },
  { title: '115 Nm', description: 'Torque' },
  { title: '72.41 - 86.63 bhp', description: 'Power' },
  { title: '18.8 - 20.09 kmpl', description: 'Mileage' },
];

export default function ModelSPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="TATA"
          description="View inventory"
          backgroundImage={modelSImage}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={teslaChargerImage} />
      </section>
      <section className="section">
        <ImageGrid
          image1={modelSImage}
          image2={teslaChargerImage}
          text1="Presenting Tata PUNCH, the no-compromise SUV. The epitome of class that offers a blend of sporty dynamics and tough utility."
          text2="This is for the fun-lovers, the thrill-seekers, the daily commuters. But above all, this is for the cautious ones. The Punch vibes with your need for safety."
        />
      </section>
    </div>
  );
}
