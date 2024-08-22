'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  theme,
  ListFeatures,
  Hero,
  FeaturesV2,
  CartContext,
  Features,
} from 'ecommerce-mxtech';
import { MdCabin } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
//Comment
import { useInformation } from '@/store/useInformation';

const { useToken } = theme;

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  return (
    <main
      style={{
        backgroundColor: '#F0E3E9',
      }}
    >
      <Navbar />
      <Hero
        images={[dataSite.image_hero, dataSite.image_hero2]}
        withSubView
        variant='carousel'
        stylesContainerImage={{
          height: '85vh',
        }}
        styleImage={{
          height: '85vh',
        }}
        title={dataSite.subtitle}
        description={dataSite.description}
        srcSecondary={dataSite.image_hero2}
        withShadowText
      />
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div className='flex flex-col'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Features
          </Typography.Title>
          <Features
            src={dataSite.image_hero2}
            features={dataSite.services.map((feature) => ({
              icon: <MdCabin />,
              title: feature.title,
              color: '#4D869C',
              description: feature.description,
            }))}
          />
        </div>

        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              title='Our services'
              gridColumns={3}
              variant='grid'
              productsPerPage={3}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='4'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              backgroundItemColor='#E8CDDB'
            />
          )}
        </div>

        <div className='flex flex-col' id='our-services'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Know Us
          </Typography.Title>
          <Missions
            data={dataSite.info}
            gridColumns={3}
            backgroundColor='#E8CDDB'
            variant='text'
          />
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='text'
            variant='carousel'
            backgroundColor='#E8CDDB'
            references={dataSite.references}
            gridColumns={3}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
