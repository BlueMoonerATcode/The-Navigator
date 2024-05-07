import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelXImage from '../assets/model-x.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import teslaChargerImage from '../assets/tesla-charger.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  { title: '1199 cc', description: 'Engine' },
  { title: '115 Nm', description: 'Torque' },
  { title: '72.41 - 86.63 bhp', description: 'Power' },
  { title: '18.8 - 20.09 kmpl', description: 'Mileage' },
];

export default function ModelXPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Volkswagen"
          description="View inventory"
          backgroundImage={modelXImage}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={teslaChargerImage} />
      </section>
      <section className="section">
        <ImageGrid
          image1={modelXImage}
          image2={teslaChargerImage}
          text1="To put it simply, the ID.7 EV is the definition of a premium sedan. You’ll notice it's rather sleek. So, you’ll certainly stand out on the road."
          text2="The cabin is especially spacious and comfortable. You know, for those longer commutes. And of course we had to add advanced technology. It is an EV, after all. Did we mention it’s coming in 2024?"
        />
      </section>
    </div>
  );
}
